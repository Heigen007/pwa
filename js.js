const getLevel = document.querySelector("#get-level");
const output = document.querySelector("#output");
var x = document.getElementById("demo");

getLevel.addEventListener("click", async () => {
    if (!navigator.getBattery) {
        output.textContent = "Battery manager is unsupported";
        return
    }
    const manager = await navigator.getBattery();
    const level = manager.level;
    output.textContent = `Battery level: ${level}`;
    getLocation()
    // console.log(navigator.connection);
    // console.log(navigator.geolocation);
});


function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
    console.log(position);
  x.innerHTML = "Latitude: " + position.coords.latitude +
  "<br>Longitude: " + position.coords.longitude;
}