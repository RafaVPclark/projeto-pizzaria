"use client";
import { Container } from "reactstrap";
import SpecialOffer from "@/components/SpecialOffer";
import useFadeInObserver from "@/hooks/UseFadeInObserver";
export default function Home() {
  useFadeInObserver();
  return <Container fluid className="p-0"></Container>;
}
