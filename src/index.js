// eslint-disable-next-line import/no-extraneous-dependencies
import Docute from 'docute';

// eslint-disable-next-line no-new
new Docute({
  target: '#docute',
  darkThemeToggler: true,
  highlight: ['bash'],
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
      title: 'Guide',
      links: [
        {
          title: 'Knzk Point',
          link: '/docs/guide/knzk-point.md'
        }
      ]
    },
    {
      title: 'User Guide',
      links: [
        {
          title: 'Comment Highlight',
          link: '/docs/user/comment-highlight.md'
        },
        {
          title: 'FAQ',
          link: '/docs/user/faq.md'
        }
      ]
    },
    {
      title: 'Streamer Guide',
      links: [
        {
          title: 'Getting Started',
          link: '/docs/streamer/getting-started.md'
        },
        {
          title: 'Comment Viewer',
          link: '/docs/streamer/comment-viewer.md'
        },
        {
          title: 'Moderation',
          link: '/docs/streamer/moderation.md'
        },
        {
          title: 'Collaboration',
          link: '/docs/streamer/collaboration.md'
        }
      ]
    },
    {
      title: 'Development Guide',
      links: [
        {
          title: 'Setup',
          link: '/docs/development/setup.md'
        }
      ]
    }
  ],
  overrides: {
    '/': { language: 'Japanese' }
  },
  footer: `
  This website is licensed under the <a href="https://github.com/KnzkDev/knzklive-docs/blob/master/LICENSE">MIT License</a>.
  `
});
