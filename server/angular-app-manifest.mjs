
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 8360, hash: '98c30f16ed2da70ed445964426ca1416c08f07523c25996fda23adf6c2791471', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 956, hash: '4d97a89b44f7625ccba2ef2c6a4fa8e7ec54039c1a35d7e18cf2b0077ade8a08', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 44924, hash: 'b207deac9285b0bdc9764b117cb5276492fa49b67498010638071c90c6e8fd64', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ZKUWRSEW.css': {size: 8207, hash: '2SrZufnaQJ0', text: () => import('./assets-chunks/styles-ZKUWRSEW_css.mjs').then(m => m.default)}
  },
};
