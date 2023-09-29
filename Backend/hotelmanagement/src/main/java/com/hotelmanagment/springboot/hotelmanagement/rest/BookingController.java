package com.hotelmanagment.springboot.hotelmanagement.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanagment.springboot.hotelmanagement.entity.Booking;
import com.hotelmanagment.springboot.hotelmanagement.entity.Customer;
import com.hotelmanagment.springboot.hotelmanagement.service.BookingService;
import com.hotelmanagment.springboot.hotelmanagement.service.CustomerMasterService;

@RestController
@CrossOrigin
public class BookingController {
	
	@Autowired
	private BookingService bookingService; 
	
	@Autowired
	private CustomerMasterService customerService;
	
	@GetMapping("/book/{bookid}")
	public Booking getBooking(@PathVariable String bookid) {
		return this.bookingService.getBooking(Integer.parseInt(bookid));
	}
	
	@GetMapping("/bookId/{emailId}")
	public Booking getBookingEmail(@PathVariable String emailId) {
		return this.bookingService.get_Bookingemail(emailId);
	}
	
	@PostMapping("/book")
	public Booking addBooking(@RequestBody Booking book) {
		if(book.getCust_id()==0)
		{
			 Customer cust=new Customer();
			 cust.setCust_name(book.getCust_name());
			 cust.setCust_contact(book.getCust_contact());
			 cust.setCust_address(book.getCust_address());
			 customerService.addcustomer(cust);
			 book.setCust_id(cust.getCust_id());
		}
		
		return bookingService.addBooking(book);
	}
}
