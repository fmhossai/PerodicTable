if (document.readyState == 'loading'){
  document.addEventListener('DOMContentLoaded', ready)
}
else{
  ready()
}
function ready(){
const Period1 = [57,58,59,60,61,62,63,64,65,66,67,68,69,70,71]
const Period2 = [89,90,91,92,93,94,95,96,97,98,99,100,101,102,103]
var state = {
  alkalimetals:0,
  alkalineearthmetals:0,
  halogens:0
}
const inputfield = document.getElementById("hi");
var dict = {};
var symbols = [];
const bodyy = document.body


inputfield.addEventListener("keyup",(e)=>{
  var inputf = inputfield.value.toLowerCase();
  for (var i of Object.keys(dict)){
    var y = i.toLowerCase()
    if (symbols.includes(inputf)){
      for (var j of symbols){
        if (j == inputf){
        var zx = upper(j)
        var x = document.getElementById(zx)
        x.style.visibility = "visible";
        }
        else{
          var zx = upper(j)
          var x = document.getElementById(zx)
          x.style.visibility = "hidden"
        }
      }
    }
    else if (y.indexOf(inputf) != -1){
      var x = document.getElementById(`${dict[i]}`)
      x.style.visibility = "visible";
    }
    else{
      var x = document.getElementById(`${dict[i]}`)
      x.style.visibility = "hidden";
    }
  }
})
function eval2(str){
  return (new Function( "return(" +str+ ");"))();
}
function choose(str){
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
function upper(string){
  if (string.length == 1){
    var z = string.charAt(0).toUpperCase()
  }
  else{
    var z = string.charAt(0).toUpperCase() + string.slice(1)
  }
  return z

}
function Create(cls, idd){
  var ccc = document.querySelectorAll(`#${idd}~tr`);
  for (var x of ccc){
    var h = document.createElement("td");
    h.setAttribute("class",`${cls} groups`);
    x.insertAdjacentElement("beforeend",h);
  }
}

function meow(data,Group,clss){
let x = 0;
 for (var i in data){
    let hello = document.querySelectorAll(clss);
     if (data[i]['atomicNumber'] == Group[x]){
      hello[x].setAttribute("id",`${data[i]['symbol']}`)
      var mass = parseFloat(data[i]['atomicMass'])
      var number = data[i]['atomicNumber']
      var symbol = data[i]['symbol']
      hello[x].textContent = number+'\n'+symbol+'\n'+ mass.toFixed(2);
      x++;  
     }   
 }
}

function blnk(spaces,row){
    let g = document.getElementById(row);
    for (i=0;i<spaces;i++){
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

function blnk2(row,period){
  let g = document.getElementById(row)
  for (i=1;i<18;i++){
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

function Highlight(clss,typee){
  if (state[typee] === 0){
    var Select = document.querySelectorAll(clss);
    for (var i of Select){
      i.classList.add(typee)
    }
    state[typee] = 1;
  }
  else{
    var Select = document.querySelectorAll(clss);
    for (var i of Select){
      i.classList.remove(typee)
  }
  state[typee] = 0;
}
}

fetch("https://neelpatel05.pythonanywhere.com",)
.then((resp)=>resp.json())
.then(function(data){
  // data1 = data;
  main(data)
  let zzz = document.querySelectorAll(".Group3.groups")
  zzz[2].textContent = '57-71'
  zzz[3].textContent = '89-103'
  blnk2("fou","Period1")
  blnk2("fif","Period2")
  meow(data,Period1,".Period1.groups")
  meow(data,Period2,".Period2.groups")
})
bodyy.addEventListener("mouseover",(e)=>{
  if (e.target.classList.contains("groups")){
    e.target.style.color = "orange"
  }
})
bodyy.addEventListener("mouseout", (e)=>{
  if (e.target.classList.contains("groups")){
    e.target.style.color = ""
  }
})
bodyy.addEventListener("click", (e)=>{
  if (e.target.classList.contains("akalim")){
    Highlight(`.Group1.groups:not(#H)`,`alkalimetals`)
  }
  else if (e.target.id == "alkaline"){
    Highlight(`.Group2.groups`,`alkalineearthmetals`);
  }
  else if (e.target.id == "halo"){
    Highlight(`.Group17.groups`,"halogens");
  }
})
function main(data1){
  for (var i=1; i<13;i++){
    if (i === 1) Create(`Group${i}`,"fi")
    else if (i === 2) Create(`Group${i}`,"si");
    else Create(`Group${i}`,"t")
  }
  blnk(16,"si");
  blnk(10,"tt");
  blnk(10,"t");
  for(var i=13;i<19;i++){
    if (i == 18) Create(`Group${i}`,"fi")
    else Create(`Group${i}`,"si")
  }
  for (var i=1;i<19;i++){
    meow(data1,choose(`${i}`),`.Group${i}`)
  }
  for (var i of data1){
    dict[i.name] = i.symbol
    var m = i.symbol.toLowerCase()
    symbols.push(m)
  }
}
}

