package com.hotelmanagment.springboot.hotelmanagement.entity;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Invoice {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int invoice_id;
	private int booking_id;
	private Date inv_date;
	private int cust_id;
	private String cust_name;
	private String cust_email_id;
	private long cust_contact;
	private Date check_in;
	private Date check_out;
	private int hotel_id;
	private float room_rate;
	private float room_rent_amt;
	private float other_charges;
	private float total_bill_amt;
	private String cust_address;
	private int no_rooms;

	public int getInvoice_id() {
		return invoice_id;
	}

	public void setInvoice_id(int invoice_id) {
		this.invoice_id = invoice_id;
	}

	public int getBooking_id() {
		return booking_id;
	}

	public void setBooking_id(int booking_id) {
		this.booking_id = booking_id;
	}

	public Date getInv_date() {
		return inv_date;
	}

	public void setInv_date(Date inv_date) {
		this.inv_date = inv_date;
	}

	public int getCust_id() {
		return cust_id;
	}

	public void setCust_id(int cust_id) {
		this.cust_id = cust_id;
	}

	public String getCust_name() {
		return cust_name;
	}

	public void setCust_name(String cust_name) {
		this.cust_name = cust_name;
	}

	public String getCust_email_id() {
		return cust_email_id;
	}

	public void setCust_email_id(String cust_email_id) {
		this.cust_email_id = cust_email_id;
	}

	public long getCust_contact() {
		return cust_contact;
	}

	public void setCust_contact(long cust_contact) {
		this.cust_contact = cust_contact;
	}

	public Date getCheck_in() {
		return check_in;
	}

	public void setCheck_in(Date check_in) {
		this.check_in = check_in;
	}

	public Date getCheck_out() {
		return check_out;
	}

	public void setCheck_out(Date check_out) {
		this.check_out = check_out;
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

	public float getRoom_rent_amt() {
		return room_rent_amt;
	}

	public void setRoom_rent_amt(float room_rent_amt) {
		this.room_rent_amt = room_rent_amt;
	}

	public float getOther_charges() {
		return other_charges;
	}

	public void setOther_charges(float other_charges) {
		this.other_charges = other_charges;
	}

	public float getTotal_bill_amt() {
		return total_bill_amt;
	}

	public void setTotal_bill_amt(float total_bill_amt) {
		this.total_bill_amt = total_bill_amt;
	}

	public String getCust_address() {
		return cust_address;
	}

	public void setCust_address(String cust_address) {
		this.cust_address = cust_address;
	}

	public int getNo_rooms() {
		return no_rooms;
	}

	public void setNo_rooms(int no_rooms) {
		this.no_rooms = no_rooms;
	}

}
