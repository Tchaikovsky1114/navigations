import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { RouteProp, useRoute } from '@react-navigation/native';


const DetailScreen = () => {
    const route = useRoute<RouteProp<{params: {itemId?: number}}>>();
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>
        {route?.params?.itemId}
      </Text>
    </View>
  )
}

export default DetailScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
