export {getCurrentDate, isNumberOfDaysCorrect}

function getCurrentDate() {
    var today = new Date;
    var daydate = today.getDate();
    var monthdate = today.getMonth() + 1;
    if (monthdate < 10) {
        monthdate = "0" + monthdate;
    };
    if (daydate < 10) {
        daydate = "0" + daydate;
    }
    var yeardate = today.getFullYear();
    return yeardate + "-" + monthdate + "-" + daydate;
  }
  
  function isNumberOfDaysCorrect(event) {
    let text = event.target.value;
    const pattern = "0123456789"; 
    for (let i=0; i<text.length; i++) {
      var c = text.charAt(i);
      if (pattern.indexOf(c) == -1) {
        return false;
      }
    }
    return true
  }