import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import {useRouter} from "expo-router"

const index = () => {
  const [option, setOption] = useState("Today")
  const router = useRouter()

  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <View style={{flexDirection:"row", alignItems:"center", justifyContent:{"space-between"}}}>
        <MaterialCommunityIcons name="flower" size={24} color="black" />
        <AntDesign onPress={(() => router.push("/home/create"))} name="pluscircleo" size={24} color="black" />
      </View>
      <Text style={{marginTop:5, fontSize:23, fontWeight:"500"}}>Habits</Text>
      <View style={{flexDirection:"row", alignItems:"center", gap:10, marginVertical:8}}>
        <Pressable onPress={(() => setOption("Today"))}
        style={{backgroundColor: option == "Today"? '$E0FFFF' : "transparent", paddingHorizontal:10, paddingVertical:8, borderRadius:25}}>
          <Text style={{textAlign:"center", color:"gray"}}>Today</Text>
          </Pressable>
          <Pressable onPress={(() => setOption("Weekly"))} style={{backgroundColor: option == "Weekly"? '$E0FFFF' : "transparent", paddingHorizontal:10, paddingVertical:8, borderRadius:25}}>
          <Text style={{textAlign:"center", color:"gray"}}>Weekly</Text>
          </Pressable>
          <Pressable onPress={(() => setOption("Overall"))} style={{backgroundColor: option == "Overall"? '$E0FFFF' : "transparent", paddingHorizontal:10, paddingVertical:8, borderRadius:25}}>
          <Text style={{textAlign:"center", color:"gray"}}>Overall</Text>
          </Pressable>
      </View>
    </ScrollView>
  )
}

export default index

const styles = StyleSheet.create({})
