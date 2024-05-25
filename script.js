const stopLight = document.getElementById("stopLight");
const goLight = document.getElementById("goLight");
const readyLight = document.getElementById("readyLight");
const car = document.getElementById("car");
const tyre = document.getElementById("tyre");
const frontTyre = document.getElementById("front-tyre");
const targetedLine = document.getElementById("stop-line");

/* Initial State */
let light = "yellow";

window.onload = function () {
  setTimeout(() => {
    readyLight.style.backgroundColor = light;
    stopLight.style.backgroundColor = "";
    goLight.style.backgroundColor = "";
  }, 5000);
  car.classList.remove("paused");
  tyre.classList.remove("paused");
  frontTyre.classList.remove("paused");
};

setInterval(() => {
  const d = new Date();
  if (light == "yellow") {
    setTimeout(() => {
      console.log("Red", d.getTime());
      stopLight.style.backgroundColor = "red";
      readyLight.style.backgroundColor = "";
      goLight.style.backgroundColor = "";
      setTimeout(() => {
        car.classList.add("paused");
        tyre.classList.add("paused");
        frontTyre.classList.add("paused");
        light = "red";
      }, 510);
    }, 500);
  } else if (light == "red") {
    setTimeout(() => {
      console.log("Green", d.getTime());
      goLight.style.backgroundColor = "green";
      stopLight.style.backgroundColor = "";
      readyLight.style.backgroundColor = "";
      setTimeout(() => {
        car.classList.remove("paused");
        tyre.classList.remove("paused");
        frontTyre.classList.remove("paused");
        light = "green";
      }, 500);
    }, 500);
  } else {
    setTimeout(() => {
      console.log("Yellow", d.getTime());
      readyLight.style.backgroundColor = "yellow";
      goLight.style.backgroundColor = "";
      stopLight.style.backgroundColor = "";
      // setTimeout(() => {
      car.classList.remove("paused");
      tyre.classList.remove("paused");
      frontTyre.classList.remove("paused");
      light = "yellow";
      // }, 100);
    }, 1700);
  }
}, 3000);
