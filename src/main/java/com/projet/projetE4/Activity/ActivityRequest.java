package com.projet.projetE4.Activity;

import lombok.*;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class ActivityRequest {
    private final String name;
    private final String type;
    private final String organisator;
    private final String collaborator;
}
