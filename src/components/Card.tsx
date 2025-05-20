import "../styles/components/Card.css";
import type { CardComponentPropsType } from "../types/card.types";

function CardComponent(props: CardComponentPropsType) {
  return (
    <div className="card-component">
      <div className="card__item">
        <div className="card__item-top">
          <div className="card__item-top-head">
            <div className="card__item-level">
              <span className="card__item-level-val">
                {props.value.level}
              </span>
              <span className="card__item-level-val">
                {props.value.category}
              </span>
            </div>
          </div>
          <div className="card__item-top-content_area">
            <div className="card__item-top-content">
              <div className="card__item-content-word">
                <b className="card__item-content-word-val">
                  <u>
                    <a target="_blank" href={`https://translate.google.com?sl=en&tl=tr&text=${props.value.word}&op=translate`}>{props.value.word}</a>
                  </u>
                </b>
                <pre className="card__item-content-syntactic-val">
                  <i>({props.value.syntactic})</i>
                </pre>
              </div>
              <div className="card__item-content-description">
                <span className="card__item-content-description-val">
                  {props.value.description}
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="card__item-bottom">
          <div className="card__item-bottom-content_area">
            <div className="card__item-content">
              <div className="card__item-content-example">
                <span className="card__item-content-example-val">
                  {markTargetString(props.value.word, props.value.example)}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function markTargetString(target: string, text: string) {
  const regex = new RegExp(`(${target})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, index) => {
    if (part.toLowerCase() === target.toLowerCase()) {
      return (
        <mark key={index}>
          {part}
        </mark>
      );
    }
    return part;
  });
}

export default CardComponent;
