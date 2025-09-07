import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

const AdjustDuration = () => {
  return (
    <View style={styles.container}>
     <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Text>test</Text>
     </AppGradient>
     <Text>Adjust Duration</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    }
})

export default AdjustDuration