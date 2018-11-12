import React, { Component } from 'react'

class Cita extends Component {

    eliminarCita = () => {
        console.log(`Eliminando Cita... ${this.props.info.id}`);
        this.props.borrarCita(this.props.info.id);
        
    }

    render() { 
        const { fecha, hora, mascota, propietario, sintoma} = this.props.info;
        return ( 
            <div className="media mt-3">
                <div className="media-body">
                    <h3 className="">{mascota}</h3>
                    <p className="card-text"><span>Nombre del Dueño: </span> {propietario} </p>
                    <p className="card-text"><span>Fecha: </span> {fecha} </p>
                    <p className="card-text"><span>Hora: </span> {hora} </p>
                    <p className="card-text"><span>Sintomas: </span></p>
                    <p className="card-text"> {sintoma} </p>

                    <button className="btn btn-danger" onClick={ this.eliminarCita }>
                        Borrar
                    </button>
                </div>
            </div>
         );
    }
}
 
export default Cita;