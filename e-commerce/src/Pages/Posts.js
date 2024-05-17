/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import photo from '../assets/shopping_cart.9bdd8040b334d31946f4.png'

import { useDispatch, useSelector } from 'react-redux'
import '../Pages/posts.css'
import { addCart } from './cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'


export default function Posts() {
    const carts = useSelector((state) => state.carts)
    const posts = useSelector((state) => state.posts)
    console.log(posts)

    const dispatch = useDispatch()


    return (

        <>
        
       {posts.length > 0 ? 
        <div className='posts container '>



            {posts.map((post) => (

                <div className='post container'>
                    <div className='imges'>
                        <img className='one' src={post.thumbnail} />
                        <div className='photos'>
                            {post.images.map((img) => (
                                <img src={img} />
                            ))}



                        </div>
                    </div>


                    <div className='decription'>

                        <div className='title'><h2>{post.title}</h2> </div>
                        <div className='spacific'>
                            <div> {post.description}</div>
                            <div className='details'>
                                <div className='rating'><span className='dietails-color'>Rating : </span> {post.rating}</div>
                                <div className='brand'><span className='dietails-color'>Brand :</span>  {post.brand}</div>
                                <div className='category'><span className='dietails-color'>Category : </span>  {post.category}</div>
                            </div>
                        </div>
                        <div className='prices'>
                            <div><span className='real-price'>{post.price}$</span>  (inclusive of all taxes)</div>
                            <div className='mt-2'> <span className='discounted-price'>
                                {post.price - (post.price * (post.discountPercentage / 100)).toFixed(1)}$

                            </span> <span className='discounted'> ({post.discountPercentage}% OFF)</span></div>
                        </div>
                        <div className='buy'>
                            <div className='quantaty'></div>
                            <div className='butns d-flex gap-3 mt-4'>


                                <button class="CartBtn" onClick={() => {
                                    dispatch(addCart(post))
                                }}>
                                    <span class="IconContainer">
                                        <FontAwesomeIcon icon={faCartShopping} style={{color: "#000000"}} className='cart' />
                                    </span>
                                    <p class="text">Add to Cart</p>
                                </button>


                            </div>
                        </div>


                    </div>

                </div>
            ))}


        </div>
: <div className="container empty-cart d-flex flex-culom">
<div className="img"><img src={photo} /></div>

<div><Link to={'/'} type="button" class="btn btn-success">Go To Shopping</Link></div>
</div>
}
        </>
    )
}
