import React, { useState, useEffect } from 'react';
import ParahippoImage from '../../assets/images/paraAngle.jpg'
import HippoHeidhtImage from '../../assets/images/hippoHeight.jpg'
import HippoWidthImage from '../../assets/images/hippoWidth.jpg'
import ColaDepthImage from '../../assets/images/collaDepth.jpg'
import BaseForm from '../BaseForm';
import ResultField from '../ResultField';
import './styles.scss';

type FormState = {
  t1WParahippo?: number;
  t1WHippoHeidht?: number;
  t1WHippoWidth?: number;
}

type FormStateT2W = {
  t2WcolaDepth?: number;
  t2WHippoHeidht?: number;
  t2WHippoWidth?: number;
}

type ChangeEvent = React.ChangeEvent<HTMLInputElement | HTMLSelectElement>

const Home = () => {
  const [ formData, setFormData ] = useState<FormState>();
  const [ formDataT2W, setFormDataT2W ] = useState<FormStateT2W>();
  const [ result, setResult ] = useState<string>("");
  const [ resultT2W, setResultT2W ] = useState<string>("");
  const [ interpretation, setInterpretation ] = useState<string>("");
  const [ interpretationT2W, setInterpretationT2W ] = useState<string>("");


  const handleOnChange = (event: ChangeEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData(data => ({...data, [name]: value}));
  }

  const handleOnChangeT2W = (event: ChangeEvent) => {
    const name = event.target.name;
    const value = event.target.value;

    name==="t2WcolaDepth" ? 
      (value==="deep" ? setFormDataT2W(data => ({...data, [name]: 2})) : 
      (value==="shallow" ? setFormDataT2W(data => ({...data, [name]: 1})) : setFormDataT2W(data => ({...data, [name]: undefined}))))
      : setFormDataT2W(data => ({...data, [name]: value}));
  }

  useEffect(() => {
    
    formData?.t1WParahippo && formData?.t1WHippoHeidht && formData?.t1WHippoWidth ? (
      setResult((formData?.t1WParahippo - 30 * (formData?.t1WHippoHeidht / formData?.t1WHippoWidth)).toFixed())
    ) : setResult("");

    result ? setInterpretation(((Number.parseInt(result) > 102) ? "Completely inverted hippocampus" : "Incomplete hippocampal inversion")
    ): setInterpretation("");
          

    formDataT2W?.t2WcolaDepth && formDataT2W?.t2WHippoHeidht && formDataT2W?.t2WHippoWidth ? (
      setResultT2W((formDataT2W?.t2WcolaDepth * (formDataT2W?.t2WHippoHeidht / formDataT2W?.t2WHippoWidth)).toFixed())
    ) : setResultT2W("");

    resultT2W ? setInterpretationT2W(((Number.parseInt(resultT2W) < 1.2) ? "Completely inverted hippocampus" : "Incomplete hippocampal inversion")
    ): setInterpretationT2W("");
          
  }, [formData, result, formDataT2W, resultT2W]);

  return (
    <div>
      <div className="home-container">
        <div className="row home-content card-base border-radius-20">
          <div className="home-text">
            <h1 className="text-title">
              T1W score (coronal-oblique 3D T1-weighted images, perpendicular to the long axis of the hippocampus)
            </h1>
          </div>
          <div className="home-form">
            <BaseForm title="Parahippocampal angle" image={ParahippoImage}>
              <div className="base-form-input">
                <input 
                  className="form-control"
                  name="t1WParahippo" 
                  type="number"
                  onChange={handleOnChange}
                  placeholder="Insert value here"/>
              </div>
            </BaseForm>
            <BaseForm title="Hippocampal height" image={HippoHeidhtImage}>
              <div className="base-form-input">
                <input 
                  className="form-control"
                  name="t1WHippoHeidht" 
                  type="number" 
                  onChange={handleOnChange}
                  placeholder="Insert value here" />
              </div>
            </BaseForm>
            <BaseForm title="Hippocampal width" image={HippoWidthImage}>
              <div className="base-form-input">
                <input 
                  className="form-control"
                  name="t1WHippoWidth" 
                  type="number" 
                  onChange={handleOnChange}
                  placeholder="Insert value here" />
              </div>
            </BaseForm>
          </div>
          <ResultField result={result} interpretation={interpretation} />
        </div>
      </div>
      
      <div className="home-container">
        <div className="row home-content card-base border-radius-20">
          <div className="home-text">
            <h1 className="text-title">
            T2W score (coronal T2-weighted images, parallel to the brainstem)
            </h1>
          </div>
          <div className="home-form">
            <BaseForm title="Collateral sulcus depth" image={ColaDepthImage}>
              <div className="base-form-input">
                <select 
                  name="t2WcolaDepth"
                  className="form-select"
                  onChange={handleOnChangeT2W}
                >
                  <option selected>Choose here</option>
                  <option value="deep">Deep</option>
                  <option value="shallow">Shallow</option>
                </select>
              </div>
            </BaseForm>
            <BaseForm title="Hippocampal height" image={HippoHeidhtImage}>
              <div className="base-form-input">
                <input 
                  className="form-control"
                  name="t2WHippoHeidht" 
                  type="number" 
                  onChange={handleOnChangeT2W}
                  placeholder="Insert value here" />
              </div>
            </BaseForm>
            <BaseForm title="Hippocampal width" image={HippoWidthImage}>
              <div className="base-form-input">
                <input 
                  className="form-control"
                  name="t2WHippoWidth" 
                  type="number" 
                  onChange={handleOnChangeT2W}
                  placeholder="Insert value here" />
              </div>
            </BaseForm>
          </div>
          <ResultField result={resultT2W} interpretation={interpretationT2W} />
        </div>
      </div>
    </div>
  );
}

export default Home;