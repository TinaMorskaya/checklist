import React, {PureComponent, useState, useEffect} from "react";
import "../App.css"
export {NameNewHabit}

function NameNewHabit () {
    const initialName = () => localStorage.getItem('nameHabbit') || 'Checklist' //first time reder, because initialName - function
    const [name, setName] = useState(initialName);

    useEffect(() => {
        localStorage.setItem('nameHabbit', name);
    }, [name])

    useEffect(() => {
        document.title = name;
    },[name]);

    function handleNameHabbit(e) {
        setName(e.target.value);
    };
    return(
        <div className="nameNewHabit">
            <textarea
              value={name}
              onChange={handleNameHabbit}
              className="newHabit"
              rows="5" cols="30"
              maxLength="40"
              placeholder="Type your new habit here..."
              autoFocus>
            </textarea>
        </div>
      )
}
