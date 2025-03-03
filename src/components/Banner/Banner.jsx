import "./Banner.sass";
import earthImage from "../../assets/EarthImage.webp";
import { Button } from "../Button/Button";

export const Banner = () => {
  return (
    <section className="banner">
      <div className="banner__info">
        <h3 className="banner__title">
          Discover the vast expanses of{" "}
          <span className="banner__highlight--pink">space</span>
        </h3>

        <p className="banner__description">
          Where the possibilities are{" "}
          <span className="banner__highlight--lemon">endless!</span>
        </p>

        <Button variant="filled" size="big" label="Learn more" />
      </div>

      <div className="banner__image">
        <img src={earthImage} alt="earth-image" />
      </div>
    </section>
  );
};
