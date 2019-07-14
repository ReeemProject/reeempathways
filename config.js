const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://reeempathways.org',
    gaTrackingId: 'UA-86120823-3',
  },
  header: {
    logo: '',
    title: 'pathways',
    githubUrl: '',
    helpUrl: '',
    tweetText: '',
    links: [{ 'text': '', 'link': '' }],
  },
  sidebar: {
    forcedNavOrder: ['/background', '/pathways', '/messages', '/case_studies', '/synthesis', '/about'],
    links: [{ 'text': '', 'link': '' }],
  },
  siteMetadata: {
    title: 'REEEMpathways',
    description: 'Gain a clear and comprehensive understanding of the system-wide implications of energy strategies in support of transitions to a competitive low-carbon EU energy society',
    ogImage: null,
    docsLocation: 'https://github.com/ReeemProject/reeempathways/tree/master/content',
    favicon: '',
  },
}

module.exports = config
