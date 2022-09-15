import React from 'react';
import { StatusBar , View , Text , ActivityIndicator, Button, ScrollView, ToastAndroid , TouchableOpacity, Image, StyleSheet} from 'react-native';
import { Header } from '../component';
import style from '../component/Style';
import axios from 'axios';

export default class Details extends React.Component {

    
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
		  url: 'https://solarindo.indorobotik.com/api/v1/media/show/'+this.state.media_id,
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
                    <Image style={styles.logo} source={{uri: this.state.dataLighting.picture}}/>	
                 
                    <ActivityIndicator style={{marginBottom: 15, display: this.state.isLoading}} color={'red'} animating={true}/>
                
                    	<View style={{width:"100%", borderWidth:1, borderColor: "#ffffff", borderBottomColor:"#f5f5f5", marginTop: 10, marginBottom: 10}}></View>
					
						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>NAME</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.name}</Text>
						</View>
						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>POLE ID</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.pole_id}</Text>
						</View>
						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>ADDRESS</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.address}</Text>
						</View>
						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>ZONE</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.zone}</Text>
						</View>
						
						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>MANUFACTURE YEAR</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.manufacture_year}</Text>
						</View>

						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>CATEGORY</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.category}</Text>
						</View>
						

						<View style={{width:"100%", borderWidth:1, borderColor: "#ffffff", borderBottomColor:"#f5f5f5", marginTop: 10, marginBottom: 10}}></View>

						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>LONGITUDE</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.longitude}</Text>
						</View>

						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>LATITUDE</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.latitude}</Text>
						</View>

						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>BRAND</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.pole_brand}</Text>
						</View>

						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>TYPE</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.pole_type}</Text>
						</View>

						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>BODY</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.pole_body}</Text>
						</View>

						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>HEIGHT</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.pole_height}</Text>
						</View>

						<View style={[styles.listTitle]}>
							<Text style={[style.h5,{color: '#666'}]}>PLANTED GROUND</Text>
							<Text style={[style.h2,{color: '#0B108C'}]}>{this.state.dataLighting.planted_ground}</Text>
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
