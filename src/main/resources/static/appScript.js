/*
const billetter = [];
function kjøp(){
    const film = document.getElementById("film").value;
    const antall = Number(document.getElementById("antall").value);
    const fornavn = document.getElementById("fornavn").value;
    const etternavn = document.getElementById("etternavn").value;
    const telefon = document.getElementById("telefon").value;
    const epost = document.getElementById("epost").value;
    let ut = "";

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

    document.getElementById("film").value = "";
    document.getElementById("antall").value = "";
    document.getElementById("fornavn").value = "";
    document.getElementById("etternavn").value = "";
    document.getElementById("telefon").value = "";
    document.getElementById("epost").value = "";
}

for (let billett of billetter){
    ut += "Film: " + billett.film + "<br>" + "Antall: " + billett.antall + "<br>" + "Fornavn: " + billett.fornavn +
        "<br>" + "Etternavn: " + billett.etternavn + "<br>" + "Telefon: " + billett.telefon + "<br>" + "Epost: " +
        billett.epost + "<br><br>";
}
document.getElementById("utFelt").innerHTML = ut;

}
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

    $.get(url,billett,function (data){
            $("#ut").append("Film: " + data.film + "<br>Antall: " + data.antall + "<br>Fornavn: " + data.fornavn +
                "<br>Etternavn: " + data.etternavn + "<br>Telefon: " + data.telefon + "<br>Epost: " + data.epost + "<br><br>");
        }
    );
    //const billetter = [];
    //billetter.push(billett);
});
/*$("#slett").click(function(){
    $.get(url,billett,function(data){
        $("#ut").html = "";}
    );
});
*/
