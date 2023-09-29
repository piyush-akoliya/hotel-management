package com.hotelmanagment.springboot.hotelmanagement.DAO;

import org.springframework.stereotype.Repository;

import com.hotelmanagment.springboot.hotelmanagement.entity.Booking;

@Repository
public interface BookingDao  {

	Booking getBooking(int bookid);
	Booking get_Bookingemail(String email);
	Booking addBooking(Booking book);
}
