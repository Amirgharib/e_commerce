/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-lone-blocks */
/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'
import '../componants/products.css'
import { useDispatch, useSelector } from 'react-redux'
import { getData } from './Store/productSlice';
import { addPost } from '../Pages/postsSlice';
import { Link } from 'react-router-dom';
import { getCategories } from '../Pages/categoriesSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';


export default function Products() {
    const products = useSelector((state) => state.data.product);
    const loading = useSelector((state) => state.data.loading);
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getData())
        dispatch(getCategories())
    }, [])



    return (
        <>


            <div className='products  '>
                {loading ?

                    <div class="loader">
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                        <div className="circle"></div>
                    </div>

                    : products.map((product) => (

                        <Link to={'post'} className='product' key={product.id} onClick={() => {
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
    <span>Details</span>
    <FontAwesomeIcon style={{color: "#000000",}} icon={faArrowRight}  />
</button>
                            </div>

                        </Link>
                    ))}


            </div>


        </>

    )
}
