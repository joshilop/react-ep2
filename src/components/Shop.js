import React, { Component } from 'react';
import card1 from '../assets/card1.jpg';
class Shop extends Component {
    constructor(props){
        super(props)
        this.state = {
            listaClientes: []
        }
    }
    componentDidMount(){
        const rutaServicio = "https://servicios.campus.pe/servicioclientes.php";
        fetch(rutaServicio)
        .then(
            res => res.json()
        )
        .then(
            (result) => {
                console.log(result);
                this.setState({
                    listaClientes: result
                })
            }
        )
    }

    dibujarCuadricula(datosTabla){
      return(
          <div className="row row-cols-1 row-cols-md-2 g-4">
              {datosTabla.map(itemCliente => 
              <div className="col" key={itemCliente.idcliente}>
                  <div className="card">
                      <img src={card1}
                      className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <h5 className="card-title">{itemCliente.idcliente} {itemCliente.usuario} {itemCliente.nombres}</h5>
                              <p className="card-text">
                                    {itemCliente.cargo}<br/>
                                    <small>{itemCliente.telefono}</small>
                              </p>
                          </div>
                  </div>
              </div>
              )}
          </div>
      )        
  }
    
    render() {
      let contenidoTabla = this.dibujarCuadricula(this.state.listaClientes)
        return (
          <section id="tienda" className='padded'>
          <div className="container">
              <h2>Clientes</h2>
              {contenidoTabla}
          </div>
      </section>
        );
    }
}

export default Shop;