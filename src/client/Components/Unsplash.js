import React, { useState, useEffect} from "react";
export {Wallpaper};
import "/Users/vasiliy/Desktop/Checklist2_Print/src/client/App.css"







/*const unsplash = new Unsplash({
    applicationId: "8310923de85000b8f10791a57c575b612f0e792b9a1be4f0bb8d1593eeb2ee96",
    secret: "b3344a800f42273e394db3e7fc9a329801ac0e8e57bab571477c8831dca50c5b"
  });*/

  // You can use also url += 'orientation=landscape' + 
  //(featured ? '&featured=true' : '') + (search ? `&query=${search}` : ''); 
const tablissCollection = 1053828
  
function Wallpaper () {
    const [wall, setWall] = useState (null);
    const [image, setImage] = useState (null); 
    useEffect(() => {
            async function fetchWall () {
                const headers = new Headers();
                headers.append("Authorization", "Client-ID 8310923de85000b8f10791a57c575b612f0e792b9a1be4f0bb8d1593eeb2ee96");
                let url = 'https://api.unsplash.com/photos/random?';
                url += `collections=${tablissCollection}`;
                const wall = await (await fetch(url, { headers })).json();
                console.log(wall.urls)
                const data = await (await fetch(wall.urls.raw + '?q=85&w=1920&fit=crop')).blob();
                const newImage = URL.createObjectURL(data)
                setWall(wall) ;
                setImage(newImage)
                /*data,
                image_link: res.links.html,
                let place = res.location ? res.location.title : null,
                user_name: res.user.name,
                user_link: res.user.links.html,
              };*/
              /// "?utm_source=Start&utm_medium=referral&utm_campaign=api-credit"
            /*unsplash.photos.getRandomPhoto({ featured: true, collections: [1053828]})
            .then(data => { 
                return data.json() 
            })
            .then(data => {
                setWall(data) 
            }); */
            }
        fetchWall();

    }, [])
    if (!image) return null;
    let place = wall.location
    return (
        <div className="dashboard fullscreen">
            
                <div className="image fullscreen" style={{backgroundImage: "url(" + image + ")"}}></div>
                <div className="credit">
                    <span style={{float: "right"}}>{place? place.title: null}</span>
                    <a href={wall.links.html} target="_blank"><span>Photo /</span></a>
                    <a href={wall.user.links.html} target="_blank">{wall.user.name}</a>
                    <a href="https://unsplash.com/?utm_source=Start&amp;utm_medium=referral&amp;utm_campaign=api-credit" 
                        rel="noopener noreferrer" target="_blank"> / Unsplash</a>
                </div>
            
        </div>
    )
}
