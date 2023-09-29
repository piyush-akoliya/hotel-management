package com.hotelmanagment.springboot.hotelmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="customer_master")
public class Customer{
	
	private int cust_id;
	private String cust_name;
	private String cust_email_id ;
	private String cust_password ;
	private long cust_contact;
	private int cust_age;
	private String credit_card_no;
	private String cust_address;
	
	
	public Customer() {
		super();
	}
	Customer(int cust_id, String cust_name, String cust_email_id, String cust_password, long cust_contact, int cust_age,
			String credit_card_no, String cust_address) {
		super();
		this.cust_id = cust_id;
		this.cust_name = cust_name;
		this.cust_email_id = cust_email_id;
		this.cust_password = cust_password;
		this.cust_contact = cust_contact;
		this.cust_age = cust_age;
		this.credit_card_no = credit_card_no;
		this.cust_address = cust_address;
	}
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
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
	public String getCust_password() {
		return cust_password;
	}
	public void setCust_password(String cust_password) {
		this.cust_password = cust_password;
	}
	public long getCust_contact() {
		return cust_contact;
	}
	public void setCust_contact(long cust_contact) {
		this.cust_contact = cust_contact;
	}
	public int getCust_age() {
		return cust_age;
	}
	public void setCust_age(int cust_age) {
		this.cust_age = cust_age;
	}
	public String getCredit_card_no() {
		return credit_card_no;
	}
	public void setCredit_card_no(String credit_card_no) {
		this.credit_card_no = credit_card_no;
	}
	public String getCust_address() {
		return cust_address;
	}
	public void setCust_address(String cust_address) {
		this.cust_address = cust_address;
	}

	
	
	
	
	
}
