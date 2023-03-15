import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { TextInput, View, Text } from 'react-native';

export default function CustumInput(props){
    return (
        <View style={{
            width: '100%',
            marginBottom: 8,
            height: 55
        }}>
            <Text style={{
                fontWeight: 'bold'
            }}>{props.label}</Text>
            <TextInput
             onChangeText={props.onChangeText}
             value={props.value}
             style={{
                borderColor: 'black',
                borderWidth: 1,
                width: '100%'
            }}/>
        </View>
    )
}