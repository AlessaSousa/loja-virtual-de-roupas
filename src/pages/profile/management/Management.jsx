import React, { useState } from "react";
import './Management.css';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { TreeSelect } from 'primereact/treeselect';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';
import api from "../../../api/axios";

const Management = () => {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        categoria: "",
        tamanho: "",
        estado: "",
        marca: "",
        preco: "",
        doacao: false,
        localizacao: "",
        quantidade: 0,
        tags: "",
        fotos: [],
    });

    const categorias = ['Calças', 'Camisas', 'Sobretudos', 'Masculino', 'Esporte', 'Infantil', 'Feminino'];
    const tamanhos = ['PP', 'P', 'M', 'G', 'GG', 'XG'];
    const estados = ['Novo', 'Usado', 'Levemente usado'];

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
        try {
            const payload = { ...formData, fotos: formData.fotos.map(file => file.name) };
            const response = await api.post('/produtos', payload);
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
                <h2>Adicionar Produto</h2>

                <div className="image-upload">
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
                </div>

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
                            id="input"
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
                        options={categorias.map(c => ({ label: c, value: c }))}
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
                        required
                    />
                </div>

                <div className="input-group">
                    <TreeSelect
                        name="estado"
                        value={formData.estado}
                        onChange={handleChange}
                        placeholder="Estado de Conservação"
                        options={estados.map(e => ({ label: e, value: e }))}
                        required
                    />
                </div>

                <div className="input-group">
                    <FloatLabel>
                        <InputText
                            id="input"
                            name="marca"
                            value={formData.marca}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="marca">Marca</label>
                    </FloatLabel>
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
                            required
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
                            onChange={(e) => setFormData({ ...formData, doacao: e.value })}
                        />
                        <label htmlFor="doacao" className="ml-2">Disponível para doação?</label>
                    </div>
                </div>

                <div className="input-group">
                    <FloatLabel>
                        <InputText
                            id="input"
                            name="localizacao"
                            value={formData.localizacao}
                            onChange={handleChange}
                            required
                        />
                        <label htmlFor="localizacao">Localização</label>
                    </FloatLabel>
                </div>

                <div className="input-group">
                    <FloatLabel>
                        <InputNumber
                            id="input"
                            name="quantidade"
                            value={formData.quantidade}
                            onValueChange={(e) => setFormData({ ...formData, quantidade: e.value })}
                            required
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
