package com.projet.projetE4.Activity;

import com.projet.projetE4.collaborator.Collaborator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name= "activities")
public class ActivityEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "name")
	private String name;
	@Column(name = "organizer")
	private String organizer;
	@Column(name = "address")
	private String address;
	@Column(name = "date")
	private String date;
	@Column(name = "time")
	private String time;
	@Column(name = "duration")
	private String duration;
	@Column(name = "numberParticipants")
	private String numberParticipants;
	@Column(name = "type")
	private String type;

	@ManyToMany(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
	@JoinTable(name = "participe",
			joinColumns = {
					@JoinColumn(name = "activity_id", referencedColumnName = "id",
							nullable = false, updatable = false)},
			inverseJoinColumns = {
					@JoinColumn(name = "collaborator_id", referencedColumnName = "id",
							nullable = false, updatable = false)})
	private Set<Collaborator> collaborators = new HashSet<>();

	public ActivityEntity(String name, String organizer, String address, String date, String time,
						  String duration, String numberParticipants, String type) {
		this.name = name;
		this.address = address;
		this.date = date;
		this.time = time;
		this.duration = duration;
		this.type = type;
		this.organizer = organizer;
		this.numberParticipants = numberParticipants;
	}

	public void addCollaborator(Collaborator collaborator) {
		collaborators.add(collaborator);
		collaborator.getActivities().add(this);
	}

	public void removeCollaborator(Collaborator collaborator) {
		collaborators.remove(collaborator);
		collaborator.getActivities().remove(this);
	}
}
