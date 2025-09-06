import { View, Text } from 'react-native'
import React, { Children } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Content = ({children}: {children: React.ReactNode}) => {
  return (
    <SafeAreaView className='flex-1 px-5 py-3 '>
      <Text>{children}</Text>
    </SafeAreaView>
  )
}

export default Content