// Minimal Metro config to satisfy tools that look for @react-native/metro-config
// Uses the default config provided by @react-native/metro-config

// const { getDefaultConfig } = require('@react-native/metro-config');

// module.exports = getDefaultConfig(__dirname);
module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
};