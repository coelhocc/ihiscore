import React from "react";
import T1WParahippoImage from '../../assets/images/paraAngle.jpg'
import T1WHippoHeidhtImage from '../../assets/images/hippoHeight.jpg'
import T1WHippoWidthImage from '../../assets/images/hippoWidth.jpg'
import BaseForm from '../BaseForm';
import './styles.scss';

const Home = () => (
  <div className="home-container">
    <div className="row home-content card-base border-radius-20">
      <div className="home-text">
        <h1 className="text-title">
          T1W score (coronal-oblique 3D T1-weighted images, perpendicular to the long axis of the hippocampus)
        </h1>
      </div>
      <div className="home-form">
        <BaseForm title="Parahippocampal angle" image={T1WParahippoImage} />
        <BaseForm title="Hippocampal height" image={T1WHippoHeidhtImage} />
        <BaseForm title="Hippocampal width" image={T1WHippoWidthImage} />
      </div>
      <div className="home-result">
        <h1 className="border-radius-10 home-result-h1">Result:</h1>
        <h1 className="border-radius-10 home-result-h1">Em branco</h1>
      </div>
    </div>
  </div>
)

export default Home;