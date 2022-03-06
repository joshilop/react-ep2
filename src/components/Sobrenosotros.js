import React, { Component } from 'react';

class Sobrenosotros extends Component {
    constructor(props){
        super(props)
        this.state = {
            listaProveedores: []
        }
    }
    componentDidMount(){
        const rutaServicio = "https://servicios.campus.pe/servicioproveedores.php";
        fetch(rutaServicio)
        .then(
            res => res.json()
        )
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    listaProveedores: result
                })
            }
        )
    }

    dibujarTabla(datosTabla){
        return(
            <table className="table">
                <thead>
                    <tr>
                    <th>Cod</th>
                    <th>Empresa</th>
                    <th>Direccion</th>
                    <th>Ciudad</th>
                    <th>Pais</th>
                    <th>Codigo Postal</th>
                    <th>Teléfono</th>
                    </tr>
                </thead>
                <tbody>
                    {datosTabla.map(itemProveedor => 
                        <tr key={itemProveedor.idempresaenvio}>
                            <td>{itemProveedor.idproveedor}</td>
                            <td>{itemProveedor.nombreempresa}</td>
                            <td>{itemProveedor.direccion}</td>
                            <td>{itemProveedor.ciudad}</td>
                            <td>{itemProveedor.pais}</td>
                            <td>{itemProveedor.codigopostal}</td>
                            <td>{itemProveedor.telefono}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        )
    }
    render() {
        let contenidoTabla = this.dibujarTabla(this.state.listaProveedores)
        return (
            <div>
                <section id="proveedores" className='padded'>
          <div className="container">
              <h2>Proveedores</h2>
              {contenidoTabla}
          </div>
      </section>
            </div>
        );
    }
}

export default Sobrenosotros;