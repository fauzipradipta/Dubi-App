// // babel.config.js (add this when ready for animations)
// module.exports = {
//   presets: ['module:metro-react-native-babel-preset'],
//   plugins: [
//     'react-native-reanimated/plugin',
//     'react-native-worklets/plugin', workletsPluginOptions
//   ]
// };

module.exports = {
  presets: ['babel-preset-expo'],
  plugins: [
    // Ensure you have only ONE of these, not both
    'react-native-reanimated/plugin',
    // Remove or comment out: 'react-native-worklets/plugin'
  ],
};