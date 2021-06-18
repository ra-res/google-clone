const nextConfigs = {
  // webpack: (config, { dev, isServer }) => {
  //   if (isServer) {
  //     return config;
  //   }
  //   var isProduction = config.mode === "production";
  //   if (!isProduction) {
  //     config.optimization.minimize = false;
  //     config.optimization.minimizer = [];
  //   }
  //   return config;
  // },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Important: return the modified config
    return config;
  },
  // webpack: (config) => {
  //   module: {
  //     rules: [{test: 'LICENSE', use:'raw-loader'}],
  //   };
  //   // Fixes npm packages that depend on `fs` module
  //   // config.node = {
  //   //   fs: "empty",
  //   // };
  //   config.plugins = [...config.plugins];
  //   return config;
  // },
  images: {
    domains: ["www.google.com"],
  },
  // target: "serverless",
};

module.exports = nextConfigs;
