import React, { Component } from 'react';
import Header from './shared/Header';
import Footer from './shared/Footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

class ClienteNovo extends Component {
  state = {
    cliente: {
      "id": 0,
      "nome": "",
      "telefone": "",
      "endereco": "",
    }
  }

  onChange = (e) => {
    let cliente = this.state.cliente;
    cliente[e.target.name] = e.target.value
    this.setState({cliente: cliente})
  }

  salvar(cliente){
    if(cliente && cliente.id && cliente.id > 0){
      axios.put(`https://localhost:5001/clientes/${cliente.id}`, cliente).then(response => {           
        //window.location.href = "/clientes"
        this.props.history.push("/clientes")
      })
    }
    else{
      axios.post(`https://localhost:5001/clientes`, cliente).then(response => {           
        this.props.history.push("/clientes")
      })
    }  
  }

  salvar2 = () => {
    debugger
    if(this.state.cliente.id > 0){
      axios.put(`https://localhost:5001/clientes/${this.state.cliente.id}`, this.state.cliente).then(response => {           
        //window.location.href = "/clientes"
        this.props.history.push("/clientes")
      })
    }
    else{
      axios.post(`https://localhost:5001/clientes`, this.state.cliente).then(response => {           
        this.props.history.push("/clientes")
      })
    }
  }

  componentDidMount() {
    let id = this.props.match.params.id
    if(id){
      axios.get(`https://localhost:5001/clientes/${id}`).then(response => {           
        const cliente = response.data
        this.setState({ cliente });
      })
    }  
  }

  render() {
    return (
      <div>
        <Header></Header>
        <main>
          <div className="bd-masthead mb-3" id="content">
            <div className="container">
              <div className="row">
                <div className="col-12 mx-auto col-md-8 ">
                  <h1 className="mb-3">Novo Cliente</h1>
                  <hr/>
                  <form>
                    <div className="form-group">
                      <label htmlFor="nome">Nome</label>
                      <input type="text" className="form-control" id="nome" name="nome" value={this.state.cliente.nome} onChange={this.onChange} placeholder="Digite o nome"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="telefone">Telefone</label>
                      <input type="text" className="form-control" id="telefone" name="telefone" value={this.state.cliente.telefone} onChange={this.onChange} placeholder="Digite o telefone"/>
                    </div>
                    <div className="form-group">
                      <label htmlFor="endereco">Endereço</label>
                      <input type="text" className="form-control" id="endereco" name="endereco" value={this.state.cliente.endereco} onChange={this.onChange} placeholder="Digite o endereco"/>
                    </div>
                    <button type="button" onClick={this.salvar2} className="btn btn-primary">Salvar</button>
                    <Link style={{marginLeft: "15px"}} className="btn btn-secondary" to={`/clientes`}>Voltar</Link>
                  </form>
                </div>              
              </div>
              <hr/>
              <div className="col-md-12 order-md-1 text-center text-md-left pr-md-5">                                  
                  <p className="text-muted mb-0">
                    Versão v0.1.1
                  </p>
                </div>

            </div>
          </div>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default ClienteNovo