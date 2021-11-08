import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '../../components/Header';
import Score from '../../components/Score';

type FormState = {
  colaDepth?: number;
  parahippo?: number;
  hippoHeidht?: number;
  hippoWidth?: number;
}

const Home = () => {

  const t1WTitle = "T1W score (coronal-oblique 3D T1-weighted images, perpendicular to the long axis of the hippocampus)"
  const t2WTitle = "T2W score (coronal T2-weighted images, parallel to the Talairach line)"

  const handleOnPress = () => {
    //Alert.alert('Você clicou no botão!')

  }
  
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <Score typeScore="T1W" titleText={t1WTitle} />
        <Score typeScore="T2W" titleText={t2WTitle} />
      </ScrollView>
    </>

  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ecf0f1',
  },
});

export default Home;