function leerling(Studentennaam, leerjaar, aantallesuren, aantalvakken, aantallesurenpervak){
    this.Studentennaam = Studentennaam;
    this.leerjaar = leerjaar;
    this.aantallesuren = aantallesuren;
    this.aantalvakken = aantalvakken;
    this.aantallesurenpervak = aantallesuren/aantalvakken;
}


let leerling1 = new leerling("Stijn", 2, 32, 6, 32/6);

console.log(leerling1);