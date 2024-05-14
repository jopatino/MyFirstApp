import { SafeAreaView, StyleSheet, Text, View } from "react-native"
import { HelloWorldScreen } from "./src/presentation/screens/HelloWorldScreen"
import { CounterScreen } from "./src/presentation/screens/CounterScreen"
import { PaperProvider } from "react-native-paper"
import { CounterM3Screen } from "./src/presentation/screens/CounterM3Screen"
import IonIcon from 'react-native-vector-icons/Ionicons';
import { BoxObjectModelScreen } from "./src/presentation/screens/BoxObjectModelScreen"
import { DimensionScreen } from "./src/presentation/screens/DimensionScreen"
import { PositionScreen } from "./src/presentation/screens/PositionScreen"
import { FlexScreen } from './src/presentation/screens/FlexScreen';
import { FlexDirectionScreen } from "./src/presentation/screens/FlexDirectionScreen"
import { HomeworkScreen } from "./src/presentation/screens/HomeworkScreen"

// View es un div y TEXT es un texo
export const App = () => {
  return (
    <PaperProvider
      settings={({
        icon: (props) => <IonIcon { ...props }></IonIcon>
      })}
    >
      <SafeAreaView style={{ flex: 1 }}>
        {/* <HelloWorldScreen name="Jose Oliverio Patiño" /> */}
        {/* <CounterScreen></CounterScreen> */}
        {/* <CounterM3Screen></CounterM3Screen> */}
        {/* <BoxObjectModelScreen></BoxObjectModelScreen> */}
        {/* <DimensionScreen></DimensionScreen> */}
        {/* <PositionScreen></PositionScreen> */}
        {/* <FlexScreen></FlexScreen> */}
        {/* <FlexDirectionScreen></FlexDirectionScreen> */}
        <HomeworkScreen/>
      </SafeAreaView>
    </PaperProvider>
  )
}
