import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CustomButtonProps {
     onPress: () => void;
     title: string;
     textStyles?: string;
     containerStyles?: string;
}

const CustomButton = ({onPress, title, textStyles = '', containerStyles = '', }: CustomButtonProps) => {
  return (
    <TouchableOpacity
    activeOpacity={0.7}
    style={styles.touchable}
    className={`${containerStyles}`} onPress={onPress}>
      <Text className={`${textStyles}`} style={styles.touchableText} >{title}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    touchable: {
        backgroundColor: '#fff',
        padding: 12,
        borderRadius: 8,
        minHeight: 62,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 16
    },
    touchableText: {
        fontSize: 16,
        fontWeight: 'semibold',
    }
})