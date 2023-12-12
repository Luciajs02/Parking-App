import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Modal, TouchableHighlight, FlatList, Alert} from 'react-native';
import 'firebase/database';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../db/firebase-config'

const RentScreen = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [parkingInfo, setParkingInfo] = useState({
    carType: '', 
    location: '', 
    comment: '', 
    price: null,
  });

  const prices = [50, 100, 150, 200, 250, 300]; 

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const selectPrice = (price) => {
    setSelectedPrice(price);
    setParkingInfo({ ...parkingInfo, price });
    toggleModal();
  };
  
  function create() {
    const { carType, location, comment, price } = parkingInfo;
  
    const parkingInfoCollectionRef = collection(db, 'parkingInfo'); 
  
    addDoc(parkingInfoCollectionRef, {  
      price: price,
      carType: carType,
      location: location,
      comment: comment,
    })
      .then((docRef) => {
        Alert.alert('Document written with ID: ', docRef.id);
      })
      .catch((error) => {
        Alert.alert('Error adding document: ', error);
      });
  }
  
  const renderPriceItem = ({ item }) => (
    <TouchableHighlight
      style={styles.priceItem}
      underlayColor="#DDDDDD"
      onPress={() => selectPrice(item)}
    >
      <Text>{item}</Text>
    </TouchableHighlight>
  );


  return (
    <View style={styles.container}>
      <Text style={styles.label}>Select a price for hour:</Text>
      <Button title=" Price " onPress={toggleModal} />
      {selectedPrice !== null && (
        <Text style={styles.selectedPrice}>Selected Price: ${selectedPrice}</Text>
      )}
      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <FlatList
              data={prices}
              renderItem={renderPriceItem}
              keyExtractor={(item) => item.toString()}
            />
            <Button title="Close" onPress={toggleModal} />
          </View>
        </View>
      </Modal>


      <TextInput
        style={styles.input}
        placeholder="Car Type"
        value={parkingInfo.carType}
        onChangeText={(text) => setParkingInfo({ ...parkingInfo, carType: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Location"
        value={parkingInfo.location}
        onChangeText={(text) => setParkingInfo({ ...parkingInfo, location: text })}
      />
      <TextInput
        style={[styles.input, { height: 100 }]} 
        placeholder="Comment"
        value={parkingInfo.comment}
        onChangeText={(text) => setParkingInfo({ ...parkingInfo, comment: text })}
        multiline={true}
        numberOfLines={4}
      />
      <Button title="Confirm" onPress={create}/>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    maxHeight: '80%',
  },
  priceItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#DDDDDD',
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCCCCC',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    width: '100%',
  },
});

export default RentScreen;
