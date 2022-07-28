import React, {useState} from "react";
import './Usuario.css';


export default function Usuario() {
 
       const [usuario, setUsuario] = useState({nome:'',email:'',senha:''});
 
    
    function handleChange(event){
        setUsuario({...usuario,[event.target.name]:event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();        
        
    }
    function limpar(event){
        setUsuario({ nome: '', email: '', senha: '' });
    }
    
        return (
            <div>
               <h1>Cadastro de Usuário</h1>
                <form onSubmit={handleSubmit}>
                    <div class="col-6">
                        <div>
                            <label class="form-label">Nome</label>
                            <input name="nome" class="form-control" value={usuario.nome} onChange={handleChange} type="text" /><br /><br />
                        </div>
                        <div>
                            <label class="form-label">E-mail</label>
                            <input name="email" class="form-control" value={usuario.email} onChange={handleChange} type="email" /><br /><br />
                        </div>
                        <div>
                            <label class="form-label">Senha</label>
                            <input name="senha" class="form-control" value={usuario.senha} onChange={handleChange} type="password" /><br /><br />
                        </div>
                    </div>
                    <br />
                    <input type="submit" value="Cadastrar"/>
                    <input type="button" value="Limpar" onClick={limpar} />
               </form>
              <br/>
                <table class="table" style={{color:'white'}}>
                    <tr>
                        <th>Id</th>
                        <th>Nome</th>
                        <th>E-mail</th>
                        <th>Opções</th>
                    </tr>
                    <tr>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <button>Alterar</button>
                            <button>Excluir</button>
                        </td>
                    </tr>
                    
                </table>
            </div>
        );
    
}