import React, {Component} from 'react';
import {Image, Button, StyleSheet, Text, View, Switch, TextInput, ScrollView} from "react-native";
import Header from "../components/Header";
import {Link} from "react-router-native";
import {Marker} from "react-native-maps";

export default class Messages extends Component {
	state = {
		conversations: []
	};

	componentDidMount = () => {
		fetch('https://velky-bratr.cz/api/chat/getListOfMyChats', {
			credentials: 'same-origin',
			method: 'GET',
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
			},
		})
			.then((result) => {
				return result.json();
			})
			.then((result) => {
				if (typeof result.response !== 'undefined') {
					this.setState({
						conversations: result.response,
					});
					console.log(result.response);
				}
			});
	};

	render() {
		return (
			<View style={styles.container}>
				<Header text={'Zprávy'}/>
				<View style={styles.innerContainer}>
					<ScrollView style={styles.messages}>
						{
							this.state.conversations.map((item) => {
								return <Link to={`/conversation/${item.chat_id}`}>
									<View style={styles.messageMy}>
										<Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
											   style={styles.messageImage}/>
										<View style={styles.messageContent}>
											<Text style={styles.messageName}>{item.chat_name}</Text>
											<Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
												dispozici žádné volné mise Nemáš k
												dispozici žádné volné mise</Text>
										</View>
									</View>
								</Link>;
							})
						}
						<Link to={'/conversation/28'}>
							<View style={styles.messageMy}>
								<Image source={{uri: 'https://velky-bratr.cz/profile/1_1.jpg'}}
									   style={styles.messageImage}/>
								<View style={styles.messageContent}>
									<Text style={styles.messageName}>Tom MLHA Kocmi</Text>
									<Text style={styles.messageText}>Ahoj baf Nemáš k dispozici žádné volné mise Nemáš k
										dispozici žádné volné mise Nemáš k
										dispozici žádné volné mise</Text>
								</View>
							</View>
						</Link>
					</ScrollView>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',
	},
	innerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',
		margin: 10,
		paddingTop: 50,
	},
	messages: {
		flex: 1,
		alignSelf: 'stretch',
	},
	text: {
		color: 'white',
	},
	messageMy: {
		color: 'white',
		flex: 0,
		flexDirection: 'row',
		marginTop: 5,
		marginBottom: 5,
	},
	messageImage: {
		flex: 0,
		width: 50,
		height: 50,
		marginRight: 10,
	},
	messageContent: {
		flex: 1,
	},
	messageName: {
		color: '#5294d1',
		fontSize: 16,
		fontWeight: '500',
	},
	messageText: {
		color: 'white',
	},
	form: {
		flex: 0,
		alignItems: 'center',
		justifyContent: 'center',
		alignSelf: 'stretch',
	},
	formInput: {
		alignSelf: 'stretch',
		backgroundColor: 'white',
		borderRadius: 10,
		padding: 10,
		paddingTop: 15,
		paddingBottom: 15,
		borderColor: 'gray',
		borderWidth: 1,
		marginTop: 5,
		marginBottom: 5,
	},
});
