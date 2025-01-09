
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/start-framework/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/start-framework/home",
    "route": "/start-framework"
  },
  {
    "renderMode": 2,
    "route": "/start-framework/home"
  },
  {
    "renderMode": 2,
    "route": "/start-framework/about"
  },
  {
    "renderMode": 2,
    "route": "/start-framework/protfolio"
  },
  {
    "renderMode": 2,
    "route": "/start-framework/contact"
  },
  {
    "renderMode": 2,
    "route": "/start-framework/**"
  }
],
  assets: {
    'index.csr.html': {size: 5949, hash: '68dd43899304da06dc7a02520e02366d20685d2e458142a8515ff47fa5e0e0b1', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1092, hash: 'f5b0e4322b634517620246ef6e9aa59fe81f0c885c8a3989e881eafa404d2fcf', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 19784, hash: '69c00c7217684014d5decc1a603dcb7dc0f0da1a8f94f9ca697b24c3b5243bba', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 19390, hash: 'b435753dfa42cc62060457545e1dc179bdb408cad281475f1fc042669fc59a49', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 24741, hash: '40cfee71bac8e891c4656371250e58687a0a300044ff6767f1f26e2b8ce87f9e', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'protfolio/index.html': {size: 23670, hash: '6e71e74e520aabe6b001d72a3a82d8aceccf58fa3f3f63785760ad903a80a632', text: () => import('./assets-chunks/protfolio_index_html.mjs').then(m => m.default)},
    'styles-J7BN47AV.css': {size: 305312, hash: '1pwIKQx7/Nk', text: () => import('./assets-chunks/styles-J7BN47AV_css.mjs').then(m => m.default)}
  },
};
