/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
import {SafeAreaView, ScrollView, View, Text, StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store/store';
import RootNavigation from './navigation';
import PageLoader from './components/Loader';

function App() {
  const [isShowSplashScreen, setShowSplashScreen] = useState(true);
  const _hadleSplashScreen = () => {
    if (isShowSplashScreen) {
      setTimeout(() => {
        setShowSplashScreen(false);
      }, 3000);
    }
  };

  useEffect(() => {
    _hadleSplashScreen();
  }, []);

  if (isShowSplashScreen) {
    return (
      <SafeAreaView style={styles.splashWrapper}>
        <Text style={styles.sectionTitle}>Welcome to engineer.ai</Text>
      </SafeAreaView>
    );
  }
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView style={{flex: 1}}>
          <PageLoader />
          <RootNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  splashWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },
  logoImage: {
    height: '100%',
    width: '80%',
    resizeMode: 'contain',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'black',
  },
});

export default App;
