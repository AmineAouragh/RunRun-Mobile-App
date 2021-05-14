import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'

export default class FirstScreen extends Component {
    render() {
        return (
            <View>
              <View>
                <Text>--LOGO HERE--</Text>
                <Text>RunRun</Text>
              </View>
              <View>
                <Text>--Tag Line here--</Text>
                <Text>--Tag Line here--</Text>
              </View>
              <TouchableOpacity>
                <Text>Create an account</Text>
              </TouchableOpacity>
              <TouchableOpacity>
                <Text>I already have an account</Text>
              </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    brand_container: {
        fontWeight: 'bold',
        fontSize: 50
    },
    first_option_btn: {
        width: '80%',
        backgroundColor: '#fb5b5a',
        borderRadius: 25,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
        marginBottom: 10
    },
    second_option_btn: {

    }
})
