import { styled } from "styled-components";
import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`;

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background-color: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  cursor: pointer;
  color: ${(props) => props.theme["gray-500"]};
`;

export const Content = styled(Dialog.Content)`
  min-width: 40rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${({ theme }) => theme.white};

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    font-size: 1.25rem;
  }
`;

export const Description = styled(Dialog.Description)`
  font-size: 0.875rem;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const ProductListContainer = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 20px 0;
`;

export const RadioGroupRoot = styled(RadioGroup.Root)`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5px;
`;

export const Buttonscontainer = styled.div`
  display: flex;
  justify-content: end;
  gap: 15px;

  button {
    height: 40px;
    width: 160px;
    font-size: 1rem;
    font-weight: 400;
    border-radius: 50px;

    &:hover {
      transition: all 0.2s;
      opacity: 0.6;
    }

    cursor: pointer;
  }
  button:first-child {
    border: 1px solid ${({ theme }) => theme["gray-800"]};
    color: ${({ theme }) => theme["gray-800"]};
    background-color: transparent;
  }

  button:last-child {
    background-color: ${({ theme }) => theme["green-500"]};
    color: ${({ theme }) => theme.white};
    border: 0;
    font-weight: bold;
  }
`;
