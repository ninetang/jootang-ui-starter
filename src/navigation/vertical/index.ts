export default [
  {
    title: 'Home',
    to: { name: 'root' },
    icon: { icon: 'ri-home-smile-line' },
  },
  {
    title: 'About Us',
    to: { name: 'about' },
    icon: { icon: 'ri-team-line' },

    children: [
      {
        title: 'Company Profile',
        icon: { icon: 'ri-id-card-line' },
        to: 'about',
      },
      {
        title: 'Corporate Vision',
        icon: { icon: 'ri-shield-user-line' },
        to: null,
      },
      {
        title: 'Company History',
        icon: { icon: 'ri-shield-user-line' },
        to: null,
      },
      {
        title: 'Certifications',
        icon: { icon: 'ri-shield-user-line' },
        to: null,
      },
      {
        title: 'Team Introduction',
        icon: { icon: 'ri-shield-user-line' },
        to: null,
      },
      {
        title: 'Company Philosophy',
        icon: { icon: 'ri-shield-check-line' },
        to: null,
      },
    ],
  },
  {
    title: 'Service Items',
    to: { name: 'about' },
    icon: { icon: 'ri-service-line' },

    children: [
      {
        title: 'Testing Services',
        icon: { icon: 'ri-bug-line' },
        children: [
          {
            title: '国际认证',
            to: { name: 'services-tab', params: { tab: 'Efficiency能效测试' } },
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
        title: 'Technical Services',
        icon: { icon: 'ri-tools-line' },
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
        title: 'Certification Services',
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
    title: 'News Center',
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
    title: 'Contact Us',
    to: { name: 'contact' },
    icon: { icon: 'ri-contacts-line' },
  },

]
