import React from 'react';
import { Alert } from 'react-native';
import Loading from './Loading';
import * as Location from 'expo-location';
import axios from 'axios';
import Weather from './Weather';

const API_KEY = "64441330ab4da9cda1d0b19095a37f6a";


export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async(latitude, longitude) => {
    const { 
      data : {
        current : {weather, temp}
      }  
    } = await axios.get(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
        );
      //console.log(data);
      this.setState({
        isLoading:false, 
        temp,
        condition : weather[0].main,
      });
  };
  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync()
      console.log(response);
      const { coords : { latitude , longitude }} = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
      console.log(coords.latitude, coords.longitude);
      this.setState({ isLoading : false });
    } catch (error) {
      Alert.alert("Can't find you.", "So sad");
    }
  };
  componentDidMount() {
    this.getLocation();
  }
  render() {
    const { isLoading, temp, condition } = this.state
    return isLoading ? <Loading /> : <Weather temp={Math.round(temp)} condition={condition}/>;
  }
}