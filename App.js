import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from './Components/SplashScreen'

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true
    }
  }
  render() {
    if (this.state.isLoading) {
      return <SplashScreen />
    }
    return (
      <View style={styles.main_container}>
        <Text>
          Welcome To RunRun : Your favorite running mobile app
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})
