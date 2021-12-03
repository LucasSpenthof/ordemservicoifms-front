import { Switch, Route} from 'react-router-dom';
import Home from '../views/home';
import Login from '../views/login';
import CadastroServidor from '../views/cadastroServidor';


function Rotas(){
    return(
        <Switch>
                <Route path="/home" component={Home} />
                <Route exact="true" path="/" component={Login} />
                <Route path="/cadastro-servidor" component={CadastroServidor} />
            </Switch>
        );
}
export default Rotas;