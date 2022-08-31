import React from "react";

import Titulo from "../Titulo";
import Conta from "../Conta";

export default function Container(){
  return (
    <div className="container">
      <Titulo>Olá Fulano!</Titulo>
      <section className="conteudo">
        <Conta />
      </section>
    </div>
  );
};
