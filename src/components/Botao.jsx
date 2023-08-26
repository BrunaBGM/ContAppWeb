import React from "react";

const Botao = ({ texto }) => {
    const botaoStyles = {
      backgroundColor: '#007BFF',
      color: 'white',
      padding: '10px 20px',
      borderRadius: '4px',
      border: 'none',
      cursor: 'pointer',
    };
  
    return (
      <button style={botaoStyles}>
        {texto}
      </button>
    );
  };
  
  export default Botao;
