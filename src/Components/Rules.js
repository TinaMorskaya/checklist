import React, { PureComponent} from "react";
import "/Users/vasiliy/Desktop/Checklist2_Print/src/App.css"
export {Nav}

class OneRule extends PureComponent {
    render() {
      const textRule = this.props.value;
      return (
        <li className="rule">
          <div className="textrule">{textRule}</div>
        </li>
      )
    }
  }
  
  class Nav extends PureComponent {
    render() {
      const rulesArray = ["5h","4h","3h"];
      return(
          <ul className="rules">
            <li id="yourrules">Your rules</li>
            { rulesArray.map((rule) =>
            <OneRule key={rule}
            value={rule} />)
            }
            <h2>Print out your checklist and make your own rules, 
              you can write the time of work or draw emotions 
              in the circles of rules.
            </h2>
          </ul>               
      )
    }
  }