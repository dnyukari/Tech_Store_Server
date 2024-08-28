import React from "react";
import "./Secao.css";
import Produto from "../Produto/Produto";

const Secao = (props) => {
  const corDeFundo = { backgroundColor: props.corSecundaria };
  const corSublinhado = { borderColor: props.corPrimaria };

  return props.produtos.length > 0 ? (
    <section className="secao" style={corDeFundo}>
      <h3 style={corSublinhado}>{props.nome}</h3>
      <div className="produtos">
        {props.produtos.map((produto) => (
          <Produto
            key={produto.nome}
            nome={produto.nome}
            preco={produto.preco}
            imagem={produto.imagem}
          />
        ))}
      </div>
    </section>
  ) : (
    ""
  );
};
export default Secao;
