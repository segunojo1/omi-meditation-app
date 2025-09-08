import React, { useState } from 'react'
import { Alert, StyleSheet, View } from 'react-native'
import { supabase } from '../lib/supabase'
import { Button, Input } from '@rneui/themed'
import CustomButton from './CustomButton'
import { useRouter } from 'expo-router'

export default function Auth() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  async function signInWithEmail() {
    setLoading(true)
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })

    if (error) Alert.alert(error.message)
    setLoading(false)
    console.log('signed in');
    if (!error) {
      router.push('/nature-meditate')
    }
  
  }

  async function signUpWithEmail() {
    setLoading(true)
    try {
      const {
        data: { session },
        error,
      } = await supabase.auth.signUp({
        email: email,
        password: password,
      })

      
      if (error) {
        Alert.alert(error.message)
        return
      }
      
      if (!session) {
        Alert.alert('Please check your inbox for email verification!')
        return
      }
      console.log(error)

      console.log('signed up')
      router.push('/nature-meditate')
    } catch (e) {
      const message = e instanceof Error ? e.message : 'An unexpected error occurred'
      Alert.alert(message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <View style={styles.container}>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <Input
          label="Email"
          leftIcon={{ type: 'font-awesome', name: 'envelope' }}
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          autoCapitalize={'none'}
          containerStyle={styles.inputContainerOuter}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          labelStyle={styles.label}
          leftIconContainerStyle={styles.leftIcon}
          placeholderTextColor="#6b7280"
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Input
          label="Password"
          leftIcon={{ type: 'font-awesome', name: 'lock' }}
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          autoCapitalize={'none'}
          containerStyle={styles.inputContainerOuter}
          inputContainerStyle={styles.inputContainer}
          inputStyle={styles.inputText}
          labelStyle={styles.label}
          leftIconContainerStyle={styles.leftIcon}
          placeholderTextColor="#6b7280"
        />
      </View>
      <View style={[styles.verticallySpaced, styles.mt20]}>
        <CustomButton title="Sign in" onPress={() => signInWithEmail()} />
      </View>
      <View style={styles.verticallySpaced}>
        <CustomButton title="Sign up"  onPress={() => signUpWithEmail()} />
      </View>
    </View>
  )
} 

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 12,
  },
  verticallySpaced: {
    paddingTop: 4,
    paddingBottom: 4,
    alignSelf: 'stretch',
  },
  mt20: {
    marginTop: 20,
  },
  inputContainerOuter: {
    paddingHorizontal: 0,
    borderBottomWidth: 0,
  },
  inputContainer: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    paddingHorizontal: 12,
    borderBottomWidth: 0,
    minHeight: 48,
  },
  inputText: {
    fontSize: 16,
    color: '#111827',
  },
  label: {
    color: '#000',
    marginBottom: 8,
    fontWeight: '700',
    fontSize: 18
  },
  leftIcon: {
    marginRight: 8,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  }
})
