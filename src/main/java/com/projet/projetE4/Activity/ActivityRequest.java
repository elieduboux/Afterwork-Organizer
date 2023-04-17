package com.projet.projetE4.Activity;

import lombok.*;

@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class ActivityRequest {
    private final String name;
    private final String address;
    private final String date;
    private final String time;
    private final String duration;
    private final String participants;
    private final String type;
    private final String organizer;
}
