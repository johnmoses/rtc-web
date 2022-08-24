/** @type {import('next').NextConfig} */
require("dotenv").config();
const path = require("path");
const {
  DEVELOPMENT_PHASE,
  PRODUCTION_PHASE,
} = require("next/constants");

module.exports = (phase) => {
  const isDev = phase === DEVELOPMENT_PHASE;
  const isProd = phase === PRODUCTION_PHASE;

  console.log(`isDev:${isDev} isProd:${isProd}`);

  const env = {
    GRAPHQL_URL: (() => {
      if (isDev) return "http://127.0.0.1:8000/api/gql/";
      if (isProd) {
        return process.env.GRAPHQL_HOST;
      }
      return "http://127.0.0.1:8000/api/gql/";
    })(),
    SITE_URL: (() => {
      if (isDev) return "http://127.0.0.1:3000/";
      if (isProd) {
        return process.env.SITE_HOST;
      }
      return "http://127.0.0.1:3000/";
    })(),
  };
  
  return {
    // webpack: true,
    webpack: (config, { isServer, dev }) => {
      config.output.chunkFilename = isServer
        ? `${dev ? "[name]" : "[name].[fullhash]"}.js`
        : `static/chunks/${dev ? "[name]" : "[name].[fullhash]"}.js`;
        config.resolve.alias.pages = path.join(__dirname, 'pages');
        config.resolve.alias.components = path.join(__dirname, 'components');
        config.resolve.alias.lib = path.join(__dirname, 'lib');
        config.resolve.alias.styles = path.join(__dirname, 'styles');
      return config;
    },
    env,
    sassOptions: {
      includePaths: [path.join(__dirname, 'styles')],
    },
  };
};
