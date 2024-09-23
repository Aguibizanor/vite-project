import React, { useState } from "react";
import "./PaginaSuporte.css";  // Arquivo CSS para estilização
import { Link } from "react-router-dom";
import Logo from "../assets/logo.site.tcc.png";
// Componente para cada pergunta
const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
<div className="faq-item">
<div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        {question}
<span>{isOpen ? '-' : '+'}</span>
</div>
      {isOpen && <div className="faq-answer">{answer}</div>}
</div>
  );
};
// Componente principal da página
const PaginaSuporte = () => {
  const faqData = [
    {
      question: "Como posso visualizar ou alterar minhas configurações de conta?",
      answer: "Clique no ícone de perfil no canto superior direito e selecione 'Configurações da Conta' para visualizar ou editar suas informações pessoais e preferências."
    },
    {
      question: "Onde posso encontrar o histórico das doações nos projetos?",
      answer: "Vá para 'Minha Conta' e selecione 'Histórico de Compras' para ver todas as suas transações anteriores."
    },
    {
      question: "Esqueci minha senha. Como posso recuperá-la?",
      answer: "Clique em 'Esqueci minha senha' na página de login e siga as instruções para redefinir sua senha."
    },
    {
      question: "Como posso encontrar as últimas notícias e atualizações sobre os jogos?",
      answer: "Acesse a seção de notícias no menu principal para ver as últimas novidades sobre os projetos e lançamentos."
    },
    {
      question: "Como posso deixar um comentário ou avaliação para um jogo?",
      answer: "Na página de cada jogo, você encontrará uma seção de avaliações onde poderá escrever sua opinião."
    },
  ];
  return (
<div>
<head>
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" rel="stylesheet"/>
</head>
<header className="header">
<div className="logo">
<img src={Logo} alt="Logo" />
</div>
<nav className="nav">
                                        <Link to={'/Index'}><a href="" style={{ fontSize: '40px' }}>Início</a></Link>
                                        <Link to={'/'}><a href="" style={{ fontSize: '40px', marginLeft: '50px' }}>Games</a></Link>
                                        <Link to={'/Suporte'}><a href="" style={{ fontSize: '40px', marginLeft: '10px'  }}>Suporte</a></Link>
                                </nav>
<div className="search"><i className="fas fa-search
"></i>
<input type="text" placeholder="Buscar..." />
<Link to={'/Opcoes'}><button className="login-btn"><i className="fas fa-user-circle"></i> Log In</button></Link>
</div>
</header>
<div className="faq-container">
<div className="faq-content">
<h1>Perguntas Frequentes</h1>
<div className="faq-list">
          {faqData.map((faq, index) => (
<FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
</div>
</div>
</div>
</div>
  );
};
export default PaginaSuporte;