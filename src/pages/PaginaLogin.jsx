import React from "react";
import "./PaginaLogin.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';

function PaginaLogin() {
    return (
        <div className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8 align-items">
            <div className="text-center mb-6">
                <img src="https://placehold.co/100x100" alt="Logo with text 'GL Game Legends'" className="mx-auto mb-4" />
                <h1 className="text-2xl font-bold text-transparent bg-clip-text gradient-button">LOGIN</h1>
            </div>
            <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">Senha:</label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="Senha" />
                </div>
                <div className="flex items-center justify-between">
                    <button className="gradient-button text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        LOGIN
                    </button>
                </div>
            </form>
            <div className="text-center mt-4">
                <p className="text-gray-500 text-sm">Ainda não tem conta? <Link to={'/Cadastro'}><a href="#" className="text-blue-500">Cadastre-se</a></Link></p>
            </div> 
            <div className="flex justify-between mt-6">
                <img src="https://placehold.co/50x50" alt="Pixel art character" className="w-12 h-12" />
                <img src="https://placehold.co/50x50" alt="Pixel art character" className="w-12 h-12" />
            </div>
        </div>
    );
}

export default PaginaLogin