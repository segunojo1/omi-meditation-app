import { View, Text, StyleSheet, Pressable } from 'react-native'
import React, { useContext } from 'react'
import AppGradient from '@/components/AppGradient'
import { AntDesign } from '@expo/vector-icons'
import { router } from 'expo-router'
import CustomButton from '@/components/CustomButton'
import { TimerContext } from '@/context/TimerContext'

const AdjustDuration = () => {

    const { setDuration } = useContext(TimerContext)
    const handlePress = (duration: number) => {
        setDuration(duration)
        router.back()
    }
  return (
    <View style={styles.container}>
     <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <Text>test</Text>
        <Pressable onPress={() => router.back()} style={styles.pressable}>
            <AntDesign name="leftcircleo" size={50} color="white" />
        </Pressable>
        <View style={styles.header}>
            <Text style={styles.text}>Adjust Duration</Text>
            <View>
                <CustomButton title="10 seconds" onPress={() => handlePress(10)}/>
                <CustomButton title="5 minutes" onPress={() => handlePress(5 * 60)}/>
                <CustomButton title="10 minutes" onPress={() => handlePress(10 * 60)}/>
                <CustomButton title="15 minutes" onPress={() => handlePress(15 * 60)}/>

            </View>
        </View>
     </AppGradient>
     <View></View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: "relative",
    },
    pressable: {
        position: "absolute",
        top: 20,
        left: 6,
        zIndex: 10,
    },
    header: {
        justifyContent: "center",
        height: 300
    },
    text: {
        textAlign: "center",
        fontSize: 24,
        fontWeight: "bold",
        color: "#fff",
        marginBottom: 32
    }
})

export default AdjustDuration