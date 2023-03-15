import * as React from 'react';
import { View, Text, useWindowDimensions, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PythagorasMateri from '../custom/pythagorasMateri';
import { AntDesign } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';
import { Table, Row, Rows } from 'react-native-table-component';


const Stack = createNativeStackNavigator();

function Pythagoras() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Pythagoras"
          component={Pythagoras}
          options={{ title: 'My home' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const FirstRoute = () => (
  <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 24 }} >
    <Text style={{
      fontWeight: 'bold',
      fontSize: 16
    }}>Kelipatan Persekutua Terkecil (KPK){'\n'}</Text>
    <Text>KPK adalah bilangan kelipatan terkecil yang sama dari banyaknya bilangan yang dimaksud. Banyaknya bilangan yang dimaksud ini bisa berupa 2 bilangan, 3 bilangan, dan seterusnya.{'\n\n'}</Text>
    <Text style={{
      fontWeight: 'bold',
      fontSize: 16
    }}>Faktor Persekutuan Terbesar (FPB){'\n'}</Text>
    <Text>FPB adalah faktor terbesar yang sama dari banyaknya bilangan yang dimaksud. Sama halnya dengan KPK, banyaknya bilangan yang dimaksud ini bisa berupa 2 bilangan, 3 bilangan, atau lebih.</Text>
  </View>
);

const SecondRoute = () => {
  const [angka, setAngka] = React.useState('')
  const [resultKpk, setResultKpk] = React.useState()
  const [resultFpb, setResultFpb] = React.useState()
  const [perhitunganKpk, setPerhitunganKpk] = React.useState(1)
  const [perhitunganFpb, setPerhitunganFpb] = React.useState()
  const [primaKpk, setPrimaKpk] = React.useState('')
  const [primaFpb, setPrimaFpb] = React.useState('')
  const Hitung = () => {
    // kpk
    let arr_angka = angka.split(',')
    let arr_faktorisasi = []

    let hasil_kpk = []
    let hasil_faktorisasi = [];
    for (let index = 0; index < arr_angka.length; index++) {
      let faktorisasi = []
      let loop = true
      let besarAngka = parseInt(arr_angka[index])
      let pembagi = 2
      while (loop == true) {
        if (besarAngka == 1) {
          faktorisasi.push(1)
          loop = false
        } else {
          let sisa = besarAngka % pembagi
          if (sisa == 0) {
            besarAngka = besarAngka / pembagi
            faktorisasi.push(pembagi)
            pembagi = 2
            if (besarAngka == 0) {
              loop = false
            }
          } else {
            pembagi = pembagi + 1
          }
        }
      }
      arr_faktorisasi.push(faktorisasi)
      hasil_faktorisasi.push([arr_angka[index], faktorisasi.join("x")])
    }
    setResultKpk(hasil_faktorisasi)


    const angkaMuncul = []
    for (let index = 0; index < arr_faktorisasi.length; index++) {
      for (let j = 0; j < arr_faktorisasi[index].length; j++) {
        if (!angkaMuncul.includes(arr_faktorisasi[index][j])) {
          angkaMuncul.push(arr_faktorisasi[index][j])
        }
      }
    }
    let filter_kpk1 = {}
    for (let index = 0; index < angkaMuncul.length; index++) {
      filter_kpk1[angkaMuncul[index]] = [0, 0];
    }
    console.log(filter_kpk1)

    for (const key in filter_kpk1) {
      for (let i = 0; i < arr_faktorisasi.length; i++) {
        let jmlhSementara = [i, 0]
        for (let j = 0; j < arr_faktorisasi[i].length; j++) {
          if (parseInt(key) == arr_faktorisasi[i][j]) {
            jmlhSementara[1] = jmlhSementara[1] + 1
          }
        }
        if (jmlhSementara[1] > filter_kpk1[key][1]) {
          filter_kpk1[key] = [i, jmlhSementara[1]]
        }
      }
    }
    console.log(arr_faktorisasi)
    console.log(filter_kpk1)
    for (const key in filter_kpk1) {
      let count = 0
      while (count != filter_kpk1[key][1]) {
        hasil_kpk.push(parseInt(key))
        count += 1
      }

    }
    console.log(hasil_kpk)
    setPrimaKpk(hasil_kpk.join(" x "))

    let totalKpk = 1
    for (let index = 0; index < hasil_kpk.length; index++) {
      totalKpk *= hasil_kpk[index]
    }
    setPerhitunganKpk(totalKpk)


    // fpb

    let hasil_fpb = []
    arr_faktorisasi = []
    hasil_faktorisasi = []
    for (let index = 0; index < arr_angka.length; index++) {
      let faktor = 1
      let faktorisasi = []
      while (faktor <= arr_angka[index]) {
        let sisa = arr_angka[index] % faktor
        if (sisa == 0) {
          faktorisasi.push(faktor)
        }
        faktor += 1
      }
      arr_faktorisasi.push(faktorisasi)
      hasil_faktorisasi.push([arr_angka[index], faktorisasi.join(", ")])
    }
    setResultFpb(hasil_faktorisasi)
    const arr = arr_faktorisasi;

    // Inisialisasi variabel dengan elemen dari sub-array pertama
    let commonNums = arr[0];

    // Loop melalui setiap sub-array
    for (let i = 1; i < arr.length; i++) {
      // Filter elemen dari sub-array saat ini yang terdapat di variabel commonNums
      commonNums = arr[i].filter(num => commonNums.includes(num));
    }

    // Cetak angka yang selalu muncul di setiap sub-array
    setPrimaFpb(commonNums.join(', '));
    let perhitungan = 1
    for (let index = 0; index < commonNums.length; index++) {
      perhitungan *= commonNums[index]
    }
    setPerhitunganFpb(perhitungan)

  }
  return (
    <ScrollView>
      <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 24 }} >
        <Text style={{
          fontWeight: 'bold',
          fontSize: 16,
          marginBottom: 20
        }}>Masukkan daftar angka yang akan dicari FPB dan KPK (pisahkan dengan koma) : </Text>
        <TextInput
          onChangeText={(text) => setAngka(text)}
          style={{
            borderWidth: 1,
            borderColor: 'black',
            marginBottom: 20,
            textAlign: 'center'
          }} />
        <View style={{
          alignItems: 'center'
        }}>
          <TouchableOpacity
            onPress={() => Hitung()}
            style={{
              width: 185,
              backgroundColor: "#F07777",
              padding: 10,
              marginBottom: 30,
              borderRadius: 10,
            }}>
            <Text style={{
              color: 'white',
              textAlign: 'center',
              fontWeight: 'bold',
            }}>Hitung</Text>
          </TouchableOpacity>
        </View>
        <Text style={{
          fontWeight: 'bold',
          fontSize: 16,
          marginBottom: 20,
          textAlign: 'center'
        }}>Hasil Perhitungan</Text>
        <Text style={{
          fontSize: 16,
          marginBottom: 20,
          textAlign: 'center'
        }}>KPK dari {angka == '' ? '..., ..., ...' : angka} adalah ...</Text>
        <Table borderStyle={{
          borderWidth: 2,
          borderColor: 'white',
          marginBottom: 20,
        }}>
          <Rows data={[["Angka", "Hasil Faktorisasi"]]} style={{
            backgroundColor: '#F07777',
          }} textStyle={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white'
          }} />
          <Rows data={resultKpk != null ? resultKpk : [["", ""], ["", ""], ["", ""]]} style={{
            backgroundColor: "#FFEAEA"
          }} textStyle={{
            textAlign: 'center'
          }} />
        </Table>
        <Text style={{
          fontSize: 16,
          marginBottom: 20,
          marginTop: 20,
          textAlign: 'center'
        }}>Untuk setiap hasil faktorisasi prima, cari faktor yang paling sering muncul</Text>
        <Text style={{
          fontSize: 16,
          marginBottom: 20,
          textAlign: 'center',
          fontWeight: 'bold'
        }}>Sehingga KPK dari {primaKpk == '' ? '..., ..., ...' : primaKpk} adalah {perhitunganKpk == 1 ? '...' : perhitunganKpk}</Text>

        <Text style={{
          fontSize: 16,
          marginBottom: 20,
          textAlign: 'center'
        }}>FPB dari {angka == '' ? '..., ..., ...' : angka} adalah ...</Text>
        <Table borderStyle={{
          borderWidth: 2,
          borderColor: 'white',
          marginBottom: 20,
        }}>
          <Rows data={[["Angka", "Hasil Faktorisasi"]]} style={{
            backgroundColor: '#F07777',
          }} textStyle={{
            textAlign: 'center',
            fontWeight: 'bold',
            color: 'white'
          }} />
          <Rows data={resultFpb != null ? resultFpb : [["", ""], ["", ""], ["", ""]]} style={{
            backgroundColor: "#FFEAEA"
          }} textStyle={{
            textAlign: 'center'
          }} />
        </Table>
        <Text style={{
          fontSize: 16,
          marginTop: 20,
          marginBottom: 20,
          textAlign: 'center'
        }}>Faktor yang sama  dari {angka == '' ? '..., ..., ...' : angka} adalah {primaFpb == null ? '...' : primaFpb}</Text>
        <Text style={{
          fontSize: 16,
          marginBottom: 20,
          textAlign: 'center',
          fontWeight: 'bold'
        }}>Sehingga FPB dari {angka == '' ? '..., ..., ...' : angka} adalah {perhitunganFpb == null ? '...' : perhitunganFpb}
        </Text>
      </View>
    </ScrollView>
  )
};

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: '#F07777' }}
    style={{ backgroundColor: '#FFEAEA' }}
    activeColor="#F07777"
    inactiveColor="252525"
    labelStyle={{ fontWeight: 'bold', fontSize: 14, }}
  />
);


export default function KPKFPBScreen({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([

    { key: 'first', title: 'Materi' },
    { key: 'second', title: 'Kalkulator' },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#FFFFFF' }}>
        <View style={{ margin: 24, marginTop: 48, flexDirection: 'row', }}>
          <AntDesign name="left" size={24} color="black" onPress={() => navigation.navigate('home')} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 72 }}>KPK dan FPB</Text>
        </View>
      </View>
      <StatusBar backgroundColor="white" />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
    </View>
  );
}


    // for (let i = 0; i < angkaMuncul.length; i++){
    //   console.log(angkaMuncul[i])
    // }
    // for (let index = 0; index < angkaMuncul.length; index++) {
    //   for (let x = 0; x < arr_faktorisasi.length; x++) {
    //     for (let j = 0; j < arr_faktorisasi[x].length; j++) {
    //       if(filter_kpk1[angkaMuncul[index]] === undefined){
    //         console.log(angkaMuncul[index])
    //         if(filter_kpk1[angkaMuncul[index]] == arr_faktorisasi[x][j]){
    //           filter_kpk1[angkaMuncul[index]] = [x]
    //         }
    //       }
    //     }
    //   }
    // }
    // console.log(arr_faktorisasi)


    // const count = {};
    // const filter_kpk = {};

    // for (let i = 0; i < arr_faktorisasi.length; i++) {
    //   for (let j = 0; j < arr_faktorisasi[i].length; j++) {
    //     if (count[arr_faktorisasi[i][j]] === undefined) {
    //       count[arr_faktorisasi[i][j]] = [i, j];
    //     } else {
    //       const [x, y] = count[arr_faktorisasi[i][j]];
    //       if (x === i) {
    //         count[arr_faktorisasi[i][j]] = [x, Math.max(y, j)];
    //       } else {
    //         count[arr_faktorisasi[i][j]] = [i, j];
    //       }
    //     }
    //   }
    // }

    // for (const key in count) {
    // let fil = []
    // for (let index = 0; index < arr_faktorisasi[count[key][0]].length; index++) {
    //   if(parseInt(key) == arr_faktorisasi[count[key][0]][index]){
    //     console.log(arr_faktorisasi[count[key][0]][index])
    //     fil.push(arr_faktorisasi[count[key][0]][index])
    //   }
    // }
    // filter_kpk[key] = fil
    //   console.log(`Angka ${key} muncul paling banyak pada array ke [${count[key][0]}] di index ke-${count[key][1]}.`);
    // }
    // console.log(count)
    // console.log(arr_faktorisasi)
    // console.log(filter_kpk)
    // let penjumlahan_hasil_kpk = 1
    // for (let index = 0; index < hasil_kpk.length; index++) {
    //   penjumlahan_hasil_kpk = penjumlahan_hasil_kpk * hasil_kpk[index];
    // }
    // setPerhitunganKpk(penjumlahan_hasil_kpk)