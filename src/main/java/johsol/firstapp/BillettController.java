package johsol.firstapp;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;

@RestController
public class BillettController{
    @GetMapping("/")
    public Billett returBillett(Billett innBillett){
        return innBillett;
    }


    // public billettRegister<Billett> = new Arraylist<>();
    // billettRegister.add(Billett);
}
