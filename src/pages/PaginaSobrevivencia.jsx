import React from "react";
import "./PaginaInicial.css"
import { useState } from 'react';
 
const PaginaSobrevivencia = () => {
        const [isOpen, setIsOpen] = useState({
          genero: true,
          plataformas: true,
          postagem: true,
          status: true,
        });
        const toggleList = (section) => {
          setIsOpen({ ...isOpen, [section]: !isOpen[section] });
        };
        return (
      <div className="app">
      <head>
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
      </head>
      <header className="header">
      <div className="logo"><img src="https://via.placeholder.com/20"/></div>
      <nav className="nav">
      <a href="#home" style={{ fontSize: '40px' }}>Início</a>
      <a href="#games" style={{ fontSize: '40px' }}>Games</a>
      <a href="#support" style={{ fontSize: '40px' }}>Suporte</a>
      </nav>
      <div className="search"><i className="fas fa-search
      "></i>
      <input type="text" placeholder="Search..." />
      <button className="login-btn"><i className="fas fa-user-circle"></i>Log In</button>
      </div>
      </header>
      
       
      <main>
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
      <section className="games-section">
      <div className="S">
      <img src="https://via.placeholder.com/20" alt="Elevator Hitch"/>
      <a href="">Elevator Hitch</a>
      </div>
      <div className="S">
      <img src="https://via.placeholder.com/20" alt="Elevated Dread"/>
      <a href="">Elevated Dread</a>
      </div>
      <div className="S">
      <img src="https://via.placeholder.com/20" alt="Pumpkin Panic" />
      <a href="">Pumpkin Panic</a>
      </div>
      <section className="games-section1">
      <div className="S">
      <img src="https://via.placeholder.com/20" alt="They are Here" />
      <a href="">IZABELLY</a>
      </div>
      <div className="S">
      <img src="https://via.placeholder.com/20" alt="The Vale" />
      <a href="">The Vale</a>
      </div>
      <div className="S">
      <img src="https://via.placeholder.com/20" alt="Clap Clap" />
      <a href="">Clap Clap</a>
      </div>
      </section>
      </section>
      </main></div>
        );
      };
      export default PaginaSobrevivencia;