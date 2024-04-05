CREATE TABLE billett(
    billettNr SMALLINT NOT NULL AUTO_INCREMENT,
    film VARCHAR(30),
    antall SMALLINT,
    fornavn VARCHAR(30),
    etternavn VARCHAR(30),
    telefon CHAR(8),
    epost VARCHAR(50),
    PRIMARY KEY (billettNr)
);