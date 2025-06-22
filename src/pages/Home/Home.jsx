import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <div className="background">
        <div className="text-home">
          <h1 className="slogan">
            Arzularınızdakı Maşını, Ən Uyğun Qiymətə Kiralayın!
          </h1>

          <div>
            <p className="text-content">
              Şirkətimiz 2015-ci ildən etibarlı avtomobil icarəsi xidmətləri ilə
              fəaliyyət göstərir və müştərilərinə geniş avtomobil seçimi təqdim
              edir. Hava limanı və regionlara transfer, 24/7 dəstək xidmətləri
              ilə yüksək keyfiyyətli xidmət təmin edirik.
            </p>
          </div>

          <div>
            <button className="gradient-bg btn" type="button">
              Ətraflı bax
            </button>
          </div>
        </div>
      </div>

      <div className="container-text">
        <div className="home-section">
          <div className="about-section ">
            <div className="head-text">
              <h2>BİZ KİMİK?</h2>
            </div>
            <div className="about-content ">
              <h3>Sürətli və Etibarlı Nəqliyyat Həlləri</h3>
            </div>
            <div className="about-desc ">
              <p>
                Şirkətimiz 2015-ci ildən etibarlı avtomobil icarəsi və transfer
                xidmətləri ilə müştərilərinə geniş seçim və yüksək keyfiyyət
                təqdim edir.
              </p>
            </div>

            <div className="box ">
              <div>
                <h4 className="box-left">Etibarlı Xidmət</h4>
              </div>
              <div>
                <h4 className="box-center gradient-bg">Geniş Seçim İmkanı</h4>
              </div>
              <div>
                <h4 className="box-right">Müştəri Məmnuniyyəti</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rectangle ">
        
      </div>

      
    </div>
  );
};

export default Home;
