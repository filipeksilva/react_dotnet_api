import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';

class Pagina404 extends Component {
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
                  <h1 className="mb-3">Ops... Página não encontrada!</h1>                 
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

export default Pagina404;