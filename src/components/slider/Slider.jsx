import React, { useRef, useEffect } from "react"

import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";



const Slider = ({index, children}) => {

    useEffect(() => {
        swiperRef.current.swiper.slideTo(index)
    }, [index])

    const swiperRef = useRef(null)

    return(
        <>
            <Swiper
                ref={swiperRef}
                slidesPerView={"auto"} 
                spaceBetween={30}
                className="flex pt-[36px]"
            >
                {children.map((item, index) => (
                    <SwiperSlide key={index} className='border-[2px] border-black'>
                        {item}
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    )
}

export default Slider