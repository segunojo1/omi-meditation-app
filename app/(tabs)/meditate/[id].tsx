import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
} from "react-native";
import React, { useContext, useEffect, useState } from "react";
import meditationImages from "@/constants/meditation-images";
import AppGradient from "@/components/AppGradient";
import { router, useLocalSearchParams } from "expo-router";
import { AntDesign } from "@expo/vector-icons";
import CustomButton from "@/components/CustomButton";
import { AUDIO_FILES, MEDITATION_DATA } from "@/constants/MeditationData";
import { Audio } from "expo-av";
import { TimerContext } from "@/context/TimerContext";

const Meditate = () => {
  const { id } = useLocalSearchParams();
  const {duration, setDuration} = useContext(TimerContext) 
  // const [secondsRemaining, setSecondsRemaining] = useState(10);
  const [isMeditating, setIsMeditating] = useState(false);
  const [audioSound, setAudioSound] = useState<Audio.Sound>()
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (duration == 0) {
      setIsMeditating(false);
      return;
    }
    if (isMeditating) {
      timer = setInterval(() => {
        setDuration((prev) => prev - 1);
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [duration, isMeditating]);

  useEffect(() => {

    return () => {
      audioSound?.unloadAsync()
    }
  }, [audioSound])

  const toggleMeditating = async () => {
    if (duration == 0) {
      setDuration(10)
    }
    setIsMeditating(!isMeditating)

    await toggleSound()
  }

  



  const toggleSound = async () => {
    const sound = audioSound ? audioSound : await initializeSound();

    const status = await sound?.getStatusAsync()
    if (status?.isLoaded && !isPlaying) {
      await sound.playAsync()
      setIsPlaying(true)
    } else {
      await sound.pauseAsync()
      setIsPlaying(false)
    }
  }

  const initializeSound = async () => {
      const audioFile = MEDITATION_DATA[Number(id) - 1].audio

      const { sound } = await Audio.Sound.createAsync(
        AUDIO_FILES[audioFile]
      )

      setAudioSound(sound)
      return sound
  }

  const handleDuration  = () => {
    if (isMeditating) {
      toggleMeditating()
    }
    router.push("/(modal)/adjust-duration")
  }

  const formattedTimeMinutes = String(Math.floor(duration / 60)).padStart(2, "0");
  const formattedTimeSeconds = String(duration % 60).padStart(2, "0");
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={meditationImages[Number(id) - 1]}
        resizeMode="cover"
        className=""
      >
        <AppGradient colors={["transparent", "rgba(0, 0, 0, 0.8)"]}>
          <Pressable style={styles.pressable} onPress={() => router.back()}>
            <AntDesign name="leftcircleo" size={50} color="white" />
          </Pressable>

          <View className="" style={styles.view}>
            <View style={styles.timer} className="">
              <Text style={styles.text}>{formattedTimeMinutes}:{formattedTimeSeconds}</Text>
            </View>
          </View>

          <View className="mb-5">
            <CustomButton
              title="Adjust duration"
              onPress={handleDuration}
            />
            <CustomButton
              title={isMeditating ? "Pause Meditating" : "Start Meditating"}
              onPress={toggleMeditating}
              containerStyles="mt-4"
            />
          </View>
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
  view: {
    flex: 1,
    justifyContent: "center",
  },
  timer: {
    marginHorizontal: "auto",
    backgroundColor: "#e5e5e5",
    padding: 12,
    borderRadius: 100,
    width: 120,
    height: 120,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#000000",
  },
});

export default Meditate;
