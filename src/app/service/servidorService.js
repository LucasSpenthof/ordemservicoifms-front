import Apiservice from "../apiservice";

class ServidorService extends Apiservice{

    constructor(){
        super('/servidores');
    }

    autenticar(credenciais){
        return this.post('/autenticar', credenciais);
    }

    salvar(servidor){
        return this.post('/', servidor)
    }
}
export default ServidorService;