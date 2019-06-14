import React, { useState, useEffect} from "react";
export {Wallpaper};
import "/Users/vasiliy/Desktop/Checklist2_Print/src/client/App.css"
  
function Wallpaper (props) {
    const [wall, setWall] = useState(null);
    const [image, setImage] = useState(null); 
    useEffect(() => {
        async function buildWall () {
            let url = 'http://localhost:8080/getImageFromUnsplash';
            const data = await (await fetch(url)).json();
            console.log(data);
            const blobik = await (await fetch(data.urls.raw + '?q=85&w=1920&fit=crop')).blob();
            const newImage = URL.createObjectURL(blobik)
            setWall(data);
            setImage(newImage)
        
        }
        buildWall();
    }, [])
    if (!image) return null;
    let place = wall.location;
    let heightImage = props.heightPage > props.heightFlex? props.heightPage: props.heightFlex;
    console.log(heightImage);
    return (
        <>
            <div className="image fullscreen" style={{backgroundImage: "url(" + image + ")", height : `${heightImage+3}px`}}></div>
                <div className="credit">
                    <span style={{float: "right"}}>{place? place.title: null}</span>
                    <a href={wall.links.html} target="_blank"><span>Photo /</span></a>
                    <a href={wall.user.links.html} target="_blank">{wall.user.name}</a>
                    <a href="https://unsplash.com/?utm_source=Start&amp;utm_medium=referral&amp;utm_campaign=api-credit" 
                        rel="noopener noreferrer" target="_blank"> / Unsplash</a>
                </div>
            
        </> 
 
    )
}
