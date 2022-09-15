import React from 'react';
import { StatusBar , View , Text , ActivityIndicator, Button, ScrollView, ToastAndroid , TouchableOpacity} from 'react-native';
import { Header } from '../component';
import style from '../component/Style';
import axios from 'axios';

export default class TabReports extends React.Component {

	constructor(props){
        
		super(props)
		this.state={
            isLoading: 'flex',
            dataLighting: []
		}
		
		this.getLighting();
        
	}

	renderLighting = (rowData) => {

		return rowData.map((item) => {
	
			return(
				<TouchableOpacity key={item.id} onPress={ () => {this.props.navigation.navigate('ReportDetails', {id: item.id})}}>
				<View style={[style.boxBorder, {marginBottom: 10}]}>
					<Text style={[style.h2,{marginBottom: 5, color:"#0B108C"}]}>{item.number}</Text>
					<Text style={[style.h3,{marginBottom: 5}]}>Alamat : {item.created_by}</Text>
					<Text style={[style.h3,{marginBottom: 5}]}>Notes : {item.created_notes}</Text>
				</View>
			  </TouchableOpacity>
			);
		});
	
	  }
	
	getLighting = () => {

		console.log("get data");

		axios({
		  method: 'get',
		  url: 'https://solarindo.indorobotik.com/api/v1/report/',
		  headers: { 
			'Accept': 'application/json',
			'Content-type': 'application/json'
		  }
		  
		}).then((response) => {

			console.log(response);
	
		  if(response.data.status==1){
			
			this.setState({ 
			  isLoading: 'none',
			  dataLighting: response.data.data
			});
	
		  }else{
			  
			this.setState({ isLoading: 'none' });
			this.props.navigation.goBack()
			ToastAndroid.show('Lighting not found!', ToastAndroid.SHORT);
		  }
		
		}).catch((error) => {

			console.log(error);
			ToastAndroid.show("Oppsss, network error", ToastAndroid.SHORT);
			this.setState({ isLoading: 'none' });
		});
	
	}
    
    render() {
        return (
            <View style={style.container}>
                <StatusBar backgroundColor="#0B108C" barStyle="light-content"></StatusBar>
                <Header headerName="REPORTS"></Header>
				<ScrollView>
					<ActivityIndicator style={{marginBottom: 15, display: this.state.isLoading}} color={'#0B108C'} animating={true}/>
					<View style={style.containerPanel}>
					{this.renderLighting(this.state.dataLighting)}
					</View>
				</ScrollView>
            </View>
        )
    }
}
