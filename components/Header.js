import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Colors from "../constants/Colors";

const Header = (props) => {
	return (
		<View style={styles.header}>
			<Text style={styles.headerTitle}>{props.title}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	header: {
		width: "100%",
		height: 90,
		paddingTop: "10%",
		backgroundColor: Colors.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitle: {
		color: Colors.activeIcon,
		fontSize: 20,
		fontWeight: "bold",
        
	},
});

export default Header;
