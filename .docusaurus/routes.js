
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','5cd'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','925'),
  exact: true,
},
{
  path: '/blog/tags/vouchpanel',
  component: ComponentCreator('/blog/tags/vouchpanel','4b7'),
  exact: true,
},
{
  path: '/blog/tags/welcome',
  component: ComponentCreator('/blog/tags/welcome','362'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','8c4'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/pricing',
  component: ComponentCreator('/pricing','d2f'),
  exact: true,
},
{
  path: '/wall',
  component: ComponentCreator('/wall','680'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','d07'),
  
  routes: [
{
  path: '/docs/',
  component: ComponentCreator('/docs/','353'),
  exact: true,
},
{
  path: '/docs/test',
  component: ComponentCreator('/docs/test','892'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
