"use strict"; // slide 51
const persons = [ // slide 40
    { nom: "nom-1", prenom: "prenom-1", points: 5 }, // slide 39
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];
let lignes = 0; // slide 51
let total_points = 0; // slide 51
init();
function init() { // slide 45
    for (const person of persons) { // slide 44
        doInsert(person.nom, person.prenom, person.points); // slide 39
    }
}
function doInsert(nom, prenom, points) { // slide 45
    lignes = lignes + 1; // slide 41
    const num = lignes;
    total_points = total_points + points; // slide 41
    doInsertRowTable(num, nom, prenom, points); // slide 45
    update_summary();
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

// EXTRA 3 : les points >= 10 sont affichés en vert et en gras
if (points >= 10) { // slide 42
    col4.style.color = "green"; // slide 95
    col4.style.fontWeight = "bold";
}



    table.append(row); // slide 98
}
function consoleTableau() { // slide 45
    console.log(persons); // slide 33
}
function update_summary() { // slide 45
    const element_lignes = document.getElementById("p1"); // slide 61
    const element_points = document.getElementById("p3"); // slide 61
    element_lignes.innerText = lignes + " ligne(s)"; // slide 91
    element_points.innerText = "Total point(s)= " + total_points; // slide 91


    // EXTRA 1 : moyenne des points affichée
    const element_moyenne = document.getElementById("p2"); // slide 61
    if (lignes > 0) { // slide 42
        element_moyenne.innerText = "Moyenne= " + (total_points / lignes).toFixed(2); // slide 41
    } else {
        element_moyenne.innerText = "Moyenne= 0";
    }


}
function doNewData() { // slide 45
    const elt_nom = document.getElementById("form_nom"); // slide 61
    const elt_prenom = document.getElementById("form_prenom"); // slide 61
    const elt_points = document.getElementById("form_points"); // slide 61
    const nom = elt_nom.value; // slide 92
    const prenom = elt_prenom.value; // slide 92
    const points = parseInt(elt_points.value);
    if (nom === "" || prenom === "" || Number.isNaN(points)) { // slide 42
        alert("Formulaire incomplet !"); // slide 116
    } else {
        doInsert(nom, prenom, points); // slide 45
        persons.push({ nom: nom, prenom: prenom, points: points }); // slide 38
        elt_nom.value = ""; // slide 92
        elt_prenom.value = "";
        elt_points.value = "";
    }
}
function deleteRow() { // slide 45
    if (lignes === 0) { // slide 42
        alert("Le tableau est vide !"); // slide 116
        return;
    }
    const table = document.querySelector("#table_persons"); // slide 76
    const cochees = table.querySelectorAll(".col_chkbox input:checked"); // slide 76
    if (cochees.length === 0) { // slide 42
        alert("Sélectionnez au moins une ligne !"); // slide 116
        return;
    }
    if (!confirm("Voulez-vous supprimer " + cochees.length + " ligne(s) ?")) {
        return;
    }
    const rows = table.querySelectorAll("tr"); // slide 76
    for (let i = rows.length - 1; i >= 1; i--) { // slide 44
        const row = rows[i];
        const checkbox = row.querySelector(".col_chkbox input"); // slide 76
        if (checkbox.checked) { // slide 92
            const pts = parseInt(row.children[3].innerText); // slide 89
            total_points = total_points - pts; // slide 41
            lignes = lignes - 1; // slide 41
            row.remove(); // slide 100
            persons.splice(i - 1, 1);
        }
    }
    alert("Suppression réussie !"); // slide 116
    update_summary();


}

// EXTRA 2 : bouton "Tout sélectionner" (coche toutes les cases)
function selectAll() { // slide 45
    const boxes = document.querySelectorAll(".col_chkbox input"); // slide 76
    for (const box of boxes) { // slide 44
        box.checked = true; // slides 92-93
    }
}