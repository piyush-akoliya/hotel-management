package com.hotelmanagment.springboot.hotelmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotelmanagment.springboot.hotelmanagement.DAO.CityDAO;
import com.hotelmanagment.springboot.hotelmanagement.entity.City;

@Service
public class CityServiceImpl implements CityService {

	CityDAO cityDAO;
	@Autowired
	CityServiceImpl(CityDAO theCityDAO)
	{
		cityDAO=theCityDAO;
	}
	
	@Override
	@Transactional
	public List<City> get_cities() {
		return cityDAO.get_cities();	
	}

	@Override
	@Transactional
	public City get_city(int id) {
		return cityDAO.get_city(id);
	}

}
