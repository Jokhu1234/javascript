const refreshRate = 10000;

setInterval(function () {
  window.location.reload();
}, refreshRate);

function showTime() {
  const date = new Date();

  const myMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
  ];

  var mm = date.getMonth();
  var dd = date.getDate();
  var yy = date.getFullYear();
  var day = date.getDay();
  var hh = date.getHours();
  var min = date.getMinutes();
  var s = date.getSeconds();
  var ampm = hh >= 12 ? "PM" : "AM"; 

  hh = hh % 12; 
  hh = hh ? hh : 12; 
  min = min < 10 ? "0" + min : min;

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thrusday",
    "Friday",
    "Saturday",
  ];

  let month = myMonth[mm];
  let myweekday = weekday[day];
  let meridiem = (hh > 12 ? "AM":"PM");

  let actualTime =
    myweekday +
    " " +
    month +
    ", " +
    dd +
    " " +
    yy +
    " " +
    hh +
    ":" +
    min +
    ":" +
    meridiem;

  document.getElementById("clock").innerText = actualTime;
}

showTime();

updateSlideshow();