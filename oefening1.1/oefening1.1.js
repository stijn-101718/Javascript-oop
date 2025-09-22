function leerling(Studentennaam, leerjaar, aantallesuren, aantalvakken){
    this.Studentennaam = Studentennaam;
    this.leerjaar = leerjaar;
    this.aantallesuren = aantallesuren;
    this.aantalvakken = aantalvakken;

    

}


let student = { 
    Studentennaam: "Stijn",
    leerjaar: "2",
    aantallesuren: "32",
    aantalvakken: "6",
    berekenurenpervak: function() {
        return this.aantallesuren / this.aantalvakken;
    }
};

console.log(student.berekenurenpervak());