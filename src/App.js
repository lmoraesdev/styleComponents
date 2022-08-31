import React from "react";

import Cabecalho from "./Components/Cabecalho";
import Container from "./Components/Container";
import { GlobolStyle } from "./Components/GlobalStyle";

function App() {
  return (
    <>
      <GlobolStyle />
      <Cabecalho />
      <Container />
    </>
  );
}

export default App;
