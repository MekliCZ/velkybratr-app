import React, {Component} from 'react';
import {AsyncStorage, Button, StyleSheet, Text, View, Switch} from "react-native";
import Header from "../components/Header";
import MapView, {Marker} from 'react-native-maps';
import PointMyself from '../assets/point_myself.png';
import PointNone from '../assets/point_none.png';
import PointParty from '../assets/point_party.png';
import PointResistance from '../assets/point_resistance.png';

export default class Location extends Component {
	constructor(props) {
		super(props);

		this.state = {
			requestedLocationPermission: 'false',
			mapCitizens: [],
			mapSabotages: [],
		}
	}

	componentDidMount = async () => {
		// TODO: Quick workaround – je potreba updatovat polohu pred zobrazenim mapy, update polohy by bylo dobre hodit do samostatne fce protoze se spousti i jako bg task
		navigator.geolocation.getCurrentPosition((pos) => {
			let data = new FormData();
			let coords = pos.coords;
			data.append('latitude', coords.latitude);
			data.append('longitude', coords.longitude);
			data.append('locationManuallySelected', 'false');
			fetch('https://velky-bratr.cz/api/location/saveCoordinates', {
				credentials: 'same-origin',
				method: 'POST',
				headers: {
					'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8',
				},
				body: data,
			})
				.then(async (data) => {
					console.log('geolocation done', data);
					console.log(this.state.requestedLocationPermission);
					try {
						this.setState({
							requestedLocationPermission: await AsyncStorage.getItem('@VelkyBratr:location'),
						})
					} catch (e) {
						console.log(e);
					}

					fetch('https://velky-bratr.cz/api/map/getNearCitizens/', {
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
									mapCitizens: result.response,
								});
								console.log(result.response);
							}
						});

					fetch('https://velky-bratr.cz/api/map/getNearSabotages/', {
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
									mapSabotages: result.response,
								});
							}
						});
				})
				.catch(() => {
				})
		}, (err) => {
			console.log(err);
		}, {
			enableHighAccuracy: true,
			timeout: 5000,
			maximumAge: 0
		});
	};

	handleAutoLocationAllow = () => {
		navigator.geolocation.requestAuthorization();
		AsyncStorage.setItem('@VelkyBratr:location', 'true');
		this.setState({
			requestedLocationPermission: 'true',
		});
	};

	static getPointImageByType(type) {
		switch(type) {
			case 'myself':
				return PointMyself;
			case 'party':
				return PointParty;
			case 'resistance':
				return PointResistance;
			default:
				return PointNone;
		}
	}

	static getPointDescriptionByType(type, timestamp) {
		const timestampDate = new Date(parseInt(timestamp) * 1000);
		const currentDate = new Date();
		const minutes = Math.round((((currentDate - timestampDate) % 86400000) % 3600000) / 60000);

		switch(type) {
			case 'myself':
				return `Moje poloha, před ${minutes} min`;
			case 'none':
				return `Hráč, před ${minutes} min`;
			case 'party':
				return `Straník, před ${minutes} min`;
			case 'resistance':
				return `Odbojář, před ${minutes} min`;
			default:
				return `__${type}__, před ${minutes} min`;
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<Header text={'Mapa'}/>
				<View style={styles.innerContainer}>
					{
						(this.state.requestedLocationPermission !== 'true') ?
							<React.Fragment>
								<Button onPress={this.handleAutoLocationAllow}
										title={'Povolit automatickou aktualizaci polohy'}/>
								<Text style={styles.text}>Pokud chceš polohu aktualizovat i když je aplikace v pozadí a
									aktivně ji nepoužíváš, zvol 'Povolit vždy'.</Text>
							</React.Fragment>
							:
							<MapView
								style={{
									flex: 1,
									width: '100%',
								}}
							>
								{
									this.state.mapCitizens.map((item) => {
										console.log('../assets/point_' + item.marker + '.png');
										return <Marker
											coordinate={{
												latitude: parseFloat(item.latitude),
												longitude: parseFloat(item.longitude),
											}}
											image={Location.getPointImageByType(item.marker)}
											title={Location.getPointDescriptionByType(item.marker, item.time)}
											key={item.id}
										/>;
									})
								}
								{
									this.state.mapSabotages.map((item) => {
										console.log('../assets/point_' + item.marker + '.png');
										return <Marker
											coordinate={{
												latitude: parseFloat(item.latitude),
												longitude: parseFloat(item.longitude),
											}}
											image={Location.getPointImageByType(item.marker)}
											title={Location.getPointDescriptionByType(item.marker, item.time)}
											key={item.id}
										/>;
									})
								}
							</MapView>
					}
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
		paddingTop: 50,
	},
	text: {
		color: 'white',
	},
});
