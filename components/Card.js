import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

export const Card = ({ item }) => {
    return (
        <TouchableOpacity style={styles.cardContainer} activeOpacity={0.8}>
            {item.image && (
                <Image source={{ uri: item.image }} style={styles.image} />
            )}
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title || "No title"}</Text>
                {item.description && (
                    <Text style={styles.description}>{item.description}</Text>
                )}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: "#fff",
        borderRadius: 12,
        overflow: "hidden",
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3,
    },
    image: {
        width: "100%",
        height: 180,
        resizeMode: "cover",
    },
    textContainer: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 6,
        color: "#333",
    },
    description: {
        fontSize: 14,
        color: "#666",
    },
});
