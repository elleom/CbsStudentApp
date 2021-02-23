import React from 'react';
import {View, Text, FlatList} from 'react-native'
import ChatRoom from '../../components/ChatRoom';
import {CHATROOM} from '../../data/dummy-data';

const Messages = () => {
    return (
        <View>
          <FlatList
            data={CHATROOM}
            renderItem={itemData => (
                <ChatRoom chatroom={itemData.item}></ChatRoom>
            )}
            keyExtractor={item => item.id}
        />
      </View>
      )
};

export default Messages;
