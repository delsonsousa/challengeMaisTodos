import { Container, Item, Price, Button } from "./styles";

export function PocketCart() {
  return (
    <Container>
      <Item>Voce possui</Item>
      <div>
        <p>TOTAL</p>
        <Price>R$150,00</Price>
      </div>
      <form>
        <Button to={"/cart"} type="submit">
          Carrinho
        </Button>
      </form>
    </Container>
  );
}
