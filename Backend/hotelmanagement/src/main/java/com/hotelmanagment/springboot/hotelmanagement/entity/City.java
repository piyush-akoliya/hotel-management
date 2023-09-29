package com.hotelmanagment.springboot.hotelmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="city_master")
public class City {
	private int city_id;
	private String city_name;
	private int state_id;
	
	public City() {
	}

	public City(int city_id, String city_name, int state_id) {
		this.city_id = city_id;
		this.city_name = city_name;
		this.state_id = state_id;
	}

	@Id
	public int getCity_id() {
		return city_id;
	}

	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}

	public String getCity_name() {
		return city_name;
	}

	public void setCity_name(String city_name) {
		this.city_name = city_name;
	}

	
	public int getState_id() {
		return state_id;
	}

	public void setState_id(int state_id) {
		this.state_id = state_id;
	}

	@Override
	public String toString() {
		return "City [city_id=" + city_id + ", city_name=" + city_name + ", state_id=" + state_id + "]";
	}
	
	
	

}
