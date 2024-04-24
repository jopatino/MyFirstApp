import { StyleSheet, Text, View } from "react-native"

export const HelloWorldScreen = () => {
  return (
    <View style={ styles.container }>
      <Text style={ styles.title }>Hello World</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: 'red'
        justifyContent: 'center'
    },
    title: {
        fontSize: 45,
        textAlign: 'center',
        color: 'black',
        padding: 20
    }
})

