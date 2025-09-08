import { View, Text, ImageBackground, StyleSheet } from "react-native";
import React from "react";
import Auth from "@/components/Auth";
import beachImage from "../assets/meditation-images/beach.webp";
import { router } from "expo-router";
import CustomButton from "@/components/CustomButton";

const AuthPage = () => {
  return (
    <View>
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        style={styles.imgContainer}
        className="flex-1"
      >
        <Auth />
        <Text className="" style={styles.orText}>OR</Text>
        <View style={styles.buttonContainer}>
        <CustomButton title="Use as Guest" onPress={() => router.push('/nature-meditate')} />
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imgContainer: {
    flex: 1,
  },
  buttonContainer: {
    marginHorizontal: 8,
    marginTop: 15
  },
  orText: {
    color: "white",
    textAlign: "center",
    marginVertical: 20,
    fontWeight: "bold",
  }
})

export default AuthPage;
