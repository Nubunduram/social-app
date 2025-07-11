// src/components/AddedImages.js

import React from 'react';
import { View, FlatList, Image, useWindowDimensions, StyleSheet } from 'react-native';

const arrayOfImages = [
    {
        id: 1,
        url: 'https://media.istockphoto.com/id/1355135380/fr/photo/un-homme-barbu-attrayant-avec-des-fleurs-dans-sa-barbe-isol%C3%A9-sur-fond-jaune-vue-verticale.jpg?s=2048x2048&w=is&k=20&c=GfS0W0-9e-MwvIkqxxeoye1MTYckYAOSQiX7DeuKPUk=',
    },
];

export const AddedImages = () => {
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
