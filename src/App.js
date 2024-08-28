import React, { useState } from "react";
import Banner from "./componentes/Banner/Banner";
import Formulario from "./componentes/Formulario/Formulario";
import Secao from "./componentes/Secao/Secao";

function App() {
  const secoes = [
    {
      nome: "Computadores",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Acessórios",
      corPrimaria: "#6d6f73",
      corSecundaria: "#c3c4c7",
    },
    {
      nome: "Impressoras",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
    {
      nome: "Games",
      corPrimaria: "#6d6f73",
      corSecundaria: "#c3c4c7",
    },
    {
      nome: "Gadgets",
      corPrimaria: "#57c278",
      corSecundaria: "#d9f7e9",
    },
  ];

  const listaSecoes = secoes.map((secao) => secao.nome);

  const [produtos, setProdutos] = useState([]);

  const adicionaProduto = (produto) => {
    const listaNova = produtos.slice();
    listaNova.push(produto);
    setProdutos(listaNova);
  };
  return (
    <div>
      <Banner />
      <Formulario
        secoes={listaSecoes}
        aoProdutoCadastrado={(produto) => adicionaProduto(produto)}
      />
      {secoes.map((secao) => (
        <Secao
          key={secao.nome}
          nome={secao.nome}
          corPrimaria={secao.corPrimaria}
          corSecundaria={secao.corSecundaria}
          produtos={produtos.filter((produto) => produto.secao === secao.nome)}
        />
      ))}
    </div>
  );
}

export default App;
