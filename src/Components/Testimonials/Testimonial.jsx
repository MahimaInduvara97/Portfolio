import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import profilePic1 from "../../img/profile1.jpg";
import profilePic2 from "../../img/profile2.jpg";
import profilePic3 from "../../img/profile3.jpg";
import profilePic4 from "../../img/profile4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: profilePic1,
      review:
        "Great Service. Can Customize everything according to your Requirements. 100% recommended 👍😊",
    },
    {
      img: profilePic2,
      review:
        "Highly recommended 🔥😏👌",
    },
    {
      img: profilePic3,
      review:
        " Mahima did a fantastic job creating a new website for Petcare Center. A fantastic service, we would highly recommend and we will continue to work with him.",
    },
    {
      img: profilePic4,
      review:
        "Mahima created our website by talking to us often and asking our opinions. The service was given to us in very accordance with the money and it’s very respect. We highly recommend him .",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>I always Provide </span>
        <span>Excellent Service </span>
        <span>for my clients !!!</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={2}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;
