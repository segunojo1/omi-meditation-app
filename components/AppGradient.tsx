import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Content from './Content';

const AppGradient = ({ children, colors }: { children: any; colors: string[] }) => {
  return (
    <LinearGradient colors={colors} style={styles.container}>
      <Content>{children}</Content>
    </LinearGradient>
  )
}

export default AppGradient

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})