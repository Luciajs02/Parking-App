import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useNavigation,  DrawerActions } from '@react-navigation/native';
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


const MapScreen = () => {

  const navigation = useNavigation(); 

  const [currentZoom, setCurrentZoom] = React.useState(0);
  const [selectedMarker, setSelectedMarker] = React.useState(null);
  const [selectedMarker2, setSelectedMarker2] = React.useState(null);
  const [selectedMarker3, setSelectedMarker3] = React.useState(null);
  const [selectedMarker4, setSelectedMarker4] = React.useState(null);
  const [selectedMarker5, setSelectedMarker5] = React.useState(null);
  const [selectedMarker6, setSelectedMarker6] = React.useState(null);
  const [selectedMarker7, setSelectedMarker7] = React.useState(null);
  const [selectedMarker8, setSelectedMarker8] = React.useState(null);
  const [selectedMarker9, setSelectedMarker9] = React.useState(null);
  const [selectedMarker10, setSelectedMarker10] = React.useState(null);
  const [selectedMarker11, setSelectedMarker11] = React.useState(null);
  const [selectedMarker12, setSelectedMarker12] = React.useState(null);
  const [selectedMarker14, setSelectedMarker14] = React.useState(null);
  const [selectedMarker15, setSelectedMarker15] = React.useState(null);
  const [selectedMarker16, setSelectedMarker16] = React.useState(null);
  const [selectedMarker17, setSelectedMarker17] = React.useState(null);
  const [selectedMarker18, setSelectedMarker18] = React.useState(null);
  const [selectedMarker19, setSelectedMarker19] = React.useState(null);
  const [selectedMarker20, setSelectedMarker20] = React.useState(null);
  const [selectedMarker22, setSelectedMarker22] = React.useState(null);
  const [selectedMarker23, setSelectedMarker23] = React.useState(null);
  const [selectedMarker24, setSelectedMarker24] = React.useState(null);
  const [selectedMarker25, setSelectedMarker25] = React.useState(null);
  const [selectedMarker26, setSelectedMarker26] = React.useState(null);
  const [selectedMarker27, setSelectedMarker27] = React.useState(null);
  const [selectedMarker28, setSelectedMarker28] = React.useState(null);
  const [selectedMarker29, setSelectedMarker29] = React.useState(null);
  const [selectedMarker30, setSelectedMarker30] = React.useState(null);
  const [selectedMarker31, setSelectedMarker31] = React.useState(null);
  const [selectedMarker32, setSelectedMarker32] = React.useState(null);
  const [selectedMarker33, setSelectedMarker33] = React.useState(null);
  const [selectedMarker34, setSelectedMarker34] = React.useState(null);

  const closeBox = () => {
    setSelectedMarker(null);
  };
  const closeBox2 = () => {
    setSelectedMarker2(null);
  };
  const closeBox3 = () => {
    setSelectedMarker3(null);
  };
  const closeBox4 = () => {
    setSelectedMarker4(null);
  };
  const closeBox5 = () => {
    setSelectedMarker5(null);
  };
  const closeBox6 = () => {
    setSelectedMarker6(null);
  };
  const closeBox7 = () => {
    setSelectedMarker7(null);
  };
  const closeBox8 = () => {
    setSelectedMarker8(null);
  };
  const closeBox9 = () => {
    setSelectedMarker9(null);
  };
  const closeBox10 = () => {
    setSelectedMarker10(null);
  };
  const closeBox11 = () => {
    setSelectedMarker11(null);
  };
  const closeBox12 = () => {
    setSelectedMarker12(null);
  };
  const closeBox14 = () => {
    setSelectedMarker14(null);
  };
  const closeBox15 = () => {
    setSelectedMarker15(null);
  };
  const closeBox16 = () => {
    setSelectedMarker16(null);
  };
  const closeBox17 = () => {
    setSelectedMarker17(null);
  };
  const closeBox18 = () => {
    setSelectedMarker18(null);
  };
  const closeBox19 = () => {
    setSelectedMarker19(null);
  };
  const closeBox20 = () => {
    setSelectedMarker20(null);
  };
  const closeBox22 = () => {
    setSelectedMarker22(null);
  };
  const closeBox23 = () => {
    setSelectedMarker23(null);
  };
  const closeBox24 = () => {
    setSelectedMarker24(null);
  };
  const closeBox25 = () => {
    setSelectedMarker25(null);
  };
  const closeBox26 = () => {
    setSelectedMarker26(null);
  };
  const closeBox27 = () => {
    setSelectedMarker27(null);
  };
  const closeBox28 = () => {
    setSelectedMarker28(null);
  };
  const closeBox29 = () => {
    setSelectedMarker29(null);
  };
  const closeBox30 = () => {
    setSelectedMarker30(null);
  };
  const closeBox31 = () => {
    setSelectedMarker31(null);
  };
  const closeBox32 = () => {
    setSelectedMarker32(null);
  };
  const closeBox33 = () => {
    setSelectedMarker33(null);
  };
  const closeBox34 = () => {
    setSelectedMarker34(null);
  };


  const [origin , setOrigin] = React.useState({
    longitude: 16.59774,
    latitude: 49.20271,
  })

  const [JD_Parking , setPJD] = React.useState({
    longitude: 16.609599,
    latitude: 49.199142, 
  })

  const [Parkovací_Rozmarýn , setPRoz] = React.useState({
    longitude: 16.605199,
    latitude: 49.199744, 
  })

  const [Domani_Park , setPDomani] = React.useState({
    longitude: 16.605186,
    latitude: 49.194576, 
  })

  const [Husova , setPHusova] = React.useState({
    longitude: 16.604521,
    latitude: 49.194869, 
  })

  const [Parkit , setParkit] = React.useState({
    longitude: 16.604659,
    latitude: 49.201120, 
  })

  const [PinkiPark , setPinki] = React.useState({
    longitude: 16.604880,
    latitude: 49.190413, 
  })

  const [Hlavni , setHalavni] = React.useState({
    longitude: 16.615003,
    latitude: 49.194283, 
  })

  const [Benesova , setPBenesova] = React.useState({
    longitude: 16.614179,
    latitude: 49.192846, 
  })

  const [U_Pošty , setPosty] = React.useState({
    longitude: 16.610712,
    latitude: 49.190214, 
  })

  const [Rybizoba , setPRybizoba] = React.useState({
    longitude: 16.583232,
    latitude: 49.236720, 
  })

  const [OG , setPOG] = React.useState({
    longitude: 16.615369,
    latitude: 49.188429, 
  })

  const [StudFP , setPFP] = React.useState({
    longitude: 16.573091,
    latitude: 49.230611, 
  })

  const [Bitesska, setPBitesska] = React.useState({
    longitude: 16.564271,
    latitude: 49.177442, 
  })

  const [Vozovna, setPVozovna] = React.useState({
    longitude: 16.584058,
    latitude: 49.235918, 
  })

  const [Kounicova, setPKounicova] = React.useState({
    longitude: 16.593925,
    latitude: 49.209852, 
  })
  
  const [Parkoviste, setParkoviste] = React.useState({
    longitude: 16.556847,
    latitude: 49.219846, 
  })

  const [Billa, setPBilla] = React.useState({
    longitude: 16.575137,
    latitude: 49.218209, 
  })

  const [Hr51, setPHr51] = React.useState({
    longitude: 16.592464,
    latitude: 49.207324, 
  })

  const [Cesa, setCesa] = React.useState({
    longitude: 16.572512,
    latitude: 49.227419, 
  })

  const [Parkoviste603, setP603] = React.useState({
    longitude: 16.570354,
    latitude: 49.192696, 
  })

  const [Poznanska, setPoznaska] = React.useState({
    longitude: 16.579239,
    latitude: 49.218128, 
  })

  const [Hroch, setHroch] = React.useState({
    longitude: 16.556910,
    latitude: 49.210969, 
  })

  const [Albert, setAlbert] = React.useState({
    longitude: 16.599828,
    latitude: 49.202241, 
  })

  const [PFree, setPFree] = React.useState({
    longitude: 16.627191,
    latitude: 49.189699, 
  })

  const [Technika1, setTechnika] = React.useState({
    longitude: 16.578992,
    latitude: 49.223444, 
  })

  const [Milenium, setMilenium] = React.useState({
    longitude: 16.600010,
    latitude: 49.189632, 
  })

  const [Dobneho, setDobneho] = React.useState({
    longitude: 16.611099,
    latitude: 49.207659, 
  })

  const [ZaDivadlem, setDivadlem] = React.useState({
    longitude: 16.613993,
    latitude: 49.196184, 
  })

  const [Amerika, setAmerika] = React.useState({
    longitude: 16.608324,
    latitude: 49.188728,  
  })

  const [Railway, setRailway] = React.useState({
    longitude: 16.637113,
    latitude: 49.204149, 
  })

  const [Zvonarka, setZvonarka] = React.useState({
    longitude: 16.614784,
    latitude: 49.185317, 
  })

  const [VUTFekt, setVUT] = React.useState({
    longitude: 16.575637,
    latitude: 49.227394, 
  })

  const [Museum, setMuseum] = React.useState({
    longitude: 16.581360,
    latitude: 49.228636, 
  })

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.menuIcon}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
      >
        <Ionicons name="ios-menu" size={32} color="black"/>
      </TouchableOpacity>

      <MapView 
        style={styles.map}
        initialRegion={{
          latitude: origin.latitude,
          longitude: origin.longitude,
          latitudeDelta: 0.09,
          longitudeDelta: 0.04
        }}
        onRegionChangeComplete={(region) => {
          const zoomLevel = Math.round(Math.log(360 / region.latitudeDelta) / Math.LN2);
          setCurrentZoom(zoomLevel);
        }}
      >
        <Marker
          coordinate={JD_Parking}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker(JD_Parking)}
        >
          <Image
            source={require('../../assets/iconcar.png')}
            style={{ width: 30, height: 40 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: -5, left: 10, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>JD Parking</Text>
            <Text style={{ fontFamily: 'Arial'}}>30Kc/h | 24h</Text>
          </View>
          )}
        </Marker>

        <Marker
          coordinate={Parkovací_Rozmarýn}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker2(Parkovací_Rozmarýn)}
        >
          <Image
            source={require('../../assets/iconcar.png')}
            style={{ width: 30, height: 40 }}
          />
           {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: -10, left: 30, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Parkovací dům Rozmarýn</Text>
            <Text style={{ fontFamily: 'Arial'}}>10.42Kc/h | 24h</Text>
          </View>
           )}
        </Marker>
        <Marker
          coordinate={Domani_Park}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker3(Domani_Park)}
        >
          <Image
            source={require('../../assets/iconcar.png')}
            style={{ width: 30, height: 40 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: -10, left: 30, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Parkovací dům DOMINI PARK</Text>
            <Text style={{ fontFamily: 'Arial'}}>40Kc/h | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Husova}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker4(Husova)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
           {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: -5, left: 45, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Husova</Text>
            <Text style={{ fontFamily: 'Arial'}}>60Kc/h | 24h</Text>
          </View>
           )}
        </Marker>
        <Marker
          coordinate={Parkit}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker5(Parkit)}
        >
          <Image
            source={require('../../assets/iconcar.png')}
            style={{ width: 30, height: 40 }}
          />
          {currentZoom >= 13 && (
          <View style={{ position: 'absolute', top: -10, left: 70, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>MR.PARKIT - Parking Brno hotel Continental</Text>
            <Text style={{ fontFamily: 'Arial'}}>16.7Kc/h | 24h</Text>
          </View>
           )}
        </Marker>
        <Marker
          coordinate={PinkiPark}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker6(PinkiPark)}
        >
          <Image
            source={require('../../assets/iconcar.png')}
            style={{ width: 30, height: 40 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: -5, left: 40, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Pinki Park</Text>
            <Text style={{ fontFamily: 'Arial'}}>30Kc/h | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Hlavni}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker7(Hlavni)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: -5, left: 60, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Hlavní nádraží</Text>
            <Text style={{ fontFamily: 'Arial'}}>50Kc/h | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Benesova}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker8(Benesova)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: -10, left: 40, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Parking Benešova</Text>
            <Text style={{ fontFamily: 'Arial'}}> free | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={U_Pošty}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker9(U_Pošty)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 16 && (
          <View style={{ position: 'absolute', top: -5, left: 60, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Parkoviště U Pošty</Text>
            <Text style={{ fontFamily: 'Arial'}}>free | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Rybizoba}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker10(Rybizoba)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: -5, left: 40, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Rybízová</Text>
            <Text style={{ fontFamily: 'Arial'}}>free | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={OG}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker11(OG)}
        >
          <Image
            source={require('../../assets/iconcar.png')}
            style={{ width: 30, height: 40 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: -5, left: 25, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>OG Vaňkovka</Text>
            <Text style={{ fontFamily: 'Arial'}}> free (Saturday, Sunday) - 20Kc/h | 7:00-23:00h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={StudFP}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker12(StudFP)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: -10, left: 70, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Pro studenty a zaměstnance FP</Text>
            <Text style={{ fontFamily: 'Arial'}}>free | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Bitesska}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker14(Bitesska)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 13 && (
          <View style={{ position: 'absolute', top: 1, left: 40, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Bítešská</Text>
            <Text style={{ fontFamily: 'Arial'}}>free | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Vozovna}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker15(Vozovna)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: 1, left: 40, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Vozovna</Text>
            <Text style={{ fontFamily: 'Arial'}}>free | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Kounicova}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker16(Kounicova)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: 1, left: 40, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Kounicova</Text>
            <Text style={{ fontFamily: 'Arial'}}>free| 11:00-22:00h | Satuday, Sunday - Closed</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Parkoviste}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker17(Parkoviste)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: -5, left: 40, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Parkoviště</Text>
            <Text style={{ fontFamily: 'Arial'}}>free | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Billa}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker18(Billa)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: 1, left: 70, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Parkoviště BILLA</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Hr51}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker19(Hr51)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: 1, left: 50, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Hrnčířská 51</Text>
            <Text style={{ fontFamily: 'Arial'}}>free| 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Cesa}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker20(Cesa)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: 1, left: 50, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Cesa VUT</Text>
            <Text style={{ fontFamily: 'Arial'}}>free</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Poznanska}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker22(Poznanska)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: 1, left: 50, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Poznaňská</Text>
            <Text style={{ fontFamily: 'Arial'}}>free| 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Hroch}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker23(Hroch)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: 1, left: 50, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Sportovního areálu Hroch</Text>
            <Text style={{ fontFamily: 'Arial'}}>free| 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Albert}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker24(Albert)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: 1, left: 30, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Albert</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={PFree}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker25(PFree)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: 1, left: 50, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Parking free</Text>
            <Text style={{ fontFamily: 'Arial'}}>free | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Technika1}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker26(Technika1)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: 1, left: 50, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Technická 1</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Milenium}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker27(Milenium)}
        >
          <Image
            source={require('../../assets/iconcar.png')}
            style={{ width: 30, height: 40 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: 1, left: 30, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Millenium Center</Text>
            <Text style={{ fontFamily: 'Arial'}}>60Kc/h | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Dobneho}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker28(Dobneho)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 14 && (
          <View style={{ position: 'absolute', top: 1, left: 50, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Drobného</Text>
            <Text style={{ fontFamily: 'Arial'}}>30Kc/h | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={ZaDivadlem}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker29(ZaDivadlem)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: 1, left: 55, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Za Divadlem</Text>
            <Text style={{ fontFamily: 'Arial'}}>free (Saturday, Sunday)| 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Amerika}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker30(Amerika)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: 1, left: 60, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Malá Amerika</Text>
            <Text style={{ fontFamily: 'Arial'}}>40Kc/h | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Railway}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker31(Railway)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: 1, left: 60, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Railway station</Text>
            <Text style={{ fontFamily: 'Arial'}}>free | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Zvonarka}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker32(Zvonarka)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: 1, left: 47, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Zvonařka</Text>
            <Text style={{ fontFamily: 'Arial'}}>8.3Kc/h | 24h</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={VUTFekt}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker33(VUTFekt)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: 1, left: 50, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>VUT FEKT studenti</Text>
            <Text style={{ fontFamily: 'Arial'}}>free</Text>
          </View>
          )}
        </Marker>
        <Marker
          coordinate={Museum}
          onDragEnd={(direction) => setDestination(direction.nativeEvent.coordinate)}
          onPress={() => setSelectedMarker34(Museum)}
        >
          <Image
            source={require('../../assets/logo_pfuera.png')}
            style={{ width: 100, height: 60 }}
          />
          {currentZoom >= 15 && (
          <View style={{ position: 'absolute', top: 1, left: 50, alignItems: 'center', width: 120}}>
            <Text style={{ fontFamily: 'Arial', fontWeight: 'bold' }}>Technical museum</Text>
            <Text style={{ fontFamily: 'Arial'}}>free</Text>
          </View>
          )}
        </Marker>
      </MapView>
      

      {selectedMarker && (
        <View style={styles.container2}>
          <Text style={styles.title}>{selectedMarker.name}</Text>
          <Text style={styles.subtitle}>{selectedMarker.info}</Text>
          <Text style={styles.brand}>JD_Parking</Text>
          <Image source={require('../../assets/JD.jpeg')} style={styles.image} />
          <View style={styles.infoContainer}>
            
            <TouchableOpacity onPress={closeBox} style={styles.closeButton}>
                <FontAwesome name="times" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.infoText}>
              <FontAwesome name="map-marker" size={14} color="grey" />  Rooseveltova 711, 602 00 Brno-střed
            </Text>
            <Text style={styles.infoText}>
              <FontAwesome name="globe" size={14} color="grey" />  jd_parking.cz
            </Text>
            <Text style={styles.infoText}>
              <FontAwesome name="phone" size={14} color="grey" />  733 143 540
            </Text>
            <Text style={styles.infoText}>
              <FontAwesome name="star" size={14} color="grey" />  4.4
            </Text>
          </View>
        </View>
      )}

      {selectedMarker2 && (
        <View style={styles.container2}>
          <Text style={styles.title}>{selectedMarker2.name}</Text>
          <Text style={styles.subtitle}>{selectedMarker2.info}</Text>
          <Text style={styles.brand}>Parkovací_Rozmarýn</Text>
          <Image source={require('../../assets/rozmaryn.jpg')} style={styles.image} />
          <View style={styles.infoContainer}>
            
            <TouchableOpacity onPress={closeBox2} style={styles.closeButton}>
                <FontAwesome name="times" size={20} color="black" />
            </TouchableOpacity>
            <Text style={styles.infoText}>
              <FontAwesome name="map-marker" size={14} color="grey" />  Kounicova 1007, 602 00 Brno-střed
            </Text>
            <Text style={styles.infoText}>
              <FontAwesome name="globe" size={14} color="grey" />  parkovani_brno_centrum.cz
            </Text>
            <Text style={styles.infoText}>
              <FontAwesome name="phone" size={14} color="grey" />  549 213 817
            </Text>
            <Text style={styles.infoText}>
              <FontAwesome name="star" size={14} color="grey" />  3.6
            </Text>
          </View>
        </View>
        )}

        {selectedMarker3 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker3.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker3.info}</Text>
            <Text style={styles.brand}>Domani_Park</Text>
            <Image source={require('../../assets/domini.jpg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox3} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Husova 712/14a, 602 00 Brno-střed
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="globe" size={14} color="grey" />  bkom.cz
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="phone" size={14} color="grey" />  543 424 421
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.4
              </Text>
            </View>
          </View>
        )}

        {selectedMarker4 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker4.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker4.info}</Text>
            <Text style={styles.brand}>Husova</Text>
            <Image source={require('../../assets/4.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox4} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Husova 536/14, 602 00 Brno-město
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="globe" size={14} color="grey" />  bkom.cz
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.0
              </Text>
            </View>
          </View>
        )}

        {selectedMarker5 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker5.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker5.info}</Text>
            <Text style={styles.brand}>MR.PARKIT-Hotel Continental</Text>
            <Image source={require('../../assets/5.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox5} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Mezírka 602 00, 602 00 Brno-střed
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="globe" size={14} color="grey" />  mrparkit.com
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="phone" size={14} color="grey" />  277 277 977
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  5.0
              </Text>
            </View>
          </View>
        )}

        {selectedMarker6 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker6.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker6.info}</Text>
            <Text style={styles.brand}>Pinki Park</Text>
            <Image source={require('../../assets/6.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox6} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Kopečná 998/24, 602 00 Brno-střed
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="globe" size={14} color="grey" />  bkom.com
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="phone" size={14} color="grey" />  543 424 421
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.0
              </Text>
            </View>
          </View>
        )}

        {selectedMarker7 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker7.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker7.info}</Text>
            <Text style={styles.brand}>Hlavni Nádražní</Text>
            <Image source={require('../../assets/7.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox7} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Nádražní, 602 00 Brno-střed
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="globe" size={14} color="grey" />  bnsd.cz
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="phone" size={14} color="grey" />  736 735 730
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.9
              </Text>
            </View>
          </View>
        )}

        {selectedMarker8 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker8.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker8.info}</Text>
            <Text style={styles.brand}>Benešova</Text>
            <Image source={require('../../assets/8.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox8} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Benešova 3, 602 00 Brno-střed
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.5
              </Text>
            </View>
          </View>
        )}

        {selectedMarker9 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker9.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker9.info}</Text>
            <Text style={styles.brand}>Parkoviste U_Pošty</Text>
            <Image source={require('../../assets/9.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox9} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Bašty 415/6, 602 00 Brno-střed
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.7
              </Text>
            </View>
          </View>
        )}

        {selectedMarker10 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker10.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker10.info}</Text>
            <Text style={styles.brand}>Rybízová</Text>
            <Image source={require('../../assets/10.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox10} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Rybízová 476, 621 00 Brno-Medlánky
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.3
              </Text>
            </View>
          </View>
        )}

        {selectedMarker11 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker11.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker11.info}</Text>
            <Text style={styles.brand}>OG Vaňkovka</Text>
            <Image source={require('../../assets/11.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox11} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Ve Vaňkovce 462, 602 00 Brno-střed-Trnitá
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="globe" size={14} color="grey" />  galerie-vankovka.cz
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="phone" size={14} color="grey" />  533 110 110
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.2
              </Text>
            </View>
          </View>
        )}

        {selectedMarker12 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker12.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker12.info}</Text>
            <Text style={styles.brand}>Pro studenty a zaměstnance</Text>
            <Image source={require('../../assets/12.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox12} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Kolejní, 612 00 Brno-Královo Pole
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="globe" size={14} color="grey" />  fbm.vutbr.cz
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  5.0
              </Text>
            </View>
          </View>
        )}

        {selectedMarker14 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker14.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker14.info}</Text>
            <Text style={styles.brand}>Bitesska</Text>
            <Image source={require('../../assets/14.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox14} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  634 00 Brno-Nový Lískovec
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.5
              </Text>
            </View>
          </View>
        )}

        {selectedMarker15 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker15.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker15.info}</Text>
            <Text style={styles.brand}>Vozovna</Text>
            <Image source={require('../../assets/15.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox15} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  72, Hudcova 296/70, 621 00 Brno-Medlánky
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.5
              </Text>
            </View>
          </View>
        )}

        {selectedMarker16 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker16.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker16.info}</Text>
            <Text style={styles.brand}>Kounicova</Text>
            <Image source={require('../../assets/16.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox16} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Kounicova 507/50, 602 00 Brno-střed-Ponava
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.8
              </Text>
            </View>
          </View>
        )}

        {selectedMarker17 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker17.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker17.info}</Text>
            <Text style={styles.brand}>Parkoviště</Text>
            <Image source={require('../../assets/17.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox17} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  603 00 Brno-střed
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.2
              </Text>
            </View>
          </View>
        )}

        {selectedMarker18 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker18.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker18.info}</Text>
            <Text style={styles.brand}>Parkoviště BILLA</Text>
            <Image source={require('../../assets/18.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox18} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Makovského nám. 3, 616 00 Brno-Žabovřesky
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.1
              </Text>
            </View>
          </View>
        )}

        {selectedMarker19 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker19.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker19.info}</Text>
            <Text style={styles.brand}>Hrnčířská</Text>
            <Image source={require('../../assets/19.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox19} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Hrnčířská 51, 602 00 Brno-střed
              </Text>
            </View>
          </View>
        )}

        {selectedMarker20 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker20.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker20.info}</Text>
            <Text style={styles.brand}>Cesa VUT</Text>
            <Image source={require('../../assets/20.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox20} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Brno-Královo Pole 395, 612 00 Brno
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.5
              </Text>
            </View>
          </View>
        )}

        {selectedMarker22 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker22.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker22.info}</Text>
            <Text style={styles.brand}>Poznaňská</Text>
            <Image source={require('../../assets/22.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox22} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Poznaňská 2561/10, 616 00 Brno-Žabovřesky
              </Text>
            </View>
          </View>
        )}

        {selectedMarker23 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker23.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker23.info}</Text>
            <Text style={styles.brand}>Sportovního areálu Hroch</Text>
            <Image source={require('../../assets/23.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox23} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  624 00 Brno-Komín
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.7
              </Text>
            </View>
          </View>
        )}

        {selectedMarker24 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker24.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker24.info}</Text>
            <Text style={styles.brand}>Albert</Text>
            <Image source={require('../../assets/24.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox24} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  U Pošty 8, 625 00 Brno-Starý Lískovec
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.7
              </Text>
            </View>
          </View>
        )}

        {selectedMarker25 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker25.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker25.info}</Text>
            <Text style={styles.brand}>Parking free</Text>
            <Image source={require('../../assets/25.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox25} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Zderadova 476, 602 00 Brno-střed-Trnitá
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.2
              </Text>
            </View>
          </View>
        )}

        {selectedMarker26 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker26.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker26.info}</Text>
            <Text style={styles.brand}>Technická 1</Text>
            <Image source={require('../../assets/26.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox26} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Technická, 612 00 Brno-Královo Pole
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.0
              </Text>
            </View>
          </View>
        )}

        {selectedMarker27 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker27.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker27.info}</Text>
            <Text style={styles.brand}>Milenium Center</Text>
            <Image source={require('../../assets/27.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox27} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Hybešova 726, 602 00 Staré Brno
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="phone" size={14} color="grey" />  543 128 111
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.2
              </Text>
            </View>
          </View>
        )}

        {selectedMarker28 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker28.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker28.info}</Text>
            <Text style={styles.brand}>Drobného</Text>
            <Image source={require('../../assets/28.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox28} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Drobného 323/70, 602 00 Brno-sever-Černá Pole
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.2
              </Text>
            </View>
          </View>
        )}

        {selectedMarker29 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker29.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker29.info}</Text>
            <Text style={styles.brand}>Za Divadlem</Text>
            <Image source={require('../../assets/29.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox29} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Dvořákova 588, 602 00 Brno-město
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.9
              </Text>
            </View>
          </View>
        )}

        {selectedMarker30 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker30.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker30.info}</Text>
            <Text style={styles.brand}>Hala Ameriká</Text>
            <Image source={require('../../assets/30.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox30} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Nové sady, 602 00 Brno-město
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="globe" size={14} color="grey" />  bnsd.cz
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="phone" size={14} color="grey" />  736 735 730
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.8
              </Text>
            </View>
          </View>
        )}

        {selectedMarker31 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker31.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker31.info}</Text>
            <Text style={styles.brand}>Railway Station</Text>
            <Image source={require('../../assets/31.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox31} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Uhelná 10/11b, 602 00 Brno-střed-Trnitá
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.5
              </Text>
            </View>
          </View>
        )}

        {selectedMarker32 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker32.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker32.info}</Text>
            <Text style={styles.brand}>Zvonařka</Text>
            <Image source={require('../../assets/32.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox32} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Košťálová 13-5, 602 00 Brno-střed
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="phone" size={14} color="grey" />  737 086 076
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  3.8
              </Text>
            </View>
          </View>
        )}

        {selectedMarker33 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker33.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker33.info}</Text>
            <Text style={styles.brand}>VUT FEKT</Text>
            <Image source={require('../../assets/33.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox33} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Brno-Královo Pole 409, 612 00 Brno
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.3
              </Text>
            </View>
          </View>
        )}

        {selectedMarker34 && (
          <View style={styles.container2}>
            <Text style={styles.title}>{selectedMarker34.name}</Text>
            <Text style={styles.subtitle}>{selectedMarker34.info}</Text>
            <Text style={styles.brand}>Technical Museum</Text>
            <Image source={require('../../assets/34.jpeg')} style={styles.image} />
            <View style={styles.infoContainer}>
              
              <TouchableOpacity onPress={closeBox34} style={styles.closeButton}>
                  <FontAwesome name="times" size={20} color="black" />
              </TouchableOpacity>
              <Text style={styles.infoText}>
                <FontAwesome name="map-marker" size={14} color="grey" />  Purkyňova 2950/105, 612 00 Brno-Královo Pole
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="globe" size={14} color="grey" />  technicalmuseum.cz
              </Text>
              <Text style={styles.infoText}>
                <FontAwesome name="star" size={14} color="grey" />  4.6
              </Text>
            </View>
          </View>
        )}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  map: {
    width: '100%', 
    height: '100%',
  },

  menuIcon: {
    position: 'absolute',
    top: 80,
    left: 16,
    zIndex: 1,
    borderRadius: 50,
    backgroundColor: '#fff', 
    padding: 7,
  },
  container2: {
    position: 'absolute',
    bottom: 30,
    left: 10,
    right: 10,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
  },
  subtitle: {
    fontFamily: 'Arial',
    fontSize: 16,
    marginBottom: 10,
  },
  brand: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    marginBottom: 20,
    fontSize: 16,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
  infoContainer: {
    marginTop: 10,
  },
  infoText: {
    fontFamily: 'Arial',
    fontSize: 15,
    color: 'grey',
    marginBottom: 8,
  },
  closeButton: {
    position: 'absolute',
    top: -190,
    right: 10,
  },
});

export default MapScreen;