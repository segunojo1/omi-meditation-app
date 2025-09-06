import "./globals.css"
import { View, Text, ImageBackground, StyleSheet } from 'react-native'
import React from 'react'
import {LinearGradient} from 'expo-linear-gradient'
import  {StatusBar} from 'expo-status-bar'

import beachImage from '../assets/meditation-images/beach.webp'
import { SafeAreaView } from "react-native-safe-area-context"
import CustomButton from "@/components/CustomButton"


const App = () => {
  return (
    <View className='flex-1' style={styles.container}>
      <ImageBackground source={beachImage} resizeMode='cover' style={styles.imgContainer} className='flex-1'>
        <LinearGradient 
        style={styles.gradient}
        className='flex-1'
        colors={['rgba(0, 0, 0, 0.4)', 'rgba(0, 0, 0, 0.8)']}>
          <SafeAreaView style={styles.safeview}>
            <View>

          <Text style={styles.text}>
            Omi Meditation App
          </Text>
          <Text className="" style={styles.smallText}>
            Experience Meditation like never before
          </Text>
            </View>

            <View>
              <CustomButton onPress={() => {console.log('Get Started')}} title="Get Started"
                /> 
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
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
    text: {
      textAlign: 'center',
      fontSize: 24,
      color: '#fff',
      fontWeight: 'bold',
    },
    smallText: {
      textAlign: 'center',
      fontSize: 16,
      color: '#fff',
    },
    safeview: {
      flex: 1,
      marginHorizontal: 20,
      marginVertical:  48,
      justifyContent: 'space-between'
    }
})