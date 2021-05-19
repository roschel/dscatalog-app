import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

/**
 * flex-direction: row - justify-content alinha horizontalmente
 * quando column (default) - justify content alinha verticalmente
 * @returns 
 */
const App = () =>{
  return(
    <View style={styles.container}>
      <Text style={styles.h1}>Hi, there</Text>
      <Text style={styles.h2}>Dev: João</Text>
      <Text style={styles.h3}>Aluno</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
      backgroundColor: '#069',
      flex:1,
      alignItems:'center', // horizontal
      justifyContent:'center' // vertical
  },
  h1:{
    fontSize:24,
    fontWeight:'700',
    color:'#fff'
  },
  h2:{
    fontSize:18,
    fontWeight:'500',
    color:'#fff'
  },
  h3:{
    fontSize:14,
    color:'#ccc'
  },
})

export default App;