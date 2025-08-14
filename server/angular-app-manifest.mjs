
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://najubla.github.io/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 753, hash: '24f0d4a38e0c0b5c4a691e92ab8497e23a9ad4a0bebb1fa65328632bf8419835', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1041, hash: 'b5e969ade489a15f5905d0a42a15083e65a12c160f1bd77533633ac2b5c8ee1b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5127, hash: 'd6dea0f05c2ca5dab7bea80b1bf85de3e176ddb8c840a7d2b7602940fee47466', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WLYZTACK.css': {size: 1593, hash: 'KYr145FQfdE', text: () => import('./assets-chunks/styles-WLYZTACK_css.mjs').then(m => m.default)}
  },
};
