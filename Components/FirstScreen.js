import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SignUp from './SignUp'

export default function FirstScreen({ navigation }) {
        return (
            <View style={styles.main_container}>
              <View style={styles.brand_container}>
                <Image source={require('../logo-app.png')}/>
                <Text style={{ fontSize: 40, color: 'white' }}>RunRun</Text>
              </View>
              <View>
                <Text>--Welcome To RunRun--</Text>
                <Text>--Your favorite running mobile app--</Text>
              </View>
              <TouchableOpacity 
                style={[styles.option_btn, {marginBottom:10, backgroundColor: '#fb5b5a'}]}
                onPress={() => navigation.navigate('Create Account')}>
                <Text>Create an account</Text>
              </TouchableOpacity>
              <TouchableOpacity 
                style={[styles.option_btn, { backgroundColor: '#fff'}]}
                onPress={() => navigation.navigate('Sign in')}>
                <Text>I already have an account</Text>
              </TouchableOpacity>
            </View>
        )
}



const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        backgroundColor: '#246EE9',
        alignItems: 'center',
        justifyContent: 'center'
    },
    brand_container: {
        fontWeight: 'bold',
        fontSize: 50,
        marginBottom: 180,
        color: '#fb5b5a',
        justifyContent: 'center',
        alignItems: 'center'
    },
    option_btn: {
        width: '80%',
        borderRadius: 25,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 40
    }
})