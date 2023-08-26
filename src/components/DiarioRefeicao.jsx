import React from 'react';
import Refeicao from './Refeicao';

const Diario = () => {
  const refeicoes = [
    {
      nome: 'Café da Manhã',
      alimentos: [
        { nome: 'Ovo', quantidade: 1, calorias: 70 },
        { nome: 'Pão', quantidade: 1, calorias: 100 },
      ],
      
    },
    {
      nome: 'Almoco',
      alimentos: [
        { nome: 'Ovo', quantidade: 1, calorias: 70 },
        { nome: 'Pão', quantidade: 1, calorias: 100 },
        // ... outros alimentos
      ],
    },
    {
      nome: 'Jantar',
      alimentos: [
        { nome: 'Ovo', quantidade: 1, calorias: 70 },
        { nome: 'Pão', quantidade: 1, calorias: 100 },
        // ... outros alimentos
      ],
    },
    {
      nome: 'Lanche',
      alimentos: [
        { nome: 'Ovo', quantidade: 1, calorias: 70 },
        { nome: 'Pão', quantidade: 1, calorias: 100 },
        // ... outros alimentos
      ],
    },
    // ... outras refeições
  ];

  return (
    <div>
      {refeicoes.map((refeicao, index) => (
        <Refeicao key={index} refeicao={refeicao.nome} alimentos={refeicao.alimentos} />
      ))}
    </div>
    
  );
};

export default Diario;