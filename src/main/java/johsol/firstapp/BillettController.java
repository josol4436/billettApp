package johsol.firstapp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController  //Sier til kompiler at den vil snakke med en server
public class BillettController{
    @Autowired
    private BillettRepository repo;

    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett){
    repo.lagreBillett(innBillett);
    }
    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return repo.hentAlle();
    }
    @GetMapping("/slettAlle")
    public void slettAlle(){
        repo.slettAlle();
    }
}
