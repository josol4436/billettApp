CREATE TABLE billett(
    billettNr INT PRIMARY KEY AUTO_INCREMENT,
    film VARCHAR(30) NOT NULL,
    antall SMALLINT NOT NULL,
    fornavn VARCHAR(30) NOT NULL,
    etternavn VARCHAR(30) NOT NULL,
    telefon CHAR(8) NOT NULL,
    epost VARCHAR(50) NOT NULL
);