  //state variables for buttons
  let state = {
    alkalimetals:0,
    alkalineearthmetals:0,
    halogens:0,
    lant:0,
    actin:0
  }

   //buttons for highlighting
   document.body.addEventListener("click", (e)=>{
    //Alkali Metals highlight
    if (e.target.classList.contains("alkali-metals")){
      Highlight(`.Column1:not(#h)`,`alkalimetals`)
    }
    //Alkaline Metals highlight
    else if (e.target.id == "alkaline"){
      Highlight(`.Column2`,`alkalineearthmetals`);
    }
    //Halogens Highlight
    else if (e.target.id == "halogens"){
      Highlight(`.Column17`,"halogens");
    }
    else if (e.target.id == "lanthanides"){
      Highlight(`#row9 td`, "lant")
    }
    else if (e.target.id == "actinides"){
      Highlight(`#row10 td`, "actin")
    }
  })
  //used for buttons highlighing
  function Highlight(CSSClassName, CSSClassInsert){
    if (state[CSSClassInsert] === 0){
      let selectElements = document.querySelectorAll(CSSClassName);
      for (let element of selectElements){
        element.classList.add(CSSClassInsert)
      }
      state[CSSClassInsert] = 1;
    }
    else{
      let selectElements = document.querySelectorAll(CSSClassName);
      for (let element of selectElements){
        element.classList.remove(CSSClassInsert)
    }
      state[CSSClassInsert] = 0;
  }
  }