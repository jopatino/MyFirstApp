import React from 'react'
import { Dimensions, StyleSheet, Text, View, useWindowDimensions } from 'react-native'


// const { width, height } = Dimensions.get('window');



export const DimensionScreen = () => {

  const { width, height } = useWindowDimensions();

  return (

    <View>
      <View style={styles.container}>
          <View style={{
            ...styles.purpleBox,
            width: width * 0.5
          }}>
              
          </View>

          
      </View>
      <Text style={styles.title}>w: {width}, height: {height}</Text>
    </View>

  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      height: 300,
    //   width: '100%',
      width: 300
    },
    purpleBox: {
        backgroundColor: '#5856D6',
        height: '50%',
        width: '50%'
    },
    title: {
      fontSize: 30,
      textAlign: 'center'
    }
  })
