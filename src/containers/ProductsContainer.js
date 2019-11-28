import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropTypes from 'prop-types';
import { actAddToCart, actChangeMessage, actFetchProducts } from './../actions/index';
import callApi from './../utils/apiCaller';

class ProductsContainer extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         products: []
    //     };
    // }

    componentDidMount() {
        callApi('products', 'GET', null).then(res => {
            // this.setState({
            //     products: res.data
            // });
            this.props.fetchAllProducts(res.data);
        });
    }
    render() {
        var { products } = this.props;
        // var { products } = this.state;
        return (
            <Products>
                {this.showProducts(products)}
            </Products>
        );
    }

    showProducts(products) {
        var result = null;
        var { onAddToCart, onChangeMessage } = this.props;
        if (products.length > 0) {
            result = products.map((product, index) => {
                return <Product
                    key={index}
                    product={product}
                    onAddToCart={onAddToCart}
                    onChangeMessage={onChangeMessage}
                />
            });
        }
        return result;
    }

}

ProductsContainer.propTypes = {
    products: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
            price: PropTypes.number.isRequired,
            inventory: PropTypes.number.isRequired,
            rating: PropTypes.number.isRequired
        })
    ).isRequired,
    onAddToCart: PropTypes.func.isRequired,
    onChangeMessage: PropTypes.func.isRequired
}

const mapStateToProps = state => {
    return {
        products: state.products
    }
}

const mapDispatchToProps = (dispatch, props) => {
    return {
        onAddToCart: (product) => {
            dispatch(actAddToCart(product, 1));
        },
        onChangeMessage: (message) => {
            dispatch(actChangeMessage(message));
        },
        fetchAllProducts : (products) => {
            dispatch(actFetchProducts(products));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
