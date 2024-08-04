export default [
  {
    title: 'Home',
    to: { name: 'root' },
    icon: { icon: 'ri-home-smile-line' },
  },
  {
    title: '关于我们',
    to: { name: 'about' },
    icon: { icon: 'ri-team-line' },

    children: [
      {
        title: '公司简介',
        icon: { icon: 'ri-profile-line' },
        to: null,
      },
      {
        title: '公司理念',
        icon: { icon: 'ri-file-list-3-line' },
        to: null,
      },
      {
        title: '资质授权',
        icon: { icon: 'ri-shield-check-line' },
        to: null,
      },
    ],
  },
  {
    title: 'Services',
    to: { name: 'about' },
    icon: { icon: 'ri-service-line' },

    children: [
      {
        title: '测试服务',
        icon: { icon: 'ri-bug-line' },
        children: [
          {
            title: '国际认证',
            to: null,
          },
          {
            title: '国际法规认证',
            to: null,
          },
          {
            title: '常规认证',
            to: null,
          },
        ],
      },

      {
        title: '资质认证',
        icon: { icon: 'ri-verified-badge-line' },
        children: [
          {
            title: '国际认证',
            to: null,
          },
          {
            title: '国际法规认证',
            to: null,
          },
          {
            title: '常规认证',
            to: null,
          },
        ],
      },

    ],
  },
  {
    title: 'Information Query',
    to: { name: 'about' },
    icon: { icon: 'ri-search-line' },
  },
  {
    title: '联系我们',
    to: { name: 'contact' },
    icon: { icon: 'ri-contacts-line' },
  },

]
