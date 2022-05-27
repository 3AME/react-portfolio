import React from "react";
import "./testimonials.css";
import AVTR1 from "../../assets/avatar1.jpg";
import AVTR2 from "../../assets/avatar2.jpg";
import AVTR3 from "../../assets/avatar3.jpg";
import AVTR4 from "../../assets/avatar4.jpg";

// import Swiper core and required modules
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

// import { Swiper, SwiperSlide } from 'swiper/react';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// import 'swiper/css/scrollbar';

const data = [
  {
    avatar: AVTR1,
    name: "Tina Snow",
    review:
      "Focused ultrasound air pressure is a non-contact tactile technology, which enables easy mid-air interactions with rich multisensory feedback. It has also its limitations, which must be taken into account. Ultrasound-based haptics can be used also for automotive applications, e.g., to enable interaction with car controls while not removing eyes off the road, or entertainment for passengers. As car manufacturers are transitioning towards digital user interfaces employing touchscreens for all adjustments, the inherent tactile feedback of traditional buttons and knobs is lost. Ultrahaptics is targeting also the automotive market. New concepts and applications are needed. Could ultrahaptics be useful and replace current user interfaces in cars? The exact topic can be decided together with the group and the client. The senior researcher working on the area will provide a kick-off introduction, with demos if you wish (using face masks etc.), and is excited to innovate with you.",
  },
  {
    avatar: AVTR2,
    name: "Jari",
    review:
      "Focused ultrasound air pressure is a non-contact tactile technology, which enables easy mid-air interactions with rich multisensory feedback. It has also its limitations, which must be taken into account. Ultrasound-based haptics can be used also for automotive applications, e.g., to enable interaction with car controls while not removing eyes off the road, or entertainment for passengers. As car manufacturers are transitioning towards digital user interfaces employing touchscreens for all adjustments, the inherent tactile feedback of traditional buttons and knobs is lost. Ultrahaptics is targeting also the automotive market. New concepts and applications are needed. Could ultrahaptics be useful and replace current user interfaces in cars? The exact topic can be decided together with the group and the client. The senior researcher working on the area will provide a kick-off introduction, with demos if you wish (using face masks etc.), and is excited to innovate with you.",
  },
  {
    avatar: AVTR3,
    name: "Anna Snow",
    review:
      "Focused ultrasound air pressure is a non-contact tactile technology, which enables easy mid-air interactions with rich multisensory feedback. It has also its limitations, which must be taken into account. Ultrasound-based haptics can be used also for automotive applications, e.g., to enable interaction with car controls while not removing eyes off the road, or entertainment for passengers. As car manufacturers are transitioning towards digital user interfaces employing touchscreens for all adjustments, the inherent tactile feedback of traditional buttons and knobs is lost. Ultrahaptics is targeting also the automotive market. New concepts and applications are needed. Could ultrahaptics be useful and replace current user interfaces in cars? The exact topic can be decided together with the group and the client. The senior researcher working on the area will provide a kick-off introduction, with demos if you wish (using face masks etc.), and is excited to innovate with you.",
  },
  {
    avatar: AVTR4,
    name: "Iman Snow",
    review:
      "Focused ultrasound air pressure is a non-contact tactile technology, which enables easy mid-air interactions with rich multisensory feedback. It has also its limitations, which must be taken into account. Ultrasound-based haptics can be used also for automotive applications, e.g., to enable interaction with car controls while not removing eyes off the road, or entertainment for passengers. As car manufacturers are transitioning towards digital user interfaces employing touchscreens for all adjustments, the inherent tactile feedback of traditional buttons and knobs is lost. Ultrahaptics is targeting also the automotive market. New concepts and applications are needed. Could ultrahaptics be useful and replace current user interfaces in cars? The exact topic can be decided together with the group and the client. The senior researcher working on the area will provide a kick-off introduction, with demos if you wish (using face masks etc.), and is excited to innovate with you.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>
      <div className="container testimonials__container">
        {data.map(({ avatar, name, review }, index) => {
          return (
            <article key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </article>
          );
        })}
      </div>
      {/* <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </section>
  );
};

export default Testimonials;
