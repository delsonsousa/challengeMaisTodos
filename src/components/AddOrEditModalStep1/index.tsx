import * as Dialog from "@radix-ui/react-dialog";
import { Controller, useForm } from "react-hook-form";
import * as z from "zod";

import {
  CloseButton,
  Content,
  Description,
  Overlay,
  ProductListContainer,
  Buttonscontainer,
  RadioGroupRoot,
} from "./styles";
import { RadioForm } from "../RadioForm";

import { useGetProducts } from "../../queries/product";
import { X } from "phosphor-react";
import { Products } from "../../queries/product/types";

export function AddOrEditModalStep1() {
  const { data } = useGetProducts();
  const { control, register, reset, handleSubmit } = useForm();

  async function handleSelectProduct(dataSubmit: Products) {
    // await createTransactions({
    //   description,
    //   category,
    //   price,
    //   type,
    // });
    // reset();
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>Altere os produtos</Dialog.Title>
        <Description>
          Selecione o produto ou clique em Adicionar produto
        </Description>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <ProductListContainer>
          <form>
            {data?.map((product) => (
              <Controller
                control={control}
                name={product.name}
                key={product.id}
                render={({ field }) => (
                  <RadioGroupRoot
                    key={product.id}
                    value={field.value}
                    aria-label="View density"
                  >
                    <RadioForm key={product.id} product={product} />
                  </RadioGroupRoot>
                )}
              />
            ))}
          </form>
        </ProductListContainer>

        <Buttonscontainer>
          <button>Cancelar</button>
          <button type="submit">Adicionar produto</button>
        </Buttonscontainer>
      </Content>
    </Dialog.Portal>
  );
}
