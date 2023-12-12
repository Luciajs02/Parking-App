import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../db/firebase-config';
import { useNavigation } from '@react-navigation/native'; 

const ListRentScreen = () => {
  const [parkingData, setParkingData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const parkingInfoCollectionRef = collection(db, 'parkingInfo');
        const querySnapshot = await getDocs(parkingInfoCollectionRef);
        const data = [];
        querySnapshot.forEach((doc) => {
          data.push({ id: doc.id, ...doc.data() });
        });
        setParkingData(data);
      } catch (error) {
        console.error('Error fetching documents: ', error);
      }
    };

    fetchData();
  }, []);

  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List of Rents</Text>
      <FlatList
        data={parkingData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => {
              navigation.navigate('Rent Pay', { rentDetails: item });
            }}
          >
            <Text>Car Type: {item.carType}</Text>
            <Text>Location: {item.location}</Text>
            <Text>Comment: {item.comment}</Text>
            <Text>Price: {item.price}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    paddingTop: 80,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  itemContainer: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    width: '100%',
  },
});

export default ListRentScreen;
