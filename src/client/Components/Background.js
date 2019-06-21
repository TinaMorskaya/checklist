import React from "react";
export {Wallpaper};
import "../App.css";

function Wallpaper (props) {
    const image = props.image;
    if (!image) return null;
    const heightImage = props.heightWindow > props.heightFlex
        ? props.heightWindow :props.heightFlex;
    console.log(props.heightFlex + " flex")
    console.log(props.heightWindow + " window")
    console.log(heightImage + " now")
    return (   
        <div className="image fullscreen" style={{backgroundImage: "url(" + image + ")",
            height:`${heightImage + 20}px`}}>
        </div>
 
    )
}
