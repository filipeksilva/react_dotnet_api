import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Clientes extends Component {
  state = {
    clientes: []
  }

  componentDidMount() {
    axios.get('https://localhost:5001/clientes').then(response => {           
      const clientes = response.data
      this.setState({ clientes });
    })
  }

  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <div className="bd-masthead mb-3" id="content">
            <div className="container px-4 px-md-3">
              <div className="row align-items-lg-center">
                <div className="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
                </div>
                <div className="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
                  <h1 className="mb-3">Lista de Clientes - {this.state.clientes.length}</h1>
                  <table className="table">
                    <tr>                      
                      <th>Nome</th>
                      <th>Telefone</th>
                      <th>Endereço</th>
                      <th>Ação</th>
                    </tr>
                    {
                      this.state.clientes.map(cliente => (
                        <tr>                                                    
                          <td>{cliente.nome}</td>
                          <td>{cliente.telefone}</td>
                          <td>{cliente.endereco}</td>
                          <td><Link to={`/clientes/${cliente.id}`}>Editar</Link></td>                         
                        </tr>                        
                      ))
                    }
                    </table>
                  <p className="text-muted mb-0">
                    Versão v0.0.1
                  </p>
                </div>
              </div>
            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default Clientes;