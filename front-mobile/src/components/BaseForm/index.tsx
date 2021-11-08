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
    alignItems: 'center'
  },
  image: {
    width: 335,
    height: 242,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    overflow: 'hidden',
  },
  title: {
    color: '#00D4FF',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 5,
    fontFamily: "Play_700Bold",
    paddingBottom: 5
  },
})

export default BaseForm;