package com.hotelmanagment.springboot.hotelmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="hotel_master")
public class HotelMaster {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int hotel_id;
	String hotel_name;
	int state_id;
	int city_id;
	int pin_code;
	float dst_fr_rail_st;
//	int rooms_available;
	String add_line1;
	String add_line2;
	float room_rate;
	
	
	
	public HotelMaster(int hotel_id, String hotel_name, int state_id, int city_id, int pin_code, float dst_fr_rail_st,
			String add_line1, String add_line2, float room_rate) {
		super();
		this.hotel_id = hotel_id;
		this.hotel_name = hotel_name;
		this.state_id = state_id;
		this.city_id = city_id;
		this.pin_code = pin_code;
		this.dst_fr_rail_st = dst_fr_rail_st;
		this.add_line1 = add_line1;
		this.add_line2 = add_line2;
		this.room_rate = room_rate;
	}


	public HotelMaster() {
		
	}
	
	
public float getRoom_rate() {
		return room_rate;
	}


	public void setRoom_rate(float room_rate) {
		this.room_rate = room_rate;
	}


	//	@OnetoMany(cascade=Cascade.value)
	public int getHotel_id() {
		return hotel_id;
	}
	public void setHotel_id(int hotel_id) {
		this.hotel_id = hotel_id;
	}
	public String getHotel_name() {
		return hotel_name;
	}
	public void setHotel_name(String hotel_name) {
		this.hotel_name = hotel_name;
	}
	public int getState_id() {
		return state_id;
	}
	public void setState_id(int state_id) {
		this.state_id = state_id;
	}
	public int getCity_id() {
		return city_id;
	}
	public void setCity_id(int city_id) {
		this.city_id = city_id;
	}
	public int getPin_code() {
		return pin_code;
	}
	public void setPin_code(int pin_code) {
		this.pin_code = pin_code;
	}
	public float getDst_fr_rail_st() {
		return dst_fr_rail_st;
	}
	public void setDst_fr_rail_st(float dst_fr_rail_st) {
		this.dst_fr_rail_st = dst_fr_rail_st;
	}
//	public int getRooms_available() {
//		return rooms_available;
//	}
//	public void setRooms_available(int rooms_available) {
//		this.rooms_available = rooms_available;
//	}
	public String getAdd_line1() {
		return add_line1;
	}
	public void setAdd_line1(String add_line1) {
		this.add_line1 = add_line1;
	}
	public String getAdd_line2() {
		return add_line2;
	}
	public void setAdd_line2(String add_line2) {
		this.add_line2 = add_line2;
	}


	@Override
	public String toString() {
		return "HotelMaster [hotel_id=" + hotel_id + ", hotel_name=" + hotel_name + ", state_id=" + state_id
				+ ", city_id=" + city_id + ", pin_code=" + pin_code + ", dst_fr_rail_st=" + dst_fr_rail_st
				+ ", add_line1=" + add_line1 + ", add_line2=" + add_line2 + ", room_rate=" + room_rate + "]";
	}
	
	
	
	
}
