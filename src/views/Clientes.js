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
    this.lista()
  }

  lista = () => {
    axios.get('https://localhost:5001/clientes').then(response => {           
      const clientes = response.data
      this.setState({ clientes });
    })
  }

  excluir = (cliente) => {
    if(window.confirm("Deseja realmente excluir?")){
      axios.delete(`https://localhost:5001/clientes/${cliente.id}`).then(response => {
        this.lista()
      })
    }
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
                  <h1 className="mb-3">Lista de Clientes - {this.state.clientes.length} </h1>
                  <table className="table">
                    <thead>
                      <tr>                      
                        <th>Nome</th>
                        <th>Telefone</th>
                        <th>Endereço</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody> 
                      {
                        this.state.clientes.map((cliente, index) => (
                          <tr key={index}>                                                    
                            <td>{cliente.nome}</td>
                            <td>{cliente.telefone}</td>
                            <td>{cliente.endereco}</td>
                            <td><Link to={`/cliente/${cliente.id}`} className="btn btn-primary">Editar</Link></td>
                            <td>
                              <button className="btn btn-danger" onClick={() => {this.excluir(cliente)}}>Excluir</button>
                            </td> 
                          </tr>                        
                        ))
                      }
                    </tbody>
                  </table>
                  <Link className="btn btn-primary" to={`/cliente/novo`}>Novo</Link>
                  <p style={{marginTop: "30px"}} className="text-muted mb-0">
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