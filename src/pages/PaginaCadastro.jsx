import React, { useState } from "react";
import Logo from "../assets/logo.site.tcc.png";
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

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
    
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); // Hook para navegação

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        if (formData.senha !== formData.confirmarSenha) {
            setMessage('As senhas não correspondem!');
            return;
        }
    
        const cadastroData = { ...formData, datanascimento: formData.dataNascimento }; // Prepare os dados para o envio
    
        try {
            const response = await axios.post('http://localhost:8080/cadastro', cadastroData, {
                headers: {
                    'Content-Type': 'application/json',
                },
            });
    
            if (response.status === 201) { // Verifica se o cadastro foi bem-sucedido
                alert("Cadastro realizado com sucesso!");
                navigate('/Login'); // Redireciona após sucesso
            } else {
                const errorResponse = response.data;
                setMessage(errorResponse.message || 'Erro no cadastro.');
            }
        } catch (error) {
            console.error("Erro na requisição:", error);
            setMessage('Erro ao se conectar ao servidor. Tente novamente.');
        }
    };
    

    return (
        <div className="Cadastro">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
                <img src={Logo} alt="Logo do Game Legends" className="logo" />
            </div>
            <div className="formulario">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl" style={{ margin: '0 auto', marginTop: '50px', padding: '20px', maxWidth: '90%' }}>
                    <h2 className="text-center text-2xl font-bold text-gradient mb-6 titulo ">CRIAR CONTA</h2>
                    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
                        <div className="input-single">
                            <input type="text" name="nome" value={formData.nome} onChange={handleChange} className="w-full p-2 border rounded input" placeholder="Nome:" required />
                        </div>
                        <div className="input-single">
                            <input type="text" name="sobrenome" value={formData.sobrenome} onChange={handleChange} className="w-full p-2 border rounded input" placeholder="Sobrenome:" required />
                        </div>
                        <div className="input-single">
                            <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} className="w-full p-2 border rounded input" placeholder="CPF:" required />
                        </div>
                        <div className="input-single">
                            <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} className="w-full p-2 border rounded input" required />
                        </div>
                        <div className="input-single">
                            <input type="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded input" placeholder="Email:" required />
                        </div>
                        <div className="input-single">
                            <input type="text" name="telefone" value={formData.telefone} onChange={handleChange} className="w-full p-2 border rounded input" placeholder="Telefone:" required />
                        </div>
                        <div className="input-single">
                            <input type="password" name="senha" value={formData.senha} onChange={handleChange} className="w-full p-2 border rounded input" placeholder="Senha:" required />
                        </div>
                        <div className="input-single">
                            <input type="password" name="confirmarSenha" value={formData.confirmarSenha} onChange={handleChange} className="w-full p-2 border rounded input" placeholder="Confirmar senha:" required />
                        </div>
                        <div className="flex justify-center mt-6 col-span-2">
                            <button type="submit" className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded button-color">CADASTRE-SE</button>
                        </div>
                    </form>
                    {message && <div className="text-center mt-4 text-red-500">{message}</div>}
                    <div className="text-center mt-4">
                        <span>Já tem uma conta? Faça login: <Link to={'/Opcoes'} className="text-blue-500">Login</Link></span>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}

export default PaginaCadastro;