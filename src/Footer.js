import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer className="bd-footer py-3 mt-3 bg-light">
        <div className="container py-5">
          <div className="row">
            <div className="col-lg-3 mb-3">
              <a className="d-inline-flex align-items-center mb-2 link-dark text-decoration-none" href="/" aria-label="Bootstrap">
                <span className="fs-5">GitHub</span>
              </a>
              <ul className="list-unstyled small text-muted">
                <li className="mb-2">@ Todos os direitos reservados - 2021</li>
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
