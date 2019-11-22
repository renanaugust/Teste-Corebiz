import React from "react";

// import { Container } from './styles';

export default function Footer() {
  return (
    <>
      <div>
        <h2>Newsletter</h2>
        <br />
        <p>Receba nossas promoções e novidades. Inscreva-se</p>
      </div>
      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
