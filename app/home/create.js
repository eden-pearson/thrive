import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const create = () => {
  return (
    <View style={{ padding: 10 }}>
      <Ionicons name="arrow-back-outline" size={24} color="black" />
      <Text style={{ fontSize: 20, marginTop: 10 }}>Create</Text>
      <Text style={{ fontSize: 20, fontWeight: '500' }}>Habit</Text>
      <TextInput placeholder="Title"></TextInput>
    </View>
  )
}

export default create

const styles = StyleSheet.create({})
