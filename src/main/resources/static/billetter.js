
function hentAlle() {
    $.get("/hentAlle", function (data) {
        formaterData(data);
    });
}

function formaterData(billetter) {
    let ut = "<table class='table table-striped'><tr><th>Antall</th><th>Film</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th></tr>";

    for (const billett of billetter){
        ut+= "<tr><td>" +billett.antall+ "</td><td>" +billett.film + "</td><td>" + billett.fornavn + "</td><td>" +
            billett.etternavn + "</td><td>" + billett.telefon + "</td><td>" + billett.epost + "</td><td><button onclick='slettBillett(" + billett.billettNr + ")'>Slett</button><button onclick='oppdaterBillett(" + billett.billettNr + ")'>Oppdater</button></td></tr>";
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
     type : "DELETE",
     success: function(result){
        //Gjør noe med resultatet om du vil
     }
 });
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
}