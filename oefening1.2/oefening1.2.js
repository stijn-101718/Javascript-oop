class student  {
    constructor(Studentennaam, leerjaar, aantallesuren, aantalvakken, aantallesurenpervak) {
    this.Studentennaam = Studentennaam;
    this.leerjaar = leerjaar;
    this.aantallesuren = aantallesuren;
    this.aantalvakken = aantalvakken;
    this.aantallesurenpervak = aantallesuren/aantalvakken;
    }

    groet(){
        console.log(`mijn naam is ${this.Studentennaam} ik zit in het leerjaar ${this.leerjaar} ik heb ${this.aantallesuren} aantal lesuren en ${this.aantalvakken} aantal vakken en ik heb ${this.aantallesurenpervak} aantallesuren per vak`)

    }
}

let leerling1 = new student("Stijn", 2, 32, 6, 32/6);
let leerling2 = new student("Emma", 1, 28, 7, 28/7);
let leerling3 = new student("Lucas", 3, 35, 5, 35/5);
let leerling4 = new student("Sofia", 2, 30, 6, 30/6);
let leerling5 = new student("Noah", 4, 40, 8, 40/8);

leerling1.groet();
leerling2.groet();
leerling3.groet();
leerling4.groet();
leerling5.groet();

