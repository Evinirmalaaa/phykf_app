import * as React from 'react';
import { View, Text, useWindowDimensions, StatusBar, Image, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PythagorasMateri from '../custom/pythagorasMateri';
import { AntDesign } from '@expo/vector-icons';
import CustumInput from '../custom/CostumInput';


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
  <View style={{ flex: 1, backgroundColor: '#ffffff', padding: 15 }} >
    <Text style={{
      fontWeight: 'bold',
      fontSize: 16
    }}>Bagaimana Sih Konsep Teorema Pythagoras Itu?</Text>
    <Text>Teorema Pythagoras menjelaskan hubungan panjang sisi pada segitiga siku-siku. Oleh karena itu, teorema ini hanya berlaku pada segitiga siku-siku aja.</Text>
    <Image source={require('../../assets/image_materi_pyhagoras.png')} style={{
      width: '100%',
      height: 216,
      resizeMode: 'contain'
    }}/>
    <Text style={{
      fontWeight: 'bold',
      fontSize: 16
    }}>Keterangan :</Text>
    <Text>c adalah hipotenusa yang juga merupakan sisi terpanjang dari segitiga siku-siku, sedangkan a dan b adalah sisi-sisi segitiga siku-siku lainnya.</Text>
  </View>
);

const SecondRoute = ({ navigation }) => {
  const [sisiA, setSisiA] = React.useState()
  const [sisiB, setSisiB] = React.useState()
  const [sisiC, setSisiC] = React.useState()
  const [hasilAkhir, setHasilAkhir] = React.useState()
  const Calc = () => {
    if (sisiA == null & sisiB==null && sisiC==null) {
      Alert.alert("Terjadi Kesalahan")
    }else{
      if (sisiB != null && sisiB != '' && sisiC != null && sisiC != ''  ) {
        const sisi_c = sisiC**2
        const sisi_b = sisiB**2
        const hasil = sisi_c - sisi_b
        setHasilAkhir(Math.sqrt(hasil))
        console.log('mencari a')
      }else if (sisiC != null && sisiC != '' && sisiA != null && sisiA != '') {
        const sisi_c = sisiC**2
        const sisi_a = sisiA**2
        const hasil = sisi_c - sisi_a
        setHasilAkhir(Math.sqrt(hasil))
        console.log('mencari b')
      }else if (sisiB != null && sisiA != null && sisiB != '' && sisiA != '') {
        const sisi_b = sisiB**2
        const sisi_a = sisiA**2
        const hasil = sisi_a + sisi_b
        setHasilAkhir(Math.sqrt(hasil))
        console.log('mencari c')
      }
    }
  }
  return (
  <ScrollView>
    <View style={{ flex: 1, backgroundColor: '#ffffff' }} >
      <View style={{
        alignItems: 'center',
        width: '100%',
        backgroundColor: 'white',
        flex: 1
      }}>
        <Image source={require('../../assets/segitiga.png')} style={{
          width: 94,
          height: 105,
          resizeMode: 'contain',
        }} />
        <View style={{
          display: 'flex',
          alignItems: 'flex-start',
          width: '100%',
          padding: 32,
          paddingTop: 10,
          paddingBottom: 10,
        }}>
          <CustumInput label="Sisi a : " onChangeText={(text)=>setSisiA(text)}/>
          <CustumInput label="Sisi b : " onChangeText={(text)=>setSisiB(text)}/>
          <CustumInput label="Sisi c : " onChangeText={(text)=>setSisiC(text)}/>
          <CustumInput label="Hasil" value={`${hasilAkhir}`} />
        </View>
        <TouchableOpacity 
        onPress={()=> Calc()}
        style={{
          width: 185,
          backgroundColor: "#F07777",
          padding: 10,
          marginBottom: 30,
          borderRadius: 10
        }}>
          <Text style={{
            color: 'white',
            textAlign: 'center',
            fontWeight: 'bold',
          }}>Hitung</Text>
        </TouchableOpacity>
      </View>
    </View>
  </ScrollView>
)};

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


export default function PythagorasScreen({ navigation }) {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([

    { key: 'first', title: 'Materi' },
    { key: 'second', title: 'Kalkulator' },
  ]);

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#FFFFFF' }}>
        <View style={{ margin: 24, flexDirection: 'row', }}>
          <AntDesign name="left" size={24} color="black" onPress={() => navigation.navigate('home')} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 72 }}>Pythagoras</Text>
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