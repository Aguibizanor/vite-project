import React from "react";
import "./PaginaInicial.css"
import Controler from "../assets/Controler.svg"
import Windows from "../assets/windows.svg"

const PaginaInicial = () => {
  return (
    <div>
      <header class="flex justify-between items-center p-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white">
        <div class="flex items-center">
          <img src="https://placehold.co/50x50" alt="Game Legends Logo" class="mr-2" />
        </div>
        <nav class="flex space-x-4">
          <a href="#" class="text-white font-bold">Início</a>
          <a href="#" class="text-gray-300 font-bold">Games</a>
          <a href="#" class="text-white font-bold">Suporte</a>
        </nav>
        <div class="flex items-center space-x-2">
          <input type="text" placeholder="Search..." class="p-2 rounded-full" />
          <button class="bg-white text-blue-500 p-2 rounded-full">
            <i class="fas fa-user"></i> Perfil
          </button>
        </div>
      </header>
      <div class="flex">
        <section className="D">
          <div>
            <h1 onClick={() => toggleList('genero')}>
              <span className={`triangle ${isOpen.genero ? 'open' : ''}`}></span>

              Gênero
            </h1>

            {isOpen.genero && (
              <>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Terror</a>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Esporte</a>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Aventura</a>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Educacional</a>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Sobrevivência</a>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Jogo de cartas</a>
              </>

            )}
            <h1 onClick={() => toggleList('plataformas')}>
              <span className={`triangle ${isOpen.plataformas ? 'open' : ''}`}></span>

              Plataformas
            </h1>

            {isOpen.plataformas && (
              <>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-windows"></i>Windows</a>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-apple"></i>Mac OS</a>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-android"></i>Android</a>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-apple"></i>Ios</a>
              </>

            )}
            <h1 onClick={() => toggleList('postagem')}>
              <span className={`triangle ${isOpen.postagem ? 'open' : ''}`}></span>

              Postagem
            </h1>

            {isOpen.postagem && (
              <>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="far fa-clock"></i>Hoje</a>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="far fa-clock"></i>Essa semana</a>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="far fa-clock"></i>Esse mês</a>
              </>

            )}
            <h1 onClick={() => toggleList('status')}>
              <span className={`triangle ${isOpen.status ? 'open' : ''}`}></span>

              Status
            </h1>

            {isOpen.status && (
              <>
                <a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-bolt"></i>Desenvolvido</a>
                <a href="" style={{ margin: '3px 5px', padding: '0' }}><i className="fas fa-play"></i>Desenvolvendo</a>
              </>

            )}
          </div>
        </section>
        <main class="w-3/4 p-4">
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-white p-4">
              <img src="https://placehold.co/200x200" alt="Our Life game cover" class="mb-2" />
              <h3 class="text-center font-bold">Our Life</h3>
            </div>
            <div class="bg-white p-4">
              <img src="https://placehold.co/200x200" alt="Elevator Hitch game cover" class="mb-2" />
              <h3 class="text-center font-bold">Elevator Hitch</h3>
            </div>
            <div class="bg-white p-4">
              <img src="https://placehold.co/200x200" alt="Hero's Hour game cover" class="mb-2" />
              <h3 class="text-center font-bold">Hero's Hour</h3>
            </div>
            <div class="bg-white p-4">
              <img src="https://placehold.co/200x200" alt="Bug Fables game cover" class="mb-2" />
              <h3 class="text-center font-bold">Bug Fables</h3>
            </div>
            <div class="bg-white p-4">
              <img src="https://placehold.co/200x200" alt="The Vale game cover" class="mb-2" />
              <h3 class="text-center font-bold">The Vale</h3>
            </div>
            <div class="bg-white p-4">
              <img src="https://placehold.co/200x200" alt="Buck up and drive game cover" class="mb-2" />
              <h3 class="text-center font-bold">Buck up and drive</h3>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PaginaInicial;
