import { Stack } from 'expo-router'

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" option={{ headerShown: false }} />
      <Stack.Screen name="create" option={{ headerShown: false }} />
    </Stack>
  )
}
