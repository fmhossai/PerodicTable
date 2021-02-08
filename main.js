import {
  createTable,
} from "./CreateTable.js";
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
async function ready() {
  const inputfield = document.getElementById("searchElement");
  let elements = [];
  // array of objects with the following properties
  /*
  {
    symbol: symbol of element
    name: name of element
    function visible(): shows the element on the screen or not.
  }
  */
  //main function which uses the functions
  function main(data) {

    createTable(data);
    const elementsData = data.map(element => ({
      symbol: element.symbol.toLowerCase(),
      name: element.name.toLowerCase(),
      visible: function(bool){
        let elementNode = document.getElementById(`${this.symbol}`)
        if(bool){
          elementNode.style.visibility = "visible"
        }
        else{
          elementNode.style.visibility = "hidden"
        }
      }
    }))
    elements = elementsData
  }

  //search bar function
  inputfield.addEventListener("keyup", (e) => {
    let searchStr = inputfield.value.toLowerCase().trim();
    // searchStr = searchStr.replace(/\s/g, "");
    console.log(searchStr);
    if (searchStr.length === (1 || 2)) {
      elements.forEach((element)=>{
        if(searchStr === element.symbol){
          element.visible(true)
        }
        else{
          element.visible(false)
        }
      })

    } else if (searchStr === "") {
      elements.forEach(element => element.visible(true))
    } 
    else {
      elements.forEach((element)=>{
        if(element.name.includes(searchStr)){
          element.visible(true)
        }
        else{
          element.visible(false)
        }
      })
    }
  });

  //used to fetch data from api and call some other functions to finish creating the periodic table
  async function fetchData(url) {
    const response = await fetch(url);
    const { elements: data } = await response.json();
    data.pop();
    return data
  }

  //call the fetch
  const data = await fetchData("PeriodicTableJSON.json");
  main(data);
}
