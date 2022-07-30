import React, {useEffect, useState} from "react";
import './Usuario.css';
import axios from "axios";


export default function Usuario() {
 
       const [usuario, setUsuario] = useState({nome:'',email:'',senha:''});
       const [usuarios, setUsuarios] = useState([]);
       const [atualizar, setAtualizar] = useState({});
  
       useEffect(()=>{
            //o que será executado
            axios.get("http://localhost:8080/api/usuario/").then(result=>{
                //console.log(result);
                setUsuarios(result.data.content);
            });
       },[atualizar/**variáveis de alteração */])
 
    
    function handleChange(event){
        //console.log(event.target.name);
        //console.log(event.target.value);
        setUsuario({ ...usuario, [event.target.name]:event.target.value});
    }

    function handleSubmit(event){
        event.preventDefault();  

        if(usuario.id==undefined){
        axios.post("http://localhost:8080/api/usuario/",usuario).then(result=>{
                setAtualizar(result.data);
                //atualizar a nossa tabela
        });
        }else{
            axios.put("http://localhost:8080/api/usuario/", usuario).then(result => {
                setAtualizar(result.data);
                //atualizar a nossa tabela
            });
        }
             
        
    }
    function limpar(event){
        setUsuario({ nome: '', email: '', senha: '' });
    }

    function excluir(id){
        axios.delete("http://localhost:8080/api/usuario/"+id).then(result=>{
            setAtualizar(id);
        });
    }
    
        return (
            <div>
               <h1>Cadastro de Usuário</h1>
                <form onSubmit={handleSubmit}>
                    <div className="col-6">
                        <div>
                            <label className="form-label">Nome</label>
                            <input name="nome" className="form-control" value={usuario.nome} onChange={handleChange} type="text" /><br /><br />
                        </div>
                        <div>
                            <label className="form-label">E-mail</label>
                            <input name="email" className="form-control" value={usuario.email} onChange={handleChange} type="email" /><br /><br />
                        </div>
                       {usuario.senha!=undefined && <div>
                            <label className="form-label">Senha</label>
                            <input name="senha" className="form-control" value={usuario.senha} onChange={handleChange} type="password" /><br /><br />
                        </div>
                        }
                    </div>
                    <br />
                    <input type="submit" className="btn btn-success" value="Cadastrar" />&nbsp;&nbsp;
                    <input type="button" className="btn btn-secondary" value="Limpar/Novo" onClick={()=>limpar()} />
               </form>
              <br/>
                <table className="table table-dark table-striped" >
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Opções</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map(user=> 
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.nome}</td>
                            <td>{user.email}</td>
                            <td>
                                <button onClick={()=>setUsuario(user)} className="btn btn-primary">Alterar</button> &nbsp;&nbsp;
                                <button onClick={()=>excluir(user.id)} className="btn btn-danger">Excluir</button>
                            </td>
                        </tr>
                        )}
                    </tbody>
                    
                </table>
            </div>
        );
    
}