let output = document.getElementById("output");
let studentTabel = document.getElementById("studentTabel");

// Studenten ophalen en in de tabel zetten
function success() {
    let studenten = JSON.parse(this.responseText);
    let tbody = document.querySelector("#studentTabel tbody");
    tbody.innerHTML = "";

    studenten.forEach(student => {
        let row = document.createElement("tr");
        let naamCell = document.createElement("td");
        naamCell.textContent = student.studentNaam;

        let nummerCell = document.createElement("td");
        nummerCell.textContent = student.studentNummer;

        row.appendChild(naamCell);
        row.appendChild(nummerCell);
        tbody.appendChild(row);
    });
}

function error(err) {
    console.error('Error Occurred :', err);
}


function getStudent(){
    let xhr = new XMLHttpRequest();
    xhr.onload = success;
    xhr.onerror = error;
    xhr.open('GET', 'jsonRead.php', true);
    xhr.send();
}


function Opslaan() {

    let naam = document.getElementById("studentNaam").value;
    let nummer = document.getElementById("studentNummer").value;


    if (naam.length < 5 || nummer.length !== 5) {
        alert("Vul een geldige naam en 5-cijferig nummer in!");
        return;
    }

    let nieuweStudent = {
        studentNaam: naam,
        studentNummer: nummer
    };

    let xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            getStudent();
        }
    };
    xhr.open('POST', 'jsonWrite.php', true); // Let op: POST naar juiste PHP
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(nieuweStudent));
}


getStudent();