import { View, Text, StyleSheet } from 'react-native'
import React, { Children } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Content = ({children}: {children: React.ReactNode}) => {
  return (
    <SafeAreaView className='flex-1 px-5 py-3 ' style={styles.container}>
      {children}
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 12,
    }
})

export default Content