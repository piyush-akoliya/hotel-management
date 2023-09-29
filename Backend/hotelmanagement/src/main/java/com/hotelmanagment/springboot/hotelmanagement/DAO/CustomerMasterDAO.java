package com.hotelmanagment.springboot.hotelmanagement.DAO;

import com.hotelmanagment.springboot.hotelmanagement.entity.Customer;

public interface CustomerMasterDAO {
	
	Customer get_customer(int id);
	void addcustomer(Customer cum);
	void update_customer(Customer rmm,int id);
	Customer get_customeremail(String email);

}
