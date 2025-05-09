"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";
import { useCarrinho } from "@/context/CarrinhoContext";
import styles from "./Pagamento.module.css";

export default function Pagamento() {
  const router = useRouter();
  const [numeroCartaoFormatado, setNumeroCartaoFormatado] = useState("");

  const { carrinho } = useCarrinho();

  const total = carrinho.reduce(
    (acc, item) => acc + item.preco * item.quantidade,
    0
  );

  const formatarNumeroCartao = (value) => {
    // Remove tudo que não é número
    const numeros = value.replace(/\D/g, "").slice(0, 16);
  
    // Adiciona espaço a cada 4 dígitos
    const formatado = numeros.replace(/(\d{4})(?=\d)/g, "$1 ");
    setNumeroCartaoFormatado(formatado);
  };
  

  const validarCartao = () => {
    const numeroCartao = document
      .getElementById("numeroCartao")
      .value.replace(/\s/g, "");
    const cvv = document.getElementById("codigoSeguranca").value;
    const validade = document.getElementById("validade").value;
    const titular = document.getElementById("titular").value.trim();

    // Luhn check
    const luhnCheck = (num) => {
      let sum = 0;
      let shouldDouble = false;
      for (let i = num.length - 1; i >= 0; i--) {
        let digit = parseInt(num.charAt(i), 10);
        if (shouldDouble) {
          digit *= 2;
          if (digit > 9) digit -= 9;
        }
        sum += digit;
        shouldDouble = !shouldDouble;
      }
      return sum % 10 === 0;
    };

    if (!/^\d{16}$/.test(numeroCartao) || !luhnCheck(numeroCartao)) {
      alert("Número do cartão inválido!");
      return false;
    }

    if (!/^\d{3,4}$/.test(cvv)) {
      alert("Código de segurança inválido!");
      return false;
    }

    if (!/^\d{2}\/\d{2}$/.test(validade)) {
      alert("Data de validade inválida!");
      return false;
    } else {
      const [mes, ano] = validade.split("/").map(Number);
      const agora = new Date();
      const validadeDate = new Date(2000 + ano, mes - 1);
      if (validadeDate < new Date(agora.getFullYear(), agora.getMonth())) {
        alert("Cartão expirado!");
        return false;
      }
    }

    if (titular.length < 3) {
      alert("Nome do titular inválido!");
      return false;
    }

    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validarCartao()) {
      alert("Pagamento confirmado!");
      // Aqui você pode redirecionar ou chamar a API
    }
  };

  return (
    <Container fluid className={`${styles.pagamento} p-4`}>
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
        onClick={() => router.back()}
      >
        <i className="bi bi-arrow-left-circle"></i>
      </Button>

      <Row className="justify-content-center">
        <Col md={6}>
          <h1 className="text-center mb-4">Confirme o seu pagamento</h1>

          <h4 className="mb-3">Itens no carrinho:</h4>
          <ul className="list-group mb-4">
            {carrinho.map((item, index) => (
              <li
                key={index}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                {item.nome} ({item.tamanho}) - R$ {item.preco}
                <span className="badge bg-primary rounded-pill">
                  x{item.quantidade}
                </span>
              </li>
            ))}
            <li className="list-group-item d-flex justify-content-between">
              <strong>Total:</strong> <strong>R$ {total}</strong>
            </li>
          </ul>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label for="numeroCartao">Número do Cartão</Label>
              <Input
              type="text"
              id="numeroCartao"
              placeholder="1234 5678 9012 3456"
              value={numeroCartaoFormatado}
              onChange={(e) => formatarNumeroCartao(e.target.value)}
              required
            />

            </FormGroup>

            <FormGroup>
              <Label for="codigoSeguranca">Código de Segurança (CVV)</Label>
              <Input
                type="text"
                id="codigoSeguranca"
                placeholder="123"
                required
              />
            </FormGroup>

            <FormGroup>
              <Label for="validade">Data de Validade</Label>
              <Input type="text" id="validade" placeholder="MM/AA" required />
            </FormGroup>

            <FormGroup>
              <Label for="titular">Titular do Cartão</Label>
              <Input
                type="text"
                id="titular"
                placeholder="Nome impresso no cartão"
                required
              />
            </FormGroup>

            <Button color="success" type="submit" className="mt-3 w-100">
              Confirmar Pagamento
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
