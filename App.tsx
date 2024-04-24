import { SafeAreaView, Text, View } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"

// View es un div y TEXT es un texo
export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* <HelloWorldScreen name="Jose Oliverio Patiño" /> */}
      <CounterScreen></CounterScreen>
    </SafeAreaView>
  )
}
