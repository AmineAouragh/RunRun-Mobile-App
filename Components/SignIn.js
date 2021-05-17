import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default function SignIn({ navigation }) {
    return ( 
        <View style={styles.main_container}>
          <Text>Sign In Screen</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main_container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
})