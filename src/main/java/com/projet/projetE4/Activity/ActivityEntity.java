package com.projet.projetE4.Activity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


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
	@Column(name = "address")
	private String address;
	@Column(name = "date")
	private String date;
	@Column(name = "time")
	private String time;
	@Column(name = "duration")
	private String duration;
	@Column(name = "participants")
	private String participants;
	@Column(name = "type")
	private String type;

	@Column(name = "organaizer")
	private String organizer;

	public ActivityEntity(String name, String address, String date, String time,
						  String duration, String participants, String type, String organizer) {
		this.name = name;
		this.address = address;
		this.date = date;
		this.time = time;
		this.duration = duration;
		this.participants = participants;
		this.type = type;
		this.organizer = organizer;
	}
}
