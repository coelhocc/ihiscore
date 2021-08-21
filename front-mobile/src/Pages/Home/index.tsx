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

  const handleOnPress = () => {
    //Alert.alert('Você clicou no botão!')

  }
  
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <Score typeScore="T1W" />
      </ScrollView>
    </>

  )
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
  },
  title: {
    color: '#00D4FF',
    fontSize: 36,
    fontWeight: 'bold',
    marginTop: 15,
    fontFamily: "Play_700Bold",
  },
  subTitle: {
    color: '#ED7947',
    fontSize: 21,
    marginTop: 5,
    fontFamily: "Play_400Regular",
  },
  footer: {
    marginTop: '5%',
    alignItems: 'center'
  },
  button: {
    backgroundColor: '#00D4FF',
    flexDirection: 'row',
    borderRadius: 10
  },
  buttonIcon: {
    backgroundColor: '#ED7947',
    justifyContent: 'center',
    alignItems: 'center',
    width: 50,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10
  },
  buttonText: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: "Play_700Bold",
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0B1F34',
  }
});

export default Home;