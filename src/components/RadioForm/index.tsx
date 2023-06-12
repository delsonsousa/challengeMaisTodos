import { Check } from "phosphor-react";
import { Products } from "../../queries/product/types";

import {
  RadioContainer,
  RadioGroupItem,
  Label,
  RadiogroupIndicator,
} from "./styles";
import { priceFormatter } from "../../utils/formatter";

type RadioProps = {
  product: Products;
};

export function RadioForm({ product }: RadioProps) {
  return (
    <RadioContainer>
      <RadioGroupItem value={product.name} id={String(product.id)}>
        <RadiogroupIndicator asChild>
          <Check size={24} />
        </RadiogroupIndicator>
      </RadioGroupItem>
      <Label htmlFor={String(product.id)}>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={product.photo} />
              </td>
              <td width="100%">{product.name}</td>
              <td>{priceFormatter.format(product.price)}</td>
            </tr>
          </tbody>
        </table>
      </Label>
    </RadioContainer>
  );
}
