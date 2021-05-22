import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default function SplashScreen() {
    return (
        <View style={styles.view_styles}>
            <Image 
                source={require('../logo-runrun.png')} 
                style={{ height: 80, width: 140 }} 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    view_styles: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center'
    }
})