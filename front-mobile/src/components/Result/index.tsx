import React from "react";
import { View, Text, StyleSheet } from "react-native";

type Props = {
  result: string;
  interpretation: string;
}

const Result = ({ result, interpretation } : Props) => {

  return (
    <View style={styles.container} >
      <Text style={styles.resultText}>Result: </Text>
      <Text style={styles.resultValue}>{ result }</Text>
      <Text style={styles.interpretationText}>{ interpretation }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  
  container: {
    padding: 10,
    justifyContent:"space-between",
    flexDirection: 'row'

  },

  resultText: {
    width: 70
  },

  resultValue: {
    paddingRight: 5
  },

  interpretationText: {

  },
})

export default Result;