// src/components/FavoritedImages.js

import React from 'react';
import { View, FlatList, Image, useWindowDimensions, StyleSheet } from 'react-native';

const arrayOfImages = [
  {
    id: 2,
    url: 'https://gratisography.com/wp-content/uploads/2025/02/gratisography-flower-beard-1-1170x780.jpg',
  },
];

export const FavoritedImages = () => {
  const { width } = useWindowDimensions();
  const imageWidth = width * 0.4;

  const renderItem = ({ item }) => (
    <View style={[styles.imageContainer, { width: imageWidth }]}>
      <Image
        source={{ uri: item.url }}
        style={[styles.image, { width: imageWidth, height: 120 }]}
      />
    </View>
  );

  return (
    <View style={styles.wrapper}>
      <FlatList
        data={arrayOfImages}
        horizontal
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderItem}
        showsHorizontalScrollIndicator={false}
        decelerationRate="fast"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingTop: 20,
  },
  image: {
    borderRadius: 15,
    borderColor: '#000000',
    borderWidth: 1,
  },
});
