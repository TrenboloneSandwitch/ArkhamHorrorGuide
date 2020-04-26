import React from "react";
import id from "uuid/v4";

const Krok = ({ data, setControls }) => {
  const { title, text, list, goTo } = data;

  const setHeading = () => {
    return title ? (
      <h5 className="grey-text">
        Akce: <span className="red-text">{title}</span>
      </h5>
    ) : null;
  };

  const setSubheading = () => {
    return text ? (
      <p className="grey-text">
        Doplňující text: <span className="red-text">{text}</span>
      </p>
    ) : null;
  };

  const setList = () => {
    return list.length > 0 ? (
      <ul className="collapsible">
        {list.map((element) => (
          <li key={id()}>
            <div className="collapsible-header grey darken-3 red-text text-lighten-3">
              {element.note ? (
                <i className="material-icons tooltipped red-text text-lighten-3">
                  info
                </i>
              ) : null}
              {element.title}
            </div>

            {element.note ? (
              <div className="collapsible-body grey darken-4 red-text">
                <i>{element.note}</i>
              </div>
            ) : null}
          </li>
        ))}
      </ul>
    ) : null;
  };

  return (
    <div>
      {setHeading()}
      {setSubheading()}
      {setList()}
      {setControls(goTo, "Další krok", "red darken-3")}
    </div>
  );
};

export default Krok;
