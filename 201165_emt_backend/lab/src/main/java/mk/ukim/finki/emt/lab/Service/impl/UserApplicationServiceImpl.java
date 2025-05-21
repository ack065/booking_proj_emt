package mk.ukim.finki.emt.lab.Service.impl;

import mk.ukim.finki.emt.lab.Model.domain.User;
import mk.ukim.finki.emt.lab.Model.dto.create.CreateUserDTO;
import mk.ukim.finki.emt.lab.Model.dto.display.DisplayUserDTO;
import mk.ukim.finki.emt.lab.Model.dto.login.LoginResponseDTO;
import mk.ukim.finki.emt.lab.Model.dto.login.LoginUserDTO;
import mk.ukim.finki.emt.lab.Model.projections.UserProjection;
import mk.ukim.finki.emt.lab.Security.JwtHelper;
import mk.ukim.finki.emt.lab.Service.UserApplicationService;
import mk.ukim.finki.emt.lab.Service.domain.UserService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserApplicationServiceImpl implements UserApplicationService {
    private final UserService userService;
    private final JwtHelper jwtHelper;

    public UserApplicationServiceImpl(UserService userService, JwtHelper jwtHelper) {
        this.userService = userService;
        this.jwtHelper = jwtHelper;
    }



    @Override
    public Optional<LoginResponseDTO> login(LoginUserDTO loginUserDto) {
        User user = userService.login(loginUserDto.username(),loginUserDto.password());

        String token = jwtHelper.generateToken(user);
        return Optional.of(new LoginResponseDTO(token));
    }


    @Override
    public Optional<DisplayUserDTO> register(CreateUserDTO createUserDto) {
        User user = userService.register(
                createUserDto.username(),
                createUserDto.password(),
                createUserDto.repeatPassword(),
                createUserDto.name(),
                createUserDto.role()
        );
        return Optional.of(DisplayUserDTO.from(user));
    }

    @Override
    public Optional<DisplayUserDTO> findByUsername(String username) {
        return Optional.of(DisplayUserDTO.from(userService.findByUsername(username)));
    }

    @Override
    public List<UserProjection> getAllUserNames() {
        return userService.getAllUserNames();
    }
}
