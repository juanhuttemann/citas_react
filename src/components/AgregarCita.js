import React, { Component } from 'react';
import uuid from 'uuid';

class AgregarCita extends Component {

    nombreMascotaRef = React.createRef();
    propietarioRef = React.createRef();
    fechaRef = React.createRef();
    horaRef = React.createRef();
    sintomaRef = React.createRef();

    crearNuevaCita = (e) => {
      e.preventDefault();

      const mascota = this.nombreMascotaRef.current.value,
            propietario = this.propietarioRef.current.value,
            fecha = this.fechaRef.current.value,
            hora = this.horaRef.current.value,
            sintoma = this.sintomaRef.current.value;

      const nuevaCita = {
        id: uuid(),
        mascota,
        propietario,
        fecha,
        hora,
        sintoma
      }

      console.log(nuevaCita);

      this.props.crearCita();
    }

    render() {
        return (
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title mb-5">Agrega las citas aquí</h2>
                    <form onSubmit={this.crearNuevaCita}>
                    <div className="form-group row">
                        <label className="col-lg-3">Nombre Mascota</label>
                        <div className=" col-lg-9">
                            <input ref={this.nombreMascotaRef} type="text" className="form-control" placeholder="Nombre Mascota" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className=" col-lg-3">Nombre Dueño</label>
                        <div className=" col-lg-9">
                            <input ref={this.propietarioRef} type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-3">Fecha</label>
                        <div className="col-lg-9  mb-4">
                            <input ref={this.fechaRef} type="date" className="form-control" />
                        </div>
                    </div>
                        <div className="form-group row">
                        <label className="col-lg-3">Hora</label>
                        <div className="col-lg-9">
                            <input ref={this.horaRef} type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-3">Síntomas</label>
                        <div className="col-lg-9">
                            <textarea ref={this.sintomaRef} className="form-control"></textarea>
                        </div>
                    </div>
                    <div className="form-group row justify-content-end">
                        <div className="col-sm-3">
                            <button type="submit" className="btn btn-success w-100">Agregar</button>
                        </div>
                    </div>
                </form>
                </div>
            </div>
         );
    }
}

export default AgregarCita;