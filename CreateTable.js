//create td's for table
export function Create(className, classID) {
  var elements = document.querySelectorAll(`#${classID}~tr`);
  for (var element of elements) {
    var elementNode = document.createElement("td");
    elementNode.setAttribute("class", `${className} groups`);
    element.insertAdjacentElement("beforeend", elementNode);
  }
}

//inserting perodic table data elements here
export function insertData(data, Group, ClassName) {
  let x = 0;
  for (let element in data) {
    let hello = document.querySelectorAll(ClassName);
    if (data[element]["number"] == Group[x]) {
      hello[x].setAttribute("id", `${data[element]["symbol"].toLowerCase()}`);
      let mass = parseFloat(data[element]["atomic_mass"]);
      let number = data[element]["number"];
      hello[x].textContent = number + "\n" + symbol + "\n" + mass.toFixed(2);
      x++;
    }
  }
}
export function createTable(data){
  let currentX = 0;
  let currentY = 0;
  let prevX = 0;
  let tableNode = document.getElementById("table_body")
  let tableNode_2 = document.getElementById("table_body_2")
  let currentRowElementNode;
  data.forEach(element =>{
    // create Element spaces
    if(((element.number >= 57) && (element.number <= 71))|| ((element.number >= 89) && (element.number <=103))){
      let rowElementNode = document.getElementById(`row${element.ypos}`)
      if(!rowElementNode){
        let createRowElementNode = document.createElement('tr');
        createRowElementNode.setAttribute('id', `row${element.ypos}`)
        tableNode_2.insertAdjacentElement('beforeend', createRowElementNode)
        rowElementNode = createRowElementNode;
      }
      const newElementNode = createElementNode(element);
      rowElementNode.insertAdjacentElement('beforeend', newElementNode);
      return;

    }
    currentX = element.xpos
    // if currentRow different from element row, create a new row
    if(currentY < element.ypos){
      let rowElementNode = document.createElement('tr');
      tableNode.insertAdjacentElement("beforeend", rowElementNode)
      currentRowElementNode = rowElementNode;
      currentY = element.ypos
    }
    // create blank spaces between elements
    if((currentX - prevX) > 1){
      for(let i= 1; i<(currentX - prevX); i++){
        let blankElementNode = document.createElement('td');
        blankElementNode.setAttribute('class', `Column${i + 1}`)
        currentRowElementNode.insertAdjacentElement('beforeend', blankElementNode)
      }
    }
    const newElementNode = createElementNode(element)
    currentRowElementNode.insertAdjacentElement('beforeend', newElementNode);
    prevX = element.xpos;
    
  })
}
function createElementNode(element){
    const {symbol, number, atomic_mass} = element
    const elementNode = document.createElement("td");
    elementNode.setAttribute('class', `Column${element.xpos}`)
    let mass = parseFloat(atomic_mass).toFixed(2);
    elementNode.textContent = `${number} \n ${symbol} \n ${mass}`
    return elementNode
}
//creating blank tds
export function blnk(spaces, row) {
  let rowID = document.getElementById(row);
  for (let i = 0; i < spaces; i++) {
    var elementNode = document.createElement("td");
    elementNode.setAttribute("class", "blank");
    rowID.insertAdjacentElement("beforeend", elementNode);
  }
}

//creating blank tds at the bottom of the periodic table
export function blnk2(row, period) {
  let g = document.getElementById(row);
  for (let i = 1; i < 16; i++) {
    var c = document.createElement("td");
      c.setAttribute("class", `${period} groups`);
      g.insertAdjacentElement("beforeend", c);
  }
}
//function to create the periodic table programmatically
export function choose(str) {
  switch (str) {
    case "1":
      return [1, 3, 11, 19, 37, 55, 87];
    case "2":
      return [4, 12, 20, 38, 56, 88];
    case "3":
      return [21, 39];
    case "4":
      return [22, 40, 72, 104];
    case "5":
      return [23, 41, 73, 105];
    case "6":
      return [24, 42, 74, 106];
    case "7":
      return [25, 43, 75, 107];
    case "8":
      return [26, 44, 76, 108];
    case "9":
      return [27, 45, 77, 109];
    case "10":
      return [28, 46, 78, 110];
    case "11":
      return [29, 47, 79, 111];
    case "12":
      return [30, 48, 80, 112];
    case "13":
      return [5, 13, 31, 49, 81, 113];
    case "14":
      return [6, 14, 32, 50, 82, 114];
    case "15":
      return [7, 15, 33, 51, 83, 115];
    case "16":
      return [8, 16, 34, 52, 84, 116];
    case "17":
      return [9, 17, 35, 53, 85, 117];
    case "18":
      return [2, 10, 18, 36, 54, 86, 118];
  }
}
export function showElements(elements, symbols) {
  for (let element of symbols) {
    let ElementNode = document.getElementById(element);
    if (elements.includes(element)) {
      ElementNode.style.visibility = "visible";
    } else {
      ElementNode.style.visibility = "hidden";
    }
  }
}
