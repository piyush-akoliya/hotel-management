package com.hotelmanagment.springboot.hotelmanagement.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanagment.springboot.hotelmanagement.entity.City;
import com.hotelmanagment.springboot.hotelmanagement.service.CityService;

@RestController
public class CityController {
		
	@Autowired
	private CityService cityService;
	
	
	@GetMapping("/GetAllCities")
	public List<City> dipAllCities()
	{
		return cityService.get_cities();
	}
	
	@GetMapping("/GetAllCities/{id}")
	public City getState(@PathVariable int id)
	{
		return cityService.get_city(id);
	}

}
