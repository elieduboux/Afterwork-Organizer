package com.projet.AfterworkOrganizer.registration;


import com.projet.AfterworkOrganizer.collaborator.Collaborator;
import lombok.AllArgsConstructor;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import java.security.Principal;

@Controller
//@RequestMapping(path = "/api/registration")
@AllArgsConstructor
public class RegistrationController {
    private RegistrationService registrationService;

//    @PostMapping
//    public String register(@RequestBody RegistrationRequest request) throws IllegalAccessException {
//        return registrationService.register(request);
//    }

    @RequestMapping(value = { "/", "/welcome" }, method = RequestMethod.GET)
    public String welcomePage(Model model) {
        model.addAttribute("title", "Welcome");
        model.addAttribute("message", "This is welcome page!");
        return "welcomePage";
    }

    @PostMapping("/process_register")
    public String register( RegistrationRequest request) throws IllegalAccessException {
        return registrationService.register(request);
    }

    @RequestMapping(value = "/signUp", method = RequestMethod.GET)
    public String signUpPage(WebRequest request, Model model) {
        model.addAttribute("collaborator",new Collaborator());
        return "signUpPage";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginPage(Model model) {

        return "loginPage";
    }

    @RequestMapping(value = "/logoutSuccessful", method = RequestMethod.GET)
    public String logoutSuccessfulPage(Model model) {
        model.addAttribute("title", "Logout");
        return "logoutSuccessfulPage";
    }

    @RequestMapping(value = "/userInfo", method = RequestMethod.GET)
    public String userInfo(Model model, Principal principal) {

        if (principal != null) {
            // After user login successfully.
            String userName = principal.getName();

            System.out.println("User Name: " + userName);

            Collaborator loginedUser = (Collaborator) ((Authentication) principal).getPrincipal();

            String userInfo = loginedUser.toString();
            model.addAttribute("userInfo", userInfo);
            return "userInfoPage";
        }

        return "403Page";
    }

    @RequestMapping(value = "/403", method = RequestMethod.GET)
    public String accessDenied(Model model, Principal principal) {

        if (principal != null) {
            User loginedUser = (User) ((Authentication) principal).getPrincipal();

            String userInfo = loginedUser.toString();

            model.addAttribute("userInfo", userInfo);

            String message = "Hi " + principal.getName() //
                    + "<br> You do not have permission to access this page!";
            model.addAttribute("message", message);

        }

        return "403Page";
    }

}
