import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useLocalSearchParams, router } from "expo-router";
import AFFIRMATION_GALLERY from "@/constants/affirmations-gallery";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import AppGradient from "@/components/AppGradient";
import { AntDesign } from "@expo/vector-icons";

const AffirmationPage = () => {
  const { itemId } = useLocalSearchParams();

  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>()

  useEffect(() => {
    for (let index = 0; index < AFFIRMATION_GALLERY.length; index++) {
      const element = AFFIRMATION_GALLERY[index].data;
      const affirmationToStart = element.find(
        (affirmation) => affirmation.id === Number(itemId)
      );

      if (affirmationToStart) {
        setAffirmation(affirmationToStart);
        
        const affirmArray = affirmationToStart.text.split(".")

        if (affirmArray[affirmArray.length - 1 ] == "") {
            affirmArray.pop()
        }

        setSentences(affirmArray)
      }
    }
  }, []);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className=""
        style={styles.image}
      >
        <AppGradient colors={["rgba(0, 0, 0, 0.3)", "rgba(0, 0, 0, 0.9)"]}>
          <Pressable onPress={() => router.back()} style={styles.pressable}>
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>
          <ScrollView
            style={styles.scrollView}
            className=""
            showsVerticalScrollIndicator={false}
          >
            <View className="h-full justify-center" style={styles.container2}>
              <View className="h-4/5 justify-center" style={styles.container3}>
              {
                sentences?.map((sentence, index) => (
                  <Text key={index} style={styles.text}>{sentence}.</Text>
                )) 
              }
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  pressable: {
    position: "absolute",
    top: 20,
    left: 6,
    zIndex: 10,
  },
  scrollView: {
    marginTop: 80,
  },
  container2: {
    justifyContent: "center",
    height: "100%"
  },
  container3: {
    height: 4/5,
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 48
  }
});
export default AffirmationPage;
