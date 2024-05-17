/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import 'bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faBoxesPacking, faCartShopping, faHouse } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const cart = useSelector((state)=>state.carts)
    const post =useSelector((state)=>state.posts)
    return (
        <>
            <nav class="navbar  navbar-expand-lg ">
                <div class="container d-block gap-4 ">
                    <div className='d-flex justify-content-between gap-5 '>

                    <div className='d-flex justify-content-around align-items-center'>
                        <Link className='link' to={'/'}>
                            <a class="navbar-brand text-light fs-3" href="#">GOOSHOP</a>

                        </Link>
                        <div className='d-flex justify-content-around align-items-center gap-1 '>
                            <Link to={'/cart'}>

                                <FontAwesomeIcon icon={faCartShopping} className='shop me-1 text-light' />

                            </Link>
                            <p className='cart-lentgh'> {cart.length}  </p>

                        </div>
                    </div>

                    <div className='d-flex gap-3 '>
                    <li class="nav-item ">
                                <Link to={"/"} class="nav-link active mt-2 text-light" aria-current="page" href="#"><FontAwesomeIcon icon={faHouse} size='xl' style={{"--fa-primary-color": "#d5d9e2", "--fa-secondary-color": "#d5d9e2",}} /></Link>
                            </li>
                            <li class="nav-item ">
                            <div className='d-flex align-items-center gap-1 '>
                                <Link to={'/post'} class="nav-link text-light" href="#"><FontAwesomeIcon icon={faBoxesPacking} size="xl" style={{"--fa-primary-color": "#ffffff", "--fa-secondary-color": "#605c5c",}} /></Link>
                                <p className='cart-lentgh'> {post.length}  </p>
                                </div>
                            </li>
                    </div>
                    </div>


                </div>

            </nav>


        </>
    )
}
