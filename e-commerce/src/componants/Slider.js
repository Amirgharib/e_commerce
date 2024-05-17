/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import '../componants/slider.css'
import one from '../assets/slider_img_1.jpg'
import two from '../assets/slider_img_2.jpg'
export default function Slider() {
    return (
        <div className="carsou mt-4">

            <div id="carouselExampleIndicators" class="carousel slide carousel-fade">
                <div class="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div class="carousel-inner">
                    <div class="carousel-item active">

                        <div className='car d-block w-92'>

                        <img className='slide-img' src={one} />

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='car d-block w-92'>

                            <img className='slide-img' src={two} />

                        </div>
                    </div>
                    <div class="carousel-item">
                        <div className='car d-block w-92'>


                        <img className='slide-img' src={one} />
                        </div>
                    </div>
                </div>
                <a class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </a>
                <a class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </a>
            </div>
        </div>
    )
}
