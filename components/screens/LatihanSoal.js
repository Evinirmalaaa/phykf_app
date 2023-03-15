import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RadioButton } from 'react-native-paper';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

const LatihanSoal = ({ route, navigation }) => {

  const { category, title } = route.params
  const [key, setKey] = useState('');
  const [checked, setChecked] = useState('noSet');
  const [jmlhSoal, setJmlhSoal] = useState('')
  const [nomorSoal, setNomorSoal] = useState(1)
  const [soals, setSoals] = useState([])
  const [image, setImage] = useState('')
  const [loadingSoal, setLoadingSoal] = useState(true)
  const [statusAnswer, setStatusAnswer] = useState()
  const [jawabanBenar, setJawabanBenar] = useState(0)
  const [jawabanSalah, setJawabanSalah] = useState(0)
  useEffect(() => {
    axios(`https://charming-chill-pull.glitch.me/api/soal/category/${category}`).then((response) => {
      let soal = response.data.data
      setSoals(soal[nomorSoal - 1])
      setJmlhSoal(soal.length)
      setTimeout(() => {
        setLoadingSoal(false)
      }, 200)
    })
  }, [nomorSoal])

  const anserCheck = (answer) => {
    setStatusAnswer(null)
    axios.post('https://charming-chill-pull.glitch.me/api/jobsheet/one', {
      quizId: soals.id,
      answer: answer
    }).then((response) => {
      if (response.data.message == "benar") {
        setJawabanBenar(jawabanBenar + 1)
        setStatusAnswer(true)
      } else {
        setJawabanSalah(jawabanSalah + 1)
        setStatusAnswer(false)
      }
    }).catch(function (error) {
      Alert.alert("Kesalahan Jaringan")
    });
    // setTimeout(() => {
    //   if (key == answer) {
    //     setJawabanBenar(jawabanBenar + 1)
    //     setStatusAnswer(true)
    //   } else {
    //     setJawabanSalah(jawabanSalah + 1)
    //     setStatusAnswer(false)
    //   }
    // }, 200);
  }

  return (
    <View style={{
      flex: 1,
      backgroundColor: "#FFEAEA"
    }}>
      <View style={{ margin: 24, flexDirection: 'row' }}>
        <AntDesign
          name="left"
          size={24}
          color="black"
          onPress={() => navigation.navigate('quiz')}
        />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 46 }}>
          {title}
        </Text>
      </View>
      <ScrollView>
        <View style={{
          padding: 24
        }}>
          <Text style={{
            color: "#FFBB0E",
            fontWeight: 'bold',
            marginBottom: 20
          }}>Question {nomorSoal}/{jmlhSoal}</Text>
          {
            loadingSoal ? (
              <Text>Loading..</Text>
            ) :
              (
                <View style={{ flex: 1 }}>
                  {soals.image != null ? <Image source={{ uri: 'https://charming-chill-pull.glitch.me/api/images/' + soals.image }} style={{
                    width: '100%',
                    height: 170,
                    resizeMode: 'contain',
                    marginBottom: 20
                  }} /> : null}
                  <Text style={{
                    marginBottom: 20
                  }}>{soals.soal}</Text>

                  <View style={{
                    backgroundColor:
                      checked == '' ? 'white' :
                        (checked == 'one' && statusAnswer == true) ? '#15CE6A' :
                          (checked == 'one' && statusAnswer == false) ? '#F07777' :
                            checked != 'one' ? 'white' : 'white',

                    padding: 10,
                    marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 5
                  }}>
                    <RadioButton
                      value="first"
                      color={(checked == 'one' && statusAnswer == null) ? 'black' : 'white'}
                      status={checked === 'one' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        if (checked == 'noSet') {
                          setChecked('one')
                          anserCheck('option_a')
                        }
                      }}
                    />
                    <Text style={{
                      color: (checked == 'one' && statusAnswer == true) ? "white" : (checked == 'one' && statusAnswer == false) ? 'white' : 'black'
                    }}>{soals.option_a}</Text>
                  </View>

                  <View style={{
                    backgroundColor:
                      checked == '' ? 'white' :
                        (checked == 'two' && statusAnswer == true) ? '#15CE6A' :
                          (checked == 'two' && statusAnswer == false) ? '#F07777' :
                            checked != 'two' ? 'white' : 'white',
                    padding: 10, marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 5
                  }}>
                    <RadioButton
                      value="two"
                      color={(checked == 'two' && statusAnswer == null) ? 'black' : 'white'}
                      status={checked === 'two' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        if (checked == 'noSet') {
                          setChecked('two')
                          anserCheck('option_b')
                        }
                      }}
                    />
                    <Text style={{
                      color: (checked == 'two' && statusAnswer == true) ? "white" : (checked == 'two' && statusAnswer == false) ? 'white' : 'black'
                    }}>{soals.option_b}</Text>
                  </View>

                  <View style={{
                    backgroundColor:
                      checked == '' ? 'white' :
                        (checked == 'three' && statusAnswer == true) ? '#15CE6A' :
                          (checked == 'three' && statusAnswer == false) ? '#F07777' :
                            checked != 'three' ? 'white' : 'white',
                    padding: 10, marginBottom: 10,
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    borderRadius: 5
                  }}>
                    <RadioButton
                      value="three"
                      color={(checked == 'three' && statusAnswer == null) ? 'black' : 'white'}
                      status={checked === 'three' ? 'checked' : 'unchecked'}
                      onPress={() => {
                        if (checked == 'noSet') {
                          setChecked('three')
                          anserCheck('option_c')
                        }
                      }}
                    />
                    <Text style={{
                      color: (checked == 'three' && statusAnswer == true) ? "white" : (checked == 'three' && statusAnswer == false) ? 'white' : 'black'
                    }}>{soals.option_c}</Text>
                  </View>
                  <View style={{
                    alignItems: 'center'
                  }}>
                    <TouchableOpacity
                      onPress={() => {
                        if (parseInt(jmlhSoal) == nomorSoal) {
                          navigation.navigate("QuizResult", {
                            benar: jawabanBenar,
                            salah: jawabanSalah,
                            jumlahSoal: jmlhSoal
                          })
                        } else {
                          setNomorSoal(nomorSoal + 1)
                          setChecked('noSet')
                          setStatusAnswer(null)
                          setLoadingSoal(true)
                        }
                      }}
                      style={{
                        padding: 10,
                        backgroundColor: '#F07777',
                        borderRadius: 5,
                        width: '50%',
                      }}>
                      <Text style={{
                        textAlign: 'center',
                        fontWeight: 'bold',
                        color: 'white'
                      }}>{parseInt(jmlhSoal) == nomorSoal ? "Finish" : "Next"}</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              )
          }
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#ffff',
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginBottom: 16,
    flexDirection: 'row',
  },
  answerOptionButton: {
    backgroundColor: '#fff',
    margin: 8,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
  },
  answerOptionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  questionText: {
    fontSize: 18,
    fontWeight: 'normal',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  answerButton: {
    backgroundColor: '#f2f2f2',
    padding: 8,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 1,
    marginRight: 8,
    alignItems: 'center',
  },
  answerText: {
    fontSize: 16,
  },
});

export default LatihanSoal;