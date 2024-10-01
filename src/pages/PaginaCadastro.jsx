import React,  { useState } from "react";
import Logo from "../assets/logo.site.tcc.png";
import { Link } from 'react-router-dom';
 
function PaginaCadastro() {
   
    const [formData, setFormData] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        dataNascimento: '',
        email: '',
        telefone: '',
        senha: '',
        confirmarSenha: '',
    });
 
    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
 
    return (
        <div className="Cadastro">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <img src={Logo} alt="Logo of Game Legends" className="logo"/>
            </div>
            <div className="formulario">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl" style={{  margin: '0 auto', marginTop: '50px', padding: '20px', maxWidth: '90%'  }}>
                    <h2 className="text-center text-2xl font-bold text-gradient mb-6 titulo ">CRIAR CONTA</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="input-single">
                            <input type="text" className="w-full p-2 border rounded input" placeholder="Nome:" />
                        </div>
                        <div className="input-single">
                            <input type="text" className="w-full p-2 border rounded input" placeholder="Sobrenome:"/>
                        </div>
                        <div className="input-single">
                            <input type="text" className="w-full p-2 border rounded input" placeholder="CPF:" />
                        </div>
                        <div className="input-single">
                            <input type="date"
              name="dataNascimento"
              value={formData.dataNascimento}
              onChange={handleChange} className="w-full p-2 border rounded input" placeholder="Data de nascimento:" style={{color: '#9ca3af'}}/>
                        </div>
                        <div className="input-single">
                            <input type="text" className="w-full p-2 border rounded input" placeholder="Email:" />
                        </div>
                        <div className="input-single">
                            <input type="text" className="w-full p-2 border rounded input" placeholder="Telefone:" />
                        </div>
                        <div className="input-single">
                            <input type="text" className="w-full p-2 border rounded input" placeholder="Senha:" />
                        </div>
                        <div className="input-single">
                            <input type="text" className="w-full p-2 border rounded input" placeholder="Confirmar senha:" />
                        </div>
                       
                    </div>
                    <div className="flex justify-center mt-6">
                        <Link to={'/'}><button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded button-color">CADASTRE-SE</button></Link>
                    </div>
                    <div className="text-center mt-4">
                        <span>Já tem uma conta? Faça login: <Link to={'/Opcoes'}><a href="#" className="text-blue-500">Login</a></Link></span>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default PaginaCadastro