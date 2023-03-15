import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function OnBoarding3({ navigation }) {
  return (
    <View style={{ backgroundColor: '#FBC4C4', flex: 1 }}>
      <View>
        <Image
          style={{
            width: '100%',
            height: 310,
            resizeMode: 'contain',
          }}
          source={require('../../assets/onboarding3.png')}></Image>
      </View>
      <View style={{
        alignItems: 'center'
      }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 24,
            margin: 'auto',
            marginTop: 16,
          }}>
          Ayo Belajar KPK & FPB
        </Text>
        <Text
          style={{
            fontWeight: 'reguler',
            fontSize: 16,
            marginHorizontal: 16,
            marginTop: 24,
            textAlign: 'center',
          }}>
          Kunci penting mempelajari KPK dan FPB adalah bilangan prima serta
          faktorisasi prima. Yuk kita pelajari langsung cara mencari KPK dan
          FPB.
        </Text>
      </View>
      <View style={{
        alignItems: 'center'
      }}>
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
          onPress={() => navigation.navigate('home')}
        >

          <View style={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row'
          }}>
            <Text style={{
              color: "#F07777"
            }}>Get Started</Text>
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
