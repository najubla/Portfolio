
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Portfolio/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Portfolio"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 728, hash: '7b85ecc9b0062f9dcf40edc8d768226ae9fc2fb3483e1ed640f0ff47b8782e71', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1016, hash: 'c52aef0919ee18bd4b43a47f77c1cda381daf1602db34f83e264119c5d881e52', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 5102, hash: '87e2ffdac8444b8fe9ca2090fb779d71ff30a247e93438bfb7f5101b7e9d496d', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WLYZTACK.css': {size: 1593, hash: 'KYr145FQfdE', text: () => import('./assets-chunks/styles-WLYZTACK_css.mjs').then(m => m.default)}
  },
};
