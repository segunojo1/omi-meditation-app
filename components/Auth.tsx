import React, { useState } from 'react'
import { Alert, StyleSheet, Text, TextInput, View } from 'react-native'
import { supabase } from '../lib/supabase'
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
        <Text style={styles.label}>Email</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
          value={email}
          placeholder="email@address.com"
          placeholderTextColor="#6b7280"
          autoCapitalize="none"
          keyboardType="email-address"
          style={[styles.input, styles.inputText]}
        />
      </View>
      <View style={styles.verticallySpaced}>
        <Text style={styles.label}>Password</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          placeholder="Password"
          placeholderTextColor="#6b7280"
          autoCapitalize="none"
          style={[styles.input, styles.inputText]}
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
  input: {
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderRadius: 10,
    padding: 12,
    minHeight: 48,
    borderWidth: 1,
    borderColor: '#e5e7eb',
    marginBottom: 8,
    fontSize: 16,
  },
  inputText: {
    color: '#111827',
  },
  label: {
    color: '#000',
    marginBottom: 8,
    fontWeight: '700',
    fontSize: 18
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
