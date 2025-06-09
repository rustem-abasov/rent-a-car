import React from 'react'
import './CarCard.scss'
import { PiArrowBendUpRight } from "react-icons/pi";




const CarCard = ({ car }) => {
    return (
        <div className='car-card'>
            <img src={car.image} alt="" className='car-image' />
            <h3>{car.name}</h3>
            <p>{car.fuel}</p>
            <div className='price-options'>
                <div className='price-box'>
                    <p>3-7 gun</p>
                    <strong>{car.price1} ₼</strong>
                </div>
                <div className='price-box'>
                    <p>3-7 gun</p>
                    <strong>{car.price2} ₼</strong>
                </div>
                <div className='price-box'>
                    <p>3-7 gun</p>
                    <strong>{car.price3} ₼</strong>
                </div>
            </div>
            <button type="button" className='order-button gradient-bg'>
                Sifaris Et
                <PiArrowBendUpRight className='icon-arrow' />
            </button>
        </div>
    )
}

export default CarCard