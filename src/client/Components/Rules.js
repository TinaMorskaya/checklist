import React from "react";
import "/Users/vasiliy/Desktop/Checklist2_Print/src/client/App.css"
export {Nav}

function OneRule (props) {
    return (
        <li className="rule">
          <div className="textrule">{props.textRule}</div>
        </li>
      )
}
  
function Nav () {
    const rulesArray = ["5h","4h","3h"];
    return(
        <ul className="rules">
            <li id="yourrules">Your rules</li>
            {rulesArray.map((rule) => 
              <OneRule key={rule} textRule={rule} />)
            }
            <h2>Print out your checklist and make your own rules, 
              you can write the time of work or draw emotions 
              in the circles of rules.
            </h2>
        </ul>               
      )
}