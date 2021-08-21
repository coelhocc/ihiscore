import React from 'react'
import { View, Alert, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

type Props = {
  title: string;
  imagePath: ImageSourcePropType;
  children: React.ReactNode;
}

const BaseForm = ({ title, imagePath, children }: Props) => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{ title }</Text>
      <Image source={imagePath} style={styles.image} />
      { children }
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  image: {
    width: 296,
    height: 242,
  },
  title: {
    color: '#00D4FF',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 15,
    fontFamily: "Play_700Bold",
    paddingBottom: 5
  },
})

export default BaseForm;