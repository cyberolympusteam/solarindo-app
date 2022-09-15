import React from 'react';
import { StatusBar , View , Text , ActivityIndicator, Button, ScrollView, ToastAndroid , TouchableOpacity, Image, StyleSheet} from 'react-native';
import { Header } from '../component';
import style from '../component/Style';
import axios from 'axios';

export default class ReportDetails extends React.Component {

    
    static navigationOptions = {
		headerTitle: "Details",
		headerTintColor: 'white',
		headerTitleStyle: {
				color: 'white',
				fontSize:16
			},
			headerStyle: {
				elevation: 0,
				backgroundColor: '#0B108C',
				height: 50,

		},
	}

	constructor(props){


        
		super(props)
		this.state={
            isLoading: 'flex',
            dataLighting: [],
            media_id: this.props.route.params.id
		}
		
		this.getLighting();
		console.log(this.props.route.params.id)
        
    }
    
    getLighting = () => {

		console.log("get data");

		axios({
		  method: 'get',
		  url: 'https://solarindo.indorobotik.com/api/v1/report/show/'+this.state.media_id,
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
                <ScrollView style={style.defaultScroll}>
                
                <View style={style.containerPanel}>
                    <Image style={styles.logo} source={{uri: this.state.dataLighting.created_photo}}/>	
                 
                    <ActivityIndicator style={{marginBottom: 15, display: this.state.isLoading}} color={'red'} animating={true}/>
                
                    	<View style={{width:"100%", borderWidth:1, borderColor: "#ffffff", borderBottomColor:"#f5f5f5", marginTop: 10, marginBottom: 10}}></View>
					
						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>NUMBER</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.number}</Text>
						</View>
						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>CREATED BY</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.created_by}</Text>
						</View>
						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>CREATED NOTES</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.created_notes}</Text>
						</View>

                    </View>


                    </ScrollView>
                
            </View>
        )
    }
}


const styles = StyleSheet.create({

	logo:{
		alignSelf: 'center',
		height: 270,
		width: "100%",
        marginTop: 10,
        marginBottom: 15
	},

	listTitle:{
		marginTop: 5,
		marginBottom: 10
	}

});
