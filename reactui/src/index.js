import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import theme from "./theme";

// creaer le theme a partir de theme existant (objet)
const myTheme = createMuiTheme(theme);

ReactDOM.render(
  <MuiThemeProvider theme={myTheme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById("root")
);
registerServiceWorker();
