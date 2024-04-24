import { SafeAreaView, Text, View } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"

// View es un div y TEXT es un texo
export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HelloWorldScreen name="Jose Oliverio Patiño" />
    </SafeAreaView>
  )
}
