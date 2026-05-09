const config = {
  title: 'Hellnet Docs',
  tagline: 'Documentation hub for Hellnet projects, labs, services, and platform tooling.',

  url: 'https://docs.hellnet.com.br',
  baseUrl: '/',
  organizationName: 'hellnet-foundation',
  projectName: 'hellnet-foundation.github.io',
  trailingSlash: true,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/hellnet-foundation/soc-ai-relay/tree/main/docs/',
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Hellnet Docs',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'socAiRelaySidebar',
          position: 'left',
          label: 'SOC AI Relay',
        },
        {
          href: 'https://github.com/hellnet-foundation',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projects',
          items: [
            {
              label: 'SOC AI Relay',
              to: '/soc-ai-relay/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/hellnet-foundation',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Hellnet Foundation.`,
    },
    prism: {
      additionalLanguages: ['bash', 'go', 'json', 'yaml'],
    },
  },
};

module.exports = config;
