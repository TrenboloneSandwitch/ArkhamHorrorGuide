import React from "react";
import { getRule } from "../services/rules";
import id from "uuid/v4";

const Conditional = ({ title, decisions, setControls }) => {
  console.log(decisions);

  return (
    <div className="card grey darken-4 p-2">
      <div className="card-content white-text">
        <h5 className="center grey-text">
          Rozhodnutí: <span className="red-text">{title} </span>
        </h5>
      </div>

      <div className="card-actions row section">
        {decisions ? (
          decisions.map((d) => (
            <div key={id()} className="col s6 center-align">
              {setControls(d.goTo, d.text, d.color)}{" "}
            </div>
          ))
        ) : (
          <h3>a </h3>
        )}
      </div>
    </div>
  );
};

export default Conditional;
