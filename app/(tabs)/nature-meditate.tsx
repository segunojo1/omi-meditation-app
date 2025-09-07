import { View, Text, StyleSheet, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import meditationImages from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";
// import { MEDITATION_DATA } from "../../constants/meditationData";

const NatureMedidate = () => {
  return (
    <View style={styles.container}>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View style={styles.view}>
          <Text style={styles.text}>Welcome Omi </Text>
          <Text
            style={styles.smallText}
            className=" text-indigo-100 font-medium"
          >
            Start your meditation practice today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            className="mb-20"
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
              style={styles.pressable}
              onPress={() => console.log(item)}
              >
                <ImageBackground
                source={meditationImages[item.id - 1]} 
                resizeMode="cover"
                style={styles.image}
                >
                    <LinearGradient colors={["transparent", "rgba(0, 0, 0, 0.8)"]}
                    style={styles.gradient}>
                      <Text className="" style={styles.text}>{item.title}</Text>
                    </LinearGradient> 
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>

      <StatusBar style="light" />
    </View>
  );
};

export default NatureMedidate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  view: {
    marginBottom: 24,
  },
  text: {
    textAlign: "left",
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 3,
  },
  smallText: {
    textAlign: "left",
    fontSize: 20,
    color: "#e0e7ff",
    marginBottom: 3,
    fontWeight: "medium",
  },
  pressable: {
    height: 128,
    marginVertical: 12,
    overflow: 'hidden'
    
  },
  image: {
    flex: 1,
    borderRadius: 12,
    justifyContent: 'center'
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
