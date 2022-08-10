import React, {Component} from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/plc.png";
import Ecommerce from "../../img/central.png";
import HOC from "../../img/cc1.png";
import MusicApp from "../../img/zeed1.png";
import{Link, useNavigate } from "react-router-dom";

function Portfolio (props) {
    const navigate = useNavigate();
    const portfolio1=()=>{
        navigate('/portfolios',{state:{id: 1, name: 'Efutures', develop: '2023' ,techno:'PHP,Laravel, CMS(Wordpress)', source:'https://www.plc.lk/', projectlogo:'https://www.plc.lk/wp-content/themes/PeoplesLeasing/pp/logo.png'}});
    }
    const portfolio2=()=>{
        navigate('/portfolios',{state:{id: 1, name: 'Earrow', develop: '2021' ,techno:'PHP,JS, CMS(Wordpress)', source:'https://www.cbs,cbsl.lk/'}});
    }
    const portfolio3=()=>{
        navigate('/portfolios',{state:{id: 1, name: 'Individual', develop: '2022' ,techno:'React, Boostrap', source:'#'}});
}
        const portfolio4=()=>{
            navigate('/portfolios',{state:{id: 1, name: 'Freelancing', develop: '2022' ,techno:'PHP, CMS(Wordpress)', source:'https://cccc.lk/'}});
}

            return (
            <div className="portfolio" id="portfolio">
                {/* heading */}
                <span>Recent Projects</span>
                <span>Portfolio</span>

                {/* slider */}
                <Swiper
                    spaceBetween={30}
                    slidesPerView={3}
                    grabCursor={true}
                    className="portfolio-slider"
                >
                    <SwiperSlide>

                        <div className="port-details">
                                <a onClick={()=>{portfolio1()}}><img src={Sidebar} alt="" /></a>
                            <h3>PLC Website <span>2021</span></h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="port-details">
                            <a onClick={()=>{portfolio2()}}><img src={Ecommerce} alt="" /></a>
                            <h3>CBSL Website<span>2022</span></h3>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="port-details">
                          <a onClick={()=>{portfolio3()}}> <img src={MusicApp} alt="" /></a>
                            <h3>Property Website<span>2022</span></h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="port-details">
                            <a onClick={()=>{portfolio4()}}> <img src={HOC} alt="" /></a>
                            <h3>Corporate Website<span>2022</span></h3>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        );

}

export default Portfolio;