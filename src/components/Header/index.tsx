import { Plus } from "phosphor-react";

import { Container, Button, Image } from "./styles";

import logo from "../../assets/Logo-MaisTodos.png";

export function Header() {
  return (
    <Container>
      <Image src={logo} />
      <Button>
        Adicionar Produto <Plus size={24} />
      </Button>
    </Container>
  );
}
