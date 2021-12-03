import React from "react";
import Card from "../components/card";
import FormGroup from "../components/form-group";
import {withRouter} from 'react-router-dom';
import ServidorService from '../app/service/servidorService';

class Login extends React.Component {

    constructor(){
        super();
        this.service = new ServidorService();
    }

    state = {
        email: '',
        senha: '',
        erroLogin: null
    }

    acessar = () => {
        
        this.service.autenticar({
            email: this.state.email,
            senha: this.state.senha
        }).then(response => {
            localStorage.setItem('servidor_logado', JSON.stringify(response.data))
            this.props.history.push('/home')
        }).catch(erro => {
            this.setState({erroLogin: erro.response.data.message})
        })
    }

    preCadastro = () => {
        this.props.history.push('/cadastro-servidor')
    }

    render() {
        return (
            
                <div className="row">
                    <div className="col-md-6"
                        style={{ position: 'relative', left: '300px' }}>
                        <div className="bs-docs-section">
                            {/**Card */}
                            <Card title="Login">
                                <div className="row">
                                    <span>{this.state.erroLogin}</span>
                                </div>
                                <fieldset>
                                    <FormGroup label="Email: *" htmlFor="inputEmail">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" value={this.state.email} onChange={e => this.setState({email: e.target.value})} />
                                    </FormGroup>
                                    <FormGroup label="Senha: *" htmlFor="InputSenha">
                                        <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" value={this.state.senha} onChange={e => this.setState({senha: e.target.value})} />
                                    </FormGroup>
                                    <button type="button" className="btn btn-secondary" style={{margin: '4px 4px 0 0'}} onClick={this.acessar}>Acessar</button>
                                    <button type="button" className="btn btn-info"style={{margin: '4px 0 0 0'}}
                                    onClick={this.preCadastro}>Cadastrar</button>
                                </fieldset>


                            </Card>
                        </div>
                    </div>
                </div>
            
        );
    }
}

export default withRouter( Login );