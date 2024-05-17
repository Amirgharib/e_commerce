/* eslint-disable array-callback-return */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-use-before-define */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";
import "../src/sidebar.css"
import { useDispatch, useSelector } from "react-redux";

import { fetchCatigories, getCategories } from "./Pages/categoriesSlice";
import { Link } from "react-router-dom";
import { filter } from "./componants/Store/productSlice";





export default function Sidebar() {


    const categories = useSelector((state) => state.categoriesData.categories);

    const products = useSelector((state) => state.data.product);

    const dispatch = useDispatch();
    const [active, setACtive] = useState(true)
    useEffect(() => {

        dispatch(getCategories())
        dispatch(fetchCatigories())
    }, [])
    const toggle = () => {
        // menu_toggle.classList.toggle('is-active');
        // sidebar.classList.toggle('is-active');
        setACtive(!active)
    };



    return (



        <div class="app">
            <div id="menu-toggle" className={active ? "" : 'is-active'} onClick={() => {
                toggle()
            }}>
                <div class="hamburger">
                    <span></span>
                </div>
            </div>

            <aside id="sidebar" className={active ? "" : 'is-active'}>
                

                    <h2 to={'/filter'} className="tit"> Category-Menu</h2>
              

                <nav class="menu">


                    {categories.map((category) => (
                        <>

                            <Link to={'filter'} onClick={() => {
                                products.map((product) => (
                                    dispatch(filter(category))
                                ))
                            }} class="menu-item">{category}</Link>
                        </>
                    ))}
                    {/* <a href="#" class="menu-item is-active">Home</a>
            <a href="#" class="menu-item">About</a>
            <a href="#" class="menu-item">Portfolio</a>
            <a href="#" class="menu-item">Contact</a> */}
                </nav>

            </aside>


        </div>



    )
}
