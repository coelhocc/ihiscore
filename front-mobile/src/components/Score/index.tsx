import React, { useEffect, useState } from "react"
import { View, StyleSheet, Text, TextInput, Alert } from "react-native"
import RNPickerSelect from 'react-native-picker-select';
import NumericInput from 'react-native-numeric-input'
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
  const [ result, setResult ] = useState<string>("");
  const [ interpretation, setInterpretation ] = useState<string>("");

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
              value={parahippo ? parahippo : undefined}
            />
          </BaseForm>
        :
          <BaseForm title="Collateral sulcus depth" imagePath={require('../../assets/collaDepth.png')}>
            <RNPickerSelect
              onValueChange={value => {
                setColaDepth(value);
              }}
              placeholder={placeholder}
              value={colaDepth ? (colaDepth==='1' ? "shallow" : "deep") : "choose"}
              items={[
                    {label:'deep', value: 1},
                    {label: 'shallow', value: 2}
              ]}
              style={pickerSelectStyles}
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
          value={hippoHeidht ? hippoHeidht : undefined}
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
          value={hippoWidth ? hippoWidth : undefined}
        />
      </BaseForm>
      <Result result={ result } interpretation={ interpretation } />
    </View>
  )

}

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#ED7947',
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#ED7947',
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50
  },
  placeholder: {
    color: '#9E9E9E',
    fontSize: 16,
    fontFamily: "Play_700Bold",
  },
  iconContainer: {
    top: 10,
    right: 12,
  }
})

const styles = StyleSheet.create({
  
  container: {
    alignSelf: "center",
    margin: 10,
    borderRadius: 20,
    backgroundColor: "white",
    paddingBottom: 10,
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
    textAlign: "center",
    fontFamily: "Play_400Regular",
    fontSize: 21,
  },

  inputText: {
    height: 35,
    width: 130,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    color: '#ED7947',
    fontFamily: "Play_400Regular",
    fontSize: 16,
    marginTop: 5
  },

})

export default Score;