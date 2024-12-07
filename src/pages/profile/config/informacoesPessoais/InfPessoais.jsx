import React, { useState, useEffect } from "react";
import "./infPessoais.css";

const InfPessoais = () => {
  const [user, setUser] = useState({
    nome: "Usuário",
    foto: "",
    pais: "",
    telefone: "",
    cep: "",
    rua: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const [countries, setCountries] = useState([]);


  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) =>
        setCountries(
          data.map((country) => ({
            nome: country.name.common,
            bandeira: country.flags.svg,
          }))
        )
      );
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleCepChange = (e) => {
    const cep = e.target.value;
    setUser({ ...user, cep });

  
    if (cep.length === 8) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then((res) => res.json())
        .then((data) => {
          if (!data.erro) {
            setUser((prev) => ({
              ...prev,
              rua: data.logradouro,
              bairro: data.bairro,
              cidade: data.localidade,
              estado: data.uf,
            }));
          }
        });
    }
  };

  const handleFotoChange = () => {
    alert("Função para trocar a foto do perfil!");
  };

  const handleAlterarClick = () => {
    alert("Função para alterar informações pessoais!");
  };

  return (
    <div className="infPessoais">
      <div className="profile-header">
        <div className="profile-photo" onClick={handleFotoChange}>
          <img
            src={user.foto || "https://via.placeholder.com/150"}
            alt="Foto do usuário"
            className="photo"
          />
          <a className="alterar-foto" href="#alterar">
            alterar
          </a>
        </div>
        <h2 className="greeting">Olá, {user.nome}!</h2>
      </div>

      <div className="profile-info">
        <label htmlFor="pais">País</label>
        <select
          id="pais"
          name="pais"
          value={user.pais}
          onChange={handleInputChange}
        >
          <option value="">Selecione um país</option>
          {countries.map((country) => (
            <option key={country.nome} value={country.nome}>
              {country.nome}{" "}
            </option>
          ))}
        </select>

        <label htmlFor="telefone">Telefone</label>
        <input
          type="text"
          id="telefone"
          name="telefone"
          value={user.telefone}
          onChange={handleInputChange}
        />

        <label htmlFor="cep">CEP</label>
        <input
          type="text"
          id="cep"
          name="cep"
          value={user.cep}
          onChange={handleCepChange}
        />

        <label htmlFor="rua">Rua</label>
        <input
          type="text"
          id="rua"
          name="rua"
          value={user.rua}
          onChange={handleInputChange}
        />

        <label htmlFor="numero">Número</label>
        <input
          type="text"
          id="numero"
          name="numero"
          value={user.numero}
          onChange={handleInputChange}
        />

        <label htmlFor="complemento">Complemento</label>
        <input
          type="text"
          id="complemento"
          name="complemento"
          value={user.complemento}
          onChange={handleInputChange}
        />

        <label htmlFor="bairro">Bairro</label>
        <input
          type="text"
          id="bairro"
          name="bairro"
          value={user.bairro}
          onChange={handleInputChange}
        />

        <label htmlFor="cidade">Cidade</label>
        <input
          type="text"
          id="cidade"
          name="cidade"
          value={user.cidade}
          onChange={handleInputChange}
        />

        <label htmlFor="estado">Estado</label>
        <input
          type="text"
          id="estado"
          name="estado"
          value={user.estado}
          onChange={handleInputChange}
        />

        <button className="alterar-btn" onClick={handleAlterarClick}>
          Alterar
        </button>
      </div>
    </div>
  );
};

export default InfPessoais;
