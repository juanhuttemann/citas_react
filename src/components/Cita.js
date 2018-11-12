import React, { Component } from 'react'

class Cita extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="">Nombre Mascota</h3>
                    <p className="card-text"><span>Nombre del Dueño: </span></p>
                    <p className="card-text"><span>Fecha: </span></p>
                    <p className="card-text"><span>Hora: </span></p>
                    <p className="card-text"><span>Sintomas: </span></p>
                    <p className="card-text"></p>
                </div>
            </div>
         );
    }
}
 
export default Cita;