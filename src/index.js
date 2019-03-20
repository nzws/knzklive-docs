// eslint-disable-next-line import/no-extraneous-dependencies
import Docute from 'docute';

// eslint-disable-next-line no-new
new Docute({
  target: '#docute',
  router: { mode: 'history' },
  sourcePath: '/',
  versions: {
    'Beta (Latest)': { link: '/' }
  },
  title: 'KnzkLive',
  nav: [
    { title: 'Home', link: '/' },
    { title: 'GitHub', link: 'https://github.com/KnzkDev/KnzkLive' }
  ],
  sidebar: [
    {
      title: 'User Guide',
      links: [
        {
          title: 'Comment Highlight',
          link: '/docs/user-guide/comment-highlight.md'
        },
        {
          title: 'FAQ',
          link: '/docs/user-guide/faq.md'
        }
      ]
    },
    {
      title: 'Streamer Guide',
      links: [
        {
          title: 'Getting Started',
          link: '/docs/streamer-guide/getting-started.md'
        },
        {
          title: 'Comment Viewer',
          link: '/docs/streamer-guide/comment-viewer.md'
        }
      ]
    }
  ],
  overrides: {
    '/': { language: 'Japanese' }
  }
});
