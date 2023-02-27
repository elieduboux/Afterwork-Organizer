package com.projet.projetE4;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;


@Entity
@Table(name= "activities")
@Getter
@Setter
public class ActivityEntity {

	@Id
	private Long id;
	
	private String name;
	private String type;
	private String organisator;
	private String collaborator;
	
	public ActivityEntity(Long id, String name, String type, String organisator, String collaborator) {
		this.id = id;
		this.name = name;
		this.type = type;
		this.organisator = organisator;
		this.collaborator = collaborator;
	}
	
	public Long getId() {
		return this.id;
	}
	
	public String getName() {
		return this.name;
	}
	
	public String getType() {
		return this.type;
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
	
	public void setType(String type) {
		this.type = type;
	}
	
	public void setOrganisator(String org) {
		this.organisator = org;
	}
	
	public void setCollaborator(String collab) {
		this.collaborator = collab;
	}
}
