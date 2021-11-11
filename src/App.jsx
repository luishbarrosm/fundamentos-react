import "./App.css";
import React from "react";

import Aleatorio from "./components/basic/Aleatorio";
import Primeiro from "./components/basic/Primeiro";
import ComParametro from "./components/basic/ComParametro";
import Fragmento from "./components/basic/Fragmento";
import Card from "./components/layout/Card";
import Familia from "./components/basic/Familia";
import FamiliaMembro from "./components/basic/FamiliaMembro";
import ListaALunos from "./components/repeticao/ListaAlunos";
import TabelaProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/condicional/UsuarioInfo";
import DiretaPai from "./components/comunicação/DiretaPai";

export default () => (
  <div className="App">
    <h1> Fundamentos React </h1>

    <div className="Cards">
      <Card titulo="#09 - Comunicação Direta" color="#8b9dc3">
        <DiretaPai></DiretaPai>
      </Card>

      <Card titulo="#08 - Renderização Condicional " color="#ff6f69">
        <ParOuImpar numero={21}></ParOuImpar>
        <UsuarioInfo usuario={{ nome: "Fernando" }}></UsuarioInfo>
      </Card>

      <Card titulo="#07 - Repetição #2" color="#009688  ">
        <TabelaProdutos></TabelaProdutos>
      </Card>

      <Card titulo="#06 - Repetição" color="#851e3e ">
        <ListaALunos></ListaALunos>
      </Card>

      <Card titulo="#05 - Componente com Filhos" color="#2ab7ca ">
        <Familia sobrenome="Silva">
          <FamiliaMembro nome="Pedro"></FamiliaMembro>
          <FamiliaMembro nome="Ana"> </FamiliaMembro>
          <FamiliaMembro nome="Gustavo"></FamiliaMembro>
        </Familia>
      </Card>

      <Card titulo="#04 - Desafio Aleatório" color="#fed766 ">
        <Aleatorio min={1} max={60} />
      </Card>
      <Card titulo="#03 - Fragmento" color="#fe4a49 ">
        <Fragmento></Fragmento>
      </Card>
      <Card titulo="#02 - Com Parâmetro" color="#f6abb6">
        <ComParametro
          titulo="Situação do aluno"
          aluno="Lis Barros"
          nota={8.3}
        />
      </Card>
      <Card titulo="#01 -Primeiro Componente" color="#451e3e">
        <Primeiro></Primeiro>
      </Card>
    </div>
  </div>
);
