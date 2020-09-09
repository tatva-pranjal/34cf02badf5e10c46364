/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from './redux/store/store';
import RootNavigation from './navigation';

function App() {
  return (
    <Provider store={store}>android
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaView>
          <RootNavigation />
        </SafeAreaView>
      </PersistGate>
    </Provider>
  );
}

export default App;
