
const fs = require('fs');

// Definieer eerst je class Student!
class Student {
    constructor(Studentennaam, studentnummer, klas, leerjaar, aantallesuren, aantalvakken) {
        this.Studentennaam = Studentennaam;
        this.studentnummer = studentnummer;
        this.klas = klas;
        this.leerjaar = leerjaar;
        this.aantallesuren = Number(aantallesuren);
        this.aantalvakken = Number(aantalvakken);
        this.aantallesurenpervak = this.aantallesuren / this.aantalvakken;
    }

    groet() {
        console.log(`Mijn naam is ${this.Studentennaam}, mijn studentnummer is ${this.studentnummer}, ik zit in klas ${this.klas}, leerjaar ${this.leerjaar}, ik heb ${this.aantallesuren} lesuren, ${this.aantalvakken} vakken, dus ${this.aantallesurenpervak} lesuren per vak.`);
    }
}

// JSON inlezen

const data = fs.readFileSync('oefening2.1/oefening2.1.json', 'utf-8');
const studenten = JSON.parse(data);

// Instances maken en groet aanroepen
studenten.forEach(item => {
    const leerling = new Student(
        item.Studentennaam,
        item.studentnummer,
        item.klas,
        item.leerjaar,
        item.aantallesuren,
        item.aantalvakken
    );
    leerling.groet();
});