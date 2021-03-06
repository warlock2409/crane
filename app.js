

$(document).ready(function(){
// fetch data 
fetch('item.json')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    appendData(data);
})
.catch(function (err) {
    console.log('error: ' + err);
});
// dynamic function
var act=0;
var inAct=0;
var total=0;
function appendData(data) {
for (var i = 0; i < data.length; i++) {
  total=total+1;
if(data[i].status=="active"){
  act=act+1;
}else{
  inAct=inAct+1;
}
}
$(".act").text(act);
$(".inAct").text(inAct);
$(".total").text(total);
}

fetch("company.json")
.then(function(read){
  return read.json();
})
.then(function(info){
  insertData(info);
 
})
.catch(function (err) {
  console.log('error: ' + err);
});

function insertData(info){
// compressor view

var theCompressor= info.compressorView;
var company = document.getElementById("customer")
var td = document.createElement("td")
td.innerText=theCompressor.company;
td.id="name";
company.appendChild(td);

var id = document.getElementById("CustomerId")
var td = document.createElement("td")
td.innerText=theCompressor.id;
td.id="name";
id.appendChild(td);

var fab = document.getElementById("FabNo")
var td = document.createElement("td")
td.innerText=theCompressor.fabNo;
td.id="name";
fab.appendChild(td);

var phone = document.getElementById("phoneNo")
var td = document.createElement("td")
td.innerText=theCompressor.phoneNo;
td.id="name";
phone.appendChild(td);

var update = document.getElementById("lastUpdated")
var td = document.createElement("td")
td.innerText=theCompressor.lastUpdate;
td.id="name";
update.appendChild(td);

var mod= document.getElementById("mod");
var h4 = document.createElement("h4");
var p = document.createElement("p");

p.innerText=theCompressor.company;
h4.innerText=theCompressor.mod;
mod.appendChild(h4);
mod.appendChild(p);

var time= document.getElementById("update");
var span = document.createElement("span");
span.innerText=theCompressor.lastUpdate;
time.appendChild(span)
// image data
let img =info.drive[0].bridge;
let bdrive = document.getElementById("bridgeList");
// console.log(img.hasOwnProperty("Status"))
for (let [key, value] of Object.entries(img)) {
  if(key=="Status"){

    if(value=="1"){

      bdrive.classList.add("on");
    }else if(value=="-1"){
      bdrive.classList.add("danger");

    }else {
      bdrive.classList.add("off");

    }
  }else{
  let tr = document.createElement("tr");
  let ta = document.createElement("td");
  let tb = document.createElement("td");
  tb.innerText=value;
  ta.innerText=key;
  tr.appendChild(ta);
  tr.appendChild(tb)
  bdrive.appendChild(tr);
  }
}
let img1 =info.drive[1].trolly;
let tdrive = document.getElementById("trollyList");
for (let [key, value] of Object.entries(img1)) {
  if(key=="Status"){

    if(value=="1"){

      tdrive.classList.add("on");
    }else if(value=="-1"){
      tdrive.classList.add("danger");

    }else {
      tdrive.classList.add("off");

    }
  }else{
  let tr = document.createElement("tr");
  let ta = document.createElement("td");
  let tb = document.createElement("td");
  tb.innerText=value;
  ta.innerText=key;
  tr.appendChild(ta);
  tr.appendChild(tb)
  tdrive.appendChild(tr);
  }
}
let img2 =info.drive[2].hoist;
let hdrive = document.getElementById("hoistList");
for (let [key, value] of Object.entries(img2)) {
  if(key=="Status"){

    if(value=="1"){

      hdrive.classList.add("on");
    }else if(value=="-1"){
      hdrive.classList.add("danger");

    }else {
      hdrive.classList.add("off");

    }
  }else{
  let tr = document.createElement("tr");
  let ta = document.createElement("td");
  let tb = document.createElement("td");
  tb.innerText=value;
  ta.innerText=key;
  tr.appendChild(ta);
  tr.appendChild(tb)
  hdrive.appendChild(tr);
  }
}
let img3 =info.drive[3].load;
let ldrive = document.getElementById("loadList");
for (let [key, value] of Object.entries(img3)) {
  if(key=="Status"){

    if(value=="1"){

      ldrive.classList.add("on");
    }else if(value=="-1"){
      ldrive.classList.add("danger");

    }else {
      ldrive.classList.add("off");

    }
  }else{
  let tr = document.createElement("tr");
  let ta = document.createElement("td");
  let tb = document.createElement("td");
  tb.innerText=value;
  ta.innerText=key;
  tr.appendChild(ta);
  tr.appendChild(tb)
  ldrive.appendChild(tr);
  }
}
let img4=info.drive[4].parameter;
let para = document.getElementById("paraList");
for (let [key, value] of Object.entries(img4)) {
  let tr = document.createElement("tr");
  let ta = document.createElement("td");
  let tb = document.createElement("td");
  tb.innerText=value;
  ta.innerText=key;
  tr.appendChild(ta);
  tr.appendChild(tb)
  para.appendChild(tr);
}












// grid view
var grid = info.grid;
var list = document.getElementById("gridList");
for (let [key, value] of Object.entries(grid)) {
  let tr = document.createElement("tr");
  let ta = document.createElement("td");
  let tb = document.createElement("td");
  tb.innerText=value;
  ta.innerText=key;
  tr.appendChild(ta);
  tr.appendChild(tb)
  list.appendChild(tr);


}
// report
var report = info.report[0];
let select = document.getElementById("first");
for(let[key,value] of Object.entries(report)){
  let option = document.createElement("option");
  option.setAttribute("value",key);
  option.innerText=value;
  select.appendChild(option);

}
var report1 = info.report[1];

let select1 = document.getElementById("rep");

for(let[key,value] of Object.entries(report1)){
  let option = document.createElement("option");
  option.setAttribute("value",key);
  option.innerText=value;
  select1.appendChild(option);

}
var report2 = info.report[2];

let select2 = document.getElementById("date");

for(let[key,value] of Object.entries(report2)){
  let option = document.createElement("option");
  option.setAttribute("value",key);
  option.innerText=value;
  select2.appendChild(option);

}
// trends
var trend = info.trends[0];
let pick = document.getElementById("compressor");
for(let[key,value] of Object.entries(trend)){
  let option = document.createElement("option");
  option.setAttribute("value",key);
  option.innerText=value;
  pick.appendChild(option);

}
var trend1 = info.report[1];

let pick1 = document.getElementById("dates");

for(let[key,value] of Object.entries(trend1)){
  let option = document.createElement("option");
  option.setAttribute("value",key);
  option.innerText=value;
  pick1.appendChild(option);

}
var trend2  = info.report[2];

let pick2 = document.getElementById("sf");

for(let[key,value] of Object.entries(trend2)){
  let option = document.createElement("option");
  option.setAttribute("value",key);
  option.innerText=value;
  pick2.appendChild(option);

}

}

















   
  });
