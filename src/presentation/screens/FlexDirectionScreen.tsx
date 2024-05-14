import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

export const FlexDirectionScreen = () => {
  return (
    <View style={styles.container}>
        {/* <ScrollView> */}
        <View style={[styles.box1, styles.box]}></View>
        <View style={[styles.box2, styles.box]}></View>
        <View style={[styles.box3, styles.box]}></View>
        <View style={[styles.box4, styles.box]}></View>
        <View style={[styles.box1, styles.box]}></View>
        <View style={[styles.box2, styles.box]}></View>
        <View style={[styles.box3, styles.box]}></View>
        <View style={[styles.box4, styles.box]}></View>
        <View style={[styles.box1, styles.box]}></View>
        <View style={[styles.box2, styles.box]}></View>
        <View style={[styles.box3, styles.box]}></View>
        <View style={[styles.box4, styles.box]}></View>
        {/* </ScrollView> */}
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'stretch',
        flexWrap: 'wrap',
        gap: 10
        // backgroundColor: 'gray'
    },
    box: {
        // flex: 1
        width: 100,
        height: 100
    },
    box1: {
        backgroundColor: '#5856D6',
        // top: -100
    },
    box2: {
        // alignSelf: 'flex-start',
        backgroundColor: '#4240a2'
    },
    box3: {
        backgroundColor: '#2e2d71',
        // alignSelf: 'flex-end'
        // top: 100
    },
    box4: {
        backgroundColor: '#1f1e47',
        // alignSelf: 'flex-end'
        // top: 100
    }
})
