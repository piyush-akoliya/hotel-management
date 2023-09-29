package com.hotelmanagment.springboot.hotelmanagement.service;

import java.util.List;

import com.hotelmanagment.springboot.hotelmanagement.entity.HotelMaster;

public interface HotelMasterService {
	List<HotelMaster> getAllHotels();
	HotelMaster getSingleHotel(int hotel_id);
	List<HotelMaster> getHotels(int state_Id, int city_Id);
}
