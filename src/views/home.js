import React from "react";

class Home extends React.Component {

    state = {
        nomeServidor: ''
    }
    
    componentDidMount(){
        const servidorStorage = localStorage.getItem('servidor_logado')
        const servidorLogado = JSON.parse(servidorStorage)
        this.setState({nomeServidor: servidorLogado.nome})
    }

    render() {
        return (
            <div className="jumbotron">
                <h1 className="display-3">Bem vindo {this.state.nomeServidor}</h1>
                <p className="lead">Sistema de gerenciamento de Ordem de Serviço.</p>                
                <hr className="my-4" />
                <p>E essa é sua área administrativa, utilize um dos menus ou botões abaixo para navegar pelo sistema.</p>
                <p className="lead">
                    <a className="btn btn-secondary btn-lg"
                        href="#/cadastro-servidor"
                        role="button" style={{marginRight: '4px'}}>
                        <i className="fa fa-users"></i>
                            Cadastrar Servidor
                    </a>
                    <a className="btn btn-danger btn-lg"
                        href="#/consultar-servicos"
                        role="button">
                        <i className="fa fa-users"></i>
                            Cadastrar Lançamento
                    </a>
                </p>
            </div>  
        );
    }
}

export default Home;