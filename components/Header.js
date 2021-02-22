import React from "react";
import { Text, StyleSheet, View } from "react-native";
import CustomColors from "../constants/CustomColors";

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
		backgroundColor: CustomColors.primary,
		alignItems: "center",
		justifyContent: "center",
	},
	headerTitle: {
		color: CustomColors.activeIcon,
		fontSize: 20,
		fontWeight: "bold",
        
	},
});

export default Header;
