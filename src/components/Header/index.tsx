import { Plus, PencilSimple } from "phosphor-react";

import {
  Container,
  Image,
  ButtonContainer,
  EditProductbutton,
  AddProductButton,
} from "./styles";

import logo from "../../assets/Logo-MaisTodos.png";

export function Header() {
  return (
    <Container>
      <Image src={logo} />
      <ButtonContainer>
        <EditProductbutton>
          Editar produto <PencilSimple size={24} />
        </EditProductbutton>
        <AddProductButton>
          Adicionar produto <Plus size={24} />
        </AddProductButton>
      </ButtonContainer>
    </Container>
  );
}
