const space_lamp = document.getElementById("space_lamp");

space_lamp.addEventListener("click", () => {
  space_lamp.classList.toggle("div_bulb-off");
  space_lamp.classList.toggle("div_bulb-on");
});
