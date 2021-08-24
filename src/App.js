import React from "react";
import Container from "./layout/Container";
import Content from "./layout/Content";
import Widgets from "./layout/Widgets";
import Sidebar from "./layout/Sidebar";

const App = () => {
  return (
    <Container>
      <Sidebar />
      <Content />
      <Widgets />
    </Container>
  );
};

export default App;
