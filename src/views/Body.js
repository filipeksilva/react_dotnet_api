import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Body extends Component {
  render() {
    return (
      <main>
        <div className="bd-masthead mb-3" id="content">
          <div className="container px-4 px-md-3">
            <div className="row align-items-lg-center">
              <div className="col-8 mx-auto col-md-4 order-md-2 col-lg-5">
              </div>
              <div className="col-md-8 order-md-1 col-lg-7 text-center text-md-start">
                <h1 className="mb-3">Sistema de Cadastro</h1>
                <p className="lead mb-4">
                  Armazenamento de dados cadastrais
                </p>

                <div className="d-flex flex-column flex-md-row">                  
                  <Link className="btn btn-outline-secondary" to="/clientes">Cadastrar Clientes</Link>
                </div>
                <p style={{marginTop: "30px"}} className="text-muted mb-0">
                  Versão v0.1.1
                </p>
              </div>
            </div>

          </div>
        </div>
      </main>
    )
  }
}

export default Body;
