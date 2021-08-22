
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
  path: '/search',
  component: ComponentCreator('/search','05a'),
  exact: true,
},
{
  path: '/protocol/V1',
  component: ComponentCreator('/protocol/V1','efa'),
  
  routes: [
{
  path: '/protocol/V1/guides/connect-to-uniswap',
  component: ComponentCreator('/protocol/V1/guides/connect-to-uniswap','108'),
  exact: true,
},
{
  path: '/protocol/V1/guides/custom-linking',
  component: ComponentCreator('/protocol/V1/guides/custom-linking','34e'),
  exact: true,
},
{
  path: '/protocol/V1/guides/iframe-integration',
  component: ComponentCreator('/protocol/V1/guides/iframe-integration','d72'),
  exact: true,
},
{
  path: '/protocol/V1/guides/pool-liquidity',
  component: ComponentCreator('/protocol/V1/guides/pool-liquidity','63c'),
  exact: true,
},
{
  path: '/protocol/V1/guides/token-listing',
  component: ComponentCreator('/protocol/V1/guides/token-listing','8a2'),
  exact: true,
},
{
  path: '/protocol/V1/guides/trade-tokens',
  component: ComponentCreator('/protocol/V1/guides/trade-tokens','7bf'),
  exact: true,
},
{
  path: '/protocol/V1/introduction',
  component: ComponentCreator('/protocol/V1/introduction','39d'),
  exact: true,
},
{
  path: '/protocol/V1/reference/exchange',
  component: ComponentCreator('/protocol/V1/reference/exchange','2ee'),
  exact: true,
},
{
  path: '/protocol/V1/reference/factory',
  component: ComponentCreator('/protocol/V1/reference/factory','42e'),
  exact: true,
},
{
  path: '/protocol/V1/reference/interfaces',
  component: ComponentCreator('/protocol/V1/reference/interfaces','b08'),
  exact: true,
},
]
},
{
  path: '/protocol/V2',
  component: ComponentCreator('/protocol/V2','a6d'),
  
  routes: [
{
  path: '/protocol/V2/concepts/advanced-topics/fees',
  component: ComponentCreator('/protocol/V2/concepts/advanced-topics/fees','439'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/advanced-topics/math',
  component: ComponentCreator('/protocol/V2/concepts/advanced-topics/math','1f2'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/advanced-topics/pricing',
  component: ComponentCreator('/protocol/V2/concepts/advanced-topics/pricing','730'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/advanced-topics/research',
  component: ComponentCreator('/protocol/V2/concepts/advanced-topics/research','595'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/advanced-topics/security',
  component: ComponentCreator('/protocol/V2/concepts/advanced-topics/security','91d'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/advanced-topics/understanding-returns',
  component: ComponentCreator('/protocol/V2/concepts/advanced-topics/understanding-returns','1d0'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/core-concepts/flash-swaps',
  component: ComponentCreator('/protocol/V2/concepts/core-concepts/flash-swaps','4f6'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/core-concepts/oracles',
  component: ComponentCreator('/protocol/V2/concepts/core-concepts/oracles','e1d'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/core-concepts/pools',
  component: ComponentCreator('/protocol/V2/concepts/core-concepts/pools','102'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/core-concepts/swaps',
  component: ComponentCreator('/protocol/V2/concepts/core-concepts/swaps','ec3'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/governance/adversarial-circumstances',
  component: ComponentCreator('/protocol/V2/concepts/governance/adversarial-circumstances','469'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/governance/glossary',
  component: ComponentCreator('/protocol/V2/concepts/governance/glossary','acb'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/governance/governance-reference',
  component: ComponentCreator('/protocol/V2/concepts/governance/governance-reference','b9a'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/governance/guide-to-voting',
  component: ComponentCreator('/protocol/V2/concepts/governance/guide-to-voting','00a'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/governance/overview',
  component: ComponentCreator('/protocol/V2/concepts/governance/overview','828'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/governance/process',
  component: ComponentCreator('/protocol/V2/concepts/governance/process','25a'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/protocol-overview/ecosystem-participants',
  component: ComponentCreator('/protocol/V2/concepts/protocol-overview/ecosystem-participants','1fa'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/protocol-overview/glossary',
  component: ComponentCreator('/protocol/V2/concepts/protocol-overview/glossary','417'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/protocol-overview/how-uniswap-works',
  component: ComponentCreator('/protocol/V2/concepts/protocol-overview/how-uniswap-works','3ba'),
  exact: true,
},
{
  path: '/protocol/V2/concepts/protocol-overview/smart-contracts',
  component: ComponentCreator('/protocol/V2/concepts/protocol-overview/smart-contracts','576'),
  exact: true,
},
{
  path: '/protocol/V2/guides/interface-integration/custom-interface-linking',
  component: ComponentCreator('/protocol/V2/guides/interface-integration/custom-interface-linking','5e3'),
  exact: true,
},
{
  path: '/protocol/V2/guides/interface-integration/iframe-integration',
  component: ComponentCreator('/protocol/V2/guides/interface-integration/iframe-integration','e4b'),
  exact: true,
},
{
  path: '/protocol/V2/guides/interface-integration/using-the-api',
  component: ComponentCreator('/protocol/V2/guides/interface-integration/using-the-api','037'),
  exact: true,
},
{
  path: '/protocol/V2/guides/smart-contract-integration/building-an-oracle',
  component: ComponentCreator('/protocol/V2/guides/smart-contract-integration/building-an-oracle','582'),
  exact: true,
},
{
  path: '/protocol/V2/guides/smart-contract-integration/getting-pair-addresses',
  component: ComponentCreator('/protocol/V2/guides/smart-contract-integration/getting-pair-addresses','05c'),
  exact: true,
},
{
  path: '/protocol/V2/guides/smart-contract-integration/providing-liquidity',
  component: ComponentCreator('/protocol/V2/guides/smart-contract-integration/providing-liquidity','09d'),
  exact: true,
},
{
  path: '/protocol/V2/guides/smart-contract-integration/quick-start',
  component: ComponentCreator('/protocol/V2/guides/smart-contract-integration/quick-start','81e'),
  exact: true,
},
{
  path: '/protocol/V2/guides/smart-contract-integration/supporting-meta-transactions',
  component: ComponentCreator('/protocol/V2/guides/smart-contract-integration/supporting-meta-transactions','8ca'),
  exact: true,
},
{
  path: '/protocol/V2/guides/smart-contract-integration/trading-from-a-smart-contract',
  component: ComponentCreator('/protocol/V2/guides/smart-contract-integration/trading-from-a-smart-contract','c82'),
  exact: true,
},
{
  path: '/protocol/V2/guides/smart-contract-integration/using-flash-swaps',
  component: ComponentCreator('/protocol/V2/guides/smart-contract-integration/using-flash-swaps','ad3'),
  exact: true,
},
{
  path: '/protocol/V2/introduction',
  component: ComponentCreator('/protocol/V2/introduction','986'),
  exact: true,
},
{
  path: '/protocol/V2/reference/API/entities',
  component: ComponentCreator('/protocol/V2/reference/API/entities','86b'),
  exact: true,
},
{
  path: '/protocol/V2/reference/API/overview',
  component: ComponentCreator('/protocol/V2/reference/API/overview','8c0'),
  exact: true,
},
{
  path: '/protocol/V2/reference/API/queries',
  component: ComponentCreator('/protocol/V2/reference/API/queries','8d7'),
  exact: true,
},
{
  path: '/protocol/V2/reference/Governance/governance-reference',
  component: ComponentCreator('/protocol/V2/reference/Governance/governance-reference','096'),
  exact: true,
},
{
  path: '/protocol/V2/reference/smart-contracts/common-errors',
  component: ComponentCreator('/protocol/V2/reference/smart-contracts/common-errors','b47'),
  exact: true,
},
{
  path: '/protocol/V2/reference/smart-contracts/factory',
  component: ComponentCreator('/protocol/V2/reference/smart-contracts/factory','bd9'),
  exact: true,
},
{
  path: '/protocol/V2/reference/smart-contracts/library',
  component: ComponentCreator('/protocol/V2/reference/smart-contracts/library','076'),
  exact: true,
},
{
  path: '/protocol/V2/reference/smart-contracts/pair',
  component: ComponentCreator('/protocol/V2/reference/smart-contracts/pair','74c'),
  exact: true,
},
{
  path: '/protocol/V2/reference/smart-contracts/Pair-ERC-20',
  component: ComponentCreator('/protocol/V2/reference/smart-contracts/Pair-ERC-20','f01'),
  exact: true,
},
{
  path: '/protocol/V2/reference/smart-contracts/router-01',
  component: ComponentCreator('/protocol/V2/reference/smart-contracts/router-01','82c'),
  exact: true,
},
{
  path: '/protocol/V2/reference/smart-contracts/router-02',
  component: ComponentCreator('/protocol/V2/reference/smart-contracts/router-02','2a3'),
  exact: true,
},
]
},
{
  path: '/sdk/1.0.0',
  component: ComponentCreator('/sdk/1.0.0','22f'),
  
  routes: [
{
  path: '/sdk/1.0.0/guides/getting-started',
  component: ComponentCreator('/sdk/1.0.0/guides/getting-started','f60'),
  exact: true,
},
{
  path: '/sdk/1.0.0/introduction',
  component: ComponentCreator('/sdk/1.0.0/introduction','553'),
  exact: true,
},
{
  path: '/sdk/1.0.0/reference/computation',
  component: ComponentCreator('/sdk/1.0.0/reference/computation','20e'),
  exact: true,
},
{
  path: '/sdk/1.0.0/reference/constants',
  component: ComponentCreator('/sdk/1.0.0/reference/constants','ee2'),
  exact: true,
},
{
  path: '/sdk/1.0.0/reference/data',
  component: ComponentCreator('/sdk/1.0.0/reference/data','6b9'),
  exact: true,
},
{
  path: '/sdk/1.0.0/reference/format',
  component: ComponentCreator('/sdk/1.0.0/reference/format','cec'),
  exact: true,
},
{
  path: '/sdk/1.0.0/reference/orchestration',
  component: ComponentCreator('/sdk/1.0.0/reference/orchestration','411'),
  exact: true,
},
{
  path: '/sdk/1.0.0/reference/transact',
  component: ComponentCreator('/sdk/1.0.0/reference/transact','2fa'),
  exact: true,
},
{
  path: '/sdk/1.0.0/reference/types',
  component: ComponentCreator('/sdk/1.0.0/reference/types','b6e'),
  exact: true,
},
]
},
{
  path: '/sdk/2.0.0',
  component: ComponentCreator('/sdk/2.0.0','b6e'),
  
  routes: [
{
  path: '/sdk/2.0.0/guides/fetching-data',
  component: ComponentCreator('/sdk/2.0.0/guides/fetching-data','8ec'),
  exact: true,
},
{
  path: '/sdk/2.0.0/guides/getting-pair-addresses',
  component: ComponentCreator('/sdk/2.0.0/guides/getting-pair-addresses','277'),
  exact: true,
},
{
  path: '/sdk/2.0.0/guides/pricing',
  component: ComponentCreator('/sdk/2.0.0/guides/pricing','eeb'),
  exact: true,
},
{
  path: '/sdk/2.0.0/guides/quick-start',
  component: ComponentCreator('/sdk/2.0.0/guides/quick-start','1a8'),
  exact: true,
},
{
  path: '/sdk/2.0.0/guides/trading',
  component: ComponentCreator('/sdk/2.0.0/guides/trading','31b'),
  exact: true,
},
{
  path: '/sdk/2.0.0/introduction',
  component: ComponentCreator('/sdk/2.0.0/introduction','da8'),
  exact: true,
},
{
  path: '/sdk/2.0.0/reference/fetcher',
  component: ComponentCreator('/sdk/2.0.0/reference/fetcher','337'),
  exact: true,
},
{
  path: '/sdk/2.0.0/reference/fractions',
  component: ComponentCreator('/sdk/2.0.0/reference/fractions','664'),
  exact: true,
},
{
  path: '/sdk/2.0.0/reference/getting-started',
  component: ComponentCreator('/sdk/2.0.0/reference/getting-started','947'),
  exact: true,
},
{
  path: '/sdk/2.0.0/reference/other-exports',
  component: ComponentCreator('/sdk/2.0.0/reference/other-exports','c4d'),
  exact: true,
},
{
  path: '/sdk/2.0.0/reference/pair',
  component: ComponentCreator('/sdk/2.0.0/reference/pair','733'),
  exact: true,
},
{
  path: '/sdk/2.0.0/reference/route',
  component: ComponentCreator('/sdk/2.0.0/reference/route','04f'),
  exact: true,
},
{
  path: '/sdk/2.0.0/reference/token',
  component: ComponentCreator('/sdk/2.0.0/reference/token','a13'),
  exact: true,
},
{
  path: '/sdk/2.0.0/reference/trade',
  component: ComponentCreator('/sdk/2.0.0/reference/trade','18c'),
  exact: true,
},
]
},
{
  path: '/protocol/',
  component: ComponentCreator('/protocol/','517'),
  
  routes: [
{
  path: '/protocol/concepts/advanced/integration-issues',
  component: ComponentCreator('/protocol/concepts/advanced/integration-issues','38c'),
  exact: true,
},
{
  path: '/protocol/concepts/advanced/research',
  component: ComponentCreator('/protocol/concepts/advanced/research','7cd'),
  exact: true,
},
{
  path: '/protocol/concepts/advanced/resources',
  component: ComponentCreator('/protocol/concepts/advanced/resources','b38'),
  exact: true,
},
{
  path: '/protocol/concepts/governance/adversarial-circumstances',
  component: ComponentCreator('/protocol/concepts/governance/adversarial-circumstances','8ea'),
  exact: true,
},
{
  path: '/protocol/concepts/governance/glossary',
  component: ComponentCreator('/protocol/concepts/governance/glossary','2a5'),
  exact: true,
},
{
  path: '/protocol/concepts/governance/governance-reference',
  component: ComponentCreator('/protocol/concepts/governance/governance-reference','533'),
  exact: true,
},
{
  path: '/protocol/concepts/governance/guide-to-voting',
  component: ComponentCreator('/protocol/concepts/governance/guide-to-voting','b32'),
  exact: true,
},
{
  path: '/protocol/concepts/governance/overview',
  component: ComponentCreator('/protocol/concepts/governance/overview','ff3'),
  exact: true,
},
{
  path: '/protocol/concepts/governance/process',
  component: ComponentCreator('/protocol/concepts/governance/process','843'),
  exact: true,
},
{
  path: '/protocol/concepts/V3-overview/concentrated-liquidity',
  component: ComponentCreator('/protocol/concepts/V3-overview/concentrated-liquidity','e8e'),
  exact: true,
},
{
  path: '/protocol/concepts/V3-overview/fees',
  component: ComponentCreator('/protocol/concepts/V3-overview/fees','033'),
  exact: true,
},
{
  path: '/protocol/concepts/V3-overview/glossary',
  component: ComponentCreator('/protocol/concepts/V3-overview/glossary','ba1'),
  exact: true,
},
{
  path: '/protocol/concepts/V3-overview/oracle',
  component: ComponentCreator('/protocol/concepts/V3-overview/oracle','e52'),
  exact: true,
},
{
  path: '/protocol/concepts/V3-overview/range-orders',
  component: ComponentCreator('/protocol/concepts/V3-overview/range-orders','0f0'),
  exact: true,
},
{
  path: '/protocol/concepts/V3-overview/swaps',
  component: ComponentCreator('/protocol/concepts/V3-overview/swaps','6b5'),
  exact: true,
},
{
  path: '/protocol/guides/flash-integrations/calling-flash',
  component: ComponentCreator('/protocol/guides/flash-integrations/calling-flash','03f'),
  exact: true,
},
{
  path: '/protocol/guides/flash-integrations/final-contract',
  component: ComponentCreator('/protocol/guides/flash-integrations/final-contract','8cc'),
  exact: true,
},
{
  path: '/protocol/guides/flash-integrations/flash-callback',
  component: ComponentCreator('/protocol/guides/flash-integrations/flash-callback','a86'),
  exact: true,
},
{
  path: '/protocol/guides/flash-integrations/inheritance-constructors',
  component: ComponentCreator('/protocol/guides/flash-integrations/inheritance-constructors','576'),
  exact: true,
},
{
  path: '/protocol/guides/local-environment',
  component: ComponentCreator('/protocol/guides/local-environment','02f'),
  exact: true,
},
{
  path: '/protocol/guides/providing-liquidity/collect-fees',
  component: ComponentCreator('/protocol/guides/providing-liquidity/collect-fees','cbb'),
  exact: true,
},
{
  path: '/protocol/guides/providing-liquidity/decrease-liquidity',
  component: ComponentCreator('/protocol/guides/providing-liquidity/decrease-liquidity','e6d'),
  exact: true,
},
{
  path: '/protocol/guides/providing-liquidity/increase-liquidity',
  component: ComponentCreator('/protocol/guides/providing-liquidity/increase-liquidity','d5c'),
  exact: true,
},
{
  path: '/protocol/guides/providing-liquidity/mint-a-position',
  component: ComponentCreator('/protocol/guides/providing-liquidity/mint-a-position','3ef'),
  exact: true,
},
{
  path: '/protocol/guides/providing-liquidity/setting-up',
  component: ComponentCreator('/protocol/guides/providing-liquidity/setting-up','5fb'),
  exact: true,
},
{
  path: '/protocol/guides/providing-liquidity/the-full-contract',
  component: ComponentCreator('/protocol/guides/providing-liquidity/the-full-contract','369'),
  exact: true,
},
{
  path: '/protocol/guides/swaps/multihop-swaps',
  component: ComponentCreator('/protocol/guides/swaps/multihop-swaps','b1e'),
  exact: true,
},
{
  path: '/protocol/guides/swaps/single-swaps',
  component: ComponentCreator('/protocol/guides/swaps/single-swaps','b5d'),
  exact: true,
},
{
  path: '/protocol/introduction',
  component: ComponentCreator('/protocol/introduction','25b'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/callback/IUniswapV3FlashCallback',
  component: ComponentCreator('/protocol/reference/core/interfaces/callback/IUniswapV3FlashCallback','b9f'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/callback/IUniswapV3MintCallback',
  component: ComponentCreator('/protocol/reference/core/interfaces/callback/IUniswapV3MintCallback','1c5'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/callback/IUniswapV3SwapCallback',
  component: ComponentCreator('/protocol/reference/core/interfaces/callback/IUniswapV3SwapCallback','751'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/IERC20Minimal',
  component: ComponentCreator('/protocol/reference/core/interfaces/IERC20Minimal','c6c'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/IUniswapV3Factory',
  component: ComponentCreator('/protocol/reference/core/interfaces/IUniswapV3Factory','d55'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/IUniswapV3Pool',
  component: ComponentCreator('/protocol/reference/core/interfaces/IUniswapV3Pool','168'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/IUniswapV3PoolDeployer',
  component: ComponentCreator('/protocol/reference/core/interfaces/IUniswapV3PoolDeployer','448'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/pool/IUniswapV3PoolActions',
  component: ComponentCreator('/protocol/reference/core/interfaces/pool/IUniswapV3PoolActions','5f2'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/pool/IUniswapV3PoolDerivedState',
  component: ComponentCreator('/protocol/reference/core/interfaces/pool/IUniswapV3PoolDerivedState','23c'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/pool/IUniswapV3PoolEvents',
  component: ComponentCreator('/protocol/reference/core/interfaces/pool/IUniswapV3PoolEvents','ad3'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/pool/IUniswapV3PoolImmutables',
  component: ComponentCreator('/protocol/reference/core/interfaces/pool/IUniswapV3PoolImmutables','119'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/pool/IUniswapV3PoolOwnerActions',
  component: ComponentCreator('/protocol/reference/core/interfaces/pool/IUniswapV3PoolOwnerActions','84c'),
  exact: true,
},
{
  path: '/protocol/reference/core/interfaces/pool/IUniswapV3PoolState',
  component: ComponentCreator('/protocol/reference/core/interfaces/pool/IUniswapV3PoolState','a3d'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/BitMath',
  component: ComponentCreator('/protocol/reference/core/libraries/BitMath','17b'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/FixedPoint128',
  component: ComponentCreator('/protocol/reference/core/libraries/FixedPoint128','c3d'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/FixedPoint96',
  component: ComponentCreator('/protocol/reference/core/libraries/FixedPoint96','bdf'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/FullMath',
  component: ComponentCreator('/protocol/reference/core/libraries/FullMath','9e1'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/LiquidityMath',
  component: ComponentCreator('/protocol/reference/core/libraries/LiquidityMath','ab8'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/LowGasSafeMath',
  component: ComponentCreator('/protocol/reference/core/libraries/LowGasSafeMath','956'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/Oracle',
  component: ComponentCreator('/protocol/reference/core/libraries/Oracle','e65'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/Position',
  component: ComponentCreator('/protocol/reference/core/libraries/Position','08e'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/SafeCast',
  component: ComponentCreator('/protocol/reference/core/libraries/SafeCast','b5c'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/SecondsOutside',
  component: ComponentCreator('/protocol/reference/core/libraries/SecondsOutside','87f'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/SqrtPriceMath',
  component: ComponentCreator('/protocol/reference/core/libraries/SqrtPriceMath','d55'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/SwapMath',
  component: ComponentCreator('/protocol/reference/core/libraries/SwapMath','ae2'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/Tick',
  component: ComponentCreator('/protocol/reference/core/libraries/Tick','061'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/TickBitmap',
  component: ComponentCreator('/protocol/reference/core/libraries/TickBitmap','be0'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/TickMath',
  component: ComponentCreator('/protocol/reference/core/libraries/TickMath','099'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/TransferHelper',
  component: ComponentCreator('/protocol/reference/core/libraries/TransferHelper','247'),
  exact: true,
},
{
  path: '/protocol/reference/core/libraries/UnsafeMath',
  component: ComponentCreator('/protocol/reference/core/libraries/UnsafeMath','1df'),
  exact: true,
},
{
  path: '/protocol/reference/core/UniswapV3Factory',
  component: ComponentCreator('/protocol/reference/core/UniswapV3Factory','3c9'),
  exact: true,
},
{
  path: '/protocol/reference/core/UniswapV3Pool',
  component: ComponentCreator('/protocol/reference/core/UniswapV3Pool','81b'),
  exact: true,
},
{
  path: '/protocol/reference/core/UniswapV3PoolDeployer',
  component: ComponentCreator('/protocol/reference/core/UniswapV3PoolDeployer','8c9'),
  exact: true,
},
{
  path: '/protocol/reference/deployments',
  component: ComponentCreator('/protocol/reference/deployments','7be'),
  exact: true,
},
{
  path: '/protocol/reference/error-codes',
  component: ComponentCreator('/protocol/reference/error-codes','918'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/base/BlockTimestamp',
  component: ComponentCreator('/protocol/reference/periphery/base/BlockTimestamp','23b'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/base/ERC721Permit',
  component: ComponentCreator('/protocol/reference/periphery/base/ERC721Permit','ded'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/base/LiquidityManagement',
  component: ComponentCreator('/protocol/reference/periphery/base/LiquidityManagement','0d9'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/base/Multicall',
  component: ComponentCreator('/protocol/reference/periphery/base/Multicall','845'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/base/PeripheryImmutableState',
  component: ComponentCreator('/protocol/reference/periphery/base/PeripheryImmutableState','869'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/base/PeripheryPayments',
  component: ComponentCreator('/protocol/reference/periphery/base/PeripheryPayments','8a3'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/base/PeripheryPaymentsWithFee',
  component: ComponentCreator('/protocol/reference/periphery/base/PeripheryPaymentsWithFee','d80'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/base/PoolInitializer',
  component: ComponentCreator('/protocol/reference/periphery/base/PoolInitializer','def'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/base/SelfPermit',
  component: ComponentCreator('/protocol/reference/periphery/base/SelfPermit','f70'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/external/IERC1271',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/external/IERC1271','28f'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/external/IERC20PermitAllowed',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/external/IERC20PermitAllowed','cb9'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/external/IWETH9',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/external/IWETH9','e84'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/IERC20Metadata',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/IERC20Metadata','2e5'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/IERC721Permit',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/IERC721Permit','7f4'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/IMulticall',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/IMulticall','011'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/INonfungiblePositionManager',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/INonfungiblePositionManager','71a'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/INonfungibleTokenPositionDescriptor',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/INonfungibleTokenPositionDescriptor','7a4'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/IPeripheryImmutableState',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/IPeripheryImmutableState','7d7'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/IPeripheryPayments',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/IPeripheryPayments','941'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/IPeripheryPaymentsWithFee',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/IPeripheryPaymentsWithFee','405'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/IPoolInitializer',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/IPoolInitializer','a3a'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/IQuoter',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/IQuoter','03f'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/ISelfPermit',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/ISelfPermit','9a3'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/ISwapRouter',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/ISwapRouter','6da'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/ITickLens',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/ITickLens','686'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/interfaces/IV3Migrator',
  component: ComponentCreator('/protocol/reference/periphery/interfaces/IV3Migrator','c8d'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/lens/Quoter',
  component: ComponentCreator('/protocol/reference/periphery/lens/Quoter','ae3'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/lens/TickLens',
  component: ComponentCreator('/protocol/reference/periphery/lens/TickLens','f44'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/Base64',
  component: ComponentCreator('/protocol/reference/periphery/libraries/Base64','776'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/BytesLib',
  component: ComponentCreator('/protocol/reference/periphery/libraries/BytesLib','84c'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/CallbackValidation',
  component: ComponentCreator('/protocol/reference/periphery/libraries/CallbackValidation','034'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/ChainId',
  component: ComponentCreator('/protocol/reference/periphery/libraries/ChainId','bfe'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/HexStrings',
  component: ComponentCreator('/protocol/reference/periphery/libraries/HexStrings','170'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/LiquidityAmounts',
  component: ComponentCreator('/protocol/reference/periphery/libraries/LiquidityAmounts','343'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/NFTDescriptor',
  component: ComponentCreator('/protocol/reference/periphery/libraries/NFTDescriptor','0ca'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/NFTSVG',
  component: ComponentCreator('/protocol/reference/periphery/libraries/NFTSVG','4e1'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/Path',
  component: ComponentCreator('/protocol/reference/periphery/libraries/Path','913'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/PoolAddress',
  component: ComponentCreator('/protocol/reference/periphery/libraries/PoolAddress','3aa'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/PositionKey',
  component: ComponentCreator('/protocol/reference/periphery/libraries/PositionKey','37e'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/TokenRatioSortOrder',
  component: ComponentCreator('/protocol/reference/periphery/libraries/TokenRatioSortOrder','929'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/libraries/TransferHelper',
  component: ComponentCreator('/protocol/reference/periphery/libraries/TransferHelper','042'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/NonfungiblePositionManager',
  component: ComponentCreator('/protocol/reference/periphery/NonfungiblePositionManager','ca8'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/NonfungibleTokenPositionDescriptor',
  component: ComponentCreator('/protocol/reference/periphery/NonfungibleTokenPositionDescriptor','ec9'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/staker/Design',
  component: ComponentCreator('/protocol/reference/periphery/staker/Design','af7'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/staker/interfaces/IUniswapV3Staker',
  component: ComponentCreator('/protocol/reference/periphery/staker/interfaces/IUniswapV3Staker','c94'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/staker/libraries/IncentiveId',
  component: ComponentCreator('/protocol/reference/periphery/staker/libraries/IncentiveId','74b'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/staker/libraries/NFTPositionInfo',
  component: ComponentCreator('/protocol/reference/periphery/staker/libraries/NFTPositionInfo','dcc'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/staker/libraries/RewardMath',
  component: ComponentCreator('/protocol/reference/periphery/staker/libraries/RewardMath','9ff'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/staker/UniswapV3Staker',
  component: ComponentCreator('/protocol/reference/periphery/staker/UniswapV3Staker','62c'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/SwapRouter',
  component: ComponentCreator('/protocol/reference/periphery/SwapRouter','7da'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/Base64Test',
  component: ComponentCreator('/protocol/reference/periphery/test/Base64Test','ef2'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/LiquidityAmountsTest',
  component: ComponentCreator('/protocol/reference/periphery/test/LiquidityAmountsTest','617'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/MockTimeNonfungiblePositionManager',
  component: ComponentCreator('/protocol/reference/periphery/test/MockTimeNonfungiblePositionManager','c0e'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/MockTimeSwapRouter',
  component: ComponentCreator('/protocol/reference/periphery/test/MockTimeSwapRouter','d57'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/NFTDescriptorTest',
  component: ComponentCreator('/protocol/reference/periphery/test/NFTDescriptorTest','c2c'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/PathTest',
  component: ComponentCreator('/protocol/reference/periphery/test/PathTest','9d2'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/PeripheryImmutableStateTest',
  component: ComponentCreator('/protocol/reference/periphery/test/PeripheryImmutableStateTest','59b'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/PoolAddressTest',
  component: ComponentCreator('/protocol/reference/periphery/test/PoolAddressTest','e62'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/SelfPermitTest',
  component: ComponentCreator('/protocol/reference/periphery/test/SelfPermitTest','7f0'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/TestCallbackValidation',
  component: ComponentCreator('/protocol/reference/periphery/test/TestCallbackValidation','487'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/TestERC20',
  component: ComponentCreator('/protocol/reference/periphery/test/TestERC20','c41'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/TestERC20Metadata',
  component: ComponentCreator('/protocol/reference/periphery/test/TestERC20Metadata','2a7'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/TestERC20PermitAllowed',
  component: ComponentCreator('/protocol/reference/periphery/test/TestERC20PermitAllowed','f44'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/TestMulticall',
  component: ComponentCreator('/protocol/reference/periphery/test/TestMulticall','82f'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/TestPositionNFTOwner',
  component: ComponentCreator('/protocol/reference/periphery/test/TestPositionNFTOwner','f6a'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/TestUniswapV3Callee',
  component: ComponentCreator('/protocol/reference/periphery/test/TestUniswapV3Callee','5f2'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/test/TickLensTest',
  component: ComponentCreator('/protocol/reference/periphery/test/TickLensTest','7e2'),
  exact: true,
},
{
  path: '/protocol/reference/periphery/V3Migrator',
  component: ComponentCreator('/protocol/reference/periphery/V3Migrator','a2c'),
  exact: true,
},
{
  path: '/protocol/reference/smart-contracts',
  component: ComponentCreator('/protocol/reference/smart-contracts','2fe'),
  exact: true,
},
]
},
{
  path: '/sdk/',
  component: ComponentCreator('/sdk/','aa7'),
  
  routes: [
{
  path: '/sdk/guides/creating-a-pool',
  component: ComponentCreator('/sdk/guides/creating-a-pool','d03'),
  exact: true,
},
{
  path: '/sdk/guides/quick-start',
  component: ComponentCreator('/sdk/guides/quick-start','b0b'),
  exact: true,
},
{
  path: '/sdk/guides/using-ethers',
  component: ComponentCreator('/sdk/guides/using-ethers','515'),
  exact: true,
},
{
  path: '/sdk/introduction',
  component: ComponentCreator('/sdk/introduction','ce7'),
  exact: true,
},
{
  path: '/sdk/reference/classes/FullMath',
  component: ComponentCreator('/sdk/reference/classes/FullMath','ead'),
  exact: true,
},
{
  path: '/sdk/reference/classes/LiquidityMath',
  component: ComponentCreator('/sdk/reference/classes/LiquidityMath','b09'),
  exact: true,
},
{
  path: '/sdk/reference/classes/NonfungiblePositionManager',
  component: ComponentCreator('/sdk/reference/classes/NonfungiblePositionManager','290'),
  exact: true,
},
{
  path: '/sdk/reference/classes/NoTickDataProvider',
  component: ComponentCreator('/sdk/reference/classes/NoTickDataProvider','66f'),
  exact: true,
},
{
  path: '/sdk/reference/classes/Pool',
  component: ComponentCreator('/sdk/reference/classes/Pool','7c6'),
  exact: true,
},
{
  path: '/sdk/reference/classes/Position',
  component: ComponentCreator('/sdk/reference/classes/Position','8a2'),
  exact: true,
},
{
  path: '/sdk/reference/classes/Route',
  component: ComponentCreator('/sdk/reference/classes/Route','183'),
  exact: true,
},
{
  path: '/sdk/reference/classes/SelfPermit',
  component: ComponentCreator('/sdk/reference/classes/SelfPermit','4b5'),
  exact: true,
},
{
  path: '/sdk/reference/classes/SqrtPriceMath',
  component: ComponentCreator('/sdk/reference/classes/SqrtPriceMath','d70'),
  exact: true,
},
{
  path: '/sdk/reference/classes/SwapMath',
  component: ComponentCreator('/sdk/reference/classes/SwapMath','7ab'),
  exact: true,
},
{
  path: '/sdk/reference/classes/SwapRouter',
  component: ComponentCreator('/sdk/reference/classes/SwapRouter','b38'),
  exact: true,
},
{
  path: '/sdk/reference/classes/Tick',
  component: ComponentCreator('/sdk/reference/classes/Tick','f54'),
  exact: true,
},
{
  path: '/sdk/reference/classes/TickList',
  component: ComponentCreator('/sdk/reference/classes/TickList','383'),
  exact: true,
},
{
  path: '/sdk/reference/classes/TickListDataProvider',
  component: ComponentCreator('/sdk/reference/classes/TickListDataProvider','e61'),
  exact: true,
},
{
  path: '/sdk/reference/classes/TickMath',
  component: ComponentCreator('/sdk/reference/classes/TickMath','4b3'),
  exact: true,
},
{
  path: '/sdk/reference/classes/Trade',
  component: ComponentCreator('/sdk/reference/classes/Trade','0e4'),
  exact: true,
},
{
  path: '/sdk/reference/enums/FeeAmount',
  component: ComponentCreator('/sdk/reference/enums/FeeAmount','b5b'),
  exact: true,
},
{
  path: '/sdk/reference/functions/computePoolAddress',
  component: ComponentCreator('/sdk/reference/functions/computePoolAddress','924'),
  exact: true,
},
{
  path: '/sdk/reference/functions/encodeRouteToPath',
  component: ComponentCreator('/sdk/reference/functions/encodeRouteToPath','5ca'),
  exact: true,
},
{
  path: '/sdk/reference/functions/encodeSqrtRatioX96',
  component: ComponentCreator('/sdk/reference/functions/encodeSqrtRatioX96','b2c'),
  exact: true,
},
{
  path: '/sdk/reference/functions/isSorted',
  component: ComponentCreator('/sdk/reference/functions/isSorted','e19'),
  exact: true,
},
{
  path: '/sdk/reference/functions/maxLiquidityForAmounts',
  component: ComponentCreator('/sdk/reference/functions/maxLiquidityForAmounts','a9a'),
  exact: true,
},
{
  path: '/sdk/reference/functions/mostSignificantBit',
  component: ComponentCreator('/sdk/reference/functions/mostSignificantBit','b6f'),
  exact: true,
},
{
  path: '/sdk/reference/functions/nearestUsableTick',
  component: ComponentCreator('/sdk/reference/functions/nearestUsableTick','8ef'),
  exact: true,
},
{
  path: '/sdk/reference/functions/priceToClosestTick',
  component: ComponentCreator('/sdk/reference/functions/priceToClosestTick','cd9'),
  exact: true,
},
{
  path: '/sdk/reference/functions/tickToPrice',
  component: ComponentCreator('/sdk/reference/functions/tickToPrice','2eb'),
  exact: true,
},
{
  path: '/sdk/reference/functions/toHex',
  component: ComponentCreator('/sdk/reference/functions/toHex','78a'),
  exact: true,
},
{
  path: '/sdk/reference/functions/tradeComparator',
  component: ComponentCreator('/sdk/reference/functions/tradeComparator','ce8'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/AllowedPermitArguments',
  component: ComponentCreator('/sdk/reference/interfaces/AllowedPermitArguments','3fb'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/BestTradeOptions',
  component: ComponentCreator('/sdk/reference/interfaces/BestTradeOptions','0f4'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/CollectOptions',
  component: ComponentCreator('/sdk/reference/interfaces/CollectOptions','429'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/CommonAddLiquidityOptions',
  component: ComponentCreator('/sdk/reference/interfaces/CommonAddLiquidityOptions','0f1'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/FeeOptions',
  component: ComponentCreator('/sdk/reference/interfaces/FeeOptions','00e'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/IncreaseSpecificOptions',
  component: ComponentCreator('/sdk/reference/interfaces/IncreaseSpecificOptions','86a'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/MethodParameters',
  component: ComponentCreator('/sdk/reference/interfaces/MethodParameters','de4'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/MintSpecificOptions',
  component: ComponentCreator('/sdk/reference/interfaces/MintSpecificOptions','490'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/NFTPermitOptions',
  component: ComponentCreator('/sdk/reference/interfaces/NFTPermitOptions','c14'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/RemoveLiquidityOptions',
  component: ComponentCreator('/sdk/reference/interfaces/RemoveLiquidityOptions','185'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/StandardPermitArguments',
  component: ComponentCreator('/sdk/reference/interfaces/StandardPermitArguments','bbe'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/SwapOptions',
  component: ComponentCreator('/sdk/reference/interfaces/SwapOptions','84d'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/TickConstructorArgs',
  component: ComponentCreator('/sdk/reference/interfaces/TickConstructorArgs','53d'),
  exact: true,
},
{
  path: '/sdk/reference/interfaces/TickDataProvider',
  component: ComponentCreator('/sdk/reference/interfaces/TickDataProvider','fbf'),
  exact: true,
},
{
  path: '/sdk/reference/modules/constants',
  component: ComponentCreator('/sdk/reference/modules/constants','23f'),
  exact: true,
},
{
  path: '/sdk/reference/modules/utils',
  component: ComponentCreator('/sdk/reference/modules/utils','b67'),
  exact: true,
},
{
  path: '/sdk/reference/reference-info',
  component: ComponentCreator('/sdk/reference/reference-info','6d2'),
  exact: true,
},
{
  path: '/sdk/reference/types/nonfungiblepositionmanager.addliquidityoptions',
  component: ComponentCreator('/sdk/reference/types/nonfungiblepositionmanager.addliquidityoptions','ddc'),
  exact: true,
},
{
  path: '/sdk/reference/types/nonfungiblepositionmanager.increaseoptions',
  component: ComponentCreator('/sdk/reference/types/nonfungiblepositionmanager.increaseoptions','19b'),
  exact: true,
},
{
  path: '/sdk/reference/types/nonfungiblepositionmanager.mintoptions',
  component: ComponentCreator('/sdk/reference/types/nonfungiblepositionmanager.mintoptions','785'),
  exact: true,
},
{
  path: '/sdk/reference/types/selfpermit.permitoptions',
  component: ComponentCreator('/sdk/reference/types/selfpermit.permitoptions','a0a'),
  exact: true,
},
{
  path: '/sdk/reference/variables/constants.address_zero',
  component: ComponentCreator('/sdk/reference/variables/constants.address_zero','098'),
  exact: true,
},
{
  path: '/sdk/reference/variables/constants.factory_address',
  component: ComponentCreator('/sdk/reference/variables/constants.factory_address','01e'),
  exact: true,
},
{
  path: '/sdk/reference/variables/constants.pool_init_code_hash',
  component: ComponentCreator('/sdk/reference/variables/constants.pool_init_code_hash','72c'),
  exact: true,
},
{
  path: '/sdk/reference/variables/constants.tick_spacings',
  component: ComponentCreator('/sdk/reference/variables/constants.tick_spacings','cb0'),
  exact: true,
},
{
  path: '/sdk/reference/variables/internalconstants.negative_one',
  component: ComponentCreator('/sdk/reference/variables/internalconstants.negative_one','b4f'),
  exact: true,
},
{
  path: '/sdk/reference/variables/internalconstants.one',
  component: ComponentCreator('/sdk/reference/variables/internalconstants.one','357'),
  exact: true,
},
{
  path: '/sdk/reference/variables/internalconstants.q192',
  component: ComponentCreator('/sdk/reference/variables/internalconstants.q192','cf5'),
  exact: true,
},
{
  path: '/sdk/reference/variables/internalconstants.q96',
  component: ComponentCreator('/sdk/reference/variables/internalconstants.q96','227'),
  exact: true,
},
{
  path: '/sdk/reference/variables/internalconstants.zero',
  component: ComponentCreator('/sdk/reference/variables/internalconstants.zero','d32'),
  exact: true,
},
{
  path: '/sdk/Subgraph data',
  component: ComponentCreator('/sdk/Subgraph data','2de'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
