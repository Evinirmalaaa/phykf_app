import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SplashScreen from './components/screens/splashscreen';
import OnBoarding from './components/screens/onboarding';
import OnBoarding2 from './components/screens/onboarding2';
import OnBoarding3 from './components/screens/onboarding3';
import HomeScreen from './components/screens/home';
import Pythagoras from './components/screens/pythagoras';
import Kpkfpb from './components/screens/kpkfpb';
import Quiz from './components/screens/quiz';
import LatihanSoal from './components/screens/LatihanSoal';
import Quizkpkfpb from './components/screens/quizkpkfpb';
import PythagorasScreen from './components/screens/pythagoras';
import KPKFPBScreen from './components/screens/kpkfpb';
import QuizResult from './components/screens/QuizResult';
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboard"
          component={OnBoarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboard2"
          component={OnBoarding2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="onboard3"
          component={OnBoarding3}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="pythagoras"
          component={PythagorasScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="quiz"
          component={Quiz}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LatihanSoal"
          component={LatihanSoal}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="kpkfpb"
          component={KPKFPBScreen}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen
          name="quizkpkfpb"
          component={Quizkpkfpb}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="QuizResult"
          component={QuizResult}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
