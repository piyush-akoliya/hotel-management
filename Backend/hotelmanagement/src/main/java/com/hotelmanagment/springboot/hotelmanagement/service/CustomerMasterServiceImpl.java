package com.hotelmanagment.springboot.hotelmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotelmanagment.springboot.hotelmanagement.DAO.CustomerMasterDAO;
import com.hotelmanagment.springboot.hotelmanagement.entity.Customer;

@Service
public class CustomerMasterServiceImpl implements CustomerMasterService{
	
	CustomerMasterDAO customerMasterDAO;
	
	@Autowired
	CustomerMasterServiceImpl(CustomerMasterDAO theCustomerMasterDAO){
		customerMasterDAO=theCustomerMasterDAO;
	}

	@Override
	@Transactional
	public Customer get_customer(int id) {
		return customerMasterDAO.get_customer(id);
	}

	@Override
	@Transactional
	public void addcustomer(Customer cum) {
		customerMasterDAO.addcustomer(cum);
	}

	@Override
	@Transactional
	public void update_customer(Customer rmm, int id) {
		customerMasterDAO.update_customer(rmm, id);
	}
	@Override
	@Transactional
	public Customer get_customeremail(String email) {
		return customerMasterDAO.get_customeremail(email);
	}
}
