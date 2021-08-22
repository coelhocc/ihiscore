import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textLogo}>
        Incomplete Hippocampal Inversion Score
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      marginTop: 25,
      paddingTop: 5,
      height: 35,
      backgroundColor: '#37474F',
      flexDirection: 'row',
      justifyContent: 'center'
  },
  textLogo: {
      fontWeight: 'bold',
      fontFamily: "Play_700Bold",
      fontSize: 18,
      color: '#FFF'
  }
});

export default Header;