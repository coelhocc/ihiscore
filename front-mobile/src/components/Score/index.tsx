import React, { useEffect, useState } from "react"
import { View, StyleSheet, Image, TextInput } from "react-native"
import RNPickerSelect from 'react-native-picker-select';
import NumericInput from 'react-native-numeric-input'
import BaseForm from "../BaseForm"

const placeholder = {
  label: 'Choose here',
  value: null
}

type Props = {
  typeScore: string;
}

type FormState = {
  colaDepth?: string;
  parahippo?: string;
  hippoHeidht?: string;
  hippoWidth?: string;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
const titleT1W = "T1W score (coronal-oblique 3D T1-weighted images, perpendicular to the long axis of the hippocampus)"
const titleT2W = "T2W score (coronal T2-weighted images, parallel to the brainstem)"
const complInvHippo = "Completely inverted hippocampus"
const incomplHippoInv = "Incomplete hippocampal inversion"
const inputPlaceholder = "Insert value here"

const Score = ({ typeScore } : Props) => {
  
  const [ formData, setFormData ] = useState<FormState>();
  const [ result, setResult ] = useState<string>("");
  const [ interpretation, setInterpretation ] = useState<string>("");
  
  const handleOnChange = (event: ChangeEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    name==="colaDepth" ? 
      (value==="deep" ? setFormData(data => ({...data, [name]: '2'})) : 
      (value==="shallow" ? setFormData(data => ({...data, [name]: '1'})) : setFormData(data => ({...data, [name]: undefined}))))
      : setFormData(data => ({...data, [name]: value}));
  }

  useEffect(() => {

    typeScore==="T1W" ?
    (formData?.parahippo && formData?.hippoHeidht && formData?.hippoWidth ? (
      setResult((Number.parseInt(formData?.parahippo) - 30 * (Number.parseInt(formData?.hippoHeidht) / Number.parseInt(formData?.hippoWidth))).toFixed())
    ) : setResult(""))
    :
    (formData?.colaDepth && formData?.hippoHeidht && formData?.hippoWidth ? (
      setResult((Number.parseInt(formData?.colaDepth) * (Number.parseInt(formData?.hippoHeidht) / Number.parseInt(formData?.hippoWidth))).toFixed())
    ) : setResult(""));
          
    typeScore==="T1W" ?
    (result ? setInterpretation(((Number.parseInt(result) > 102) ? complInvHippo : incomplHippoInv)
    ): setInterpretation(""))
    :
    (result ? setInterpretation(((Number.parseInt(result) < 1.2) ? complInvHippo : incomplHippoInv)
    ): setInterpretation(""));

  }, [formData, result, typeScore]);

  return (

    <View style={styles.container}>
      { typeScore==="T1W" ?
          <BaseForm title="Parahippocampal angle" imagePath={require('../../assets/paraAngle.png')}>
            <TextInput
              keyboardType="numeric"
              style={styles.inputText}
              placeholder={inputPlaceholder}
              placeholderTextColor="#9E9E9E"
              maxLength={3}
              onChangeText={() => handleOnChange}
              value={formData?.parahippo ? formData?.parahippo : undefined}
            />
          </BaseForm>
        :
          <BaseForm title="Collateral sulcus depth" imagePath={require('../../assets/collaDepth.png')}>
            <RNPickerSelect
              onValueChange={value => {
                handleOnChange(value);
              }}
              placeholder={placeholder}
              value={formData?.colaDepth ? (formData?.colaDepth==='1' ? "shallow" : "deep") : "choose"}
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
          onChangeText={() => handleOnChange}
          value={formData?.hippoHeidht ? formData?.hippoHeidht : undefined}
        />
      </BaseForm>
      <BaseForm title="Hippocampal width" imagePath={require('../../assets/hippoWidth.png')}>
        <TextInput
          keyboardType="numeric"
          style={styles.inputText}
          placeholder={inputPlaceholder}
          placeholderTextColor="#9E9E9E"
          maxLength={3}
          onChangeText={() => handleOnChange}
          value={formData?.hippoWidth ? formData?.hippoWidth : undefined}
        />
       </BaseForm>
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
    paddingBottom: 15
  },
  inputText: {
    height: 35,
    width: 130,
    backgroundColor: '#D3D3D3',
    borderRadius: 5,
    color: '#ED7947',
    fontFamily: "Play_700Bold",
    fontSize: 16,
    marginTop: 5
  },
})

export default Score;