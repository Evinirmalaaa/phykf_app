import React, { useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackActions } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.dispatch(StackActions.replace("onboard"))
    }, 2000);
  }, []);
  return (
    <View
      style={{
        backgroundColor: '#FBC4C4',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Image
        source={require('../../assets/SplashScreen.png')}
      />
    </View>
  );
}


export default SplashScreen;