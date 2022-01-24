import ReactDOM from "react-dom";
import React from "react";

//style
import index from "./styles/index.css";
import CardAddPage from "./page/CardAddPage";

function App() {
  return (
    <div className="root">
      <div className="app">
        <CardAddPage />
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("app"));
