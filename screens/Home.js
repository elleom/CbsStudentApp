import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import Header from '../components/Header'

const Home = (props) => {
	return (
		<View>
			<View>
				<Header title='FEED' />
			</View>
			<View>
				<Text>Hi, I am the Home Screen</Text>
				<Button title="Don't click me"></Button>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({});

export default Home;
