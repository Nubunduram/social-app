import React from 'react';
import { Image, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ListOfCards = () => {
    const renderItem = ({ item }) => {
        return (
            <Image
                style={{
                    width: '100%',
                    height: 288,
                    borderRadius: 20,
                    marginBottom: 32,
                }}
                source={{ uri: item.url }}
            />
        )
    }

    const arrayOfImages = [
        {
            "itemId": 101,
            "authorId": 11,
            "timeStamp": "2 hrs ago",
            "url": "https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "like": 48,
            "conversations": 12
        },
                {
            "itemId": 102,
            "authorId": 12,
            "timeStamp": "3 hrs ago",
            "url": "https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            "like": 96,
            "conversations": 362
        }
    ]

    return (
        <View style={{ paddingVertical: 30 }}>
            <FlatList
                data={arrayOfImages}
                renderItem={renderItem}
                keyExtractor={(item) => item.itemId}
                showsVerticalScrollIndicator={false}
            />
        </View>
    )

}

export default ListOfCards
