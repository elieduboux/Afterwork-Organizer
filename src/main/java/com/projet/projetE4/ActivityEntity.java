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
}
