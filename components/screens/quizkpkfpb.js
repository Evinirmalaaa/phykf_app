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

export default function Quizkpkfpb({ navigation }) {
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
            onPress={() => navigation.navigate('quiz')}
          />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 46 }}>
            Quiz KPK dan FPB
          </Text>
        </View>
      </View>
    </View>
  );
}
