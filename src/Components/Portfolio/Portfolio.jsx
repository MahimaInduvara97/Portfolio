import React, {Component} from 'react';
import './Portfolio.css';
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/plc.png";
import Ecommerce from "../../img/central.png";
import cccc from "../../img/cc1.png";
import zeed from "../../img/zeed1.png";
import{Link, useNavigate } from "react-router-dom";

function Portfolio (props) {
    const navigate = useNavigate();
    const portfolio1=()=>{
        navigate('/portfolios',{state:{id: 1, name: 'EFutures', develop: '2023' ,techno:'PHP,Laravel, CMS(Wordpress)', source:'https://www.plc.lk/', projectlogo:'https://www.plc.lk/wp-content/themes/PeoplesLeasing/pp/logo.png'}});
    }
    const portfolio2=()=>{
        navigate('/portfolios',{state:{id: 1, name: 'Earrow', develop: '2021' ,techno:'PHP,JS, CMS(Wordpress)', source:'https://www.cbs.cbsl.lk/', projectlogo:'https://cbs.cbsl.lk/wp-content/uploads/2021/03/CBS-LOgoo-1.png'}});
    }
    const portfolio3=()=>{
        navigate('/portfolios',{state:{id: 1, name: 'Freelance', develop: '2022' ,techno:'React, Boostrap', source:'#'}});
}
        const portfolio4=()=>{
            navigate('/portfolios',{state:{id: 1, name: 'Freelance', develop: '2022' ,techno:'PHP, CMS(Wordpress)', source:'https://cccc.lk/', projectlogo:'https://cccc.lk/wp-content/uploads/2022/05/Corporate-ConsultantsLogo.png'}});
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
                            <h3>PLC <span>2021</span></h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="port-details">
                            <a onClick={()=>{portfolio2()}}><img src={Ecommerce} alt="" /></a>
                            <h3>CBSL <span>2022</span></h3>
                        </div>

                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="port-details">
                          <a onClick={()=>{portfolio3()}}> <img src={zeed} alt="" /></a>
                            <h3>ZEED <span>2022</span></h3>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="port-details">
                            <a onClick={()=>{portfolio4()}}> <img src={cccc} alt="" /></a>
                            <h3>CCCC <span>2022</span></h3>
                        </div>

                    </SwiperSlide>
                </Swiper>
            </div>
        );

}

export default Portfolio;