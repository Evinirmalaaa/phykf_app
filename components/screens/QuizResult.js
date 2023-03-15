import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const QuizResult = ({ route, navigation }) => {
    const { benar, salah, jumlahSoal } = route.params
    const [avgPoint, setAvgPoint] = useState('')
    const [akurasi, setAkurasi] = useState('')
    useEffect(() => {
        let point = 100 / jumlahSoal
        setAvgPoint(`${Math.ceil(point)}`)
        setAkurasi(Math.ceil(point * parseInt(benar)))
    }, [])
    return (
        <View style={{
            flex: 1,
            backgroundColor: '#FFEAEA',
        }}>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate("home")
                }} style={{
                    position: 'absolute',
                    left: 30,
                    top: 30,
                    zIndex: 100
                }}>
                <Image
                    source={require('../../assets/arrowLeft.png')}
                    style={{
                        width: 10,
                        height: 20,
                        resizeMode: 'contain',
                    }}
                />
            </TouchableOpacity>
            <View style={{
                width: '100%',
                height: 325,
                backgroundColor: '#FBC4C4',
                position: 'absolute',
                zIndex: -10,
                borderBottomLeftRadius: 50,
                borderBottomRightRadius: 50
            }}>
            </View>
            <Image source={require('../../assets/image-resultquiz.png')} style={{
                width: '100%',
                height: 226,
                resizeMode: 'contain',
            }} />
            <View style={{
                alignItems: 'center'
            }}>
                <View style={{
                    width: 331,
                    height: 113,
                    backgroundColor: "#FFFFFF",
                    padding: 14,
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderRadius: 10,
                    elevation: 3,
                    flexDirection: 'row',
                    marginTop: 35
                }}>
                    <View style={{
                        flex: 1,
                        borderRightWidth: 1,
                        borderRightColor: 'black'
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#15CE6A',
                            textAlign: 'center',
                        }}>Benar</Text>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginTop: 10
                        }}>
                            {benar}
                        </Text>
                    </View>
                    <View style={{
                        flex: 1
                    }}>
                        <Text style={{
                            fontSize: 20,
                            fontWeight: 'bold',
                            color: '#D73A34',
                            textAlign: 'center',
                        }}>Salah</Text>
                        <Text style={{
                            textAlign: 'center',
                            fontSize: 16,
                            fontWeight: 'bold',
                            marginTop: 10
                        }}>
                            {salah}
                        </Text>
                    </View>
                </View>
                <View style={{
                    width: 331,
                    marginTop: 15,
                }}>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#7B7070",
                        }}>
                            Rata - rata pont
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: "black",
                            marginRight: 10
                        }}>
                            {avgPoint}
                        </Text>
                    </View>
                    <View style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginTop: 30
                    }}>
                        <Text style={{
                            fontSize: 16,
                            color: "#7B7070",
                        }}>
                            Akurasi
                        </Text>
                        <Text style={{
                            fontSize: 16,
                            color: "black",
                            marginRight: 10
                        }}>
                            {akurasi}
                        </Text>
                    </View>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate("home")
                    }}
                    style={{
                        padding: 10,
                        backgroundColor: '#F07777',
                        borderRadius: 5,
                        width: '50%',
                        marginTop: 30
                    }}>
                    <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white'
                    }}>Selesai</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default QuizResult