function clock() {
  var weekday = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  (d = new Date()),
    //fetches all variables needed to allow the clock to work
    (h = d.getHours()),
    (m = d.getMinutes()),
    (s = d.getSeconds()),
    (ms = d.getMilliseconds()),
    (date = d.getDate()),
    (month = d.getMonth() + 1),
    (year = d.getFullYear());

  (hDeg = h * 30 + m * (360 / 720)),
    (mDeg = m * 6 + s * (360 / 3600)),
    (sDeg = s * 6 + ((s + 1) * 6 - s * 6) * (ms / 1000)); //makes sure the second hand rotates smoothly and does not tick around every second, improves the visual apperance

  //defines the styles which will be used in the css
  (hEl = document.querySelector(".hour-hand")),
    (mEl = document.querySelector(".minute-hand")),
    (sEl = document.querySelector(".second-hand")),
    (dateEl = document.querySelector(".date")),
    (dayEl = document.querySelector(".day"));

  var day = weekday[d.getDay()];

  if (month < 9) {
    month = "0" + month; //makes sure the clock formats properly
  }

  hEl.style.transform = "rotate(" + hDeg + "deg)";
  mEl.style.transform = "rotate(" + mDeg + "deg)";
  sEl.style.transform = "rotate(" + sDeg + "deg)";
  dateEl.innerHTML = date + "/" + month + "/" + year;
  dayEl.innerHTML = day;
}

function startClock() {
  console.log("starting clk");
  var dialLines = document.getElementsByClassName("diallines");
  var clockEl = document.getElementsByClassName("clock")[0];

  for (var i = 1; i < 60; i++) {
    clockEl.innerHTML += "<div class='diallines'></div>";
    dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
  }

  setInterval(clock, 10);
}
