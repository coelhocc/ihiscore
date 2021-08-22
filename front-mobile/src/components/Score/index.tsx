import React, { useEffect, useState } from "react"
import { View, StyleSheet, Text, TextInput, Alert } from "react-native"
import RNPickerSelect from 'react-native-picker-select';
import { RectButton } from 'react-native-gesture-handler';
import BaseForm from "../BaseForm"
import Result from "../Result";

const placeholder = {
  label: 'Choose here',
  value: null
}

type Props = {
  typeScore: string;
  titleText: string;
}

const complInvHippo = "Completely inverted hippocampus"
const incomplHippoInv = "Incomplete hippocampal inversion"
const inputPlaceholder = "Insert value here"

const Score = ({ typeScore, titleText } : Props) => {
  
  const [ colaDepth, setColaDepth ] = useState('');
  const [ parahippo, setParahippo ] = useState('');
  const [ hippoHeidht, setHippoHeidht ] = useState('');
  const [ hippoWidth, setHippoWidth ] = useState('');
  const [ result, setResult ] = useState("");
  const [ interpretation, setInterpretation ] = useState("");

  const onPress = () => {
    
    typeScore==="T1W" ? setParahippo('') : setColaDepth('');
    setHippoHeidht('');
    setHippoWidth('');
    setResult('');
    setInterpretation('');
  }

  useEffect(() => {
    typeScore==="T1W" ?
    (parahippo && hippoHeidht && hippoWidth ? (
      setResult((Number.parseInt(parahippo) - 30 * (Number.parseInt(hippoHeidht) / Number.parseInt(hippoWidth))).toFixed())
    ) : setResult(""))
    :
    (colaDepth && hippoHeidht && hippoWidth ? (
      setResult((Number.parseInt(colaDepth) * (Number.parseInt(hippoHeidht) / Number.parseInt(hippoWidth))).toFixed())
    ) : setResult(""));
          
    typeScore==="T1W" ?
    (result ? setInterpretation(((Number.parseInt(result) > 102) ? complInvHippo : incomplHippoInv)
    ): setInterpretation(""))
    :
    (result ? setInterpretation(((Number.parseInt(result) < 1.2) ? complInvHippo : incomplHippoInv)
    ): setInterpretation(""));

  }, [result, typeScore, parahippo, colaDepth, hippoHeidht, hippoWidth]);

  return (

    <View style={styles.container}>
      <Text style={styles.textTitle}>{ titleText }</Text>
      { typeScore==="T1W" ?
          <BaseForm title="Parahippocampal angle" imagePath={require('../../assets/paraAngle.png')}>
            <TextInput
              keyboardType="numeric"
              style={styles.inputText}
              placeholder={inputPlaceholder}
              placeholderTextColor="#9E9E9E"
              maxLength={3}
              onChangeText={text => setParahippo(text)}
              value={parahippo}
            />
          </BaseForm>
        :
          <BaseForm title="Collateral sulcus depth" imagePath={require('../../assets/collaDepth.png')}>
            <RNPickerSelect
              placeholder={placeholder}
              items={[
                    {label:'Deep', value: '1'},
                    {label: 'Shallow', value: '2'}
              ]}
              style={pickerSelectStyles}
              onValueChange={value => setColaDepth(value)}
              value={colaDepth}
            />
          </BaseForm>
      }
      <BaseForm title="Hippocampal height" imagePath={require('../../assets/hippoHeight.png')}>
        <TextInput
          keyboardType="numeric"
          style={styles.inputText}
          placeholder={inputPlaceholder}
          placeholderTextColor="#9E9E9E"
          maxLength={3}
          onChangeText={text => setHippoHeidht(text)}
          value={hippoHeidht}
        />
      </BaseForm>
      <BaseForm title="Hippocampal width" imagePath={require('../../assets/hippoWidth.png')}>
        <TextInput
          keyboardType="numeric"
          style={styles.inputText}
          placeholder={inputPlaceholder}
          placeholderTextColor="#9E9E9E"
          maxLength={3}
          onChangeText={text => setHippoWidth(text)}
          value={hippoWidth}
        />
      </BaseForm>
      {result ? 
        <>
        <Result result={ result } interpretation={ interpretation } /> 
        <RectButton style={styles.button} onPress={onPress}>
          <Text style={styles.buttonText}>
            Reset
          </Text>
        </RectButton>
        </>
        :
        <></>
      }
    </View>
  )

}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    alignSelf:"center",
    marginTop: 5,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    color: '#ED7947',
    fontFamily: "Play_400Regular",
    height: 40,
    width: 140,
  },
  inputAndroid: {
    alignSelf:"center",
    marginTop: 5,
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    color: '#ED7947',
    fontFamily: "Play_400Regular",
    height: 40,
    width: 140,
  },
  placeholder: {
    color: '#9E9E9E',
    fontSize: 16,
    fontFamily: "Play_400Regular",
  },
})

const styles = StyleSheet.create({
  
  container: {
    margin: 10,
    borderRadius: 20,
    backgroundColor: "white",
    padding: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 15,
      height: -15
    },
    shadowRadius: 10,
    shadowOpacity: 0.20,
    elevation: 20
  },

  textTitle: {
    paddingTop: 5,
    fontFamily: "Play_400Regular",
    fontSize: 21,
  },

  inputText: {
    height: 40,
    width: 140,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    color: '#ED7947',
    fontFamily: "Play_400Regular",
    paddingVertical: 12,
    paddingHorizontal: 10,
    fontSize: 16,
    marginTop: 5
  },

  button: {
    backgroundColor: '#00D4FF',
    flexDirection: 'row',
    borderRadius: 10,
    height: 30,
    width: '100%',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },

  buttonText: {
    fontFamily: "Play_700Bold",
    fontWeight: 'bold',
    fontSize: 18,
    color: '#0B1F34',
  }

})

export default Score;