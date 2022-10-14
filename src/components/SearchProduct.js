import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { products } from '../db.json'
import ProductItem from './ProductItem';

const SearchProduct = (props) => {
    const [searchTerm, setSearchTerm] = useState('Athletic shoes')

    const handleSearch = (e) => {
        e.preventDefault()
        setSearchTerm('')
    }
    return (
        <>
            <div className="hero has-background-primary-dark">
                <div className="hero-body container">
                    <h4 className="title"> Check out Our Shoe Collection!</h4>
                    <input value={searchTerm} onKeyPress={e => setSearchTerm(e.target.value)} placeholder='Search Shoe' />
                    <button onClick={() => handleSearch}>Search</button>
                </div>
            </div>
            <br />
            <div className="container">
                <div className="column columns is-multiline">
                    {products && products.length ? (
                        products.filter(p => p.name === searchTerm).map((product, index) => (
                            <ProductItem
                                product={product}
                                key={index}
                            // addToCart={props.context.addToCart}
                            />
                        ))
                    ) : (
                        <div className="column">
                            <span className="has-text-warning	">
                                Enter Product to Search!
                            </span>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default SearchProduct