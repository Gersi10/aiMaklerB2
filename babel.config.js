// babel.config.js
module.exports = {
    presets: ['babel-preset-expo'],
    plugins: [
      'module:react-native-dotenv',
      'react-native-reanimated/plugin' // ganz unten in der Plugin-Liste
    ],
  };
  