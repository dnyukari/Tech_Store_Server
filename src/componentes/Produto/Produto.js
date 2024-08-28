import React from "react";
import "./Produto.css";

const Produto = ({ nome, imagem, preco, produtoStatus }) => {
  return (
    <div className="colaborador">
      <div className="cabecalho">
        <img src={imagem} alt={nome} />
      </div>
      <div className="rodape">
        <h4>{nome}</h4>
        <h5>{preco}</h5>
        <h6>{produtoStatus}</h6>
      </div>
    </div>
  );
};
export default Produto;
