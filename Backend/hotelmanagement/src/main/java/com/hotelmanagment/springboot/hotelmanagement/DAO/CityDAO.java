package com.hotelmanagment.springboot.hotelmanagement.DAO;

import java.util.List;

import com.hotelmanagment.springboot.hotelmanagement.entity.City;

public interface CityDAO {
	List<City> get_cities();
	City get_city(int id);

}
