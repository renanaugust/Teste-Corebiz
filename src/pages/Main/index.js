/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DevelopedBy from '../../components/DevelopedBy';
import {
  Container,
  ContainerFooter,
  ContainerDev,
  Title,
  List
} from '../../styles/styles';
import api from '../../services/api';

export default class Products extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await api.get('/products');
    const { data } = response;

    this.setState({
      products: data
    });
  }

  render() {
    const { products } = this.state;
    const style = {
      border: '1px solid #d5d8dc'
    };

    return (
      <>
        <Container>
          <Header />
        </Container>
        <Title>
          <h2>Produtos em destaque</h2>
        </Title>
        <List>
          {products.map(prod => (
            <li key={prod.productId} style={style}>
              <img src={prod.imageUrl} alt={prod.productName} />

              <div>
                <p>{prod.productName}</p>
                <p>
                  R$ <span>{prod.price}</span>
                </p>
              </div>
              <Link to={`/product/${decodeURIComponent(prod.productId)}`}>
                <button type="button">
                  COMPRAR <FaShoppingCart />
                </button>
              </Link>
            </li>
          ))}
        </List>
        <ContainerFooter>
          <Footer />
        </ContainerFooter>
        <ContainerDev>
          <DevelopedBy />
        </ContainerDev>
      </>
    );
  }
}
