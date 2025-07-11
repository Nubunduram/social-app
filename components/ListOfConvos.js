import React, { useState, useEffect } from 'react';
import { View, FlatList, Pressable, Image, Text } from 'react-native';

// Données utilisateurs
const userList = [
    {
        id: 1,
        name: "Helena Tudi",
        url: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        id: 2,
        name: "John Tudi",
        url: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        id: 3,
        name: "Max Tudi",
        url: "https://randomuser.me/api/portraits/men/3.jpg"
    }
];

// Données de conversation
const conversationsList = [
    {
        id: 1,
        userId: 1,
        text: "Hey, i am Helena?"
    },
    {
        id: 2,
        userId: 2,
        text: "Hey from John?"
    },
    {
        id: 3,
        userId: 3,
        text: "Hey, how's it going? it's max"
    }
];

// Composant principal
export const ListOfConvos = ({ navigation }) => {
    const renderItem = ({ item }) => {
        const currentUser = userList.find(user => user.id === item.userId);

        return (
            <Pressable
                onPress={() => navigation.navigate('Messages', {
                    name: currentUser.name,
                    avatar: currentUser.url,
                    conversationId: item.id // ✅ CORRECTION: utiliser item.id au lieu de currentUser.id
                })}
                style={{
                    height: 100,
                    backgroundColor: 'rgba(255,255,255,0.6)',
                    borderRadius: 10,
                    marginBottom: 10,
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding: 10
                }}
            >
                <Image
                    source={{ uri: currentUser.url }}
                    style={{
                        width: 67,
                        height: 67,
                        borderRadius: 35,
                        borderColor: '#000000',
                        borderWidth: 1,
                        marginHorizontal: 17
                    }}
                />
                <View style={{ flexDirection: 'column' }}>
                    <Text style={{ fontSize: 14, paddingBottom: 9 }}>
                        {currentUser.name}
                    </Text>
                    <Text style={{ color: '#636366', width: '65%' }}>
                        {item.text}
                    </Text>
                </View>
            </Pressable>
        );
    };

    return (
        <FlatList
            style={{ paddingTop: 30, paddingHorizontal: 30 }}
            data={conversationsList}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            showsVerticalScrollIndicator={false}
            scrollEnabled={true}
            ListFooterComponent={<View style={{ height: 30 }} />}
        />
    );
};
