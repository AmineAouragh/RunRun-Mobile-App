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

  performTimeConsumingTask = async() => {
    return new Promise((resolve) => 
      setTimeout(
        () => { resolve('result') },
        2000
      )
    )
  }

  async componentDidMount() {
    const data = await this.performTimeConsumingTask()

    if (data !== null) {
      this.setState({ isLoading: false })
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />
    }
    return (
      <View style={styles.main_container}>
        <Text style={styles.text_container}>
          Welcome To RunRun : Your favorite running mobile app
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  text_container: {
    fontSize: 20,
    color: 'orange'
  }
})
