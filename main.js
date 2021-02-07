import {
  Create,
  createTable,
  insertData,
  blnk,
  blnk2,
  choose,
  showElements,
} from "./CreateTable.js";
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  //elements on the bottom
  const Period1 = [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71];
  const Period2 = [
    89,
    90,
    91,
    92,
    93,
    94,
    95,
    96,
    97,
    98,
    99,
    100,
    101,
    102,
    103,
  ];
  const inputfield = document.getElementById("searchElement");
  var dict = {};
  var symbols = [];
  //main function which uses the functions
  function main(data1) {
    //first create all the tr and td elements
    createTable(data1);
    // for (var i = 1; i < 13; i++) {
    //   if (i === 1) Create(`Group${i}`, "firstRow");
    //   else if (i === 2) Create(`Group${i}`, "secondRow");
    //   else Create(`Group${i}`, "restRows");
    // }
    //create the blank tds which are in the middle of the table
    blnk(16, "secondRow");
    blnk(10, "thirdRow");
    blnk(10, "restRows");
    //create the rest of the td elements
    for (var i = 13; i < 19; i++) {
      if (i == 18) Create(`Group${i}`, "firstRow");
      else Create(`Group${i}`, "secondRow");
    }
    //insert periodic data in all tds
    for (var i = 1; i < 19; i++) {
      insertData(data1, choose(`${i}`), `.Group${i}`);
    }
    //create a object of atomic symbols and names;used for search function
    for (let element of data1) {
      dict[element.symbol.toLowerCase()] = element.name.toLowerCase();
      symbols.push(element.symbol.toLowerCase());
    }
  }

  //search bar function
  inputfield.addEventListener("keyup", (e) => {
    let searchStr = inputfield.value.toLowerCase();
    searchStr = searchStr.replace(/\s/g, "");
    console.log(searchStr);
    if (searchStr.length === 1) {
      showElements(
        symbols.filter((symbol) => symbol === searchStr),
        symbols
      );
    } else if (searchStr === "") {
      showElements(symbols, symbols);
    } else {
      let filteredElements = symbols.filter((symbol) =>
        dict[symbol].includes(searchStr)
      );
      showElements(filteredElements, symbols);
    }
  });

  //used to fetch data from api and call some other functions to finish creating the periodic table
  async function fetchData() {
    const response = await fetch("PeriodicTableJSON.json");
    const { elements: data } = await response.json();
    data.pop();
    console.log(data);
    main(data);
    let blankSpace = document.querySelectorAll(".Group3.groups");
    blankSpace[2].textContent = "57-71";
    blankSpace[3].textContent = "89-103";
    blnk2("fourthRow", "Period1");
    blnk2("fifthRow", "Period2");
    insertData(data, Period1, ".Period1.groups");
    insertData(data, Period2, ".Period2.groups");
  }

  //call the fetch
  fetchData();
}
