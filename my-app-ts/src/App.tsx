import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <CssBaseline />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
            Learn React
          </a>
          <Button variant="contained">Default</Button>
          <Button variant="contained" color="primary">
            Primary
          </Button>
          <Button variant="contained" color="secondary">
            Secondary
          </Button>
          <Button variant="contained" disabled>
            Disabled
          </Button>
          <Button variant="contained" color="primary" href="#contained-buttons">
            Link
          </Button>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
