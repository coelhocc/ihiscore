import React, { useEffect, useState } from "react";
import BaseForm from "../BaseForm";
import ResultField from "../ResultField";
import Title from "../Title";
import ParahippoImage from '../../assets/images/paraAngle.jpg'
import HippoHeidhtImage from '../../assets/images/hippoHeight.jpg'
import HippoWidthImage from '../../assets/images/hippoWidth.jpg'
import ColaDepthImage from '../../assets/images/collaDepth.jpg'
import './styles.scss';

type Props = {
  typeScore: string;
}

type FormState = {
  colaDepth?: number;
  parahippo?: number;
  hippoHeidht?: number;
  hippoWidth?: number;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
const titleT1W = "T1W score (coronal-oblique 3D T1-weighted images, perpendicular to the long axis of the hippocampus)"
const titleT2W = "T2W score (coronal T2-weighted images, parallel to the Talairach line)"
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
      (value==="deep" ? setFormData(data => ({...data, [name]: 2})) : 
      (value==="shallow" ? setFormData(data => ({...data, [name]: 1})) : setFormData(data => ({...data, [name]: undefined}))))
      : setFormData(data => ({...data, [name]: value}));
  }

  useEffect(() => {

    typeScore==="T1W" ?
    (formData?.parahippo && formData?.hippoHeidht && formData?.hippoWidth ? (
      setResult((formData?.parahippo - 30 * (formData?.hippoHeidht / formData?.hippoWidth)).toFixed())
    ) : setResult(""))
    :
    (formData?.colaDepth && formData?.hippoHeidht && formData?.hippoWidth ? (
      setResult((formData?.colaDepth * (formData?.hippoHeidht / formData?.hippoWidth)).toFixed())
    ) : setResult(""));
          
    typeScore==="T1W" ?
    (result ? setInterpretation(((Number.parseInt(result) > 102) ? complInvHippo : incomplHippoInv)
    ): setInterpretation(""))
    :
    (result ? setInterpretation(((Number.parseInt(result) < 1.2) ? complInvHippo : incomplHippoInv)
    ): setInterpretation(""));

  }, [formData, result, typeScore]);


  return (
    <div className="score-container">
      <div className="score-content card-base border-radius-20">
        <div className="score-title">
          { typeScore==="T1W" ? <Title title={titleT1W}/> : <Title title= {titleT2W} /> }
        </div>
        <div className="score-form">
          { typeScore==="T1W" ?
            <BaseForm title="Parahippocampal angle" image={ParahippoImage}>
              <div className="score-input">
                <input 
                  className="form-control"
                  value={formData?.parahippo ? formData?.parahippo : ""}
                  name="parahippo" 
                  type="number"
                  onChange={handleOnChange}
                  placeholder={inputPlaceholder}
                />
              </div>
            </BaseForm>
            :
            <BaseForm title="Collateral sulcus depth" image={ColaDepthImage}>
              <div className="base-form-input">
                <select 
                  name="colaDepth"
                  value={formData?.colaDepth ? (formData?.colaDepth===1 ? "shallow" : "deep") : "choose"}
                  className="form-select"
                  onChange={handleOnChange}
                >
                  <option value="choose">Choose here</option>
                  <option value="deep">Deep</option>
                  <option value="shallow">Shallow</option>
                </select>
              </div>
            </BaseForm>
          }
          <BaseForm title="Hippocampal height" image={HippoHeidhtImage}>
            <div className="score-input">
              <input 
                className="form-control"
                value={formData?.hippoHeidht ? formData?.hippoHeidht : ""}
                name="hippoHeidht" 
                type="number" 
                onChange={handleOnChange}
                placeholder={inputPlaceholder}
              />
            </div>
          </BaseForm>
          <BaseForm title="Hippocampal width" image={HippoWidthImage}>
            <div className="score-input">
              <input 
                className="form-control"
                value={formData?.hippoWidth ? formData?.hippoWidth : ""}
                name="hippoWidth" 
                type="number" 
                onChange={handleOnChange}
                placeholder={inputPlaceholder}
              />
            </div>
          </BaseForm>
        </div>
        <ResultField result={result} interpretation={interpretation} />
        <div className="score-button">
          <button 
            type="button" 
            className="btn btn-primary"
            onClick={() => setFormData({})}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  )
}

export default Score;