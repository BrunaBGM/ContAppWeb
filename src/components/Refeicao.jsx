import React from 'react';

const Refeicao = ({ alimentos }) => {
  const totalCalorias = alimentos.reduce((total, alimento) => total + alimento.calorias, 0);

  const estilo = {
    color: 'red',
  }
  return (
    <div>
      {/* <h2>{titulo}</h2> */}
      <ul>
        {alimentos.map((alimento, index) => (
          <li key={index}>
            {alimento.nome} - {alimento.calorias} cal
            <p>{alimento.quantidade} unidade</p>
          </li>
        ))}
      </ul>
      {/* <p style={estilo}>Total de Calorias: {totalCalorias} cal</p> */}
    </div>
  );
};

export default Refeicao;