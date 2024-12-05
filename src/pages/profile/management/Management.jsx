import React, { useState } from "react";
import './Management.css';
import { InputText } from "primereact/inputtext";
import { FloatLabel } from "primereact/floatlabel";
import { InputTextarea } from "primereact/inputtextarea";
import { TreeSelect } from 'primereact/treeselect';
import { InputNumber } from 'primereact/inputnumber';
import { RadioButton } from 'primereact/radiobutton';

const Management = () => {
    const [formData, setFormData] = useState({
        nome: "",
        descricao: "",
        categoria: ['Calças, Camisas', 'Sobretudos',
            'Masculino', 'Esporte', 'Infantil',
            'Feminino'],
        tamanho: ['PP', 'P', 'M', 'G', 'GG', 'XG'],
        estado: ['Novo', 'Usado', 'Levemente usado'],
        marca: "",
        preco: "",
        doacao: false,
        localizacao: "",
        quantidade: 0,
        tags: "",
        fotos: [],
    });

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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Data Submitted:", formData);
    };

    return (
        <div className="container-management">
            <form className="form-management" onSubmit={handleSubmit}>
                <h2>Adicionar Produto</h2>

                <div className="margin-between">
                    {/* <label>Fotos</label>
                    <input
                        type="file"
                        name="fotos"
                        onChange={handleFileChange}
                        multiple
                        accept="image/*"
                    /> */}
                    <div class="flex align-content-center justify-content-center">
                        <div class="photoDialog flex align-items-center justify-content-center">
                            <img src=""></img>
                        </div>
                    </div>
                    <div class="input-file flex m-2">
                        <label class="flex w-full justify-content-center align-content-center" for="selecao-doc"><i
                            class="pi pi-pencil flex w-full align-items-center justify-content-center"></i></label>
                        <input id="selecao-doc" type="file" accept="image/png, image/jpeg, image/jpg, image/gif" value=""
                            onChange={handleFileChange}/>
                    </div>
                </div>

                <div className="margin-between">
                    <FloatLabel>
                        <InputText id="floatLabel" type="text"
                            name="nome"
                            value={formData.nome}
                            onChange={handleChange}
                            required />
                        <label htmlFor="username">Nome da Roupa</label>
                    </FloatLabel>
                </div>

                <div className="margin-between">
                    <FloatLabel>
                        <InputTextarea id="floatLabel-textarea" autoResize name="descricao"
                            value={formData.descricao}
                            onChange={handleChange}
                            required
                            rows={5}
                            cols={30} />
                        <label htmlFor="username">Descrição</label>
                    </FloatLabel>
                </div>

                <div className="card flex justify-content-center margin-between">
                    <TreeSelect value={formData.categoria}
                        onChange={handleChange}
                        required
                        placeholder="Categoria"
                        options={formData.categoria}>
                    </TreeSelect>
                </div>

                <div className="card flex justify-content-center margin-between">
                    <TreeSelect value={formData.tamanho}
                        onChange={handleChange}
                        required
                        placeholder="Tamanho"
                        options={formData.tamanho}>
                    </TreeSelect>
                </div>

                <div className="card flex justify-content-center margin-between">
                    <TreeSelect value={formData.estado}
                        onChange={handleChange}
                        required
                        placeholder="Estado de Conservação"
                        options={formData.estado}>
                    </TreeSelect>
                </div>

                <div className="margin-between">
                    <FloatLabel>
                        <InputText id="floatLabel" type="text"
                            name="marca"
                            value={formData.marca}
                            onChange={handleChange}
                            required />
                        <label htmlFor="marca">Marca</label>
                    </FloatLabel>
                </div>

                <div className="margin-between">
                    <FloatLabel>
                        <InputText id="number-input"
                            value={formData.preco}
                            onValueChange={handleChange} />
                        <label htmlFor="number-input">Preço</label>
                    </FloatLabel>
                </div>

                <div className="flex align-items-center margin-between">
                    <RadioButton inputId="doacao" name="pizza" value={formData.doacao} checked={formData.doacao}
                        onChange={handleChange} />
                    <label htmlFor="doacao" className="ml-2">Disponível para doação ?</label>
                </div>

                <div className="margin-between">
                    <FloatLabel>
                        <InputText id="floatLabel" type="text"
                            name="localizacao"
                            value={formData.localizacao}
                            onChange={handleChange}
                            required />
                        <label htmlFor="localizacao">Localização</label>
                    </FloatLabel>
                </div>

                <div className="margin-between">
                    <FloatLabel>
                        <InputNumber id="number-input"
                            value={formData.quantidade}
                            onValueChange={handleChange} />
                        <label htmlFor="number-input">Quantidade</label>
                    </FloatLabel>
                </div>


                <div className="btn-cad-produto margin-between">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    );
};

export default Management;
