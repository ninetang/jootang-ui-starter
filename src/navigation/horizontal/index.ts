export default [
  {
    title: 'Home',
    to: { name: 'root' },
    icon: { icon: 'ri-home-smile-line' },
  },
  {
    title: 'About',
    to: { name: 'about' },
    icon: { icon: 'ri-team-line' },

    children: [
      {
        title: 'Company Profile',
        icon: { icon: 'ri-id-card-line' },
        to: 'about',
      },
      {
        title: 'Company Mission',
        icon: { icon: 'ri-shield-user-line' },
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
            to: 'services',
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
        title: '技术服务',
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
        title: '认证服务',
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
    title: 'News',
    to: { name: 'news' },
    icon: { icon: 'ri-news-line' },

    children: [
      {
        title: 'Company News',
        icon: { icon: 'ri-newspaper-line' },
        to: 'news',
      },
      {
        title: 'Industry Information',
        icon: { icon: 'ri-file-info-line' },
        to: { name: 'news-tab-tab', params: { tab: 'industry' } },
      },
      {
        title: 'Technical Articles',
        icon: { icon: 'ri-article-line' },
        to: { name: 'news-tab-tab', params: { tab: 'technical' } },
      },
    ],
  },
  {
    title: 'Information Query',
    to: { name: 'info-query' },
    icon: { icon: 'ri-search-line' },
  },
  {
    title: 'Contact',
    to: { name: 'contact' },
    icon: { icon: 'ri-contacts-line' },
  },

]
