package com.projet.AfterworkOrganizer.registration;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class PasswordValidator implements Predicate<String> {

    @Override
    public boolean test(String s) {
        //TODO : Regex to validate
        return true;
    }
}
