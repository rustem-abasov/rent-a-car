import "./Header.scss";
import React from "react";
import { FaInstagram, FaFacebook, FaWhatsapp, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import logo from '../../assets/Rent_A_Car_Logo.png'



const Header = () => {
    return (
        <header className='header'>
            <div className=" gradient-bg header-top">
                <div className='right-section  '>
                    <div className='contact-phone'>
                        <FaPhoneAlt />
                        <span className='contact-number'>055 456 77 88</span>
                    </div>
                    <div className='social-box'>
                        <FaInstagram className='social-icon1' />
                        <FaFacebook className='social-icon1' />
                        <FaWhatsapp className='social-icon1' />
                    </div>
                </div>
            </div>
            <div className='header-container'>
                <div className='left-section'>
                    <img src={logo} alt="" className='logo' />
                </div>
                <div className="middle-section">
                    <nav className='menu'>
                        <Link to='/'>Əsas səhifə</Link>
                        <Link to='/masinlar'>Maşınlar </Link>
                        <Link to='/haqqimizda'>Haqqımızda</Link>
                        <Link to='/elaqe'>Əlaqə</Link>
                        <Link to='teklifler'>Təkliflər</Link>
                    </nav>
                </div>
                <div className="right-section">
                    <div>
                        <button className='gradient-bg btn' type="button">Əlaqə</button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;