import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 90px;
  padding: 10px 100px;
  border-bottom: 1px solid #d5d8dc;

  ul {
    display: flex !important;
  }
  li {
    display: flex !important;
    list-style: none;
    align-items: center;
    padding: 0 20px;
  }

  li a {
    text-decoration: none;
    color: #797979;
  }
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 165px;
  padding: 10px 100px;
  border-bottom: 1px solid #d5d8dc;
  background: #ef7460;
  color: #fff;

  form {
    display: flex;
    align-items: center;
  }

  form input {
    width: 350px;
    height: 50px;
    border-radius: 2px;
    border: none;
    padding: 0 20px;
    margin-right: 20px;
  }

  form button {
    width: 200px;
    height: 50px;
    border-radius: 2px;
    border: none;
    background: #fff;
    color: #ef7460;
    font-size: 15px;
    font-weight: bold;
  }
  form button:hover {
    background: #f2f4f4;
  }
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    width: 230px;
    margin-right: 10px;
  }
  div:nth-child(1) h2 {
    letter-spacing: 5px;
  }
`;

export const ContainerDev = styled.div`
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f2f2f2;
  color: #222222;
`;

export const Title = styled.div`
  margin-top: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const List = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  margin-top: 80px;
  margin-bottom: 184px;
  margin-right: 10px;
  justify-content: space-between;
  padding: 0 100px;

  li {
    padding: 20px;
    height: 399px;
    width: 220px;
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }

  li:hover {
    box-shadow: 0px 0px 10px #d5d8dc;
  }

  div {
    margin: auto 0 0 0;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
  }

  div p:nth-child(1) {
    color: #222222;
    font-size: 15px;
    margin-bottom: 20px;
    font-weight: bold;
  }

  div p:nth-child(2) {
    color: #ef7460;
    font-size: 15px;
    font-weight: bold;
  }

  div p:nth-child(2) span {
    color: #ef7460;
    font-size: 24px;
    font-weight: bold;
  }

  img {
    display: block;
    height: 195px;
    width: 210px;
  }

  button {
    margin-top: 30px;
    width: 200px;
    height: 50px;
    background: #ef7460;
    color: #fff;
    border-radius: 3px;
    border: none;
  }
`;

export const Product = styled.ul`
  padding: 0 100px;

  li {
    padding: 20px;
    flex-direction: row;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  div:nth-child(1) img {
    width: 454px;
    height: 454px;
  }

  div:nth-child(1) {
    margin-top: 80px;
    width: 570px;
    height: 570px;
    padding: 20px;
  }
  div:nth-child(2) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
  div:nth-child(2) p:nth-child(1) {
    font-size: 40px;
    margin-bottom: 60px;
  }

  div:nth-child(2) p:nth-child(2) {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 40px;
    color: #ef7460;
  }
  div:nth-child(2) p:nth-child(2) span {
    font-size: 30px;
    font-weight: bold;
  }

  div:nth-child(2) button {
    margin-top: 30px;
    width: 200px;
    height: 50px;
    background: #ef7460;
    color: #fff;
    border-radius: 3px;
    border: none;
  }
`;
