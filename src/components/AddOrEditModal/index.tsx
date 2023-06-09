import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, Overlay } from "./styles";

export function AddOrEditModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Teste</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form>
          <h1>teste 123</h1>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
