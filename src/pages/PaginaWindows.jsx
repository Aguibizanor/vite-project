import React from "react";
import "./PaginaInicial.css"
import { useState } from 'react';
import { Link } from 'react-router-dom';
import ImgI from '../assets/imagem_interativa.png';
import pombo from '../assets/pombo.png';
import limao from '../assets/limao.png';
import goiaba from '../assets/goiaba.png';
import diaba from '../assets/diaba.png';
import marquin from '../assets/marquin.png';
import Logo from "../assets/logo.site.tcc.png";

const PaginaWindows = () => {
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
                                <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet" />
                        </head>
                        <header className="header">
                                <div className="logo"><img src={Logo} /></div>
                                <nav className="nav">
                                        <Link to={'/Index'}><a href="" style={{ fontSize: '40px' }}>Início</a></Link>
                                        <a href="" style={{ fontSize: '40px' }}>Games</a>
                                        <a href="" style={{ fontSize: '40px' }}>Suporte</a>
                                </nav>
                                <div className="search"><i className="fas fa-search"></i>
                                        <input type="text" placeholder="Search..." />
                                        <Link to={'/Login'}><button className="login-btn"><i className="fas fa-user-circle"></i>Log In</button></Link>
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
                                                                <Link to={'/Terror'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Terror</a></Link>
                                                                <Link to={'/Esporte'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Esporte</a></Link>
                                                                <Link to={'/Aventura'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Aventura</a></Link>
                                                                <Link to={'/Educacional'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Educacional</a></Link>
                                                                <Link to={'/Sobrevivencia'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Sobrevivência</a></Link>
                                                                <Link to={'/Cartas'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-gamepad"></i>Jogo de cartas</a></Link>
                                                        </>
                                                )}
                                                <h1 onClick={() => toggleList('plataformas')}>
                                                        <span className={`triangle ${isOpen.plataformas ? 'open' : ''}`}></span>
                                                        Plataformas
                                                </h1>
                                                {isOpen.plataformas && (
                                                        <>
                                                                <Link to={'/Windows'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-windows"></i>Windows</a></Link>
                                                                <Link to={'/MacOs'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-apple"></i>Mac OS</a></Link>
                                                                <Link to={'/Android'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-android"></i>Android</a></Link>
                                                                <Link to={'/iOs'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fab fa-apple"></i>iOs</a></Link>
                                                        </>
                                                )}
                                                <h1 onClick={() => toggleList('postagem')}>
                                                        <span className={`triangle ${isOpen.postagem ? 'open' : ''}`}></span>
                                                        Postagem
                                                </h1>
                                                {isOpen.postagem && (
                                                        <>
                                                                 <Link to={'/Hoje'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="far fa-clock"></i>Hoje</a></Link>
                                                                 <Link to={'/Essasemana'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="far fa-clock"></i>Essa semana</a></Link>
                                                                 <Link to={'/Essemes'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="far fa-clock"></i>Esse mês</a></Link>
                                                        </>
                                                )}
                                                <h1 onClick={() => toggleList('status')}>
                                                        <span className={`triangle ${isOpen.status ? 'open' : ''}`}></span>
                                                        Status
                                                </h1>
                                                {isOpen.status && (
                                                        <>
                                                                 <Link to={'/Desenvolvido'}><a href="" style={{ margin: '3px 10px', padding: '0' }}><i className="fas fa-bolt"></i>Desenvolvido</a></Link>
                                                                 <Link to={'/Desenvolvendo'}><a href="" style={{ margin: '3px 5px', padding: '0' }}><i className="fas fa-play"></i>Desenvolvendo</a></Link>
                                                        </>
                                                )}
                                        </div>
                                </section>
                                <section className="games-section">
                                <div className="S">
                                                <img src={ImgI} alt="Happy Cat Tavern" />
                                                <a href="">Happy Cat Tavern</a>
                                        </div>
                                        <div className="S">
                                                <img src={pombo} alt="Subida de pomba" />
                                                <a href="">Subida de pomba</a>
                                        </div>
                                        <div className="S">
                                                <img src={limao} alt="Hero's Hour" />
                                                <a href="">Hero's Hour</a>
                                        </div>
                                        <section className="games-section1">
                                                <div className="S">
                                                        <img src={goiaba} alt="Bug Fables" />
                                                        <a href="">Bug Fables</a>
                                                </div>
                                                <div className="S">
                                                        <img src={diaba} alt="Hedon Bloodrite" />
                                                        <a href="">Hedon Bloodrite</a>
                                                </div>
                                                <div className="S">
                                                        <img src={marquin} alt="Buck up and drive" />
                                                        <a href="">Buck up and drive</a>
                                                </div>
                                        </section>
                                </section>
                        </main></div>
        );
};
export default PaginaWindows;