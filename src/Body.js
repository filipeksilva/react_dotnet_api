import React, { Component } from 'react';

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
                <h1 className="mb-3">Aplicação ReactJs</h1>
                <p className="lead mb-4">
                  A prática cotidiana prova que a necessidade de renovação processual prepara-nos para enfrentar situações atípicas decorrentes das formas de ação.
                </p>

                <div className="d-flex flex-column flex-md-row">
                  <a href="/" className="btn btn-lg btn-bd-primary mb-3 me-md-3">Cadastrar clientes</a>
                </div>
                <p className="text-muted mb-0">
                  Versão 0.0.1
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
