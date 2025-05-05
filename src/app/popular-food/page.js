"use client";
import TodasAsPizzasTopo from "@/components/TodasAsPizzasTopo";
import RoladorDePizzas from "@/components/RoladorDePizzas";
import { Container } from "reactstrap";
import IntersecaoTitulo from "@/components/IntersecaoTitulo";
import RoladorDeBebidas from "@/components/RoladorDeBebidas";
import useFadeInObserver from "@/hooks/UseFadeInObserver";
import IndicadorCarrinho from "@/components/IndicadorCarrinho";
export default function PopularFoodPage() {
  useFadeInObserver();
  return (
    <Container fluid className="p-0">
      <TodasAsPizzasTopo />
      <RoladorDePizzas titulo="Pizzas Clássicas" idsDasPizzas={[1, 2, 3]} />
      <IntersecaoTitulo
        conteudo={"Pizzas Especiais"}
        background_url={"/pizza-banner1.jpg"}
      />
      <RoladorDePizzas titulo="Pizzas Especiais" idsDasPizzas={[3]} />
      <IntersecaoTitulo
        conteudo={"Bebidas disponíveis"}
        background_url={"/bebidas.jpg"}
      />
      <RoladorDeBebidas></RoladorDeBebidas>
      <IndicadorCarrinho></IndicadorCarrinho>
    </Container>
  );
}
