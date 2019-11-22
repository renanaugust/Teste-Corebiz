/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FaUserAlt, FaShoppingCart } from 'react-icons/fa';
import logo from '../image/logo-header.svg';

export default function Header() {
  return (
    <>
      <ul>
        <li>
          <img src={logo} alt="logo" />{' '}
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">categoria 01</a>
        </li>
        <li>
          <a href="#">categoria 02</a>
        </li>
        <li>
          <a href="#">categoria 03</a>
        </li>
        <li>
          <a href="#">categoria 04</a>
        </li>
      </ul>
      <ul>
        <li>
          <a href="#">
            <FaUserAlt size={20} /> Minha conta
          </a>
        </li>
        <li>
          <a href="#">
            <FaShoppingCart size={20} />
          </a>
        </li>
      </ul>
    </>
  );
}
