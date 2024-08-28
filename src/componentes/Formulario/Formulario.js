import React, { useState } from "react";
import "./Formulario.css";
import CampoTexto from "../CampoTexto/CampoTexto";
import ListaSuspensa from "../ListaSuspensa/ListaSuspensa";
import Botao from "../Botao/Botao";

const Formulario = (props) => {
  const secoes = [
    "Computadores",
    "Acessórios",
    "Impressoras",
    "Games",
    "Gadgets",
  ];

  const marcas = ["HP", "Dell", "Positivo", "Asus", "Xiaomi"];

  const [nome, setProduto] = useState("");
  const [preco, setPreco] = useState("");
  const [secao, setSecao] = useState("Computadores");
  const [marca, setMarca] = useState("HP");

  const [produtoNovo, setProdutoNovo] = useState(false);
  const [produtoUsado, setProdutoUsado] = useState(false);

  const aoSelecionarCheckbox = (evento) => {
    if (evento.target.name === "novo") {
      setProdutoNovo(evento.target.checked);
      setProdutoUsado(false);
    } else if (evento.target.name === "usado") {
      setProdutoUsado(evento.target.checked);
      setProdutoNovo(false);
    }
  };

  const aoSalvar = (evento) => {
    evento.preventDefault();
    const produtoStatus = produtoNovo
      ? "Produto Novo"
      : produtoUsado
      ? "Produto Usado"
      : "";
    props.aoProdutoCadastrado({
      nome,
      preco,
      secao,
      marca,
      produtoStatus,
    });
  };

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2>Dados do Produto:</h2>
        <CampoTexto
          label="Produto"
          placeholder="Digite o nome do produto"
          aoAlterado={(valor) => setProduto(valor)}
        />
        <CampoTexto
          label="Preço"
          placeholder="Digite o preço do produto"
          aoAlterado={(valor) => setPreco(valor)}
        />

        <ListaSuspensa
          label="Seções"
          itens={props.secoes}
          aoAlterado={(valor) => setSecao(valor)}
        />
        <ListaSuspensa
          label="Marcas"
          itens={marcas}
          aoAlterado={(valor) => setMarca(valor)}
        />
        <div>
          <label>
            <input
              type="checkbox"
              name="novo"
              checked={produtoNovo}
              onChange={aoSelecionarCheckbox}
            />
            Produto Novo
          </label>
          <label>
            <input
              type="checkbox"
              name="usado"
              checked={produtoUsado}
              onChange={aoSelecionarCheckbox}
            />
            Produto Usado
          </label>
        </div>
        <Botao>Inserir Produto</Botao>
      </form>
    </section>
  );
};
export default Formulario;
