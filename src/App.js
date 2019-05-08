import React, {Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import {Nav} from "./Components/Rules.js";
import {Aside} from "./Components/Settings.js";
import {getCurrentDate, isNumberOfDaysCorrect} from "./Components/Helpers.js"
import {Days} from "./Components/Calendar.js"
import {NameNewHabit} from "./Components/NameNewHabit.js"



class App extends Component {
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

  changeDaysAndViewAndDate(event) {
    const name = event.target.name;
    if ((name == "userDays" && isNumberOfDaysCorrect(event)) ||
    name == "userView" || name == "userDate") {
      const value = event.target.value;
      console.log(value)
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
        console.log("oke")
        this.setState({
          createCalendar: true,
        });
      } 
    } 
    event.preventDefault()
  }

  render() {
    return(
      <div className="ownBody" 
        onChange={this.changeDaysAndViewAndDate} 
        onSubmit={this.createUserCalendar}>
        <h1>Checklist</h1>
        <NameNewHabit />
        <Days 
          userParam={this.state}/>
        <Nav />
        <Aside 
          userParam={this.state}/>
        <footer>By Tina_Morskaya</footer>
      </div>
    );
  }
}

export default hot(module)(App);
