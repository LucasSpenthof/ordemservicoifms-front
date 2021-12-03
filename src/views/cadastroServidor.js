import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import ServidorService from "../app/service/servidorService";


class CadastroServidor extends React.Component {
    
    constructor(){
        super();
        this.serivce = new ServidorService();
    }

    state = {
        nome: '',
        telefone: '',
        email: '',
        senha: ''
    }

    salvar = () => {
        const servidor = {
            nome: this.state.nome,
            telefone: this.state.telefone,
            email: this.state.email,
            senha: this.state.senha
        }
        this.serivce.salvar(servidor).then(Response =>{
            this.props.history.push('/');
        }).catch()
    }
    
    render() {
        return (

            <Card title="Cadastro de Servidores">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="bs-component">
                            <FormGroup label="Nome: *" htmlFor="inputNome">
                                <input type="text" id="inputNome" name="nome"
                                    className="form-control" 
                                    value={this.state.nome}
                                    onChange={e => this.setState({nome: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Telefone: *" htmlFor="inputTelefone">
                                <input type="text" id="inputTelefone" name="telefone"
                                    className="form-control" 
                                    value={this.state.telefone}
                                    onChange={e => this.setState({telefone: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Email: *" htmlFor="inputEmail">
                                <input type="text" id="inputEmail" name="email"
                                    className="form-control" 
                                    value={this.state.email}
                                    onChange={e => this.setState({email: e.target.value})}/>
                            </FormGroup>
                            <FormGroup label="Senha: *" htmlFor="inputSenha">
                                <input type="password" id="inputSenha" name="senha"
                                    className="form-control" 
                                    value={this.state.senha}
                                    onChange={e => this.setState({senha: e.target.value})}/>
                            </FormGroup>
                            <button type="button" className="btn btn-secondary"
                                style={{ margin: '4px 4px 0 0' }}
                                onClick={this.salvar}>Salvar</button>
                            <button type="button" className="btn btn-danger"
                                style={{ margin: '4px 0 0 0' }}>Cancelar</button>
                        </div>
                    </div>
                </div>
            </Card>

        );
    }
}

export default CadastroServidor;