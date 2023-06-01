import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { RouteProp, useRoute } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


// 스택 네비게이터의 파라미터 타입
type RootStackParamList = {
    Home: undefined;
    Detail: { itemId?: number };
  };
  
  // Detail 스크린에 대한 네비게이션 및 라우트 프롭 타입
  type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Home'>
  
const HomeScreen = ({navigation}: {navigation: HomeScreenNavigationProp}) => {
    
  return (
    <View style={styles.container}>
      <Text>HomeScreen</Text>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Detail',{itemId: Math.ceil(Math.random() * 100)})}>
        <Text style={styles.button}>Wanna more?</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonContainer: {
      width:'100%',
      alignItems:'center',
      justifyContent:'center',
      marginTop:20


    },
    button: {
      fontWeight:'bold',
      fontSize:20,
      color:'#2d63e2'
    }
})