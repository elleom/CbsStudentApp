import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const Card = (props) => {
	return (
		<TouchableOpacity>
			<View style={{ ...styles.card, ...props.style }}>{props.children}</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	card: {
		/* the shadow properties work only on IOS */
		shadowColor: "black",
		shadowOpacity: 0.26,
		shadowOffset: { height: 2, width: 0 },
		shadowRadius: 5,

		/*to do the same i android use the following */
		elevation: 8,
		backgroundColor: "white",
		padding: 10,
		//borderRadius: 15,
	},
});

export default Card;
