import React from "react";
import ReactDOM from "react-dom/client";

// * React Element

const jsxHeading = (
  <h1 id="head" className="head">
    Namaste React using JSX ⚓
  </h1>
);

// * React Function Components

const Title = () => (
  <h1 id="head" className="head">
    Namaste React using JSX ⚓
  </h1>
);

const HeadingComponent = () => (
  <div id="Container">
    <Title />
    <h1>This is Functional component!</h1>
  </div>
);

// !Above is how we perform component composition

const rootDOM = ReactDOM.createRoot(document.getElementById("root"));
rootDOM.render(<HeadingComponent/>);
