package com.hotelmanagment.springboot.hotelmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="room_master")
public class Roommaster{
	private int room_id;
	private int room_type;
	private int hotel_id;
	private float room_rate;
	private int avail;

	public Roommaster(int room_id, int room_type, int hotel_id, float room_rate, int avail) {
		this.room_id = room_id;
		this.room_type = room_type;
		this.hotel_id = hotel_id;
		this.room_rate = room_rate;
		this.avail = avail;
	}
		
	public Roommaster() {
	}

	@Id
	public int getRoom_id() {
		return room_id;
	}
	public void setRoom_id(int room_id) {
		this.room_id = room_id;
	}
	public int getRoom_type() {
		return room_type;
	}
	public void setRoom_type(int room_type) {
		this.room_type = room_type;
	}
	public int getHotel_id() {
		return hotel_id;
	}
	public void setHotel_id(int hotel_id) {
		this.hotel_id = hotel_id;
	}
	public float getRoom_rate() {
		return room_rate;
	}
	public void setRoom_rate(float room_rate) {
		this.room_rate = room_rate;
	}
	public int getAvail() {
		return avail;
	}
	public void setAvail(int avail) {
		this.avail = avail;
	}

}
