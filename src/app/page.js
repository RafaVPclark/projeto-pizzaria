"use client";
import { Container } from "reactstrap";
import SpecialOffer from "@/components/SpecialOffer";
import PopularFood from "@/components/PopularFood";
import SobreNos from "@/components/SobreNos";
import Feedback from "@/components/Feedback";
import useFadeInObserver from "@/hooks/UseFadeInObserver";
export default function Home() {
  useFadeInObserver();
  return (
    <Container fluid className="p-0">
      <SpecialOffer></SpecialOffer>
      <PopularFood></PopularFood>
      <SobreNos></SobreNos>
      <Feedback></Feedback>
    </Container>
  );
}
