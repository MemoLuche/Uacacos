// App.js
import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Splash from './Splash';
import Login from './Login';
import Seguridad from './Seguridad';
import MainMenu from './MainMenu';
import Regristro from './Registro';

const Stack = createStackNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) return <Splash />;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!loggedIn ? (
          <Stack.Screen name="Login">
            {(props) => <Login {...props} onLogin={() => setLoggedIn(true)} />}
          </Stack.Screen>
        ) : (
          <>
            <Stack.Screen name="MainMenu">
              {(props) => <MainMenu {...props} onLogout={() => setLoggedIn(false)} />}
            </Stack.Screen>
            <Stack.Screen name="Seguridad" component={Seguridad} />
            <Stack.Screen name="Registro" component={Registro} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
