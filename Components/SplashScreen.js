import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default class SplashScreen extends Component {
    render() {
        return (
            <View style={styles.view_styles}>
              <Text style={styles.text_container}>Splash Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    view_styles: {
        flex: 1,
        backgroundColor: 'orange',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text_container: {
        color: 'white',
        fontSize: 40,
        fontWeight: 'bold'
    }
})
