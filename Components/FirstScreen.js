import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class FirstScreen extends Component {
    render() {
        return (
            <View style={styles.main_container}>
              <View style={styles.brand_container}>
                <Text>--LOGO HERE--</Text>
                <Text>RunRun</Text>
              </View>
              <View>
                <Text>--Welcome To RunRun--</Text>
                <Text>--Your favorite running mobile app--</Text>
              </View>
              <TouchableOpacity style={[styles.option_btn, {marginBottom:10, backgroundColor: '#fb5b5a'}]}>
                <Text>Create an account</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.option_btn, { backgroundColor: '#fff'}]}>
                <Text>I already have an account</Text>
              </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#003f5c',
        alignItems: 'center',
        justifyContent: 'center'
    },
    brand_container: {
        fontWeight: 'bold',
        fontSize: 50,
        marginBottom: 60,
        color: '#fb5b5a'
    },
    option_btn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35
    }
})
