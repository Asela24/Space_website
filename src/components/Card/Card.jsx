
import { Button } from "../Button/Button";
import "./Card.sass";

export const Card = ({
  header,
  description,
  background,
  desktop = "medium",
}) => {
  return (
    <article
      className="card"
      style={{
        "--background-url": `url(${background})`,
      }}
    >
      <h4 className={`card__header card__header--${desktop}`}>{header}</h4>
      <div className="card__description">{description}</div>

      <Button label="Learn more" variant="outlined" size="medium" />
    </article>
  );
};
