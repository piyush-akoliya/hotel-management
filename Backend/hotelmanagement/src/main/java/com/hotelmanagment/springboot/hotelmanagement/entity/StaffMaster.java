package com.hotelmanagment.springboot.hotelmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name= "staff_master")
public class StaffMaster {
	String s_name;
	String s_emaild;
	String s_password;    
	String s_desig;
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int staff_id;
	int hotel_id;
	/**
	 * @return the s_name
	 */
	public String getS_name() {
		return s_name;
	}
	/**
	 * @param s_name the s_name to set
	 */
	public void setS_name(String s_name) {
		this.s_name = s_name;
	}
	/**
	 * @return the s_emaild
	 */
	public String getS_emaild() {
		return s_emaild;
	}
	/**
	 * @param s_emaild the s_emaild to set
	 */
	public void setS_emaild(String s_emaild) {
		this.s_emaild = s_emaild;
	}
	/**
	 * @return the s_password
	 */
	public String getS_password() {
		return s_password;
	}
	/**
	 * @param s_password the s_password to set
	 */
	public void setS_password(String s_password) {
		this.s_password = s_password;
	}
	/**
	 * @return the s_desig
	 */
	public String getS_desig() {
		return s_desig;
	}
	/**
	 * @param s_desig the s_desig to set
	 */
	public void setS_desig(String s_desig) {
		this.s_desig = s_desig;
	}
	/**
	 * @return the staff_id
	 */
	public int getStaff_id() {
		return staff_id;
	}
	/**
	 * @param staff_id the staff_id to set
	 */
	public void setStaff_id(int staff_id) {
		this.staff_id = staff_id;
	}
	/**
	 * @return the hotel_id
	 */
	public int getHotel_id() {
		return hotel_id;
	}
	/**
	 * @param hotel_id the hotel_id to set
	 */
	public void setHotel_id(int hotel_id) {
		this.hotel_id = hotel_id;
	}
	/* (non-Javadoc)
	 * @see java.lang.Object#toString()
	 */
	@Override
	public String toString() {
		return "StaffMaster [s_name=" + s_name + ", s_emaild=" + s_emaild + ", s_password=" + s_password + ", s_desig="
				+ s_desig + ", staff_id=" + staff_id + ", hotel_id=" + hotel_id + "]";
	}
	/**
	 * @param s_name
	 * @param s_emaild
	 * @param s_password
	 * @param s_desig
	 */
	public StaffMaster(String s_name, String s_emaild, String s_password, String s_desig) {
		super();
		this.s_name = s_name;
		this.s_emaild = s_emaild;
		this.s_password = s_password;
		this.s_desig = s_desig;
	}
	
	
	public StaffMaster(){
		
	}
	

}
