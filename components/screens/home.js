import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Image,
    TouchableOpacity,
    TextInput,
} from 'react-native';

export default function HomeScreen({ navigation }) {
    return (
        <View style={{
            backgroundColor: '#FFEAEA',
            flex: 1
        }}>
            <View style={{
                width: '100%',
                padding: 20,
                paddingTop: 40,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <Text style={{
                    fontSize: 24,
                    color: '#998282',
                    width: 155,
                    fontWeight: 'bold'
                }}>Welcome To PyKF</Text>
                <Image source={require('../../assets/homescreen-image.png')} style={{
                    width: 164,
                    height: 107,
                    resizeMode: 'contain'
                }} />
            </View>
            <View style={{
                flex: 1,
                marginBottom: 50,
                display: 'flex',
                alignItems: 'center',
                paddingLeft: 50,
                paddingRight: 50,
            }}>
                <TouchableOpacity
                    onPress={() => navigation.navigate('pythagoras')}
                    style={{
                        width: '100%',
                        padding: 33,
                        backgroundColor: "#F07777",
                        borderRadius: 10,
                        elevation: 10,
                        marginBottom: 20
                    }}>
                    <Text style={{
                        fontSize: 20,
                        color: "white",
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>Pythagoras</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.navigate('kpkfpb')} style={{
                        width: '100%',
                        padding: 33,
                        backgroundColor: "#F07777",
                        borderRadius: 10,
                        elevation: 10,
                        marginBottom: 20
                    }}>
                    <Text style={{
                        fontSize: 20,
                        color: "white",
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>KPK &  FPB</Text>
                </TouchableOpacity>
                <TouchableOpacity
                 onPress={()=>navigation.navigate('quiz')}
                 style={{
                    width: '100%',
                    padding: 33,
                    backgroundColor: "#F07777",
                    borderRadius: 10,
                    elevation: 10,
                    marginBottom: 20
                }}>
                    <Text style={{
                        fontSize: 20,
                        color: "white",
                        textAlign: 'center',
                        fontWeight: 'bold'
                    }}>QUIZ</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
