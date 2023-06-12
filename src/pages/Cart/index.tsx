import { ShoppingCart, Trash } from "phosphor-react";
import { Header } from "../../components/Header";
import {
  Container,
  Content,
  Title,
  ProductsCartList,
  Form,
  Button,
} from "./styles";

export function Cart() {
  return (
    <>
      <Header hasButton={false} />
      <Container>
        <Content>
          <Title>
            Carrinho <ShoppingCart size={32} />
          </Title>

          <ProductsCartList>
            <thead>
              <tr>
                <td width="10%">Qtd</td>
                <td width="60%">Produto</td>
                <td>Preço</td>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Saia</td>
                <td>R$ 150,00</td>
                <td>
                  <button>
                    <Trash size={18} />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td>Saia</td>
                <td>R$ 150,00</td>
                <td>
                  <button>
                    <Trash size={18} />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td>Saia</td>
                <td>R$ 150,00</td>
                <td>
                  <button>
                    <Trash size={18} />
                  </button>
                </td>
              </tr>

              <tr>
                <td>1</td>
                <td>Saia</td>
                <td>R$ 150,00</td>
                <td>
                  <button>
                    <Trash size={18} />
                  </button>
                </td>
              </tr>
            </tbody>
          </ProductsCartList>
          <Form>
            <button>continue comprando</button>
            <Button type="submit" to="/checkout">
              Finalizar compra
            </Button>
          </Form>
        </Content>
      </Container>
    </>
  );
}
