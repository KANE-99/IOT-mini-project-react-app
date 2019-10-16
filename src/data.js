import { StyleSheet, Text, View } from 'react-native';
import React, { Component } from 'react'
import axios from 'axios'

export default class Data extends Component {
    state = {
        temperature : "",
        humidity : "",
        flame : "",
        smoke : ""
    }

    componentDidMount(){
        AppConfig = {
            'Content-Type' : 'application/json'
        }
        setInterval(() => {
            axios.get('http://192.168.43.129:8000/api/data/',AppConfig)
            .then(res => {
                this.setState({
                    temperature : res.data[res.data.length-1].temperature,
                    humidity : res.data[res.data.length-1].humidity,
                    flame : res.data[res.data.length-1].flame,
                    smoke : res.data[res.data.length-1].smoke,
                })
            })
            .catch(err => {
                console.log('some Error has happened in API call',err)
            })
        },1000)
               
    }
    render() {
        return (
            <View>
                <Text>Temperature = { this.state.temperature } degree Celcius</Text>
                <Text>Humidity = { this.state.humidity }</Text>
                <Text>Flame = { this.state.flame }</Text>
                <Text>Smoke = { this.state.smoke } </Text>
            </View>
        )
    }
}
