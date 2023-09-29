package com.hotelmanagment.springboot.hotelmanagement.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanagment.springboot.hotelmanagement.entity.Customer;
import com.hotelmanagment.springboot.hotelmanagement.service.CustomerMasterService;

@RestController
@CrossOrigin
class CustomerController {
	
	@Autowired
	private CustomerMasterService customerMasterService;
	
	@GetMapping("/GetAllCustomers/{id}")
	public Customer getCustomer(@PathVariable int id)
	{
		return customerMasterService.get_customer(id);
	}
	
	@PostMapping(value="/add",headers="Accept=application/json")
	public void addCustomer(@RequestBody Customer cust)
	{
		customerMasterService.addcustomer(cust);
	}
		
	@PutMapping(value="/update/{id}",headers="Accept=application/json")
	public void updateRoom(@RequestBody Customer cust,@PathVariable int id)
	{
		customerMasterService.update_customer(cust, id);
	}
	
	@GetMapping("/GetCustomerEmail/{email}")
	public Customer getCustomerEmail(@PathVariable String email)
	{
		return customerMasterService.get_customeremail(email);
	}
}

