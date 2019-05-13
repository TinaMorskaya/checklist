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
  let previousCalendar = localStorage.getItem('SettingsCalendar');
  let calendar = previousCalendar ? JSON.parse(previousCalendar): initialSetupItems;
  return calendar;
}

function setupItemReducer (state, action) {
  console.log(action)
  console.log(state)
  switch (action.name) {
    case "userView":
      return {...state, view: action.value};
    case "userDays":
      return (isNumberOfDaysCorrect(action.value)
      ? {...state, days: action.value} : state);
    case "userDate":
    console.log (action.value)
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


/*class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userView: "Simple list",
      userDays: 30,
      userDate: "",
      createCalendar: true
    };
    this.changeDaysAndViewAndDate = this.changeDaysAndViewAndDate.bind(this) 
    this.createUserCalendar = this.createUserCalendar.bind(this)
  }

  componentDidMount() {
    if (localStorage.getItem('view')) {
      console.log("rororororo")
      const view = localStorage.getItem('view');
      const days = localStorage.getItem("days");
      const date = localStorage.getItem("date");
      this.setState({userView: view, userDays: days, userDate: date})
    }
  }

  changeDaysAndViewAndDate(event) {
    const name = event.target.name;
    if ((name == "userDays" && isNumberOfDaysCorrect(event)) ||
    name == "userView" || name == "userDate") {
      const value = event.target.value;
      this.setState({
        [name]: value,
        createCalendar: false
      });
    } else {
      event.preventDefault()
    }
  }

  createUserCalendar(event) {
    const param = this.state;
     if (param.userDays > 6 && param.userDays < 63) {
      if (!this.state.createCalendar) {
        const date = this.state.userDate || getCurrentDate()
        console.log("oke");
        this.setState({
          createCalendar: true,
          userDate: date
        });
        const formData = this.state;
        localStorage.setItem('view', formData.userView);
        localStorage.setItem('days', formData.userDays);
        localStorage.setItem('date', formData.userDate);
      } 
    } 
    event.preventDefault()
  }

  render() {
    return(
      <div className="ownBody" 
        onSubmit={this.createUserCalendar}>
        <h1>Checklist</h1>
        <NameNewHabit />
        <Days 
          userParam={this.state}/>
        <Nav />
        <Aside 
          userParam={this.state}
          handlerSettings={this.changeDaysAndViewAndDate}/>
        <footer>By Tina_Morskaya</footer>
      </div>
    );
  }
}
*/
export default hot(module)(App);
