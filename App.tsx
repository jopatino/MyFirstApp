import { SafeAreaView, Text, View } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen"

// View es un div y TEXT es un texo
export const App = () => {
  return (
    <PaperProvider>
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name="Jose Oliverio Patiño" /> */}
        {/* <CounterScreen></CounterScreen> */}
        <CounterM3Screen></CounterM3Screen>
      </SafeAreaView>
    </PaperProvider>
  )
}
