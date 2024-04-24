import { SafeAreaView, Text, View } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"

// View es un div y TEXT es un texo
export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name="Jose Oliverio Patiño" /> */}
        <CounterScreen></CounterScreen>
      </SafeAreaView>
    </PaperProvider>
  )
}
