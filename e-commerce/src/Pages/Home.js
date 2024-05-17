import React from 'react'
import Slider from '../componants/Slider'
import '../Pages/home.css'
import Products from '../componants/Products'
import Sidebar from '../Sidebar'
 



export default function Home() {
    return (
        <div className='d-flex '>
        <Sidebar />
        <div className='continer home'>
            <div className='body'>

            <Slider />
            <Products />
            </div>
            
        </div>
        </div>
    )
}
