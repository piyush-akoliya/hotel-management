package com.hotelmanagment.springboot.hotelmanagement.entity;

import java.util.Set;
import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="state_master")
public class State {
	private int state_id;
	private String state_name;
	private Set<City> cities;

	public State() {
	}

	public State(int state_id, String state_name, Set<City> cities) {
		this.state_id = state_id;
		this.state_name = state_name;
		this.cities = cities;
	}

	@Id
	public int getState_id() {
		return state_id;
	}


	public void setState_id(int state_id) {
		this.state_id = state_id;
	}


	public String getState_name() {
		return state_name;
	}


	public void setState_name(String state_name) {
		this.state_name = state_name;
	}
	
	@OneToMany(cascade = CascadeType.ALL,fetch=FetchType.EAGER)
	@JoinColumn(name = "state_id", referencedColumnName="state_id")
	public Set<City> getCities() {
		return cities;
	}

	public void setCities(Set<City> cities) {
		this.cities = cities;
	}

	@Override
	public String toString() {
		return "State [state_id=" + state_id + ", state_name=" + state_name + "]";
	}
	
	
	
}
