import { styled } from "styled-components";

export const Container = styled.header`
  width: 100%;
  padding: 1.5rem 6rem;
  box-shadow: 0 5px 15px 0 rgba(0, 0, 0, 0.04);

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Image = styled.img`
  height: 60px;
`;

export const Button = styled.button`
  background: ${({ theme }) => theme["green-500"]};
  border: 0;
  border-radius: 50px;
  color: ${({ theme }) => theme.white};
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 200px;
  height: 50px;
  gap: 15px;

  cursor: pointer;
`;
