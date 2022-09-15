import React from 'react';
import { StatusBar , View , Text , ActivityIndicator, Button, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import { Header } from '../component';
import style from '../component/Style';

export default class TabHome extends React.Component {

	constructor(props){
        
		super(props)
		this.state={
            isLoading: 'flex',
            dataBooking: []
        }
        
    }
    
    render() {
        return (
            <View style={style.container}>
				<StatusBar backgroundColor="#0B108C" barStyle="light-content"></StatusBar>
                <Header headerName="HOME"></Header>
				<ScrollView>
                
				<View style={{padding: 20}}>
				<Text style={[style.panelTitle,{marginTop: 30, marginBottom: 30, marginLeft:-5}]}>Hi, Where are you wanna check lighting?</Text>
				<TextInput
				placeholder="Search"
				style={[style.formInput, {borderRadius: 20}]}
				onChangeText={keyword => {
					this.setState({keyword})
				}}/>

				<TouchableOpacity onPress={ () => {this.props.navigation.navigate('LightingLists')}}>
					<View style={[style.boxBorder, {marginBottom: 10}]}>
							
							<Text style={[style.h2,{marginBottom: 5, color:"#0B108C"}]}>Yogyakarta</Text>
							<Text style={[style.h3,{marginBottom: 5, position: "absolute", right: 0, marginTop: 18, marginRight: 12}]}>10 items</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={ () => {this.props.navigation.navigate('LightingLists')}}>
					<View style={[style.boxBorder, {marginBottom: 10}]}>
							
							<Text style={[style.h2,{marginBottom: 5, color:"#0B108C"}]}>Bali</Text>
							<Text style={[style.h3,{marginBottom: 5, position: "absolute", right: 0, marginTop: 18, marginRight: 12}]}>10 items</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={ () => {this.props.navigation.navigate('LightingLists')}}>
					<View style={[style.boxBorder, {marginBottom: 10}]}>
							
							<Text style={[style.h2,{marginBottom: 5, color:"#0B108C"}]}>Bandung</Text>
							<Text style={[style.h3,{marginBottom: 5, position: "absolute", right: 0, marginTop: 18, marginRight: 12}]}>10 items</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={ () => {this.props.navigation.navigate('LightingLists')}}>
					<View style={[style.boxBorder, {marginBottom: 10}]}>
							
							<Text style={[style.h2,{marginBottom: 5, color:"#0B108C"}]}>Jakarta</Text>
							<Text style={[style.h3,{marginBottom: 5, position: "absolute", right: 0, marginTop: 18, marginRight: 12}]}>10 items</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={ () => {this.props.navigation.navigate('LightingLists')}}>
					<View style={[style.boxBorder, {marginBottom: 10}]}>
							
							<Text style={[style.h2,{marginBottom: 5, color:"#0B108C"}]}>Medan</Text>
							<Text style={[style.h3,{marginBottom: 5, position: "absolute", right: 0, marginTop: 18, marginRight: 12}]}>10 items</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={ () => {this.props.navigation.navigate('LightingLists')}}>
					<View style={[style.boxBorder, {marginBottom: 10}]}>
							
							<Text style={[style.h2,{marginBottom: 5, color:"#0B108C"}]}>Surabaya</Text>
							<Text style={[style.h3,{marginBottom: 5, position: "absolute", right: 0, marginTop: 18, marginRight: 12}]}>10 items</Text>
					</View>
				</TouchableOpacity>
				<TouchableOpacity onPress={ () => {this.props.navigation.navigate('LightingLists')}}>
					<View style={[style.boxBorder, {marginBottom: 10}]}>
							
							<Text style={[style.h2,{marginBottom: 5, color:"#0B108C"}]}>Palembang</Text>
							<Text style={[style.h3,{marginBottom: 5, position: "absolute", right: 0, marginTop: 18, marginRight: 12}]}>10 items</Text>
					</View>
				</TouchableOpacity>
				
				</View>
				</ScrollView>
            </View>
        )
    }
}
