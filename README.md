<h1>React Native Doctor Appointment</h1>

This application is a doctor appointment app. It is built using React Native and Firebase. It is a simple app that allows users to book appointments with doctors. It also allows doctors to view their appointments. 

<h1><b>Design</b></h1>

The app's design is inspired by the [Figma](https://www.figma.com/community/file/955249997092817311) designed by [Arotec Digital](https://www.figma.com/@arotecdigital).

<h1>Features</h1>


<h1>Installation</h1>

To run this project, you need to have [Node.js](https://nodejs.org/en/) installed on your computer. You also need to have [Expo](https://expo.io/) installed on your computer.

To install Expo, run the following command in your terminal:

```
npm install --global expo-cli
```

<h1>Usage</h1>

To run this project, clone this repository and run the following commands in your terminal:

```
cd react-native-doctor-appointment
npm install
expo start
```

<h1>Contributing</h1>

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change


<h2> Features </h2>

- [✅] Home Screen
- [✅] Dark Mode Added
- [❌] Doctors Screen
- [❌] Doctor Profile Screen
- [❌] Doctor Appointment Screen
- [❌] Chatting Screen

<h1>Used Technologies</h1>

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)
- [NativeWind](https://www.nativewind.dev/)
- [React Navigation](https://reactnavigation.org/)
- [Redux](https://redux.js.org/)
- [React Native SVG](https://github.com/software-mansion/react-native-svg)
- [React Native SVG Transformer](https://github.com/kristerkari/react-native-svg-transformer)

<h2> NativeWind </h2>

NativeWind is a React Native UI library that is built using Tailwind CSS. It is a great library that allows you to build beautiful UIs using Tailwind CSS.

<h2> How To Install NativeWind </h2>

To install NativeWind, run the following command in your terminal:

```
yarn add nativewind
yarn add --dev tailwindcss
```

You can check out the [NativeWind for Expo](https://www.nativewind.dev/quick-starts/expo) to learn more about how to use NativeWind.

<h2> React Native SVG </h2>

React Native SVG is a library that allows you to use SVGs in React Native. It is a great library that allows you to use SVGs in React Native.

<h2> How To Install React Native SVG </h2>

To install React Native SVG, run the following command in your terminal:

```
expo install react-native-svg
```

<h2> React Native SVG Transformer </h2>

React Native SVG Transformer is a library that allows you to import SVGs in React Native.

<h2> How To Install React Native SVG Transformer </h2>

To install React Native SVG Transformer, run the following command in your terminal:

```
yarn add --dev react-native-svg-transformer
```

<h2> How To Use React Native SVG Transformer </h2>

To use React Native SVG Transformer, add the following code to your `metro.config.js` file:

```js
const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };
  config.resolver = {
    ...resolver,
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
```

<h3>Example</h3> 

```js
    import { LogoComponent as Logo } from "./assets/logo.svg";

    <Logo width={100} height={100} />
```


<h1>License</h1>

[MIT](https://choosealicense.com/licenses/mit/)

