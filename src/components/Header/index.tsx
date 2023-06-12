import * as Dialog from "@radix-ui/react-dialog";

import {
  Container,
  Image,
  ButtonContainer,
  AddOrEditProductbutton,
} from "./styles";

import logo from "../../assets/Logo-MaisTodos.png";
import { AddOrEditModalStep1 } from "../AddOrEditModalStep1";

type HeaderProps = {
  hasButton?: boolean;
};

export function Header({ hasButton = true }: HeaderProps) {
  return (
    <Container>
      <Image src={logo} />
      <ButtonContainer>
        <Dialog.Root>
          <Dialog.Trigger asChild>
            {hasButton && (
              <AddOrEditProductbutton>
                Adicionar ou editar produto
              </AddOrEditProductbutton>
            )}
          </Dialog.Trigger>
          <AddOrEditModalStep1 />
        </Dialog.Root>
      </ButtonContainer>
    </Container>
  );
}
