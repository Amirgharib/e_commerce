/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../componants/products.css'
import { addPost } from './postsSlice';
import { fil } from './filterSlice';
import { loading } from '../componants/Store/productSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function ProductCategory() {

    // eslint-disable-next-line no-unused-vars
    const products = useSelector((state) => state.data.product);
    const dispatch = useDispatch();

    return (
        <>


        <div className='products ' style={{margin : '100px 0 0 0'}}>
            {loading ?

                <div class="loader">
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                    <div className="circle"></div>
                </div>

                : products.map((product) => (

                    <Link to={'/post'} className='product' key={product.id} onClick={() => {
                        dispatch(addPost(product))
                    }}>
                        <div className='img'><img src={product.thumbnail} /> <span className='category'>{product.category}</span> </div>
                        <p className='brand'> Brand  : {product.brand}</p>
                        <p className='title'>Title : {product.title}</p>
                        <div className='prices d-flex gap-3 justify-content-center '>
                            <div className=' d-flex gap-1'>
                                <div className='real-price'>
                                    {product.price}$
                                </div>

                                <div className='discount'> ({product.discountPercentage}%)</div>
                            </div>

                            <div className='dis-price'>
                                {product.price - (product.price * (product.discountPercentage / 100)).toFixed(1)}$

                            </div>

                        </div>



                        <div className='details'>
                            <button>
    <span>Continue</span>
    <FontAwesomeIcon icon={faArrowRight} />
</button>
                            </div>
                    </Link>
                ))}


        </div>


    </>
    )
}
