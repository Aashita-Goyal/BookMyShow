import React from "react";


export const NextArrow = (props) => {

    //  const {className, style, onclick} = props; //classnames, inline styles, onclick actions
    return (
    <>
      <div 
        className={props.className}
        style={{...props.style}}
        onClick={props.onClick}
        /> 
    </> 
    ); 
};



export const PrevArrow = (props) => {
    return (
        <>
          <div 
            className={props.className} 
            style={{...props.style}}
            onClick={props.onClick}
            />
        </>
        );
};