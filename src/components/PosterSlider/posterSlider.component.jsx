import React from "react";
import Slider from "react-slick";

//components
import Poster from "../Poster/Poster.component.jsx";

//configs
import PosterCarousalsettings from "../../Config/PosterCarousal.config.js";


const PosterSlider = (props) => {

  const sliderConfig = props.config ? props.config : PosterCarousalsettings


    return (
        <>
          <div className="flex flex-col items-start my-2">
            <h3 
              className={`text-2xl font-bold ${
                props.isDark ? "text-white" : "text-gray-800"
                }`}>
                  {props.title}
            </h3>

            <p 
              className= "text-white text-sm">{
                props.subtitle}</p>
        </div>
          <Slider {...sliderConfig}>
              {props.images.map((image) => (
                <Poster {...image} isDark={props.isDark}/>
            ))}
          </Slider>
        </>
    );
};

export default PosterSlider;
