package johsol.firstapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class BillettRepository{
    @Autowired
    private JdbcTemplate db;

    public void lagreBillett(Billett innBillett){
        String sql = "INSERT INTO billett(film, antall, fornavn, etternavn, telefon, epost) VALUES(?,?,?,?,?,?);";
        db.update(sql, innBillett.getFilm(), innBillett.getAntall(), innBillett.getFornavn(), innBillett.getEtternavn(), innBillett.getTelefon(), innBillett.getEpost());
    }

    public List<Billett> hentAlle(){
        String sql = "SELECT * FROM billett;";
        List<Billett> alleBilletter = db.query(sql, new BeanPropertyRowMapper(Billett.class));
        return alleBilletter;
    }
    public void slettAlle(){
        String sql = "DELETE FROM billett;";
        db.update(sql);
    }
}
