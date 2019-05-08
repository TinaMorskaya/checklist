import React, { Component, PureComponent} from "react";
import "/Users/vasiliy/Desktop/Checklist2_Print/src/App.css"
import {getCurrentDate, isNumberOfDaysCorrect} from "./Helpers.js"
export {Aside}

class SubmitOk extends PureComponent {
    render() {
      return(
        <input type="submit" value="Ok"/>
      )
    }
  }
  
  class DateStart extends PureComponent {
    render() {
      var today = getCurrentDate();
      const selected = this.props.selected;
        return(
          <div className="openDate" style={selected.userView=="Simple list"? 
              {visibility: "hidden",transform: "scale(0,0)"}: 
              {visibility: "visible"}}>
            <label htmlFor="date">Enter the date you want to start..</label>
            <input id="date" type="date" name="userDate" 
              min={today}  
              defaultValue={selected.userDate || today}/>
          </div>
        )  
    } 
  }
  
  
  class HowDays extends PureComponent {
    render() {
      const days = this.props.selectedDays;
      let validationStyle = (days < 7 || days > 62)?
        {backgroundColor: "rgb(255, 178, 178)"} : {backgroundColor: "gainsboro"}
      return(
        <React.Fragment>
          <label htmlFor="number">How many days you need?</label>
          <br/>
          <p>The range of 7 to 62 days.</p>
          <br/>
          <input type="text"  mozactionhint="next" 
            title="You can enter only the number of days" 
            maxLength="2" minLength="1" className="number" name="userDays" 
            defaultValue={days} 
            style={validationStyle}/>
        </React.Fragment>
      )
    }
  }
  
  class ChoiceView extends PureComponent {
    render() {
      const choice = this.props;
      return(
        <div>
          <label htmlFor={choice.id}>{choice.value}</label>
          <input type="radio" 
            id={choice.id} 
            name="userView"
            value={choice.value}
            defaultChecked={(choice.value==choice.selectedView)? true : false}/>  
        </div>
      )
    }
  }
  
  class Form extends PureComponent {
    render() {
      const choices = ["Simple list", "Days of the week", "Separation by month"];
      const selected = this.props.userParam;
      return(
        <form>
          <fieldset className={this.props.settingsOpacity} >
            <div id="whitesqer"></div>
            <h3>Please, select your preferred view:</h3>
            {choices.map((choice, i) =>
              <ChoiceView 
                key={choice} 
                id={"Choice" + i}
                value={choice} 
                selectedView = {selected.userView}/>
              )
            }
            <HowDays 
              selectedDays = {selected.userDays}/>
            <DateStart 
              selected = {selected}/>
            <br/>         
            <SubmitOk/>
          </fieldset>
        </form>
      )
    }
  }
  
  class Settings extends PureComponent {
    constructor(props) {
      super(props);
      this.clickSettings = this.clickSettings.bind(this);
    }
    clickSettings(e) {
      this.props.onClickSettings();
    }
    render() {
      return(
        <button id="settings" onClick={this.clickSettings}>Settings</button>
      )
    }
  }
  
  class Aside extends Component {
    constructor(props) {
      super(props);
      this.state = {
        settingsOpacity: "hiddenSettings",
      };
      this.changeSettingsOpacity = this.changeSettingsOpacity.bind(this);
    }
    changeSettingsOpacity() {
      var css = (this.state.settingsOpacity == "hiddenSettings") ? 
        "openSettings" : "hiddenSettings";
      this.setState({
        settingsOpacity: css
      });
    }
    render() {
      return (
        <aside>
          <Settings 
            onClickSettings={this.changeSettingsOpacity}/>
          <Form 
            settingsOpacity={this.state.settingsOpacity}
            userParam={this.props.userParam}/>
        </aside>
      )
    }
  }