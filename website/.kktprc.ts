import pkg from './package.json';
import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';

export default {
  publicPath: './',
  initEntery: true,
  initModel: '@/hooks/store',
  initRoutes: {
    autoRoutes: true,
    outletLayout: '@/layouts',
  },
  define: {
    VERSION: pkg.version,
  },
  proxySetup: (app: express.Application) => {
    app.use(
      '/api',
      createProxyMiddleware({
        target: 'http://localhost:8063',
        changeOrigin: true,
        // pathRewrite: { '^': '' },
      }),
    );
  },
};
