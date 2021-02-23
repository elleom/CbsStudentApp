import React from "react";
import { View, Text, Button, StyleSheet, FlatList } from "react-native";
import Header from "../components/Header";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Messages from './tabs/Messages';
import Colors from '../constants/Colors'

const Tab = createMaterialTopTabNavigator();


const Right = () => {
	return (
		<View>
			<Text>Right</Text>
		</View>
	);
};

const Chat = (props) => {
	
	//console.log(CHATROOM);
	return (
		<NavigationContainer independent={true}>
			<View>
				<Header title='CHAT'></Header>
			</View>
			<Tab.Navigator 
			tabBarOptions={{
				activeTintColor: 'black',
				inactiveTintColor: "gray",
				inactiveBackgroundColor: Colors.accent,
					activeBackgroundColor: Colors.primary,
			}}>
				<Tab.Screen name='Left' component={Messages} />
				<Tab.Screen name='Right' component={Right} />
			</Tab.Navigator>
		</NavigationContainer>
	);
};

const styles = StyleSheet.create({});

export default Chat;
