import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Test = () => {
  return (
    <View className='flex-1' style={styles.container}>
      <Text>Test</Text>
    </View>
  )
}

export default Test

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})