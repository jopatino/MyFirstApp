import { useState } from "react"
import { Button, Pressable, StyleSheet, Text, View } from "react-native"

export const CounterScreen = () => {
    
    const [count, setcount] = useState(10);

    const increase = () => {
        setcount(count+1);
    }

    return (
    <View style={styles.container}>
        <Text style={styles.title}>{count}</Text>
        <Pressable onPress={ increase } onLongPress={ () => setcount(10)}>
            <Text>+1</Text>
        </Pressable>
    </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 80,
        color: 'black',
        fontWeight: '300',
    }
})