export default {
  "title": "Fawn",
  "tagline": "Pythoning news and blogs efficiently.",
  "url": "https://fawn.dev",
  "baseUrl": "/",
  "onBrokenLinks": "throw",
  "onBrokenMarkdownLinks": "warn",
  "favicon": "img/favicon.ico",
  "organizationName": "Seghedi-Industries",
  "projectName": "fawn",
  "plugins": [
    "/Users/robertseghedi/Documents/GitHub/fawn-docs/plugins/loaders",
    "@docusaurus/plugin-ideal-image"
  ],
  "themeConfig": {
    "colorMode": {
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "defaultMode": "light",
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "title": "Fawn",
      "logo": {
        "alt": "Fawn Logo",
        "src": "img/logo.svg"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "href": "https://github.com/Seghedi-Industries/fawn",
          "label": "GitHub",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Getting Started",
              "to": "/docs"
            }
          ]
        },
        {
          "title": "Features",
          "items": [
            {
              "label": "Content Delivery Network",
              "href": "/features/content-delivery-network/"
            },
            {
              "label": "Small Size",
              "href": "/features/small-size/"
            },
            {
              "label": "No Code",
              "href": "/features/no-code/"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2021 Fawn."
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "prism": {
      "additionalLanguages": []
    },
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/robertseghedi/Documents/GitHub/fawn-docs/sidebars.js",
          "editUrl": "https://github.com/Seghedi-Industries/fawn-docs/edit/main/"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/Seghedi-Industries/fawn-docs/edit/main/"
        },
        "theme": {
          "customCss": "/Users/robertseghedi/Documents/GitHub/fawn-docs/src/css/custom.css"
        }
      }
    ]
  ],
  "baseUrlIssueBanner": true,
  "i18n": {
    "defaultLocale": "en",
    "locales": [
      "en"
    ],
    "localeConfigs": {}
  },
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "themes": [],
  "titleDelimiter": "|",
  "noIndex": false
};