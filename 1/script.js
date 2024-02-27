function addNewWEField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("weField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let weOb = document.getElementById("we");
  let weAddButtonOb = document.getElementById("weAddButton");

  weOb.insertBefore(newNode, weAddButtonOb);
}

function addNewSField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("SField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let SOb = document.getElementById("S");
  let SAddButtonOb = document.getElementById("SAddButton");

  SOb.insertBefore(newNode, SAddButtonOb);
}

function addNewIField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("IField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let IOb = document.getElementById("I");
  let IAddButtonOb = document.getElementById("IAddButton");

  IOb.insertBefore(newNode, IAddButtonOb);
}

function addNewAQField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("eqField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let aqOb = document.getElementById("aq");
  let aqAddButtonOb = document.getElementById("aqAddButton");

  aqOb.insertBefore(newNode, aqAddButtonOb);
}

function addNewProjectField() {
  let newNode = document.createElement("textarea");
  newNode.classList.add("form-control");
  newNode.classList.add("projectField");
  newNode.classList.add("mt-2");
  newNode.setAttribute("rows", 2);
  newNode.setAttribute("placeholder", "Enter here");

  let projectOb = document.getElementById("project");
  let projectAddButtonOb = document.getElementById("projectAddButton");

  projectOb.insertBefore(newNode, projectAddButtonOb);
}

//generating CV

function generateCV() {
  let nameField = document.getElementById("nameField").value;
  let nameT1 = document.getElementById("nameT1");
  nameT1.innerHTML = nameField;

  //direct
  document.getElementById("nameT2").innerHTML = nameField;

  //contacts
  document.getElementById("contactT").innerHTML =
    document.getElementById("contactField").value;
  //email
  document.getElementById("emailT").innerHTML =
    document.getElementById("emailField").value;
  //address
  document.getElementById("addressT").innerHTML =
    document.getElementById("addressField").value;

  document.getElementById("fbT").innerHTML =
    document.getElementById("fbField").value;

  document.getElementById("instaT").innerHTML =
    document.getElementById("instaField").value;

  document.getElementById("linkedT").innerHTML =
    document.getElementById("linkedField").value;

  document.getElementById("gitT").innerHTML =
    document.getElementById("gitField").value;

  //objective
  document.getElementById("objectiveT").innerHTML =
    document.getElementById("objectiveField").value;

  //skill
  // document.getElementById("ST").innerHTML =
  //   document.getElementById("SField").value;

  //skills
  let s = document.getElementsByClassName("SField");
  let strr = "";

  for (let e of s) {
    strr = strr + `<li> ${e.value} </li>`;
  }

  document.getElementById("ST").innerHTML = strr;

  //interest
  let i = document.getElementsByClassName("IField");
  let stri = "";

  for (let e of i) {
    stri = stri + `<li> ${e.value} </li>`;
  }

  document.getElementById("IT").innerHTML = stri;

  //we
  let wes = document.getElementsByClassName("weField");
  let str = "";

  for (let e of wes) {
    str = str + `<li> ${e.value} </li>`;
  }

  document.getElementById("weT").innerHTML = str;

  //aq
  let aqs = document.getElementsByClassName("eqField");
  let str1 = "";

  for (let e of aqs) {
    str1 = str1 + `<li> ${e.value} </li>`;
  }

  document.getElementById("aqT").innerHTML = str1;

  //project
  let projects = document.getElementsByClassName("projectField");
  let str2 = "";

  for (let e of projects) {
    str2 = str2 + `<li> ${e.value} </li>`;
  }

  document.getElementById("projectT").innerHTML = str2;

  document.getElementById("cv-form").style.display = "none";
  document.getElementById("cv-template").style.display = "block";
}

//print CV
function printCV() {
  window.print();
}
