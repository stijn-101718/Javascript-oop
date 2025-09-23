class student  {
    constructor(Studentennaam, studentnummer, klas, leerjaar, aantallesuren, aantalvakken, aantallesurenpervak) {
    this.Studentennaam = Studentennaam;
    this.studentnummer = studentnummer;
    this.klas = klas;
    this.leerjaar = leerjaar;
    this.aantallesuren = aantallesuren;
    this.aantalvakken = aantalvakken;
    this.aantallesurenpervak = aantallesuren/aantalvakken;
    
    }

    groet(){
        console.log(`mijn naam is ${this.Studentennaam} mijn student nummer is ${this.studentnummer} ik zit in klas ${this.klas} en leerjaar ${this.leerjaar} ik heb ${this.aantallesuren} aantal lesuren en ${this.aantalvakken} aantal vakken en ik heb ${this.aantallesurenpervak} aantallesuren per vak`)

    }
}


let leerling1 = new student("Stijn", `d1f2`, 2, 101718, 32, 6, 32/6);
let leerling2 = new student("Emma", `d1f2`, 1, 101713, 28, 7, 28/7);
let leerling3 = new student("Lucas", `d1v2`, 3, 21321, 35, 5, 35/5);
let leerling4 = new student("Sofia", `d1a2`, 2, 32131, 30, 6, 30/6);
let leerling5 = new student("Noah", `d1c2`, 4, 42114, 40, 8, 40/8);

leerling1.groet();
leerling2.groet();
leerling3.groet();
leerling4.groet();
leerling5.groet();

