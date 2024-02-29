/*
    const navnValidering = /^[A-Za-z]+$/;
    const telefonValidering = /^[0-9]+$/;
    const epostValidering = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;
     "epostRegex" er hentet fra:
        https://emaillistvalidation.com/blog/email-validation-in-javascript-using-regular-expressions-the-ultimate-guide/


let feil = false;

if (film === ""){
    document.getElementById("filmError").innerHTML = "Feil med film";
    feil = true;
}
else{
    document.getElementById("filmError").innerHTML = "";
}

if (antall < 0){
    document.getElementById("antallError").innerHTML = "Feil med antall";
    feil = true;
}
else{
    document.getElementById("antallError").innerHTML = "";
}

if (!telefonValidering.test(telefon)){
    document.getElementById("telefonError").innerHTML = "Feil med telefon nummer";
    feil = true;
}
else{
    document.getElementById("telefonError").innerHTML = "";
}

if (!navnValidering.test(fornavn)){
    document.getElementById("fornavnError").innerHTML = "Feil med navn";
    feil = true;
}
else{
    document.getElementById("fornavnError").innerHTML = "";
}

if (!navnValidering.test(etternavn)){
    document.getElementById("etternavnError").innerHTML = "Feil med navn";
    feil = true;
}
else{
    document.getElementById("etternavnError").innerHTML = "";
}

if (!epostValidering.test(epost)){
    document.getElementById("epostError").innerHTML = "Feil med epost";
    feil = true;
}
else{
    document.getElementById("epostError").innerHTML = "";
}

if (feil === false){
    let billett =
        {film,
            antall,
            fornavn,
            etternavn,
            telefon,
            epost};
    billetter.push(billett);

function slett(){
    document.getElementById("utFelt").innerHTML = "";
    billetter.length = 0;
}
*/
const url  ="http://localhost:8080/";

$("#kjop").click(function(){
    const billett={
        antall: $("#antall").val(),
        film: $("#film").val(),
        fornavn: $("#fornavn").val(),
        etternavn: $("#etternavn").val(),
        telefon: $("#telefon").val(),
        epost: $("#epost").val()
    };
    $.post("/lagre", billett, function(){
        hentAlle();
    });

    $("#antall").val("");
    $("#film").val("");
    $("#fornavn").val("");
    $("#etternavn").val("");
    $("#telefon").val("");
    $("#epost").val("");

});

function hentAlle() {
    $.get("/hentAlle", function (data) {
        formaterData(data);
    });
}

function formaterData(billetter) {
    let ut = "";
    for (const billett of billetter){
        ut+= "Antall: " + billett.antall + "<br>Film: " + billett.film + "<br>Fornavn: " + billett.fornavn + "<br>Etternavn: " + billett.etternavn +
        "<br>Telefon: " + billett.telefon + "<br>Epost: " + billett.epost + "<br><br>";
    }
    $("#ut").html(ut);
}

$("#slett").click(function (){
    $.get( "/slettAlle", function() {
        hentAlle();
        });
});
