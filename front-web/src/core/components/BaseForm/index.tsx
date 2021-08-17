import React from "react";
import "./styles.scss";

type Props = {
  title: string;
  image: string;
}

const BaseForm = ({ title, image }: Props) => {
  return (
    <div className="admin-base-form card-base">
      <h1 className="base-form-title">
        {title}
      </h1>
      <img src={image} alt="texto" />
      <div className="base-form-input">
        <input type="number" placeholder="Insert value here" />
      </div>
    </div>
  );
}

export default BaseForm;