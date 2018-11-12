import React, { Component } from 'react';
import Header from './components/Header';
import AgregarCita from './components/AgregarCita';
import ListaCitas from './components/ListaCitas';

class App extends Component {

  state = {
    citas: []
  }

  crearCita = (nuevaCita) => {
    const citas = [...this.state.citas, nuevaCita]
    this.setState({
      citas
    });
  }


  render() {
    return (
      <div className="container">
        <Header
          titulo={'Administrador de Pacientes'}
        />
        <div className="row">
          <div className="col-md-6">
            <AgregarCita
              crearCita={this.crearCita}
            />
          </div>
          <div className="col-md-6">
            <ListaCitas
              citas = {this.state.citas}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
