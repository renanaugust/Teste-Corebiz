/* eslint-disable react/static-property-placement */
/* eslint-disable react/state-in-constructor */
/* eslint-disable no-console */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FaShoppingCart } from 'react-icons/fa';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import DevelopedBy from '../../components/DevelopedBy';
import {
  Container,
  ContainerFooter,
  ContainerDev,
  Product
} from '../../styles/styles';
import api from '../../services/api';

export default class ProductApi extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        prod: PropTypes.string
      })
    }).isRequired
  };

  state = {
    product: []
  };

  async componentDidMount() {
    const { match } = this.props;
    const p = decodeURIComponent(match.params.prod);

    const response = await api.get(`/product/${p}`);
    const { data } = response;

    this.setState({
      product: data
    });
    console.log(data);
  }

  render() {
    const { product } = this.state;
    return (
      <>
        <Container>
          <Header />
        </Container>
        <Product>
          {product.map(pr => (
            <li key={pr.productId}>
              <div>
                <img src={pr.imageUrl} alt={pr.productName} />
              </div>
              <div>
                <p>{pr.productName}</p>
                <p>
                  R$ <span>{pr.price}</span>
                </p>
                <button type="button">
                  COMPRAR <FaShoppingCart />
                </button>
              </div>
            </li>
          ))}
        </Product>
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
