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
        icon: { icon: 'ri-community-line' },
        to: 'about',
      },
      {
        title: 'Corporate Vision',
        icon: { icon: 'ri-eye-line' },
        to: 'about',
      },
      {
        title: 'Company History',
        icon: { icon: 'ri-timer-2-line' },
        to: { name: 'about', hash: '#history' },
      },
      {
        title: 'Certifications',
        icon: { icon: 'ri-award-line' },
        to: { name: 'about', hash: '#certification' },
      },
      {
        title: 'Team Introduction',
        icon: { icon: 'ri-group-line' },
        to: { name: 'about', hash: '#team' },
      },
      {
        title: 'Company Philosophy',
        icon: { icon: 'ri-megaphone-line' },
        to: { name: 'about', hash: '#culture' },
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
            title: 'Efficiency Testing',
            to: { name: 'services-tab', params: { tab: 'efficiency' } },
          },
          {
            title: 'Electrical Safety',
            to: { name: 'services-tab', params: { tab: 'safety' } },
          },
          {
            title: 'EMC Testing',
            to: { name: 'services-tab', params: { tab: 'emc' } },
          },
          {
            title: 'Chemical Testing',
            to: { name: 'services-tab', params: { tab: 'chemical' } },
          },
          {
            title: 'Reliability Testing',
            to: { name: 'services-tab', params: { tab: 'reliability' } },
          },
        ],
      },
      {
        title: 'Technical Services',
        icon: { icon: 'ri-tools-line' },
        children: [
          {
            title: 'Safety Regulation Rectification',
            to: { name: 'services-tab', params: { tab: 'regulation' } },
          },
          {
            title: 'Factory Audit Consultation',
            to: { name: 'services-tab', params: { tab: 'factory' } },
          },
          {
            title: 'EMC Rectification',
            to: { name: 'services-tab', params: { tab: 'rectification' } },
          },
          {
            title: 'Cross-Border E-Commerce Compliance Consultation',
            to: { name: 'services-tab', params: { tab: 'e-commerce' } },
          },
        ],
      },

      {
        title: 'Certification Services',
        icon: { icon: 'ri-verified-badge-line' },
        children: [
          {
            title: 'China Certification',
            to: null,
          },
          {
            title: 'Asia Certification',
            to: null,
          },
          {
            title: 'Middle East Certification',
            to: null,
          },
          {
            title: 'North America Certification',
            to: null,
          },
          {
            title: 'South America Certification',
            to: null,
          },
          {
            title: 'Europe Certification',
            to: null,
          },
          {
            title: 'Australia Certification',
            to: null,
          },
          {
            title: 'Africa Certification',
            to: null,
          },
          {
            title: 'Other Certification',
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
        to: { name: 'news-tab', params: { tab: 'company' } },
      },
      {
        title: 'Industry Information',
        icon: { icon: 'ri-file-info-line' },
        to: { name: 'news-tab', params: { tab: 'industry' } },
      },
      {
        title: 'Technical Articles',
        icon: { icon: 'ri-article-line' },
        to: { name: 'news-tab', params: { tab: 'technical' } },
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
