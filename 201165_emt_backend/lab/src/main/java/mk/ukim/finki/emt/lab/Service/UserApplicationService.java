package mk.ukim.finki.emt.lab.Service;

import mk.ukim.finki.emt.lab.Model.dto.create.CreateUserDTO;
import mk.ukim.finki.emt.lab.Model.dto.display.DisplayUserDTO;
import mk.ukim.finki.emt.lab.Model.dto.login.LoginResponseDTO;
import mk.ukim.finki.emt.lab.Model.dto.login.LoginUserDTO;
import mk.ukim.finki.emt.lab.Model.projections.UserProjection;

import java.util.List;
import java.util.Optional;

public interface UserApplicationService {
    Optional<LoginResponseDTO> login(LoginUserDTO loginUserDto);
    Optional<DisplayUserDTO> register(CreateUserDTO createUserDto);
    Optional<DisplayUserDTO> findByUsername(String username);
    List<UserProjection> getAllUserNames();
}
