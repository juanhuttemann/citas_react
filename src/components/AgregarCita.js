import React, { Component } from 'react';

class AgregarCita extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="card mt-5">
                <div className="card-body">
                    <h2 className="card-title mb-5">Agrega las citas aquí</h2>
                    <form onSubmit="">
                    <div className="form-group row">
                        <label className="col-lg-3">Nombre Mascota</label>
                        <div className=" col-lg-9">
                            <input type="text" className="form-control" placeholder="Nombre Mascota" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className=" col-lg-3">Nombre Dueño</label>
                        <div className=" col-lg-9">
                            <input type="text" className="form-control"  placeholder="Nombre Dueño de la Mascota" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-3">Fecha</label>
                        <div className="col-lg-9  mb-4">
                            <input type="date" className="form-control" />
                        </div>                            
                    </div>
                        <div className="form-group row">
                        <label className="col-lg-3">Hora</label>
                        <div className="col-lg-9">
                            <input type="time" className="form-control" />
                        </div>
                    </div>

                    <div className="form-group row">
                        <label className="col-lg-3">Síntomas</label>
                        <div className="col-lg-9">
                            <textarea  className="form-control"></textarea>
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