"use client"
import React, { useState } from "react";
import Botao from "./Botao";
import ListaAlimentos from "./ListaAlimentos";

const Refeicao = ({ refeicao, alimentos }) => {

  const [alimentosSelecionados, setAlimentosSelecionados] = useState([]);
  const [mostrarLista, setMostrarLista] = useState(false); // Defina mostrarLista como um estado

  const adicionarAlimentoSelecionado = (alimento) => {
    setAlimentosSelecionados([...alimentosSelecionados, alimento]);
    fecharModal(); // Fechar o modal após selecionar um alimento
  };

  const abrirModal = () => {
    setMostrarModal(true);
  };

  const fecharModal = () => {
    setMostrarModal(false);
  };

  const listaDeAlimentos = [
    {
      alimentos: [
        { nome: 'Nescal', quantidade: 1, calorias: 70 },
        { nome: 'Bolo', quantidade: 1, calorias: 100 },
      ],
      
    },
  ];

  const estilo = {
    color: '#D5DDE0',
    fontFamily: 'Arial, sans-serif',
    fontSize: '16px',
    textAlign: 'center',
    margin: '10px'
  };

  const refeicoesWrapperStyles = {
    color: '#D5DDE0',
    backgroundColor: 'rgb(71, 85, 105)',
    padding: '10px',
    borderRadius: '2%',
    maxWidth: '400px',
    margin: '0 auto',
  };

  const botao = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  const alimentoStyles = {
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottom: '1px solid #A5ABAD',
    paddingBottom: '5px',
  };

  const nomeAlimentoStyles = {
    marginRight: '10px',
    flex: 1,
  };

  return (
    <div>
      <p style={estilo}>{refeicao}</p>
      <div style={refeicoesWrapperStyles}>
        {alimentos.map((alimento, index) => (
          <div key={index} style={alimentoStyles}>
            <span style={nomeAlimentoStyles}>
              <p>{alimento.nome}</p>
              <p style={{ margin: '0' }}>{alimento.quantidade} unidade</p>
            </span>
            <p style={{ margin: '0' }}>{alimento.calorias} cal</p>
          </div>
        ))}
        <div style={botao}>
          <Botao style={'alignItems: center'} texto='Adicionar alimento' onClick={abrirModal} />

        </div>
      </div>
    </div>
  );
};

export default Refeicao;
