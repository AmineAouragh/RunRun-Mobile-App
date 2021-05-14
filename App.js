import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import SplashScreen from './Components/SplashScreen'
import FirstScreen from './Components/FirstScreen'

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
    return <FirstScreen />
  }
}
