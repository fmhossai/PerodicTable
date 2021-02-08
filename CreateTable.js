function isTransitionalElement(element){
  return ((element.number >= 57) && (element.number <= 71))|| 
  ((element.number >= 89) && (element.number <=103))
}
function createRow(tableID, column){
  let rowElementNode = document.createElement('tr');
  rowElementNode.setAttribute('id', `row${column}`)
  tableID.insertAdjacentElement("beforeend", rowElementNode)
  return rowElementNode
}
export function createTable(data){
  let currentX = 0;
  let currentY = 0;
  let prevX = 0;
  let mainTableNode = document.getElementById("table_body")
  let secondaryTableNode = document.getElementById("table_body_2")
  let currentRowElementNode;
  data.forEach(element =>{
    // create Element spaces
    if(isTransitionalElement(element)){
      let rowElementNode = document.getElementById(`row${element.ypos}`)
      if(!rowElementNode){
        rowElementNode = createRow(secondaryTableNode, element.ypos)
      }
      const newElementNode = createElementNode(element);
      insertElementNode(newElementNode, rowElementNode)
      return;

    }
    currentX = element.xpos
    // if currentRow different from element row, create a new row
    if(currentY < element.ypos){
      currentRowElementNode = createRow(mainTableNode, element.ypos);
      currentY = element.ypos
    }
    // create blank spaces between elements
    if((currentX - prevX) > 1){
      for(let i= 1; i<(currentX - prevX); i++){
        let blankElementNode = document.createElement('td');
        blankElementNode.setAttribute('class', `Column${i + 1}`)
        insertElementNode(blankElementNode, currentRowElementNode)
      }
    }
    const newElementNode = createElementNode(element)
    insertElementNode(newElementNode, currentRowElementNode)
    prevX = element.xpos;
    
  })
}
function createElementNode(element){
    const {symbol, number, atomic_mass} = element
    const elementNode = document.createElement("td");
    elementNode.setAttribute('id', `${symbol.toLowerCase()}`)
    elementNode.setAttribute('class', `Column${element.xpos}`)
    let mass = parseFloat(atomic_mass).toFixed(2);
    elementNode.textContent = `${number} \n ${symbol} \n ${mass}`
    return elementNode
}
function insertElementNode(element, row){
    row.insertAdjacentElement("beforeend", element)
}

