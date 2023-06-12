import { styled } from "styled-components";
import * as RadioGroup from "@radix-ui/react-radio-group";

export const RadioContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 5px;
  padding: 0px 20px;
  border-radius: 6px;
  width: 100%;

  background-color: ${({ theme }) => theme["gray-100"]};

  &:hover {
    background-color: ${({ theme }) => theme["gray-300"]};
  }
`;

export const RadioGroupItem = styled(RadioGroup.Item)`
  width: 25px;
  height: 25px;
  border-radius: 4px;

  border: 1px solid ${({ theme }) => theme["gray-300"]};
`;

export const RadiogroupIndicator = styled(RadioGroup.Indicator)`
  color: ${({ theme }) => theme["green-500"]};
`;

export const Label = styled.label`
  flex: 1;

  color: ${({ theme }) => theme["gray-900"]};
  padding-left: 10px;
  padding: 10px;
  line-height: 1;

  img {
    height: 30px;
    margin-right: 10px;
    border-radius: 4px;
  }

  td:last-child {
    font-weight: bold;
    text-align: right;
  }
`;
