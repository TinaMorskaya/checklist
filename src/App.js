import React, {useEffect, useReducer} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import {Nav} from "./Components/Rules.js";
import {Aside} from "./Components/Settings.js";
import {getCurrentDate, isNumberOfDaysCorrect} from "./Components/Helpers.js"
import {Days} from "./Components/Calendar.js"
import {NameNewHabit} from "./Components/NameNewHabit.js"
export {SetupItemDispatch, CalendarSettings,App}

const SetupItemDispatch = React.createContext(null);
const CalendarSettings = React.createContext(null)

function int (initialSetupItems) {
  //localStorage.removeItem('SettingsCalendar');
  let previousCalendar = localStorage.getItem('SettingsCalendar');
  let calendar = previousCalendar ? JSON.parse(previousCalendar): initialSetupItems;
  return calendar;
}

function setupItemReducer (state, action) {
  switch (action.name) {
    case "userView":
      return {...state, view: action.value};
    case "userDays":
      return {...state, days: action.value}
    case "userDate":
      return {...state, date: action.value};
    default:
      return state;
  }

}

function App () {
  const [setupItems, dispatch] = useReducer (setupItemReducer, 
    {view : "Simple list", days: 30, date: getCurrentDate()}, int);
  
  useEffect(() => {
    localStorage.setItem('SettingsCalendar', JSON.stringify(setupItems));
  }, [setupItems])

  return(
    <div className="ownBody" >
      <h1>Checklist</h1>
      <SetupItemDispatch.Provider value={dispatch}>
        <CalendarSettings.Provider value={setupItems} >
          <NameNewHabit />
          <Days />
          <Nav />
          <Aside />
        </CalendarSettings.Provider>
      </SetupItemDispatch.Provider>
      <footer>By Tina_Morskaya</footer>
    </div>
  );

}

export default hot(module)(App);
