import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

export default function Dashboard() {
  return (
    <View style={{ backgroundColor: '#FBC4C4', flex: 1 }}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 18,
            marginLeft: 16,
            marginTop: 16,
          }}>
          Welcome, Evi!
        </Text>
      </View>
      <View>
        <View></View>
        <View
          style={{
            backgroundColor: '#F07777',
            marginHorizontal: 16,
            padding: 12,
            marginTop: 25,
            borderRadius: 10,
          }}>
          <View style={{ flexDirection: 'row' }}>
            <Text
              style={{
                color: '#ffffff',
                fontWeight: 'bold',
                fontSize: 20,
              }}>
              Find a Quiz want to learn
            </Text>
            <View>
              <Image
                style={{
                  maxWidth: 150,
                  maxHeight: 100,
                  margin: 'auto',
                  display: 'block',
                  marginTop: 1,
                }}
                source={require('../../assets/imagefind.png')}></Image>
            </View>
          </View>
          <View>
            <TextInput
              style={{
                borderRadius: 15,
                maxWidth: 335,
                height: 34,
                backgroundColor: 'white',
                padding: 8,
              }}
              placeholder="Search"
              placeholderTextColor="#BCBCBC"></TextInput>
          </View>
        </View>
        <View>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 16,
              marginLeft: 16,
              marginTop: 16,
            }}>
            Categories
          </Text>
        </View>
      </View>
    </View>
  );
}
