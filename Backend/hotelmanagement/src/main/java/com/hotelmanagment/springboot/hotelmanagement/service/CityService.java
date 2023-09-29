package com.hotelmanagment.springboot.hotelmanagement.service;

import java.util.List;

import com.hotelmanagment.springboot.hotelmanagement.entity.City;

public interface CityService {
	List<City> get_cities();
	City get_city(int id);
}
