import 'react-native-gesture-handler';

import React from 'react';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';

import { store, persistor } from './store';

import Routes from './routes';

import { primaryColor } from './utils/themes';

const App: React.FC = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={primaryColor} />
        <View style={{ flex: 1, backgroundColor: '#fff' }}>
          <Routes />
        </View>
      </NavigationContainer>
    </PersistGate>
  </Provider>
);

export default App;
