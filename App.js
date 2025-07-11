import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useFonts, Poppins_400Regular, Poppins_700Bold } from '@expo-google-fonts/poppins';
import { View, Text } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';

import { Home } from './surfaces/Home';
import { Login } from './surfaces/Login';
import { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ConversationsNav } from './surfaces/ConversationsNav';

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

export default function App() {
  const [userLoggedIn, setIsUserLoggedIn] = useState(true);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_700Bold
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        <NavigationContainer>
          <Stack.Navigator>
            {!userLoggedIn ? (
              <Stack.Screen name='Login' component={Login} />
            ) : (
              <>
                <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
                <Stack.Screen name='ConversationsNav' component={ConversationsNav} options={{ headerShown: false }} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </SafeAreaProvider>
  );
}