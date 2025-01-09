
export default {
  basePath: '/start-framework/',
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
