import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de Pacientes'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
