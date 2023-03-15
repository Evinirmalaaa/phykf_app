import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Quiz({ navigation }) {
  return (
    <View style={{ backgroundColor: '#FFEAEA', flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          maxWidth: 100,
          paddingVertical: 4,
          paddingHorizontal: 0,
        }}></View>
      <View style={{ backgroundColor: '#FFEAEA' }}>
        <View style={{ margin: 24, flexDirection: 'row' }}>
          <AntDesign
            name="left"
            size={24}
            color="black"
            onPress={() => navigation.navigate('home')}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 96 }}>
            Quiz
          </Text>
        </View>
      </View>
      <View style={{
        alignItems: 'center'
      }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('LatihanSoal', {
            'category' : '1',
            'title' : 'Quiz Pythagoras'
          })}
          style={{
            backgroundColor: '#F07777',
            width: 250,
            height: 180,
            borderRadius: 10,
            marginHorizontal: 'auto',
            // marginVertical: 12,
            marginTop: 20,
            shadowColor: '#171717',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <Image
            source={require('../../assets/pythagoras.png')}
            style={{ width: 200, margin: 5, height: 140, marginLeft: 24 }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}>
            Quiz Pythagoras
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('LatihanSoal', {
            'category' : '2',
            'title' : 'Quiz KPK dan FPB'
          })}
          style={{
            backgroundColor: '#F07777',
            width: 250,
            height: 180,
            borderRadius: 10,
            marginHorizontal: 'auto',
            marginVertical: 12,
            marginTop: 24,
            shadowColor: '#171717',
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 3,
          }}>
          <Image
            source={require('../../assets/kpkfpb.png')}
            style={{ width: 200, margin: 5, height: 140, marginLeft: 24 }}
          />
          <Text
            style={{
              textAlign: 'center',
              fontWeight: 'bold',
              color: '#FFFFFF',
            }}>
            Quiz KPK dan FPB
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
