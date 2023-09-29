package com.hotelmanagment.springboot.hotelmanagement.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanagment.springboot.hotelmanagement.entity.HotelMaster;
import com.hotelmanagment.springboot.hotelmanagement.service.HotelMasterServiceImpl;

@RestController
@RequestMapping("/hotels")
@CrossOrigin
public class HotelController {
	
	@Autowired
	private HotelMasterServiceImpl hotelMasterServiceImpl;
	
	@GetMapping("/all")
	public List<HotelMaster> getHotels() {
		return hotelMasterServiceImpl.getAllHotels();
	}
	
	@GetMapping("/{hotelId}")
	public HotelMaster getSingleHotel(@PathVariable int hotelId)
	{
		return hotelMasterServiceImpl.getSingleHotel(hotelId);
	}
	
	@GetMapping("/all/{state_Id}/{city_Id}")
	public List<HotelMaster> getHotels(@PathVariable int state_Id,@PathVariable int city_Id){
	return hotelMasterServiceImpl.getHotels(state_Id,city_Id);
	}
}
