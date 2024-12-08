import React, { useState } from "react";
import './Management.css';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { TreeSelect } from 'primereact/treeselect';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import api from "../../../api/axios";
import { Link } from "react-router-dom";

const Management = () => {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        categoria: "",
        // tamanho: "",
        preco: null,
        // doacao: false,
        // quantidade: null,
        // fotos: [],
    });

    const categorias = ['Calças', 'Camisas', 'Sobretudos', 'Masculino', 'Esporte', 'Infantil', 'Feminino'];
    const tamanhos = ['PP', 'P', 'M', 'G', 'GG', 'XG'];

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, fotos: Array.from(e.target.files) });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const token = localStorage.getItem('authToken')
        const config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            }
        };
        try {
            // const payload = { ...formData, fotos: formData.fotos.map(file => file.name) };
            const response = await api.post('/private/item', formData, config);
            alert("Produto adicionado com sucesso!");
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Erro ao adicionar produto:", error);
            alert("Erro ao adicionar produto. Tente novamente.");
        }
    };

    return (
        <div className="container-management">
            <form className="form-management" onSubmit={handleSubmit}>
                <div className="back-button-container">
                    <Link to="../" className="back-button">
                        &lt; Voltar
                    </Link>
                </div>
                <h2>Adicionar Produto</h2>

                {/* <div className="image-upload">
                    <div className="photoDialog">
                        {formData.fotos.length > 0 ? (
                            <img src={URL.createObjectURL(formData.fotos[0])} alt="Produto" />
                        ) : (
                            <span>Selecione uma imagem</span>
                        )}
                    </div>
                    <div className="input-file">
                        <label htmlFor="selecao-doc">
                            <i className="pi pi-pencil"></i> Selecione Imagem
                        </label>
                        <input
                            id="selecao-doc"
                            type="file"
                            accept="image/png, image/jpeg, image/jpg, image/gif"
                            onChange={handleFileChange}
                            multiple
                        />
                    </div>
                </div> */}

                <div className="input-group">
                    <FloatLabel>
                        <InputText
                            id="input"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="nome">Nome da Roupa</label>
                    </FloatLabel>
                </div>

                <div className="input-group">
                    <FloatLabel>
                        <InputTextarea
                            id="input-textarea"
                            name="descricao"
                            value={formData.descricao}
                            onChange={handleChange}
                            rows={5}
                            required
                        />
                        <label htmlFor="descricao">Descrição</label>
                    </FloatLabel>
                </div>

                <div className="input-group">
                    <TreeSelect
                        name="categoria"
                        value={formData.categoria}
                        onChange={handleChange}
                        placeholder="Categoria"
                        options={categorias}
                        required
                    />
                </div>

                <div className="input-group">
                    <TreeSelect
                        name="tamanho"
                        value={formData.tamanho}
                        onChange={handleChange}
                        placeholder="Tamanho"
                        options={tamanhos.map(t => ({ label: t, value: t }))}
                        // required
                    />
                </div>

                <div className="input-group">
                    <FloatLabel>
                        <InputNumber
                            id="input"
                            name="preco"
                            value={formData.preco}
                            onValueChange={(e) => setFormData({ ...formData, preco: e.value })}
                            mode="currency"
                            currency="BRL"
                            disabled={formData.doacao} 
                            // required={!formData.doacao}
                            className={formData.doacao ? 'input-number-disabled' : ''}
                        />
                        <label htmlFor="preco">Preço</label>
                    </FloatLabel>
                </div>

                <div className="input-group">
                    <div className="flex align-items-center">
                        <RadioButton
                            inputId="doacao"
                            id="input"
                            name="doacao"
                            value={true}
                            checked={formData.doacao}
                            onChange={(e) => setFormData({ ...formData, doacao: e.value, preco: null })}
                        />
                        <label htmlFor="doacao" className="ml-2">Disponível para doação?</label>
                    </div>
                </div>

                <div className="input-group">
                    <FloatLabel>
                        <InputNumber
                            id="input"
                            name="quantidade"
                            value={formData.quantidade}
                            onValueChange={(e) => setFormData({ ...formData, quantidade: e.value })}
                            // required
                        />
                        <label htmlFor="quantidade">Quantidade</label>
                    </FloatLabel>
                </div>

                <div className="btn-cad-produto">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default Management;
