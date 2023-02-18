import pkg from './package.json';
export default {
  initEntery: true,
  initRoutes: {
    autoRoutes: true,
    outletLayout: '@/layouts',
  },
  define: {
    VERSION: pkg.version,
  },
};
