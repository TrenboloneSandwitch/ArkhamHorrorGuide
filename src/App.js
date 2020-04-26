import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/";
import M from "materialize-css";
import Krok from "./components/Krok";
import Conditional from "./components/Conditional";

import { getRules } from "./services/rules";

function App() {
  const [state, setState] = useState([]);
  const [currentState, setCurrentState] = useState({});

  // Create Navigation Button
  const setControls = useCallback(
    (goto, text, color) => {
      return (
        <button
          className={`waves-effect waves-light btn ${color}`}
          onClick={() => setCurrentState(state[goto])}
        >
          {text}
        </button>
      );
    },
    [state]
  );

  // Get rules from service
  useEffect(() => {
    async function getMyRules() {
      const results = await getRules();
      setState(results);
      setCurrentState(results[0]);
    }
    getMyRules();
  }, []);

  // Initialized collapsible items everytime current state changes
  useEffect(() => {
    let elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems);
    console.log("init collapsible");
  }, [currentState]);

  return (
    <div className="container">
      {currentState.type === "step" ? (
        <Krok data={currentState} setControls={setControls} />
      ) : (
        <Conditional
          title={currentState.title}
          decisions={currentState.decisions}
          setControls={setControls}
        />
      )}
    </div>
  );
}

export default App;
