//create td's for table
export function Create(cls, idd){
    var ccc = document.querySelectorAll(`#${idd}~tr`);
    for (var x of ccc){
      var h = document.createElement("td");
      h.setAttribute("class",`${cls} groups`);
      x.insertAdjacentElement("beforeend",h);
    }
  }

  //inserting perodic table data elements here
  export function insertData(data,Group,ClassName){
    let x = 0;
    for (var i in data){
        let hello = document.querySelectorAll(ClassName);
        if (data[i]['number'] == Group[x]){
          hello[x].setAttribute("id",`${data[i]['symbol'].toLowerCase()}`)
          var mass = parseFloat(data[i]['atomic_mass'])
          var number = data[i]['number']
          var symbol = data[i]['symbol']
          hello[x].textContent = number+'\n'+symbol+'\n'+ mass.toFixed(2);
          x++;  
        }   
    }
    }
//creating blank tds
export function blnk(spaces,row){
    let g = document.getElementById(row);
    for (let i=0;i<spaces;i++){
        var k = document.createElement("td");
        // k.textContent = 'x'+'\n'+'x'+'\n'+'00.00';
        k.setAttribute("class","blank");
        if (row == "third"){
          g.insertAdjacentElement("beforebegin",k);
        }
        else{
        g.insertAdjacentElement("beforeend",k);
        }
    }
}

//creating blank tds at the bottom of the periodic table
export function blnk2(row,period){
  let g = document.getElementById(row)
  for (let i=1;i<18;i++){
    if ((i == 1) || (i ==2)){
      var c = document.createElement("td")
      c.setAttribute("class", "blank")
      g.insertAdjacentElement("beforeend",c)
    }
    else{
      var c = document.createElement("td")
      c.setAttribute("class",`${period} groups`)
      g.insertAdjacentElement("beforeend",c)
    }
  }
}
//function to create the periodic table programmatically
export function choose(str){
  switch(str){
    case "1" : return [1,3,11,19,37,55,87];
    case "2" : return [4,12,20,38,56,88];
    case "3" : return [21,39];
    case "4" : return [22,40,72,104];
    case "5" : return [23,41,73,105];
    case "6" : return [24,42,74,106];
    case "7" : return [25,43,75,107];
    case "8" : return [26,44,76,108];
    case "9" : return [27,45,77,109];
    case "10" : return [28,46,78,110]
    case "11" : return [29,47,79,111];
    case "12" : return [30,48,80,112];
    case "13" : return [5,13,31,49,81,113];
    case "14" : return [6,14,32,50,82,114];
    case "15" : return [7,15,33,51,83,115];
    case "16" : return [8,16,34,52,84,116];
    case "17" : return [9,17,35,53,85,117];
    case "18" : return [2,10,18,36,54,86,118];
  }
}
export function showElements(elements,symbols){
    for(let element of symbols){
        let ElementNode = document.getElementById(element)
        if (elements.includes(element)){
            ElementNode.style.visibility = "visible"
        }
        else{
            ElementNode.style.visibility = "hidden"
        }
    }
}