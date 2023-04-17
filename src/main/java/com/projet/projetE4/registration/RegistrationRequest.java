package com.projet.projetE4.registration;

import com.sun.istack.NotNull;
import lombok.*;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    @NotNull
    private final String firstName;
    @NotNull
    private final String lastName;
    @NotNull
    private final String email;
    @NotNull
    private final String adresse;
    @NotNull
    private final String password;

}
