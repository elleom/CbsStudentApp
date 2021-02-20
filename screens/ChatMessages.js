import React from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import ChatRoom from '../components/ChatRoom';
import { CHATROOM } from './../data/dummy-data';
import ChatMessage from './../components/ChatMessage'

const ChatMessages = props => {
    const { id } = props.route.params;
    console.log(id);

    const chatMessages = CHATROOM.find(room => room.id === id).chatMessages;


    return (
        <FlatList data={chatMessages} renderItem={itemData => (
           <ChatMessage chatmessage={itemData.item}></ChatMessage> 
        )}></FlatList>
       
    );
}

const styles = StyleSheet.create({
 
});

export default ChatMessages;