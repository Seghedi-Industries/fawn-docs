/** @type {import('@docusaurus/types').DocusaurusConfig} */

const path = require("path");

module.exports = {
  title: "Fawn",
  tagline: "Pythoning news and blogs efficiently.",
  url: "https://fawn.dev",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "Seghedi-Industries", // Usually your GitHub org/user name.
  projectName: "fawn", // Usually your repo name.
  plugins: [
    path.resolve(__dirname, "plugins/loaders"),
    "@docusaurus/plugin-ideal-image",
  ],

  themeConfig: {
    colorMode: {
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: "Fawn",
      logo: {
        alt: "Fawn Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Seghedi-Industries/fawn",
          label: "GitHub",
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
              label: "Getting Started",
              to: "/docs",
            },
          ],
        },
        {
          title: "Features",
          items: [
            {
              label: "Content Delivery Network",
              href: "/features/content-delivery-network/",
            },
            {
              label: "Small Size",
              href: "/features/small-size/",
            },
            {
              label: "No Code",
              href: "/features/no-code/",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Fawn.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl: "https://github.com/Seghedi-Industries/fawn-docs/edit/main/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: "https://github.com/Seghedi-Industries/fawn-docs/edit/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
