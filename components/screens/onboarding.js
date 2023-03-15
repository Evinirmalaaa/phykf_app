import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function OnBoarding({ navigation }) {
  return (
    <View style={{ backgroundColor: '#FBC4C4', flex: 1, alignItems: 'center' }}>
      {/* <View style={{ justifyContent: 'center', alignItems: 'center' }}> */}
        <Image
          style={{
            width: '100%',
            height: 310,
            resizeMode: 'contain',
          }}
          source={require('../../assets/onboarding1.png')}/>
      {/* </View> */}
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            margin: 'auto',
            marginTop: 16,
            textAlign: 'center'
          }}>
          Belajar Matematika
        </Text>
        <Text
          style={{
            fontWeight: 'reguler',
            fontSize: 16,
            marginHorizontal: 16,
            marginTop: 24,
            textAlign: 'center',
          }}>
          Matematika ilmu yang menyenangkan mari belajar matematika
        </Text>
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            width: 150,
            padding: 12,
            borderRadius: 30,
            marginHorizontal: 'auto',
            marginVertical: 48,
            display: 'flex',
            alignItems: 'center',

          }}
          onPress={() => navigation.navigate('onboard2')}
        >
          <View style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
            <Text
              style={{ textAlign: 'center', margin: 'auto', color: '#F07777' }}>
              Skip
            </Text>
            <Image source={require('../../assets/arrowRight.png')} style={{
              width: 6,
              height: 11,
              resizeMode: 'contain',
              marginLeft: 10
            }} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
