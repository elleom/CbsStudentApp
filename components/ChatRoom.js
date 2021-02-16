import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChatRoom = props => {
   return (
    <View>
        <Text>{props.chatroom.name}</Text>
    </View>
   );
}

const styles = StyleSheet.create({
   
});

export default ChatRoom;