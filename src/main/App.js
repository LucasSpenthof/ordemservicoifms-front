import React from "react";
import { HashRouter } from "react-router-dom";
import Rotas from './rotas'
import Navbar from "../components/navbar";

import 'bootswatch/dist/pulse/bootstrap.css';
import '../custom.css';

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="container">
          <Navbar />
          <Rotas /> 
        </div>
      </HashRouter>
    );
  }
}

export default App;
