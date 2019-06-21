export {getCurrentDate, isNumberOfDaysCorrect, useSize, useImage}
import React, {useEffect, useState} from "react";

function getCurrentDate() {
    var today = new Date;
    var daydate = today.getDate();
    var monthdate = today.getMonth() + 1;
    if (monthdate < 10) {
        monthdate = "0" + monthdate;
    };
    if (daydate < 10) {
        daydate = "0" + daydate;
    }
    var yeardate = today.getFullYear();
    return yeardate + "-" + monthdate + "-" + daydate;
  }
  
function isNumberOfDaysCorrect(text) {
  if (text) {
    const pattern = "0123456789"; 
    for (let i=0; i<text.length; i++) {
      var c = text.charAt(i);
      if (pattern.indexOf(c) == -1) {
        return false;
      }
    }
  }
  return true
}

function useSize() {
  const [height, setHeight] = useState(null);
  const ref = (node) => {
    if (node !== null) {
      setHeight(node.getBoundingClientRect().height)
    }
  };
  return [height, ref];
}

function useImage () {
  const [wall, setWall] = useState(null);
  const [image, setImage] = useState(null); 
  useEffect(() => {
      async function buildWall () {
          let url = 'http://localhost:8080/getImageFromUnsplash';
          const data = await (await fetch(url)).json();
          const blobik = await (await fetch(data.urls.raw + '?q=85&w=1920&fit=crop')).blob();
          const newImage = URL.createObjectURL(blobik)
          setWall(data);
          setImage(newImage)
      
      }
      buildWall();
  }, [])
  return [wall,image]
}