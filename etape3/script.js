"use strict"; // slide 51

let lignes = 0; // slide 51

const persons = [ // slide 40
    {  nom: "nom-1", prenom: "prenom-1", points: 5 }, // slide 39
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 10 }
];

Init()

function Init (){ // slide 45
    for (const person of persons) { // slide 44
        doInsert( person.nom, person.prenom, person.points); // slide 39
    }
} 
function doInsert(nom , prenom, points){ // slide 45
    lignes = lignes + 1 ; // slide 41
    const num = lignes;
    doInsertRowTable(num, nom, prenom, points); // slide 45
}   

function doInsertRowTable(num, nom, prenom, points) { // slide 45
    
    const table = document.getElementById("table_persons"); // slide 61
   
    const row = document.createElement("tr"); // slide 104

    row.setAttribute("class", "row"); // slide 107

    const col1 = document.createElement("td"); // slide 104
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    col1.innerText = num; // slide 91
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;
    col5.innerHTML = '<input type="checkbox"/>'; // slide 91

    col1.setAttribute("class", "col_number"); // slide 107
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_number");
    col5.setAttribute("class", "col_chkbox");

    row.append(col1, col2, col3, col4, col5); // slide 98
    table.append(row); // slide 98
}
function consoleTableau() { // slide 45
    console.log(persons); // slide 33
}