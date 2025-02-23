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

    // children: [
    //   {
    //     title: 'Company Profile',
    //     icon: { icon: 'ri-community-line' },
    //     to: { name: 'about', hash: '#profile' },
    //   },
    //   {
    //     title: 'Corporate Vision',
    //     icon: { icon: 'ri-eye-line' },
    //     to: { name: 'about', hash: '#wish' },
    //   },
    //   {
    //     title: 'Company History',
    //     icon: { icon: 'ri-timer-2-line' },
    //     to: { name: 'about', hash: '#history' },
    //   },
    //   {
    //     title: 'Certifications',
    //     icon: { icon: 'ri-award-line' },
    //     to: { name: 'about', hash: '#certification' },
    //   },
    //   {
    //     title: 'Team Introduction',
    //     icon: { icon: 'ri-group-line' },
    //     to: { name: 'about', hash: '#team' },
    //   },
    //   {
    //     title: 'Company Philosophy',
    //     icon: { icon: 'ri-megaphone-line' },
    //     to: { name: 'about', hash: '#culture' },
    //   },
    // ],
  },
  {
    title: 'Test Service',
    to: { name: 'about' },
    icon: { icon: 'ri-service-line' },

    children: [
      {
        title: 'Test Items',
        icon: { icon: 'ri-bug-line' },
        children: [
          {
            title: 'Safety Test',
            to: { name: 'services-tab', params: { tab: 'safety' } },
            exact: true,
          },
          {
            title: 'Efficiency Test',
            to: { name: 'services-tab', params: { tab: 'efficiency' } },
          },
          {
            title: 'EMC Test',
            to: { name: 'services-tab', params: { tab: 'emc' } },
          },
          {
            title: 'RF Test',
            to: { name: 'services-tab', params: { tab: 'rf' } },
          },
          {
            title: 'Chemical Test',
            to: { name: 'services-tab', params: { tab: 'chemical' } },
          },
          {
            title: 'Laser Product Test',
            to: { name: 'services-tab', params: { tab: 'laser' } },
          },
          {
            title: 'Reliability Test',
            to: { name: 'services-tab', params: { tab: 'reliability' } },
          },
        ],
      },
      {
        title: 'Global Certification',
        icon: { icon: 'ri-verified-badge-line' },
        children: [
          {
            title: 'North America Certification',
            to: { name: 'services-tab', params: { tab: 'northAmerica' } },
          },
          {
            title: 'European Certification',
            to: { name: 'services-tab', params: { tab: 'european' } },
          },
          {
            title: 'Australia Certification',
            to: { name: 'services-tab', params: { tab: 'australia' } },
          },
          {
            title: 'China Certification',
            to: { name: 'services-tab', params: { tab: 'china' } },
          },
          {
            title: 'Asia Certification',
            to: { name: 'services-tab', params: { tab: 'asia' } },
          },
          {
            title: 'South America Certification',
            to: { name: 'services-tab', params: { tab: 'southAmerica' } },
          },
          {
            title: 'Other Certifications',
            to: { name: 'services-tab', params: { tab: 'other' } },
          },
        ],
      },

      // {
      //   title: 'Technical Services',
      //   icon: { icon: 'ri-tools-line' },
      //   children: [
      //     {
      //       title: 'Safety Regulation Rectification',
      //       to: { name: 'services-tab', params: { tab: 'regulation' } },
      //     },
      //     {
      //       title: 'Factory Audit Consultation',
      //       to: { name: 'services-tab', params: { tab: 'factory' } },
      //     },
      //     {
      //       title: 'EMC Rectification',
      //       to: { name: 'services-tab', params: { tab: 'rectification' } },
      //     },
      //     {
      //       title: 'Cross-Border E-Commerce Compliance Consultation',
      //       to: { name: 'services-tab', params: { tab: 'e-commerce' } },
      //     },
      //   ],
      // },
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
        to: { name: 'news-company', params: { tab: 'company' } },
      },
      {
        title: 'Industry Information',
        icon: { icon: 'ri-file-info-line' },
        to: { name: 'news-industry', params: { tab: 'industry' } },
      },
      {
        title: 'Technical Articles',
        icon: { icon: 'ri-article-line' },
        to: { name: 'news-technology', params: { tab: 'technology' } },
      },
    ],
  },
  {
    title: 'Certificate inquires',
    to: { name: 'info-query' },
    icon: { icon: 'ri-search-line' },
  },
  {
    title: 'Contact Us',
    to: { name: 'contact' },
    icon: { icon: 'ri-contacts-line' },
  },

]
