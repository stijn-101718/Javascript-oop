let output = document.getElementById("output");

function success() {
    let studenten = JSON.parse(this.responseText);
    console.log(studenten);

    let html = "";

    for (const student of studenten) {
        html += `<div>
            Student Naam: ${student.studentNaam}<br>
            Student Nummer: ${student.studentNummer}<br>
            student studentTelefoon: ${student.studentTelefoon}<br>
            student studentKlas: ${student.studentKlas}<br>

            <br>
        </div>`;
    }

    output.innerHTML = html;
}

function error(err) {
    console.error('Error Occurred :', err);
}

let xhr = new XMLHttpRequest();
xhr.onload = success;
xhr.onerror = error;
xhr.open('GET', 'oefening2.2.json', true);
xhr.send();