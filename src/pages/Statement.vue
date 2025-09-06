<script setup lang="ts">

// import page5 from '@images/pages/5.jpg'

import TopImg from '@/views/pages/TopImg.vue'

// const name = ref('')
// const email = ref('')
// const phone = ref(null)
// const message = ref('')
// const isDialogVisible = ref(false)
</script>

<template>
  <TopImg />
  <VRow>
    <VCard
      title="服务中心"
      class="w-100"
    >
      <VRow class="ma-5">
        <VCard class="w-100">
          <div class="d-flex flex-column-reverse flex-md-row align-center justify-space-between">
            <div class="ma-3">
              <VCardText class="text-h4">
                公正性声明 Impartiality Statement
              </VCardText>
              <VCardText>
                <VList>
                  深圳市贝岭能效技术有限公司为了提高服务质量，维护客户合法权益，使客户保持对公司的良好信心，特作如下声明
                </VList>
                In order to improve service quality, maintain customers' legitimate rights and interests, keep customer
                good faith for Shenzhen Belling Efficiency Testing Laboratory Co.,Ltd., we made the following statement：
              </VCardText>
              <VCardText>
                <VList>
                  1. 深圳市贝岭能效技术有限公司作为独立的第三方机构，独立于所涉及的各方。公司依据相关的法律、法规以及合同的规定，客观、公正、准确、及时地为客户提供检测和认证服务，并为活动中获得或产生的所有信息保密。
                </VList>
                Shenzhen Belling Efficiency Testing Laboratory Co.,Ltd.as an independent third party body, independent
                of the parties involved. The company based on the provisions of relevant laws, regulations and
                contracts, objective, fair, accurate and timely to provide clients with testing and product
                certification services, All information obtained or created during the activities shall be regarded as
                confidential.
              </VCardText>
              <VCardText>
                <VList>
                  2.  所有相关方均可获得公司服务，而不附加其它不正当的条件。公司的程序严格以非歧视的方式进行管理。
                </VList>
                All related party can obtain services, but not attach other unfair conditions. The company's procedures
                strictly managed in the form of non-discrimination
              </VCardText>
              <VCardText>
                <VList>
                  3. 公司的一切活动不受上级行政管理人员或部门的干预，不受来自商业、财务、或其他方面的压力影响，而能始终、持续地保证做出判断的独立性和完整性；
                </VList>
                Companies of all activities are not affected by the higher administrative intervention, management or
                department is not affected by pressure from commercial, financial, or other aspects of influence, and
                will always continue, to guarantee the independence of judgement and integrity
              </VCardText>
              <VCardText>
                <VList>
                  4. 公司制定有《公正性保证程序》，要求工作人员不参与任何影响公正性和独立性的活动，不受来自于商业、财务或任何其他方面的压力而影响结果质量，保证在公正性，独立性和诚实性方面的可信度。
                </VList>
                Companies have the impartiality assurance procedure, require staff are not involved in any activity that
                affects the impartiality and independence, not from commercial, financial, or any other aspect of stress
                and affect the result, ensure fairness, independence and integrity of credibility.
              </VCardText>
              <VCardText>
                <VList>
                  5. 公司已建立公司质量管理体系和编制《质量管理手册》，并将《质量管理手册》作为公司内部管理的基本准则和对客户以及社会提供质量保证的承诺；
                </VList>
                Company has established quality management system and “quality management manual", and “quality management manual" as the basic principles for the company's internal management and commitment to customers and provide quality assurance.
              </VCardText>

              <VCardText>
                <VList>
                  6. 公司将积极参与认可机构组织的能力验证和/或公司间的比对活动，并与其他公司保持良好的接触和沟通，与其他机构进行经验交流，适当地参与标准化活动，以不断提高技术水平和能力；
                </VList>
                Company will actively participate in recognized organization's ability to verify and/or comparative between the companies, and keep good contact and communication with other companies, and other institutions to carry on the exchange of experience, to participate in standardization activities appropriately, to constantly improve the level of Technical capability
              </VCardText>

              <VCardText>
                <VList>
                  以上各项承诺，接受客户的监督，如有违反并给客户造成损失的，愿承担经济和法律责任。
                </VList>
                The above promise, accept customer's supervision, such as violation of and causes loss to the customer, is willing to bear the economic and legal responsibility.
              </VCardText>
            </div>
          </div>

          <div class="sign">
            <h5 style="text-align: end">
              最高管理者签署
              <br>
              Signed by the top management
            </h5>
            <img
              class="sign-img"
              src="@images/testServices/sign.png"
              alt="签署"
            >
          </div>
        </VCard>
      </VRow>
    </VCard>
  </VRow>
</template>

<style scoped>
.v-row {
  margin-block: 1rem;
}
.sign {
  padding: 2rem;
  display: flex;
  justify-content: end;
  align-items: center;
}
.sign-img {
  padding: 1rem;
}
</style>
