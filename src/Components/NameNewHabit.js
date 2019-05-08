import React, {PureComponent, useState, useEffect} from "react";
import "/Users/vasiliy/Desktop/Checklist2_Print/src/App.css"
export {NameNewHabit}

/*class NameNewHabit extends PureComponent {
    render() {
      return(
        <textarea
          className = "nameNewHabit"
          rows="5" cols="30"
          maxLength="40"
          placeholder="Type your new habit here..."
          autoFocus>
        </textarea>
      )
    }
  }
*/
function NameNewHabit () {
    const [name, setName] = useState('Checklist')
    useEffect(() => {
        document.title = name;
    },[name]);
    function handleNameHabbit(e) {
        setName(e.target.value)
    }
    return(
        <textarea
          onChange={handleNameHabbit}
          className="nameNewHabit"
          rows="5" cols="30"
          maxLength="40"
          placeholder="Type your new habit here..."
          autoFocus>
        </textarea>
      )
}
