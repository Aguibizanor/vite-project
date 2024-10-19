import React, { useState, useEffect } from "react";
import './PaginaPerfil.css';
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../assets/logo.site.tcc.png";
import moment from "moment";

function PaginaPerfil() {
  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    dataNascimento: null, // Ou ""
    email: "",
    telefone: ""
  });
  const [loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioData = JSON.parse(localStorage.getItem('usuario'));
    if (usuarioData) {
      setFormData({
        nome: usuarioData.nome,
        cpf: usuarioData.cpf,
        dataNascimento: usuarioData.datanascimento,
        email: usuarioData.email,
        telefone: usuarioData.telefone,
      });
      setLoading(false);
    } else {
      navigate('/Login');
    }
  }, [navigate]);

  const handleDelete = () => {
    const usuarioData = JSON.parse(localStorage.getItem('usuario'));
    const idUsuario = usuarioData?.id;
  
    console.log("ID do usuário para deletar:", idUsuario);
  
    if (!idUsuario) {
      alert("Erro: ID do usuário não encontrado.");
      return;
    }
  
    if (window.confirm("Tem certeza que deseja excluir seu perfil?")) {
      fetch(`http://localhost:8080/cadastro/${idUsuario}`, {
        method: "DELETE",
      })
        .then(response => {
          if (!response.ok) {
            throw new Error("Erro ao deletar o perfil.");
          }
          alert("Perfil deletado com sucesso!");
          localStorage.removeItem('usuario');
          navigate('/Login');
        })
        .catch(error => {
          console.error("Erro ao deletar o perfil:", error);
          alert("Erro ao deletar o perfil: " + error.message);
        });
    }
  };
  

  const handleEdit = () => {
    setModalVisible(true);
  };

  const handleSave = (updatedData) => {
    const usuarioData = JSON.parse(localStorage.getItem('usuario'));
  
    fetch(`http://localhost:8080/cadastro`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...usuarioData, // Mantém os dados antigos, incluindo o ID
        ...updatedData, // Sobrescreve apenas os dados que foram alterados
        dataNascimento: updatedData.dataNascimento || null // Envia null se estiver vazio
      }),
    })
      .then(response => response.json())
      .then(() => {
        // Mantém o ID e atualiza apenas os campos necessários
        const updatedUserData = {
          ...usuarioData, // Mantém o ID
          ...updatedData, // Atualiza os outros campos
        };
  
        setFormData(updatedUserData);
        localStorage.setItem('usuario', JSON.stringify(updatedUserData)); // Atualiza o localStorage com o ID
        alert("Perfil atualizado com sucesso!");
        setModalVisible(false);
      })
      .catch(error => {
        console.error("Erro ao atualizar o perfil:", error);
        alert("Erro ao atualizar o perfil.");
      });
  };
  


  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="perfil-container">
      <header className="perfil-header">
        <div className="logo"><img src={Logo} alt="Logo" /></div>
        <nav className="nav">
          <Link to='/Index' className="nav-text">Início</Link>
          <Link to='/' className="nav-text">Games</Link>
          <Link to='/Que' className="nav-text">Sobre</Link>
          <Link to='/Suporte' className="nav-text">Suporte</Link>
        </nav>
      </header>

      <div className="perfil-info-container">
        <h2 className="perfil-title">MEU PERFIL</h2>
        <div className="perfil-info">
          <p><strong>Nome:</strong> {formData.nome}</p>
          <p><strong>CPF:</strong> {formData.cpf}</p>
          <p><strong>Data de Nascimento:</strong> {formData.dataNascimento}</p>
          <p><strong>Email:</strong> {formData.email}</p>
          <p><strong>Telefone:</strong> {formData.telefone}</p>
        </div>
        <button onClick={handleEdit} className="perfil-button">Editar Perfil</button>
        <button onClick={handleDelete} className="perfil-button perfil-delete">Excluir Perfil</button>
      </div>

      {modalVisible && (
        <Modal
          formData={formData}
          onClose={() => setModalVisible(false)}
          onSave={handleSave}
        />
      )}
    </div>
  );
}

const Modal = ({ formData, onClose, onSave }) => {
  const [nome, setNome] = useState(formData.nome);
  const [cpf, setCpf] = useState(formData.cpf);
  const [dataNascimento, setDataNascimento] = useState(formData.dataNascimento || "");
  const [email, setEmail] = useState(formData.email);
  const [telefone, setTelefone] = useState(formData.telefone);

  useEffect(() => {
    setNome(formData.nome);
    setCpf(formData.cpf);
    setDataNascimento(formData.dataNascimento || "");
    setEmail(formData.email);
    setTelefone(formData.telefone);
  }, [formData]);

  const handleSubmit = () => {
    if (!dataNascimento) {
      alert("A data de nascimento é obrigatória.");
      return;
    } else if (!moment(dataNascimento, 'YYYY-MM-DD', true).isValid()) {
      alert("A data de nascimento está em um formato inválido. Utilize o formato AAAA-MM-DD.");
      return;
    }

    const formattedDate = moment(dataNascimento).format('YYYY-MM-DD');

    const updatedData = {
      nome,
      cpf,
      dataNascimento: formattedDate,
      email,
      telefone
    };

    console.log("Dados antes de enviar:", updatedData);
    onSave(updatedData);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Perfil</h2>
        <label>
          Nome:
          <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
        </label>
        <label>
          CPF:
          <input type="text" value={cpf} onChange={(e) => setCpf(e.target.value)} />
        </label>
        <label>
          Data de Nascimento:
          <input
            type="date"
            value={dataNascimento || ""} // Exibe uma string vazia se o valor for null
            onChange={(e) => setDataNascimento(e.target.value || null)} // Se vazio, define como null
          />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
        <label>
          Telefone:
          <input type="text" value={telefone} onChange={(e) => setTelefone(e.target.value)} />
        </label>
        <button onClick={handleSubmit}>Salvar</button>
        <button onClick={onClose}>Cancelar</button>
      </div>
    </div>
  );
};

export default PaginaPerfil;
