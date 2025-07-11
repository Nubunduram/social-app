import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';

export const ListOfMessages = ({ conversationId }) => {
    const messages = [{
        "id": 1,
        "messages": [
            { "id": '1', "type": 'from', "text": 'Salut !' },
            { "id": '2', "type": 'to', "text": 'Hello !' },
            { "id": '3', "type": 'from', "text": 'Comment ça va ?' },
            { "id": '4', "type": 'from', "text": 'Hey, i am Helena?' },
        ],
    },
    {
        "id": 2,
        "messages": [
            { "id": '1', "type": 'from', "text": 'Salut !' },
            { "id": '2', "type": 'to', "text": 'Hello !' },
            { "id": '3', "type": 'from', "text": 'Comment ça va ?' },
            { "id": '4', "type": 'from', "text": 'Hey from John?' },
        ],
    },
    {
        "id": 3,
        "messages": [
            { "id": '1', "type": 'from', "text": 'Salut !' },
            { "id": '2', "type": 'to', "text": 'Hello !' },
            { "id": '3', "type": 'from', "text": 'Comment ça va ?' },
            { "id": '4', "type": 'from', "text": 'Hey, hows it going? its max' },
        ],
    }];

    
    // Trouver la conversation correspondante à l'ID
    const currentConversation = messages.find(convo => convo.id === conversationId);
    
    // Si aucune conversation trouvée, afficher un message par défaut
    const conversationMessages = currentConversation ? currentConversation.messages : [];

    const renderItem = ({ item }) => (
        <View
            style={[
                styles.text,
                item.type === 'from' ? styles.textFrom : styles.textTo,
            ]}
        >
            <Text>{item.text}</Text>
        </View>
    );

    return (
        <View style={{ paddingHorizontal: 20 }}>
            <FlatList
                data={conversationMessages}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        backgroundColor: '#FAFAFA',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        fontSize: 14,
        padding: 10,
        marginVertical: 14,
        maxWidth: '65%',
    },
    textFrom: {
        borderTopLeftRadius: 20,
        alignSelf: 'flex-end',
    },
    textTo: {
        borderTopRightRadius: 20,
        alignSelf: 'flex-start',
    },
});