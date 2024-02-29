package johsol.firstapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class BillettController{

    public final List<Billett> billettRegister = new ArrayList<>();
    @PostMapping("/lagre")
    public void lagreBillett(Billett innBillett){
        billettRegister.add(innBillett);
    }
    @GetMapping("/hentAlle")
    public List<Billett> hentAlle(){
        return billettRegister;
    }
    @GetMapping("/slettAlle")
    public void slettAlle(){
        billettRegister.clear();
    }
}
