/* eslint-disable no-unused-expressions */
/* eslint-disable no-self-assign */
/* eslint-disable no-const-assign */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import photo from '../assets/shopping_cart.9bdd8040b334d31946f4.png'
import "bootstrap";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, decrease, deleteCart, increase } from './cartSlice';
import '../Pages/cart.css'

import { Link } from 'react-router-dom';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Cart() {
    const carts = useSelector((state) => state.carts)

    const dispatch = useDispatch()

    const totalPrice = carts.reduce((acc, cart) => {
        acc += ((cart.price - (cart.price * (cart.discountPercentage / 100))) * cart.quantity)

        return acc
    }, 0)






    return (
        <>


            {carts.length > 0 ?

                <div className='mt-5 py-5  container tah'>

                    <table class="table table-striped ">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Product</th>
                                <th scope="col">Brand</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col">quantity</th>
                                <th scope="col">Total Price</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        {carts.map((cart) => (

                            <tbody>
                                <tr key={cart.id}>
                                    <th scope="row text-center">{ }</th>
                                    <td>
                                        <img src={cart.thumbnail} style={{ width: "70px", height: "70px" }} /> </td>
                                    <td>{cart.brand}</td>
                                    <td>{cart.price - (cart.price * (cart.discountPercentage / 100)).toFixed(2)} $</td>
                                    <td className=" " style={{ height: "20px" }}>
                                        <button class="btn-class-name" onClick={() => {
                                            dispatch(decrease(cart))
                                        }}>
                                            <span class="back"></span>
                                            <span class="front">-</span>
                                        </button>
                                        <div className="quantity" >{cart.quantity}</div>
                                        <button class="btn-class-name" onClick={() => {
                                            dispatch(increase(cart))
                                        }}>
                                            <span class="back"></span>
                                            <span class="front">+</span>
                                        </button>
                                    </td>
                                    <td>{((cart.price - (cart.price * (cart.discountPercentage / 100))) * cart.quantity).toFixed(2)} $</td>
                                    <td>
                                        <button class="button" onClick={()=>{
                                            dispatch(deleteCart(cart))
                                        }}>
                                        <FontAwesomeIcon icon={faTrash} className="svgIcon"/> 
                                        </button></td>
                                </tr>

                            </tbody>

                        ))}

                    </table>

                    <div className='box'>
                        <div className='total-price' >
                            <h2>Total Price : {totalPrice.toFixed(2)} $</h2>
                        </div>
                        <div className='clear-button d-flex gap-2'>
                            <button type="button" class="btn btn-danger" onClick={() => {
                                dispatch(clearCart())
                            }}>Clear Cart</button>
                            <button type="button" class="btn btn-success mx-2" >Buy Now</button>
                        </div>
                    </div>

                </div>
                : <div className="container empty-cart d-flex flex-culom">
                    <div className="img"><img src={photo} /></div>

                    <div><Link to={'/'} type="button" class="btn btn-success">Go To Shopping</Link></div>
                </div>
            }
        </>

    )
}
