import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import ChatRoom from "./../components/ChatRoom";
import { CHATROOM } from "./../data/dummy-data";
import Header from "../components/Header";

import {
	ScrollableTabView,
	DefaultTabBar,
	ScrollableTabBar,
} from "@valdio/react-native-scrollable-tabview";

const Chat = (props) => {
	console.log(CHATROOM);
	return (
		<View>
			<View>
				<Header title='CHAT'></Header>
			</View>
			<View>
				<ScrollableTabView
					style={{ marginTop: 20 }}
					initialPage={1}
					renderTabBar={() => <DefaultTabBar />}>
					<Text tabLabel='Tab #1'>My</Text>
					<Text tabLabel='Tab #2'>favorite</Text>
					<Text tabLabel='Tab #3'>project</Text>
				</ScrollableTabView>
			</View>

			<View>
				<FlatList
					data={CHATROOM}
					renderItem={(itemData) => (
						<ChatRoom chatroom={itemData.item}></ChatRoom>
					)}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Chat;
