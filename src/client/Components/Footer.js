import "/Users/vasiliy/Desktop/Checklist2_Print/src/client/App.css"
import React from "react";
export {Footer} 

function Footer (props) {
    const wall = props.wall
    if (!wall) return null;
    const place = wall.location;
    return (
        <>
        <footer> By Tina_Morskaya</footer>
        <div className="credit">
            <span style={{float: "right"}}>{place? place.title: null}</span>
            <a href={wall.links.html} target="_blank">Photo</a>
            <span>/</span>
            <a href={wall.user.links.html} target="_blank">{wall.user.name}</a>
            <span>/</span>
            <a style={{marginRight: "1em"}} href="https://unsplash.com/?utm_source=Start&amp;utm_medium=referral&amp;utm_campaign=api-credit" 
                rel="noopener noreferrer" target="_blank">Unsplash</a>
        </div>
        </>
    )
}