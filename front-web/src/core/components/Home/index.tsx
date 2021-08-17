import React from "react";
import { ReactComponent as T1WParahippoImage } from '../../assets/images/paraAngle.svg'
import { ReactComponent as T1WHippoHeidhtImage } from '../../assets/images/hippoHeight.svg'
import { ReactComponent as T1WHippoWidthImage } from '../../assets/images/hippoWidth.svg'
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
        <BaseForm title="Parahippocampal angle">
          <div>
            <T1WParahippoImage className="main-image" />
          </div>
          <div className="home-input">
            <input type="number" placeholder="Insert value here" />
          </div>
        </BaseForm>
        <BaseForm title="Hippocampal height">
          <div>
            <T1WHippoHeidhtImage className="main-image" />
          </div>
          <div className="home-input">
            <input type="number" placeholder="Insert value here" />
          </div>
        </BaseForm>
        <BaseForm title="Hippocampal width">
          <div>
            <T1WHippoWidthImage className="main-image" />
          </div>
          <div className="home-input">
            <input type="number" placeholder="Insert value here" />
          </div>
        </BaseForm>
      </div>
      <div>
        
      </div>
    </div>
  </div>
)

export default Home;