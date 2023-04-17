package com.projet.projetE4.collaborator;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:8100")
@RestController
@RequestMapping(path = "/collaborator")
public class CollaboratorController {
    private final CollaboratorService collaboratorService;
    @Autowired
    public CollaboratorController(CollaboratorService collaboratorService) {
        this.collaboratorService = collaboratorService;
    }

    @GetMapping
    public List<Collaborator> getCollaborators()
    {
        return collaboratorService.getCollaborators();
    }

    @PostMapping
    public void registerNewCollaborator(@RequestBody Collaborator collaborator) throws IllegalAccessException {
        collaboratorService.addNewCollaborator(collaborator);
    }

    @DeleteMapping(path = "{collaboratorId}")
    public void deleteCollaborator(@PathVariable("collaboratorId") Long collaboratorId) throws IllegalAccessException {
        collaboratorService.deleteCollaborator(collaboratorId);
    }

    @PutMapping(path="{collaboratorId}")
    public void updateCollaborator(
            @PathVariable("collaboratorId") Long collaboratorId,
            @RequestParam(required = false) String email) throws IllegalAccessException {
        collaboratorService.updateCollaborator(collaboratorId,email);
    }
}
