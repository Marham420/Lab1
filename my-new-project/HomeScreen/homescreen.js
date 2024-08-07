// screens/HomeScreen.js

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

const data = [
  {
    id: '1',
    name: 'Nasi Goreng',
    price: 'Rp 20,000',
    rating: 4.5,
    image: 'https://picsum.photos/200/300?food=1',
  },
  {
    id: '2',
    name: 'Mie Goreng',
    price: 'Rp 15,000',
    rating: 4.0,
    image: 'https://picsum.photos/200/300?food=2',
  },
  {
    id: '3',
    name: 'Sate Ayam',
    price: 'Rp 25,000',
    rating: 4.7,
    image: 'https://picsum.photos/200/300?food=3',
  },
  {
    id: '4',
    name: 'Gado-gado',
    price: 'Rp 18,000',
    rating: 4.2,
    image: 'https://picsum.photos/200/300?food=4',
  },
  {
    id: '5',
    name: 'Bakso',
    price: 'Rp 22,000',
    rating: 4.6,
    image: 'https://picsum.photos/200/300?food=5',
  },
  {
    id: '6',
    name: 'Rendang',
    price: 'Rp 30,000',
    rating: 4.8,
    image: 'https://picsum.photos/200/300?food=6',
  },
  {
    id: '7',
    name: 'Ayam Goreng',
    price: 'Rp 20,000',
    rating: 4.3,
    image: 'https://picsum.photos/200/300?food=7',
  },
  {
    id: '8',
    name: 'Soto Ayam',
    price: 'Rp 19,000',
    rating: 4.4,
    image: 'https://picsum.photos/200/300?food=8',
  },
  {
    id: '9',
    name: 'Tahu Sumedang',
    price: 'Rp 10,000',
    rating: 4.1,
    image: 'https://picsum.photos/200/300?food=9',
  },
  {
    id: '10',
    name: 'Pempek',
    price: 'Rp 15,000',
    rating: 4.0,
    image: 'https://picsum.photos/200/300?food=10',
  },
  // Tambahkan lebih banyak data makanan di sini
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={styles.infoContainer}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <Text style={styles.rating}>Rating: {item.rating}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
  },
  infoContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    color: 'green',
  },
  rating: {
    fontSize: 14,
    color: '#888',
  },
});

export default HomeScreen;
