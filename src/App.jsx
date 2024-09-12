import React from "react";
import Logo from "./assets/logo.site.tcc.png";

function App() {
    return (
        <div className="Cadastro">
            <div>
                    <img src={Logo} alt="Logo of Game Legends" className="logo"/>
            </div>
            <div className="formulario">
                <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-4xl">
                    <h2 className="text-center text-2xl font-bold text-gradient mb-6 titulo ">CRIAR CONTA</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block mb-2">Nome:</label>
                            <input type="text" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-2">Sobrenome:</label>
                            <input type="text" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-2">CPF:</label>
                            <input type="text" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-2">Data de nascimento:</label>
                            <input type="date" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-2">Email:</label>
                            <input type="email" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-2">Telefone:</label>
                            <input type="tel" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-2">Senha:</label>
                            <input type="password" className="w-full p-2 border rounded" />
                        </div>
                        <div>
                            <label className="block mb-2">Confirmar Senha:</label>
                            <input type="password" className="w-full p-2 border rounded" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-6">
                        <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded">CADASTRE-SE</button>
                    </div>
                    <div className="text-center mt-4">
                        <span>Já tem uma conta? Faça login: <a href="#" className="text-blue-500">Login</a></span>
                    </div>
                </div>
            </div>
            <br />
        </div>
    );
}


export default App

