import * as Dialog from "@radix-ui/react-dialog";

import {
  Container,
  Image,
  ButtonContainer,
  AddOrEditProductbutton,
} from "./styles";

import logo from "../../assets/Logo-MaisTodos.png";
import { AddOrEditModal } from "../AddOrEditModal";

export function Header() {
  return (
    <Container>
      <Image src={logo} />
      <ButtonContainer>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            <AddOrEditProductbutton>
              Adicionar ou editar produto
            </AddOrEditProductbutton>
          </Dialog.Trigger>
          <AddOrEditModal />
        </Dialog.Root>
      </ButtonContainer>
    </Container>
  );
}
