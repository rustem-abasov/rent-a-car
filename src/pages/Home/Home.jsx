import React from 'react'
import "./Home.scss";
import img from '../../assets/day-exterior-4 1.jpg'
import arrow from '../../assets/arrow.svg'
import icon1 from '../../assets/icon set.svg'
import iconcar from '../../assets/icon car.svg'
import transicon from '../../assets/icon transf.svg'
import arrowr from '../../assets/arrow right.svg'




const Home = () => {
    return (
        <div>
            <div className='background'>
                <h1 className='slogan'>Arzularınızdakı Maşını, Ən Uyğun Qiymətə Kiralayın!</h1>

                <div>
                    <p className='text-content'>Şirkətimiz 2015-ci ildən etibarlı avtomobil icarəsi xidmətləri ilə fəaliyyət göstərir və müştərilərinə geniş avtomobil seçimi təqdim edir. Hava limanı və regionlara transfer, 24/7 dəstək xidmətləri ilə yüksək keyfiyyətli xidmət təmin edirik.</p>
                </div>


                <div>
                    <button className='gradient-bg btn' type="button">Ətraflı bax</button>
                </div>

            </div>

            <div className="container-text">
                <div className='home-section'>
                    <div className='about-section '>
                        <div className='head-text'>
                            <h2>BİZ KİMİK?</h2>
                        </div>
                        <div className='about-content '>
                            <h3>Sürətli və Etibarlı Nəqliyyat Həlləri</h3>
                        </div>
                        <div className='about-desc '>
                            <p >
                                Şirkətimiz 2015-ci ildən etibarlı avtomobil icarəsi və transfer xidmətləri ilə müştərilərinə geniş seçim və yüksək keyfiyyət təqdim edir.
                            </p>
                        </div>

                        <div className='box d-flex'>
                            <div>
                                <h4 className='box-left'>Etibarlı Xidmət</h4>
                            </div>
                            <div>
                                <h4 className='box-center gradient-bg'>Geniş Seçim İmkanı</h4>
                            </div>
                            <div>
                                <h4 className='box-right'>Müştəri Məmnuniyyəti</h4>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

            <div className='rectangle '>
                {/* <div className='day-exterior'>
                    <img src={img} alt="car" />
                </div> */}

                <div className='hero-text'>
                    <h3>Peşəkar və <span>Etibarlı</span> Nəqliyyat Xidmətləri</h3>
                </div>

                <div className='arrow-left'>
                    <img src={arrow} alt="arrow" />
                </div>

                <div className='icon-set'>
                    <div className='icon-left'>
                        <img src={icon1} alt="" />
                    </div>
                    <div >
                        <h4 className='icon-title' >
                            Rahat və Etibarlı Xidmət
                        </h4>
                        <p className='icon-text'>
                            Məqsədimiz müştərilərimizin məmnuniyyətini təmin edərək, onların səyahətini daha komfortlu etməkdir.
                        </p>

                    </div>
                </div>

                <div className='car-icon'>
                    <div >
                        <h4 className='car-title' >
                            Avtomobil Seçimi
                        </h4>
                        <p className='car-text'>
                            20-dən çox brend avtomobil ilə müştərilərimizə seçim imkanı yaradırıq.
                        </p>
                        <div className='icon-right'>
                            <img src={iconcar} alt="" />
                        </div>
                    </div>
                </div>

                <div className='arrow-right'>
                    <img src={arrowr} alt="arrow" />
                </div>

                <div className='car-box'>
                    <div >

                        <div className='box-icon'>
                            <img src={transicon} alt="" />
                        </div>
                        <h4 className='box-title' >
                            Transfer Xidmətləri
                        </h4>
                        <p className='box-text'>
                            Hava limanı və regionlara rahat və sürətli transfer xidmətləri təklif edirik.
                        </p>

                    </div>
                </div>
            </div>

            <div>
                <div>

                </div>
            </div>
        </div>

    )
}

export default Home