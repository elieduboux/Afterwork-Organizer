package com.projet.projetE4.Activity;

import com.projet.projetE4.collaborator.Collaborator;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Objects;
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

	@ManyToMany(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
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
		if (collaborators.contains(collaborator)) {
			return;
		}
		collaborator.printActivities();
		printCollaborators();
		collaborators.add(collaborator);
		collaborator.getActivities().add(this);
	}

	@Override
	public boolean equals(Object o) {
		if (this == o) return true;
		if (o == null || getClass() != o.getClass()) return false;
		ActivityEntity activity = (ActivityEntity) o;
		return Objects.equals(id, activity.id) && Objects.equals(name, activity.name) &&
				Objects.equals(organizer, activity.organizer) && Objects.equals(address, activity.address) &&
				Objects.equals(date, activity.date) && Objects.equals(time, activity.time) &&
				Objects.equals(duration, activity.duration) &&
				Objects.equals(numberParticipants, activity.numberParticipants) &&
				Objects.equals(type, activity.type) && Objects.equals(collaborators, activity.collaborators);
	}

//	@Override
//	public int hashCode() {
//		return Objects.hash(id, name, organizer, address, date, time, duration, numberParticipants, type, collaborators);
//	}

	public void removeCollaborator(Collaborator collaborator) {
		collaborator.getActivities().remove(this);
		collaborators.remove(collaborator);
	}

	public void printCollaborators(){
		for (Collaborator c: collaborators) {
			System.out.println(c);
		}
	}
}
