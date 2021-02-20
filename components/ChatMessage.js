import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ChatMessage = props => {
    //props.chatmessage
    //show image if not "me".
    //show purple container if "me"
    //show time if time is not the same as previous time and same user
    //show date if this message contains a new date compared to previous.

    return (
        <View>
            <Text>{props.chatmessage.message}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
 
});

export default ChatMessage;