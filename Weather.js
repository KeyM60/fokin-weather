import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, StyleSheet, StatusBar } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions ={
    Snow : {
        iconName : "weather-snowy",
        gradient : ['#4e54c8', '#8f94fb']
    },
    Drizzle : {
        iconName : "weather-pouring",
        gradient : ['#4da0b0', '#d39d38']
    },
    Thunderstorm : {
        iconName : "weather-lightning",
        gradient : ['#3E5151', '#DECBA4']
    },
    Rain : {
        iconName : "weather-rainy",
        gradient : ['#000046', '#1CB5E0'],
        title : 'Rain',
        subtitle : 'plz, go out with umbrella',        
    },
    Atmosphere :{
        iconName : "weather-fog",
        gradient : ['#2c3e50', '#bdc3c7']
    },
    Clear : {
        iconName : "weather-sunny",
        gradient : ['#fc4a1a', '#f7b733']
    },
    Clouds : {
        iconName : "weather-cloudy",
        gradient : ['#304352', '#d7d2cc']
    },
}

export default function Weather({ temp, condition }) {
    return (

        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}>
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons 
                    size = {96} 
                    name = {weatherOptions[condition].iconName} 
                    color = 'white' />
                <Text style={styles.temp}>
                    {temp}ºC
                    </Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}} >
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>

    );
}

Weather.propTypes = {
    temp: PropTypes.number.isRequired,
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds"
    ]).isRequired,
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    temp: {
        fontSize: 42,
        color: 'white',
    },
    halfContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title : {
        color : 'white',
        fontSize : 44,
        fontWeight : '300',
        marginBottom : 10,
    },
    subtitle : {
        color : 'white',
        fontWeight : '600',
        fontSize : 24,
    },
    textContainer : {
        paddingHorizontal : 20,
        alignItems : 'flex-start',
    }
});