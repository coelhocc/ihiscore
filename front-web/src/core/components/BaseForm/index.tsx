import React from "react";
import "./styles.scss";

type Props = {
  title: string;
  image: string;
  children: React.ReactNode;
}

const BaseForm = ({ title, image, children }: Props) => {
  return (
    <div className="admin-base-form card-base">
      <h1 className="base-form-title">
        {title}
      </h1>
      <img src={image} alt="texto" />
      { children }
    </div>
  );
}

export default BaseForm;