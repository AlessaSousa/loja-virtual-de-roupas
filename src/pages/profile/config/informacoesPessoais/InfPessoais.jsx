import React, { useState } from 'react';
import './infPessoais.css'; // Importando o arquivo CSS

const countries = [
  "Brasil",
  "Estados Unidos",
  "Canadá",
  "Reino Unido",
  "Alemanha",
  "França",
  "Japão",
  "China",
  "Índia",
  "Austrália"
];

function InfPessoais() {
  const [endereco, setEndereco] = useState({
    pais: '',
    nomeCompleto: '',
    telefone: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    estado: '',
    padrao: false,
    instrucoes: '',
  });

  const [fotoPerfil, setFotoPerfil] = useState(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEndereco((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFotoPerfil(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Endereço atualizado:', endereco);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Suas Informações</h1>
      
      <div className="profile-photo">
        <label htmlFor="fotoPerfil">
          <div className="photo-preview">
            {fotoPerfil ? (
              <img src={fotoPerfil} alt="Foto de perfil" />
            ) : (
              <span>Alterar</span>
            )}
          </div>
        </label>
        <input type="file" id="fotoPerfil" onChange={handlePhotoChange} accept="image/*" style={{ display: 'none' }} />
      </div>

      <label>
        País/Região:
        <select name="pais" value={endereco.pais} onChange={handleChange}>
          <option value="">Selecione o país</option>
          {countries.map((country, index) => (
            <option key={index} value={country}>
              {country}
            </option>
          ))}
        </select>
      </label>

      <label>
        Nome completo:
        <input type="text" name="nomeCompleto" value={endereco.nomeCompleto} onChange={handleChange} />
      </label>
      <label>
        Telefone:
        <input type="tel" name="telefone" value={endereco.telefone} onChange={handleChange} />
      </label>
      <label>
        CEP:
        <input type="text" name="cep" value={endereco.cep} onChange={handleChange} />
      </label>
      <label>
        Endereço:
        <input type="text" name="endereco" value={endereco.endereco} onChange={handleChange} />
      </label>
      <label>
        Número da residência:
        <input type="text" name="numero" value={endereco.numero} onChange={handleChange} />
      </label>
      <label>
        Complemento:
        <input type="text" name="complemento" value={endereco.complemento} onChange={handleChange} />
      </label>
      <label>
        Bairro:
        <input type="text" name="bairro" value={endereco.bairro} onChange={handleChange} />
      </label>
      <label>
        Cidade:
        <input type="text" name="cidade" value={endereco.cidade} onChange={handleChange} />
      </label>
      <label>
        Estado:
        <input type="text" name="estado" value={endereco.estado} onChange={handleChange} />
      </label>
      <label>
        Tornar este o meu endereço padrão:
        <input type="checkbox" name="padrao" checked={endereco.padrao} onChange={handleChange} />
      </label>
      <label>
        Instruções de entrega:
        <textarea name="instrucoes" value={endereco.instrucoes} onChange={handleChange} />
      </label>
      <button className='btn-inf-pessoais' type="submit">Atualizar endereço</button>
    </form>
  );
}

export default InfPessoais;
