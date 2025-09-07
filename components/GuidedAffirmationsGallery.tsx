import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { GalleryPreviewData } from "@/constants/models/AffirmationCategory";
import { Link } from "expo-router";

interface GuidedAffirmationsGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffirmationsGallery = ({
  title,
  previews,
}: GuidedAffirmationsGalleryProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.header} className="">
        <Text style={styles.text}>{title}</Text>
      </View>
      <View style={styles.previewContainer}>
        <FlatList
          data={previews}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View style={styles.preview} className="rounded-md">
                  <Image source={item.image} resizeMode="cover" className="" style={styles.image}/>
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  header: {
    marginBottom: 8,
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  previewContainer: {
    marginVertical: 8,
  },
  preview: {
    height: 144,
    width: 128,
    borderRadius: 6,
    marginRight: 16,
  },
  image: {
    width: '100%',
    height: '100%',
  },
});

export default GuidedAffirmationsGallery;
