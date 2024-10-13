import React from "react";
import ReactDOM from "react-dom/client";

// * React Element

const titleElement = (
  <h1 id="head" className="head">
    Namaste React using JSX ⚓
  </h1>
);

// * React Functional Components

const TitleComponent = () => (
  <h1 id="head" className="head">
    Namaste React using JSX ⚓
  </h1>
);

const why = "this kolavari d";

const HeadingComponent = () => (
  <div id="Container">
    {titleElement}
    <TitleComponent />
    <h1>why {why}</h1>
  </div>
);

// !Above is how we perform component composition

const rootDOM = ReactDOM.createRoot(document.getElementById("root"));
rootDOM.render(<HeadingComponent/>);
