import { pill } from "../../models/pill";
import "../../styles/_pill.scss";
export const Pill = () => {
  const pillListItems: pill[] = [
    { title: "Location", subTitle: "Where are you going" },
  ];
  return (
    <div className="pill-container">
      {pillListItems.map((res) => (
        <p className="pill-container__pill">
          {res.title}
          <span>{res.subTitle ? res.subTitle : ""}</span>
        </p>
      ))}
      <button className="pill-container__search">
        <svg
          className="pill-container__search__icon"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="presentation"
          focusable="false"
          style={{
            display: "block",
            fill: "none",
            height: "16px",
            width: "16px",
            stroke: "currentcolor",
            overflow: "visible",
          }}
        >
          <g fill="none">
            <path d="m13 24c6.0751322 0 11-4.9248678 11-11 0-6.07513225-4.9248678-11-11-11-6.07513225 0-11 4.92486775-11 11 0 6.0751322 4.92486775 11 11 11zm8-3 9 9"></path>
          </g>
        </svg>
        <span className="pill-container__search__word">search</span>
      </button>
    </div>
  );
};
