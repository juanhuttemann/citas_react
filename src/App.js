import React, { Component } from 'react';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de Pacientes'}
        />
      </div>
    );
  }
}

export default App;
