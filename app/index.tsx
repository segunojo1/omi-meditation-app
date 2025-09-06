import "./globals.css"
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'

import beachImage from '../assets/meditation-images/beach.webp'


const App = () => {
  return (
    <View className='flex-1' style={styles.container}>
      <ImageBackground source={beachImage} resizeMode='cover' style={styles.imgContainer} className='flex-1'>
        <LinearGradient 
        style={styles.gradient}
        className='flex-1 min-h-[100vh]'
        colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}>
          <Text className="">App</Text>
        </LinearGradient>
      </ImageBackground>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
    gradient: {
      flex: 1
    }, 
    container: {
      flex: 1
    },
    imgContainer: {
      flex: 1
    },
})