import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bd-footer py-3 mt-3 bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <ul className="list-unstyled small text-muted">
                
                <li className="mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-github" viewBox="0 0 16 16"> 
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg> Desenvolvido por <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="https://github.com/filipeksilva" aria-label="Bootstrap" target="_blank">@filipeksilva</a>
                </li>
                    
                <li className="mb-2">Todos os direitos reservados - 2021</li>
              </ul>
            </div>

            <div className="col-6 col-lg-2 mb-3">
              <h5>Links</h5>
              <ul className="list-unstyled">
                <li className="mb-2"><a href="/">Home</a></li>
                <li className="mb-2"><a href="/clientes">Clientes</a></li>
              </ul>
            </div>

          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
