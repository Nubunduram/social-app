import React from 'react';
import { View, Image } from 'react-native';
import { useHeaderHeight } from '@react-navigation/elements';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ListOfMessages } from '../components/ListOfMessages';

export const Messages = ({ route }) => {
    const headerHeight = useHeaderHeight();

    return (
        <SafeAreaView style={{ flex: 1, paddingTop: headerHeight + 100 }}>
            {/* Fond arrondi vert */}
            <View
                style={{
                    position: 'absolute',
                    top: 40,
                    left: '2%',
                    backgroundColor: '#E1F6F4',
                    width: '96%',
                    height: 255,
                    borderRadius: 34,
                }}
            />

            {/* Cercle décoratif */}
            <View
                style={{
                    width: 650,
                    height: 570,
                    borderRadius: 155,
                    borderWidth: 1,
                    borderColor: '#ffffff',
                    position: 'absolute',
                    top: 190,
                    left: -290,
                    transform: [{ rotate: '-45deg' }],
                }}
            />

            {/* Avatar dans une bordure noire */}
            <View
                style={{
                    position: 'absolute',
                    top: 130,
                    left: 35,
                    width: 84,
                    height: 84,
                    borderRadius: 42,
                    borderWidth: 1,
                    borderColor: '#000000',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: '#fff',
                }}
            >
                <Image
                    style={{
                        height: 78,
                        width: 78,
                        borderRadius: 39,
                    }}
                    source={{ uri: route.params.avatar }}
                />
            </View>

            {/* Liste des messages */}
            <ListOfMessages conversationId={route.params.conversationId} />
        </SafeAreaView>
    );
};