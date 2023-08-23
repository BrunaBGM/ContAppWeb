import React from "react";
import Refeicao from "./Refeicao";


export default function DiarioRefeicao() {
  const refeicoes = [
    {
      alimentos: [
        { nome: 'Ovo', quantidade: 1, calorias: 70 },
        { nome: 'Pão', quantidade: 1, calorias: 100 },
        // ... outros alimentos
      ],
    },
    // ... outras refeições
  ];

  const diarioStyles = {
    textAlign: 'center',
    padding: '20px',
  };

  const refeicoesWrapperStyles = {
    color: '#A5ABAD',
    gap: '20px', // Espaçamento entre as refeições
    backgroundColor: 'rgb(71 85 105)',
    margin: '10%',
    padding: '3%',
    borderRadius: '2%',
    border: '3px solid yellow',
  };

  const totalCaloriasStyles = {
    marginTop: '20px',
  };

  const textRefeicao = {
    color: '#D5DDE0',
    fontFamily: 'Arial, sans-serif;',
    fontSize: '16px',

  }

  const container = {
    display: 'flex',
    flexDirection: 'row',
    border: '3px solid red',

  }

  const caixas = {
    border: '3px solid blue',
  }

  const totalCalorias = refeicoes.reduce(
    (total, refeicao) =>
      total +
      refeicao.alimentos.reduce((soma, alimento) => soma + alimento.calorias, 0),
    0
  );

  return (
    <div style={diarioStyles}>
      <div style={container}>
        <div style={caixas}>
          <p style={textRefeicao}>Cafe da manha</p>
          <div style={refeicoesWrapperStyles}>
            {refeicoes.map((refeicao, index) => (
              <Refeicao style={textRefeicao} key={index} alimentos={refeicao.alimentos} />
            ))}
          </div>
        </div>
        <div style={caixas}>
          <p style={textRefeicao}>Almoco
            <div style={refeicoesWrapperStyles}>
              {refeicoes.map((refeicao, index) => (
                <Refeicao style={textRefeicao} key={index} alimentos={refeicao.alimentos} />
              ))}
            </div>
          </p>
        </div>
        {/* <p style={totalCaloriasStyles}>Total de Calorias Geral: {totalCalorias} cal</p> */}
      </div>
    </div>
  );
};