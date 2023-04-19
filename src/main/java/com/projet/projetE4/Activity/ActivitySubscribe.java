package com.projet.projetE4.Activity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name= "subscribe")
public class ActivitySubscribe {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@Column(name = "name")
	private String name;
	@Column(name = "surname")
	private String surname;
	@Column(name = "preferences")
	private String preferences;
	@Column(name = "organisator")
	private String organisator;
	@Column(name = "collaborator")
	private String collaborator;
	
	public ActivitySubscribe(Long id, String name, String surname, String preferences, String organisator, String collaborator) {
		this.id = id;
		this.name = name;
		this.surname = surname;
		this.preferences = preferences;
		this.organisator = organisator;
		this.collaborator = collaborator;
	}
	
	public ActivitySubscribe() {
		
	}
	
	public Long getId() {
		return this.id;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getSurname() {
		return this.surname;
	}
	public String getPreferences() {
		return this.preferences;
	}
	
	public String getOrganisator() {
		return this.organisator;
	}
	
	public String getCollaborator() {
		return this.collaborator;
	}
	
	public void setId(Long id) {
		this.id = id;
	}
	
	public void setName(String name) {
		this.name = name;
	}
	
	public void setSurname(String surname) {
		this.surname = surname;
	}

	public void setPreferences(String preferences) {
		this.preferences = preferences;
	}
	
	public void setOrganisator(String org) {
		this.organisator = org;
	}
	
	public void setCollaborator(String collab) {
		this.collaborator = collab;
	}
}
