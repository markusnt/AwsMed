import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Guide from '../pages/Guide';
import Details from '../pages/Details';
import Profile from '../pages/Profile';

const App = createStackNavigator();

const AppRoutes: React.FC = () => (
  <App.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#fff' },
    }}
    initialRouteName="Guide"
  >
    <App.Screen name="Guide" component={Guide} />
    <App.Screen name="Details" component={Details} />
    <App.Screen name="PERFIL" component={Profile} />
  </App.Navigator>
);

export default AppRoutes;
