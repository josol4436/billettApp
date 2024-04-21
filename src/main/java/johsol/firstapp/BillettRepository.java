package johsol.firstapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

@Repository
public class BillettRepository{
    @Autowired
    private JdbcTemplate db;

    class BillettRowMapper implements RowMapper< Billett > {
        @Override
        public Billett mapRow(ResultSet rs, int rowNum) throws SQLException {
            Billett billett = new Billett();
            billett.setBillettNr(rs.getLong("billettNr"));
            billett.setFilm(rs.getString("film"));
            billett.setAntall(rs.getInt("antall"));
            billett.setFornavn(rs.getString("fornavn"));
            billett.setEtternavn(rs.getString("etternavn"));
            billett.setTelefon(rs.getString("telefon"));
            billett.setEpost(rs.getString("epost"));
            return billett;
        }
    }
    public int lagreBillett(Billett billett){
        String sql = "INSERT INTO billett(film, antall, fornavn, etternavn, telefon, epost) VALUES(?,?,?,?,?,?)";
        return db.update(sql, billett.getFilm(), billett.getAntall(), billett.getFornavn(), billett.getEtternavn(), billett.getTelefon(), billett.getEpost());
    }

    public List<Billett> hentAlle(){
        List<Billett> alleBilletter = db.query("SELECT * FROM billett ORDER BY etternavn", new BillettRowMapper());
        return alleBilletter;
    }
    public void slettAlle(){
        String sql = "DELETE FROM billett;";
        db.update(sql);
    }

    public int slettBillett(Long billettNr){
        String sql = "DELETE FROM billett WHERE billettNr = ?";
        return db.update(sql, new Object[]{
            billettNr
        });
    }
    public Billett findById(Long billettNr) {
        return db.queryForObject("SELECT * FROM billett WHERE billettNr=?", new BillettRowMapper(), billettNr);
    }

    public int oppdaterBillettiDB(Billett billett) {
        String sql = "UPDATE billett SET film = ?, antall =?, fornavn =?, etternavn =?, telefon =?, epost =? WHERE billettNr= ?";
        return db.update(sql, billett.getFilm(), billett.getAntall(), billett.getFornavn(), billett.getEtternavn(), billett.getTelefon(), billett.getEpost(), billett.getBillettNr());
    }
}
