"use client";
import TodasAsPizzasTopo from "@/components/TodasAsPizzasTopo";
import RoladorDePizzas from "@/components/RoladorDePizzas";
import { Container, Button } from "reactstrap";
import IntersecaoTitulo from "@/components/IntersecaoTitulo";
import RoladorDeBebidas from "@/components/RoladorDeBebidas";
import useFadeInObserver from "@/hooks/UseFadeInObserver";
import IndicadorCarrinho from "@/components/IndicadorCarrinho";
import MapaPizza from "@/components/MapaPizza";
import { useRouter } from "next/navigation";
export default function PopularFoodPage() {
  const router = useRouter();
  useFadeInObserver();
  return (
    <Container fluid className="p-0">
      <Button
        color="secondary"
        style={{
          position: "fixed",
          top: "20px",
          left: "20px",
          zIndex: 9999,
          borderRadius: "50%",
          width: "50px",
          height: "50px",
          padding: "0",
          fontSize: "24px",
        }}
        onClick={() => router.push("../")}
      >
        <i className="bi bi-arrow-left-circle"></i>
      </Button>
      <MapaPizza />
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
