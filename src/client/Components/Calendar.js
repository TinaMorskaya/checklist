import React, {useContext} from "react";
import "/Users/vasiliy/Desktop/Checklist2_Print/src/client/App.css";
import {SetupItemDispatch, CalendarSettings} from "../App.js"
export {Days}

function createContainerItemList(view,startDate,days) {
    days = parseInt(days);
    startDate = new Date (startDate);
    var offSetFirstMonth = startDate.getDay();
    var endDate  = new Date (startDate);
    endDate.setDate((startDate.getDate() + days - 1));
    var containerItemList = [];
    var monthStart = startDate.getMonth();
    if (view == "Separation by month") {
      for (var i=0; endDate.getMonth() != monthStart; i++) {
        var oneMonth = endDate.getDate();
        endDate.setDate(1);
        var oneOffset = endDate.getDay();
        containerItemList.unshift([oneMonth, oneOffset]);
        endDate.setDate(endDate.getDate()-1);
      }
      days = days - containerItemList.reduce(function (x,y) {return x + y[0]},0);
    }
    containerItemList.unshift([days, offSetFirstMonth]);
    return containerItemList
  }

  
function CreateOneLiElementInConteiner(props) {
    let classLi = props.className;
    let intoLi = (props.inner)? props.inner : "";
    return (
      <li className={classLi}>{intoLi}</li>
      )
  }
  
function AddWeekdayNames(props) {
    if (props.view == "Simple list") return null;
    const week = ["Mo","Tu","We","Th","Fr","Sa","Su"];
    let weekItems = [];
    for (let i=0; i < week.length ; i++) {
      weekItems.push(<CreateOneLiElementInConteiner className={"day_item week"} inner={week[i]} key={week[i].toString()}/>)
    }
    return weekItems
  }
  
function AddOffset(props) {
    if (props.view == "Simple list") return null;
    const offSet = props.offSet;
    const countDay = offSet == 0 ? 7 : offSet;
    let offstItems =[];
    for (let j = 1; j < countDay; j++) {
      offstItems.push(<CreateOneLiElementInConteiner className={"offsetday"} key={"offset" + j}/>)
    }
    return offstItems
  }
  
function AddDays (props) {
    const countOfDays = props.countOfDays
    let daysItems = []
    for (var g=0; g < countOfDays; g++) {
      daysItems.push(<CreateOneLiElementInConteiner className={"day_item"} key={"day" + g}/>)
    }
    return daysItems 
  }
  
function CreateContainer (props) {
    const view = props.view;
    return (
      <ul className="days_container">
        <AddWeekdayNames view={view}/>
        <AddOffset view={view} offSet={props.offSet}/>
        <AddDays countOfDays={props.countOfDays}/>
      </ul>  
    )
  }
  
function Days () {
    const calendar = useContext(CalendarSettings);
    const containerItemList = createContainerItemList(calendar.view, calendar.date, calendar.days);
    return(
        <div className="days">
          <div id="days">
            {containerItemList.map((month) => <CreateContainer
                key = {month.toString()} 
                offSet = {month[1]}
                countOfDays = {month[0]}
                view={calendar.view}/>
            )} 
          </div>
        </div>
      )
}