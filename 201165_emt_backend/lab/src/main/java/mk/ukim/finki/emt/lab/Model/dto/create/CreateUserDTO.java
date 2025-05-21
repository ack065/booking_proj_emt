package mk.ukim.finki.emt.lab.Model.dto.create;


import mk.ukim.finki.emt.lab.Model.domain.User;
import mk.ukim.finki.emt.lab.Model.enumerations.Roles;


public record CreateUserDTO(
        String username,
        String password,
        String repeatPassword,
        String name,
        Roles role
) {
    public boolean passwordsMatch() {
        return password != null && password.equals(repeatPassword);
    }
    public User toUser() {
        return new User(username, password, name, role);
    }
}