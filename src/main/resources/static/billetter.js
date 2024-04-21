const navnValidering = /^[A-Za-z]+$/;
const telefonValidering = /^[0-9]+$/;
const epostValidering = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$/;

function hentAlle() {
    $.get("/hentAlle", function (data) {
        formaterData(data);
    });
    document.getElementById("myDIV").style.display = "block";
}

function formaterData(billetter) {
    let ut = "<table class='table table-striped'><tr><th>Antall</th><th>Film</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th><th></th><th></th></tr>";

    for (const billett of billetter){
        ut+= "<tr><td>" +billett.antall+ "</td><td>" +billett.film + "</td><td>" + billett.fornavn + "</td><td>" +
            billett.etternavn + "</td><td>" + billett.telefon + "</td><td>" + billett.epost + "</td><td><button class='btn btn-danger' onclick='slettBillett(" + billett.billettNr + ")'>Slett</button></td><td><button class='btn btn-primary' onclick='oppdaterBillett(" + billett.billettNr + ")'>Oppdater</button></td></tr>";
    }

    $("#ut").html(ut);
}

$("#slett").click(function (){
    $.get( "/slettAlle", function() {
        hentAlle();
    });
});
function slettBillett(billettNr){
 $.ajax({
     url : "slettBillett?billettNr=" + billettNr,
     type : "DELETE"
 });
    document.getElementById("minDiv").style.display = "none";
    setTimeout(() => {hentAlle();}, 10);
}
function oppdaterBillett(billettNr) {
    $.get("http://localhost:8080/hentBilletterFraDB?billettNr=" + billettNr, function (data) {
        document.getElementById("billettNr").innerHTML = billettNr;
        document.getElementById("filmEdit").value = data.film;
        document.getElementById("antallEdit").value = data.antall;
        document.getElementById("fornavnEdit").value = data.fornavn;
        document.getElementById("etternavnEdit").value = data.etternavn;
        document.getElementById("telefonEdit").value = data.telefon;
        document.getElementById("epostEdit").value = data.epost;
    });
    document.getElementById("minDiv").style.display = "block";
}

function oppdaterBillettiDB(){
    const billett = {
        "billettNr": document.getElementById("billettNr").innerHTML,
        "film": document.getElementById("filmEdit").value,
        "antall": document.getElementById("antallEdit").value,
        "fornavn": document.getElementById("fornavnEdit").value,
        "etternavn": document.getElementById("etternavnEdit").value,
        "telefon": document.getElementById("telefonEdit").value,
        "epost": document.getElementById("epostEdit").value
    }
    let feil = true;
    if (billett.film === ""){
        feil = false;
        $("#filmEditError").html("Feil ved valg av film");

    }
    else {
        $("#filmEditError").html("");
    }
    if (billett.antall === "" || !telefonValidering.test(billett.antall)){
        feil = false;
        $("#antallEditError").html("Feil ved valg av antall");
    }
    else {
        $("#antallEditError").html("");
    }
    if (billett.fornavn === "" || !navnValidering.test(billett.fornavn)){
        $("#fornavnEditError").html("Feil ved inntasting av fornavn");
        feil = false;
    }
    else {
        $("#fornavnEditError").html("");
    }
    if (billett.etternavn === "" || !navnValidering.test(billett.etternavn)){
        $("#etternavnEditError").html("Feil ved inntasting av etternavn");
        feil = false;
    }
    else {
        $("#etternavnEditError").html("");
    }
    if (billett.telefon === "" || !telefonValidering.test(billett.telefon)){
        $("#telefonEditError").html("Feil ved inntasting av telefon");
        feil = false;
    }
    else {
        $("#telefonEditError").html("");
    }
    if (billett.epost === "" || !epostValidering.test(billett.epost)){
        $("#epostEditError").html("Feil ved inntasting av epost");
        feil = false;
    }
    else {
        $("#epostEditError").html("");
    }

    if(feil === false){
        console.log("Feil ved inntasting");

    }
    else{
        console.log( document.getElementById("billettNr").value);
        console.log(billett); //good for debugging in case the elements from student are no
        $.post("http://localhost:8080/oppdaterBillettiDB",billett, function (data){})
        document.getElementById("minDiv").style.display = "none";
        setTimeout(() => {hentAlle();}, 100);
    }
}