
function hentAlle() {
    $.get("/hentAlle", function (data) {
        formaterData(data);
    });
}

function formaterData(billetter) {
    let ut = "<table class='table table-striped'><tr><th>Antall</th><th>Film</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th></tr>";

    for (const billett of billetter){
        ut+= "<tr><td>" +billett.antall+ "</td><td>" +billett.film + "</td><td>" + billett.fornavn + "</td><td>" +
            billett.etternavn + "</td><td>" + billett.telefon + "</td><td>" + billett.epost + "</td></tr>";
    }

    $("#ut").html(ut);
}

$("#slett").click(function (){
    $.get( "/slettAlle", function() {
        hentAlle();
    });
});