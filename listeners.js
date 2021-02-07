//state variables for buttons
var state = {
  alkalimetals: 0,
  alkalineearthmetals: 0,
  halogens: 0,
  lant: 0,
  actin: 0,
};
document.body.addEventListener("mouseover", (e) => {
  if (e.target.classList.contains("groups")) {
    e.target.style.color = "orange";
  }
});

document.body.addEventListener("mouseout", (e) => {
  if (e.target.classList.contains("groups")) {
    e.target.style.color = "";
  }
});
//buttons for highlighting
document.body.addEventListener("click", (e) => {
  //Alkali Metals highlight
  if (e.target.classList.contains("alkali-metals")) {
    Highlight(`.Group1.groups:not(#H)`, `alkalimetals`);
  }
  //Alkaline Metals highlight
  else if (e.target.id == "alkaline") {
    Highlight(`.Group2.groups`, `alkalineearthmetals`);
  }
  //Halogens Highlight
  else if (e.target.id == "halogens") {
    Highlight(`.Group17.groups`, "halogens");
  } else if (e.target.id == "lanthanides") {
    Highlight(`.Period1.groups`, "lant");
  } else if (e.target.id == "actinides") {
    Highlight(`.Period2.groups`, "actin");
  }
});
//used for buttons highlighing
function Highlight(clss, typee) {
  if (state[typee] === 0) {
    var Select = document.querySelectorAll(clss);
    for (var i of Select) {
      i.classList.add(typee);
    }
    state[typee] = 1;
  } else {
    var Select = document.querySelectorAll(clss);
    for (var i of Select) {
      i.classList.remove(typee);
    }
    state[typee] = 0;
  }
}
