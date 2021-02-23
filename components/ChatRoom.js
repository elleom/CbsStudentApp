import React from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "./Card";
import { TouchableOpacity } from "react-native-gesture-handler";

const ChatRoom = (props) => {
	const navigation = useNavigation();

	return (
		<View>
			<Card>
				<View style={styles.messageContainer}>
					<View style={styles.imageContainer}>
						<Image source={require("../assets/75.png")}></Image>
					</View>
					<View>
						<View>
							<Text>{props.chatroom.name}</Text>
						</View>
						
						<View>
							<Text>Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit..</Text>
							
						</View>
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	messageContainer: {
		flexDirection: "row",
	},
	imageContainer: {
		width: "25%",
	},
});
/*
<Button
								title='Navigate somewhere'
								onPress={() =>
									navigation.navigate("nameOfNavigationRouteEgMenu")
								}
							/>
*/
export default ChatRoom;
