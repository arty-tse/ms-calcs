import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Flames from "../flames/Flames";
import "./App.sass";
import "bootstrap/dist/css/bootstrap.min.css";

export class App extends Component {
  render() {
    return (
      <div className="App">
        <Tabs defaultActiveKey="flames">
          <Tab eventKey="flames" title="Flames">
            <Flames />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

export default App;
