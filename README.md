# React-native Test App

This is the test application for engineer ai to get the country and weather information, We have used own created react-native base repo to begin with this test application which by default support to ES6.

Built with:

- React Native
- React Navigation
- Redux
- Redux-Saga
- React Hooks and other.

## Quick Start

Node 8 or greater is required. Development for iOS requires a Mac and Xcode 9 or up, and will target iOS 9 and up.

You also need to install the dependencies required by React Native:

- for [Android or ios development](https://reactnative.dev/docs/environment-setup)

**Setup the project:**

- clone this repository
- install the npm dependencies by running `yarn` or `npm install`

**Run project by below command:**

### Android

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn android` to run the Android application (remember to start a simulator or connect an Android phone)

### iOS

- `yarn start` to start the metro bundler, in a dedicated terminal
- `yarn ios` to run the iOS application (remember to start a simulator or connect an iPhone phone)

## Folder Structure

The project's structure will look similar to this:

```
3e80e7b12a18ce17811d
├── src
│   ├── assets
│   ├── components
│   ├── constants
│   ├── navigation
│   ├── redux
│   ├── screens
│   ├── services
│   ├── utils
│   ├── App.js
├── __test__
├── README.md
├── android
│   ├── app
│   ├── build.gradle
│   ├── gradle
│   ├── gradle.properties
│   ├── gradlew
│   ├── gradlew.bat
│   ├── my-upload-key.keystore
│   └── settings.gradle
├── index.js
├── ios
│   ├── engineer_ai_rn_app
│   ├── engineer_ai_rn_app-tvOS
│   ├── engineer_ai_rn_app-tvOSTests
│   ├── engineer_ai_rn_app.xcodeproj
│   └── engineer_ai_rn_appTests
└── package.json

```

### ./src directory

Project source code is in the `src` directory.

The inside of the src directory looks similar to the following:

```
src
│── assets
│── components
├── constants
├── navigation
├── redux
├── screens
├── services
├── utils
└── App.js
```

**components**
This is where your React components will live. Each component will have a directory containing the `.js` file. The app will come with some commonly used components like NavHeader, Theme resuable controls, loader etc.

**redux**
This is where your app's redux component will live such as actions, reducers & store.

**redux/sagas**
This is where your app's api call side effects will be handled.

**navigation**
This is where your `@react-navigation/native` navigators will live.

**screens**
This is where your screen components will live. A screen is a React component which will take up the entire screen and be part of the navigation hierarchy. Each screen will have a directory containing the `.js` file, along with styles files.

**services**
Any services that interface with the outside world will live here (think REST APIs, Push Notifications, Graphql etc.).

**constants**
Here lives your application API_URL and other constants.

**utils**
This is a great place to put miscellaneous helpers and utilities. Things like date helpers, formatters, etc. are often found here. However, it should only be used for things that are truely shared across your application. If a helper or utility is only used by a specific component or model, consider co-locating your helper with that component or model.

**index.js** This is the entry point to your app. This is where you will find the main App component which renders the rest of the application.
