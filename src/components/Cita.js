import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Cita extends Component {

    eliminarCita = () => {
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

Cita.propTypes = {
    info: PropTypes.shape({
        fecha: PropTypes.string.isRequired,
        hora: PropTypes.string.isRequired,
        mascota: PropTypes.string.isRequired,
        propietario: PropTypes.string.isRequired,
        sintoma: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,


    })
}
 
export default Cita;