package com.projet.AfterworkOrganizer;

import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;
import java.time.Month;
import java.util.List;

@Configuration
public class CollaboratorConfig {

    @Bean
    CommandLineRunner commandLineRunner(
            CollaboratorRepository repository){
        return  args -> {
            Collaborator mariam = new Collaborator(
                    "Mariane",
                    "Marian@gmail.com",
                    LocalDate.of(2000, Month.APRIL,5)
            );

            Collaborator alex = new Collaborator(
                    "Alex",
                    "Alex@gmail.com",
                    LocalDate.of(2005, Month.JANUARY,3)
            );
            repository.saveAll(
                    List.of(mariam,alex)
            );
        };
    };
}
