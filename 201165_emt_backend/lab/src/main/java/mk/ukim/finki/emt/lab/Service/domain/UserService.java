package mk.ukim.finki.emt.lab.Service.domain;

import mk.ukim.finki.emt.lab.Model.domain.User;
import mk.ukim.finki.emt.lab.Model.enumerations.Roles;
import mk.ukim.finki.emt.lab.Model.projections.UserProjection;
import org.springframework.security.core.userdetails.UserDetailsService;

import java.util.List;

public interface UserService extends UserDetailsService {
    User register(String username, String password, String repeatPassword, String name, Roles role);
    User login(String username, String password);
    //User getAuthenticatedUser(String token);
    User findByUsername(String username);
    List<UserProjection> getAllUserNames();

}