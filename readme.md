## Guide line for How to use Tailwindcss with React Native app

#### Create expo app using npm

###### npx create-expo-app appName

#### Install nativewind and its dependencies.

```
 npm install nativewind
 npm install --save-dev tailwindcss
```

#### initialize tailwindcss(create tailwind.config.js file)

###### npx tailwindcss init

#### Copy below code and paste into tailwind.config.js file

```
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./<custom directory>/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

#### Final step! In your babel.config.js add this line

```
// babel.config.js
module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
+   plugins: ["nativewind/babel"],
  };
};
```

#### if you are getting this error

```
npm install --save-dev tailwindcss@3.3.2
```
