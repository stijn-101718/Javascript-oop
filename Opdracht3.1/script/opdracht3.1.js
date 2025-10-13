let output = document.getElementById("output");
let studentTabel = document.getElementById("studentTabel");

function success() {
    let studenten = JSON.parse(this.responseText);
    console.log(studenten);

    // Hier jouw code om alle studenten uit te lezen en aan de table toe te voegen

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

// Haal initieel al de studenten op die in de database staan
getStudent();

