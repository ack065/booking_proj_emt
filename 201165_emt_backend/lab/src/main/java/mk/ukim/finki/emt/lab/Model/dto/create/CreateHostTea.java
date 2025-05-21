package mk.ukim.finki.emt.lab.Model.dto.create;


import lombok.Data;

@Data
public class CreateHostTea {
    Long id;
    String name;
    String surname;
    Long countryId;
}
