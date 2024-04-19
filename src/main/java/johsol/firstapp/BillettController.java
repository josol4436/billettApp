package johsol.firstapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController  //Sier til kompiler at den vil snakke med en server
public class BillettController{
    @Autowired
    private BillettRepository repo;

    @PostMapping("/lagre")
    public void lagre(Billett billett){
    repo.lagreBillett(billett);
    }
    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return repo.hentAlle();
    }
    @GetMapping("/slettAlle")
    public void slettAlle(){
        repo.slettAlle();
    }

    @DeleteMapping("/slettBillett")
    public void slettBillett(@RequestParam Long billettNr){
        repo.slettBillett(billettNr);
    }
    @GetMapping("/hentBilletterFraDB")
    public Billett hentBilletterFraDB(@RequestParam Long billettNr){return repo.findById(billettNr);}
}

