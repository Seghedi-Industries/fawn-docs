export default {
  "title": "Fawn",
  "tagline": "Documentation and Guides",
  "url": "https://docs.uniswap.org/",
  "baseUrl": "/",
  "onBrokenLinks": "warn",
  "onBrokenMarkdownLinks": "ignore",
  "favicon": "img/favicon.png",
  "organizationName": "Seghedi Industries",
  "projectName": "faws-docs",
  "themeConfig": {
    "image": "img/twitter_card_bg.jpg",
    "prism": {
      "additionalLanguages": [
        "solidity"
      ]
    },
    "algolia": {
      "apiKey": "32465e2ab6f7554ff014e64c0d92171c",
      "indexName": "v3-docs",
      "appId": "S0IDD0YGLZ",
      "contextualSearch": false,
      "searchParameters": {}
    },
    "navbar": {
      "title": "Fawn Docs",
      "logo": {
        "alt": "Fawn Logo",
        "src": "img/fawn_logo.svg"
      },
      "items": [
        {
          "type": "docsVersionDropdown",
          "position": "left",
          "dropdownActiveClassDisabled": true,
          "docsPluginId": "default",
          "className": "persistent",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": []
        },
        {
          "to": "/protocol/reference/smart-contracts",
          "label": "Contracts",
          "position": "left",
          "className": "V3_active"
        },
        {
          "to": "/sdk/introduction",
          "label": "SDK",
          "position": "left",
          "className": "V3_active"
        },
        {
          "to": "/sdk/Subgraph%20data",
          "label": "Subgraph (API)",
          "position": "left",
          "className": "V3_active"
        },
        {
          "to": "/protocol/concepts/governance/governance-reference",
          "label": "Governance",
          "position": "left",
          "className": "V3_active"
        },
        {
          "to": "/protocol/V2/guides/smart-contract-integration/quick-start",
          "label": "Contracts",
          "position": "left",
          "className": "V2_active"
        },
        {
          "to": "/sdk/2.0.0/introduction",
          "label": "SDK",
          "position": "left",
          "className": "V2_active"
        },
        {
          "to": "/protocol/V2/reference/API/overview",
          "label": "Subgraph (API)",
          "position": "left",
          "className": "V2_active"
        },
        {
          "to": "/protocol/V2/reference/Governance/governance-reference",
          "label": "Governance",
          "position": "left",
          "className": "V2_active"
        },
        {
          "to": "/protocol/V1/guides/connect-to-uniswap",
          "label": "Contracts",
          "position": "left",
          "className": "V1_active"
        },
        {
          "to": "/sdk/1.0.0/introduction",
          "label": "SDK",
          "position": "left",
          "className": "V1_active"
        },
        {
          "href": "https://github.com/Seghedi-Industries/fawn",
          "label": "GitHub",
          "position": "right",
          "className": "persistent"
        },
        {
          "type": "localeDropdown",
          "position": "right",
          "dropdownItemsBefore": [],
          "dropdownItemsAfter": [
            {
              "to": "https://my-site.com/help-us-translate",
              "label": "Help us translate"
            }
          ]
        }
      ],
      "hideOnScroll": false
    },
    "footer": {
      "links": [
        {
          "title": "Developers",
          "items": [
            {
              "label": "Bug Bounty",
              "href": "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/bug-bounty.md"
            },
            {
              "label": "#dev-chat",
              "href": "https://discord.gg/ybKVQUWb4s"
            },
            {
              "label": "Whitepaper",
              "href": "https://uniswap.org/whitepaper-v3.pdf"
            }
          ]
        },
        {
          "title": "Github",
          "items": [
            {
              "label": "uniswap-v3-core",
              "href": "https://github.com/Uniswap/uniswap-v3-core"
            },
            {
              "label": "uniswap-v3-sdk",
              "href": "https://github.com/Uniswap/uniswap-v3-sdk"
            },
            {
              "label": "uniswap-v3-periphery",
              "href": "https://github.com/Uniswap/uniswap-v3-periphery"
            },
            {
              "label": "Deployment addresses",
              "href": "https://github.com/Uniswap/uniswap-v3-periphery/blob/main/deploys.md"
            }
          ]
        },
        {
          "title": "Ecosystem",
          "items": [
            {
              "label": "Home",
              "href": "https://uniswap.org/"
            },
            {
              "label": "App",
              "href": "https://app.uniswap.org/"
            },
            {
              "label": "Analytics",
              "href": "https://info.uniswap.org/home"
            },
            {
              "label": "Token Lists",
              "href": "https://tokenlists.org/"
            },
            {
              "label": "Brand Assets",
              "href": "https://uniswap.org/Uniswap_brand_assets.zip"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Governance",
              "href": "https://gov.uniswap.org/"
            },
            {
              "label": "Discord",
              "href": "https://discord.gg/ybKVQUWb4s"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/Uniswap"
            },
            {
              "label": "Blog",
              "href": "https://uniswap.org/blog/"
            }
          ]
        }
      ],
      "style": "light"
    },
    "colorMode": {
      "defaultMode": "dark",
      "disableSwitch": false,
      "respectPrefersColorScheme": true,
      "switchConfig": {
        "darkIcon": "☽",
        "lightIcon": "☼",
        "darkIconStyle": {},
        "lightIconStyle": {}
      }
    },
    "docs": {
      "versionPersistence": "localStorage"
    },
    "metadatas": [],
    "hideableSidebar": false
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "protocol",
          "routeBasePath": "protocol/",
          "sidebarPath": "/Users/robertseghedi/Documents/GitHub/fawn-docs/sidebars.js",
          "editUrl": "https://github.com/uniswap/uniswap-docs/tree/main/",
          "includeCurrentVersion": false
        },
        "theme": {
          "customCss": "/Users/robertseghedi/Documents/GitHub/fawn-docs/src/css/custom.css",
          "customCss2": "/Users/robertseghedi/Documents/GitHub/fawn-docs/src/css/colors.css"
        }
      }
    ]
  ],
  "plugins": [
    [
      "@docusaurus/plugin-content-docs",
      {
        "id": "SDK",
        "path": "sdk",
        "routeBasePath": "sdk/",
        "sidebarPath": "/Users/robertseghedi/Documents/GitHub/fawn-docs/sdkSidebars.js",
        "includeCurrentVersion": false
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