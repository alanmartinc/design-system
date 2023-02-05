import React from "react";
import ReactDOM from "react-dom";
import PrimaryButton, {
  SecondaryButton,
  TertiaryButton,
} from "./components/Buttons";
import { GlobalStyle } from "./utils";

const App = () => (
  <div>
    <PrimaryButton modifiers={["small", "warning"]}>Hello world</PrimaryButton>
    <SecondaryButton modifiers={["large", "error", "secondaryButtonError"]}>Goodbye world</SecondaryButton>
    <TertiaryButton modifiers={["success", "tertiaryButtonSuccess"]}>Hey world</TertiaryButton>
    <GlobalStyle />
  </div>
);

ReactDOM.render(<App />, document.querySelector("#root"));
