/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaRegUser } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import logo from "../image/logo-corebiz.png";

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <img src={logo} alt="logo" />{" "}
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">Categoria 01</a>
        </li>
        <li>
          <a href="#">Categoria 02</a>
        </li>
        <li>
          <a href="#">Categoria 03</a>
        </li>
        <li>
          <a href="#">Categoria 04</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <FaRegUser size={25} /> Minha conta
          </a>
        </li>
        <li>
          <a href="#">
            <FiShoppingCart size={25} />
          </a>
        </li>
      </ul>
    </>
  );
}
