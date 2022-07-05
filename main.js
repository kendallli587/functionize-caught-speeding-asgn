// Caught Speeding CS10 Review

// Variables to store HTML Elements
let determineBtn = document.getElementById("determine-btn");
let driverSpeedInput = document.getElementById("driver-speed");
let speedLimitInput = document.getElementById("speed-limit");
let outputSpan = document.getElementById("output");

// Add Event Listener to Calculate Button
determineBtn.addEventListener("click", determineBtnClicked);

function determineBtnClicked() {
  // Input
  let driverSpeed = +driverSpeedInput.value;
  let speedLimit = +speedLimitInput.value;

  outputSpan.innerHTML = determineTicket(driverSpeed, speedLimit);
}

function determineTicket(speed, limit) {
  // Process & Output
  if (speed >= speedLimit + 20) {
    return "BIG TICKET";
  } else if (speed > speedLimit) {
    return "SMALL TICKET";
  } else {
    return "NO TICKET";
  }
}