module.exports = {
  title: "Sage by SAIC",
  tagline: "Embodiment of Cloud Migration Best Practices",
  url: "https://saic-oss.github.io",
  baseUrl: process.env.HELP_BASE_URL || "/sage-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "saic-oss", // Usually your GitHub org/user name.
  projectName: "sage-docs", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: " ",
      logo: {
        alt: "SAIC Logo",
        src: "img/SAIC_RI_logo_R_RGB_sm.png",
      },
      items: [
        {
          to: "docs/sage-intro",
          activeBasePath: "docs",
          label: "Documentation 🚧",
          position: "left",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Sage Users Guide",
              to: "docs/sage-intro",
            },
            {
              label: "Sage Installation Guide",
              to: "docs/sage-install-intro/",
            },
            {
              label: "Sage Operations Guide",
              to: "docs/sage-ops-overview/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "FAQs",
              to: "docs/sage-faqs/",
            },
            {
              label: "GitHub",
              href: "https://github.com/saic-oss/sage-docs",
            },
          ],
        },
      ],
      copyright: "© 2021 SAIC",
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://github.com/saic-oss/sage-docs/edit/main/webapp/docs/",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
