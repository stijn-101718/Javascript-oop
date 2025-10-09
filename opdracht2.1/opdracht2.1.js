
const fs = require('fs');


class Student {
    constructor(Studentennaam, studentnummer, klas, leerjaar, aantallesuren, aantalvakken, vakken) {
        this.Studentennaam = Studentennaam;
        this.studentnummer = studentnummer;
        this.klas = klas;
        this.leerjaar = leerjaar;
        this.aantallesuren = Number(aantallesuren);
        this.aantalvakken = Number(aantalvakken);
        this.aantallesurenpervak = this.aantallesuren / this.aantalvakken;
        this.vakken = vakken;
    }

    groet() {
        console.log(`Mijn naam is ${this.Studentennaam}, mijn studentnummer is ${this.studentnummer}, ik zit in klas ${this.klas}, leerjaar ${this.leerjaar}, ik heb ${this.aantallesuren} lesuren, ${this.aantalvakken} vakken, dus ${this.aantallesurenpervak} lesuren per vak. Mijn vakken zijn ${this.vakken}`);
    }
}



const data = fs.readFileSync('oefening2.1/oefening2.1.json', 'utf-8');
const studenten = JSON.parse(data);


studenten.forEach(item => {
    const leerling = new Student(
        item.Studentennaam,
        item.studentnummer,
        item.klas,
        item.leerjaar,
        item.aantallesuren,
        item.aantalvakken,
        item.vakken
    );
    leerling.groet();
});