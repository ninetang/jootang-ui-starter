const fs = require('node:fs')
const path = require('node:path')
const crypto = require('node:crypto')
const multer = require('multer')
const express = require('express')
const { MongoClient } = require('mongodb')
const cors = require('cors')
const pdfParse = require('pdf-parse')

const port = 3000
const app = express()

app.use(cors())
app.use(express.json())

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, 'upload/')
  },
  filename(req, file, cb) {
    cb(null, file.originalname)
  },
})

const upload = multer({ storage }).array('pdf')

// 正则表达式匹配
const regex = {
  applicant: /Applicant:\s*(.+)/,
  address: /Address:\s*(.+)/,
  product: /Product:\s*(.+)/,
  modelNumber: /Model Number:\s*(.+)/,
  tradeMark: /Trade Mark:\s*(.+)/,
  testReportNumber: /Test Report Number:\s*(.+)/,
  issuedBy: /Issued by:\s*(.+)/,
  date: /Date:\s*(.+)/,
}

// const numberRegex = /No\.\s*([A-Z0-9]+)/
// const applicantRegex = /Applicant:\s*([\w\s.,&-]+)/
// const productNameRegex = /Product:\s*([\w\s]+)/
// const modelNumberRegex = /Model\sNumber:\s*([\w\s,.-]+)/
// const dateRegex = /Date:\s*(\d{4}‐\d{2}‐\d{2})/
// const companyNameRegex = /Date:\s*\d{4}‐\d{2}‐\d{2}\s*\n([\w\s,.-]+)/

// 数据库配置
const uri = 'mongodb://localhost:27017'
const client = new MongoClient(uri)
const dbName = 'pdf_db'
let db

app.post('/pdf/upload', (req, res) => {
  upload(req, res, async () => {
    try {
      const collection = db.collection('certificates')
      const results = []
      for (const file of req.files) {
        // 获取上传文件的路径
        const filePath = path.join(__dirname, file.path)
        const pdfBuffer = fs.readFileSync(filePath)

        // 解析pdf文档
        const pdfData = await pdfParse(pdfBuffer)
        const textContent = pdfData.text

        const id = crypto.createHash('md5').update(file.originalname).digest('hex')
        const existFile = await collection.findOne({ id })
        if (existFile) {
          console.log(`文件已存在：${file.originalname}`)
          continue
        }
        const numberMatch = textContent.match(regex.testReportNumber)
        const applicantMatch = textContent.match(regex.applicant)
        const productMatch = textContent.match(regex.product)
        const modelMatch = textContent.match(regex.modelNumber)
        const dateMatch = textContent.match(regex.date)
        const companyMatch = textContent.match(regex.issuedBy)
        const tradeMarkMatch = textContent.match(regex.tradeMark)
        const addressMatch = textContent.match(regex.address)

        const result = {
          id,
          number: numberMatch ? numberMatch[1] : '未找到编号',
          applicant: applicantMatch ? applicantMatch[1].trim() : '未找到申请人',
          product: productMatch ? productMatch[1].trim() : '未找到产品名称',
          model: modelMatch ? modelMatch[1].trim() : '未找到型号名称',
          date: dateMatch ? dateMatch[1].trim() : '未找到日期',
          company: companyMatch[1] ? companyMatch[1].trim() : '未找到公司名称',
          address: addressMatch ? addressMatch[1].trim() : '未找到地址',
          tradeMark: tradeMarkMatch ? tradeMarkMatch[1].trim() : '未找到商标信息',
        }

        // 存储到数据库
        const insertResult = await collection.insertOne(result)

        console.log(`数据已存储到数据库： ${insertResult.insertedId}`)
        results.push(result)
      }
      res.status(200).json({ message: '文件上传成功', data: results })
    }
    catch (error) {
      console.error('文件处理错误', error)
      res.status(500).json({ error: '文件上传失败' })
    }
  })
})

app.get('/pdf/:code', async (req, res) => {
  const { code } = req.params
  try {
    const collection = db.collection('certificates')
    const result = await collection.findOne({ number: code })
    if (result)
      res.status(200).json({ message: '查询成功', data: result })
    else
      res.status(404).json({ message: '未找到证书' })
  }
  catch (error) {
    console.error(`查询失败：${error}`)
    res.status(500).json({ error: '查询失败' })
  }
})

getData('/api/pdf', 'certificates')

function getData(url, dbs) {
  app.post(url, async (req, res) => {
    try {
      const collection = db.collection(dbs)
      const search = req.body.search || ''
      const query = search ? { number: { $regex: search, $options: 'i' } } : {}
      const result = await collection.find(query).toArray()
      if (result.length > 0)
        res.status(200).json({ message: '查询成功', data: result })
      else
        res.status(404).json({ message: '未找到证书' })
    }
    catch (error) {
      console.error(`查询失败：${error}`)
      res.status(500).json({ error: '查询失败' })
    }
  })
}

client.connect().then(() => {
  db = client.db(dbName)
  app.listen(port, () => {
    console.log(`服务器正在运行，localhost:${port}`)
  })
}).catch(error => {
  console.log(`无法连接到MongoDB: ${error}`)
})
