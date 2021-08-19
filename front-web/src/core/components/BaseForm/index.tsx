import "./styles.scss";

type Props = {
  title: string;
  image: string;
  children: React.ReactNode;
}

const BaseForm = ({ title, image, children }: Props) => {
  return (
    <div className="card-base base-form">
      <h1 className="base-form-title">
        {title}
      </h1>
      <img src={image} alt="img" className="base-form-img" />
      { children }
    </div>
  );
}

export default BaseForm;