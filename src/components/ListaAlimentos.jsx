import React from 'react';
import Botao from './Botao'; // Importe o componente Botao

const ListaAlimentos = ({ onAlimentoSelecionado, onClose }) => {
  const handleClick = (alimento) => {
    // Chama a função para adicionar o alimento selecionado
    onAlimentoSelecionado(alimento);
  };

  const alimentosDisponiveis  = [
    { nome: 'Arroz', calorias: 150 },
    { nome: 'Feijão', calorias: 120 },
    { nome: 'Frango Grelhado', calorias: 200 },
    // Adicione mais alimentos conforme necessário
  ];

  return (
    <div>
      <h2>Selecionar Alimentos</h2>
      {alimentosDisponiveis.map((alimento, index) => (
        <div key={index}>
          <p>{alimento.nome}</p>
          <Botao texto="Selecionar" onClick={() => handleClick(alimento)} />
        </div>
      ))}
      <Botao texto="Fechar" onClick={onClose} />
    </div>
  );
};

export default ListaAlimentos;
