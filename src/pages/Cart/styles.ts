import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 50px 0;
  gap: 30px;
`;

export const Content = styled.div`
  width: 50%;
  padding: 45px 35px;
  border-radius: 10px;

  box-shadow: 0 0 15px 5px rgba(0, 0, 0, 0.06);
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: bold;
  color: ${({ theme }) => theme["gray-700"]};
  margin-bottom: 30px;
  gap: 20px;
`;

export const ProductsCartList = styled.table`
  flex: 1;
  width: 100%;

  thead td {
    font-weight: bold;
    font-size: 0.875rem;
    color: ${({ theme }) => theme["gray-500"]};
    padding-bottom: 10px;
  }

  tbody td {
    padding: 10px 5px;

    button {
      background-color: transparent;
      border: 0;

      cursor: pointer;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  gap: 20px;
  justify-content: end;
  margin-top: 35px;
  button {
    cursor: pointer;
  }

  button {
    background: transparent;
    border: 0;
    font-size: 0.875rem;
    color: ${({ theme }) => theme["gray-500"]};
  }
`;

export const Button = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  width: 180px;
  height: 40px;
  border: 0;
  background-color: ${({ theme }) => theme["green-500"]};
  border-radius: 50px;
  color: ${({ theme }) => theme.white};
  font-weight: bold;

  cursor: pointer;

  &:hover {
    transition: all 0.2s;
    opacity: 0.6;
  }
`;
