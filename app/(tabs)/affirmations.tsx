import { View, Text, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import AppGradient from '@/components/AppGradient'

const Affirmations = () => {
  return (
    <View style={styles.container}>
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={styles.text} className='text-zinc-50'>Change your beliefs with affirmations</Text>
        </ScrollView>
      </AppGradient>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fafafa',
        fontSize: 24,
        fontWeight: 'bold',
    }
})

export default Affirmations