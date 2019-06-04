import React, { useState, PureComponent, useContext} from "react";
import "/Users/vasiliy/Desktop/Checklist2_Print/src/client/App.css"
import {getCurrentDate, isNumberOfDaysCorrect} from "./Helpers.js"
import {SetupItemDispatch, CalendarSettings} from "../App.js"
export {Aside}


function DateStart () {
  const dispatch = useContext(SetupItemDispatch);
  const calendar = useContext(CalendarSettings);
  const [userDate, setUserDate] = useState (calendar.date)
  function handler (event) {
    let value = event.target.value;
    setUserDate(value);
    dispatch({name: event.target.name, value: value});
  }
   return(
      <div className="openDate" style={userDate == "Simple list"
          ? {visibility: "hidden",transform: "scale(0,0)"}
          : {visibility: "visible"}}>
          <label htmlFor="date">Enter the date you want to start..</label>
          <input id="date" type="date" name="userDate" 
            min={getCurrentDate()} 
            value={userDate}
            onChange={handler}
          />
      </div>
      )  
  }

  
 function HowDays () {
  const dispatch = useContext(SetupItemDispatch);
  const calendar = useContext(CalendarSettings);
  const [userDays, setUserDays] = useState (calendar.days);
  function handler (event) {
    let value = event.target.value;
    if (isNumberOfDaysCorrect(value)) {
      setUserDays(value);
        if (value) {
          value = parseInt(value);
          dispatch({name: event.target.name, value: value})
        }     
    }
  }
    return(
        <>
          <label htmlFor="number">How many days you need?</label>
          <br/>
          <p>The range of 7 to 62 days.</p>
          <br/>
          <input type="text"  mozactionhint="next" 
            title="You can enter only the number of days" 
            maxLength="2" minLength="1" className="number" name="userDays" 
            value={userDays}
            onChange={handler}
            style={(userDays < 7 || userDays > 62)
              ? {backgroundColor: "rgb(255, 178, 178)"} 
              : {backgroundColor: "gainsboro"}}/>
        </>
      )
    }
  
function ChoiceView () {
    const choices = ["Simple list", "Days of the week", "Separation by month"];
    const dispatch = useContext(SetupItemDispatch);
    const calendar = useContext(CalendarSettings);
    return(
    <div className="choicesView">
        {choices.map((choice, i) => 
            <div key={choice} className="alignLebel ">
                <input type="radio" 
                    id={"Choice" + i} 
                    name="userView"
                    value={choice}
                    checked={(choice==calendar.view)? true : false}
                    onChange={(event)=> dispatch({
                        name: event.target.name, value: event.target.value})}
                />
                <label htmlFor={"Choice" + i}>{choice}</label>
            </div>
        )} 
    </div> 
    )
}
  
function Form (props) {
    return(
        <form>
          <fieldset className={props.settingsOpacity} >
            <div id="whitesqer"></div>
            <h3>Please, select your preferred view:</h3>
            {props.children}
          </fieldset>
        </form>
    )
}
  
function Settings (props) {
    return(
        <button id="settings" onClick={props.onClickSettings}>Settings</button>
    )
}
  
function Aside () {
  const [settingsOpacity, setSettingsOpacity] = useState ("hiddenSettings")
  function changeSettingsOpacity() {
      setSettingsOpacity((settingsOpacity== "hiddenSettings") ? "openSettings" 
      : "hiddenSettings")
    }
    return (
        <aside>
          <Settings 
                onClickSettings={changeSettingsOpacity}/>
          <Form settingsOpacity={settingsOpacity}>
                <ChoiceView/>
                <HowDays />
                <DateStart />
                <br/>         
          </Form>
        </aside>
    )
}