package com.hotelmanagment.springboot.hotelmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotelmanagment.springboot.hotelmanagement.DAO.HotelMasterDAO;
import com.hotelmanagment.springboot.hotelmanagement.entity.HotelMaster;

@Service
public class HotelMasterServiceImpl implements HotelMasterService {

	HotelMasterDAO hotelMasterDAO;
	@Autowired
	public HotelMasterServiceImpl(HotelMasterDAO hotelMasterDAO) {
		this.hotelMasterDAO = hotelMasterDAO;
	}

	@Override
	@Transactional
	public List<HotelMaster> getAllHotels() {
		return hotelMasterDAO.getAllHotels();
	}

	@Override
	@Transactional
	public HotelMaster getSingleHotel(int hotel_id) {
		return hotelMasterDAO.getSingleHotel(hotel_id);
	}

	@Override
	@Transactional
	public List<HotelMaster> getHotels(int state_Id, int city_Id) {
		return hotelMasterDAO.getHotels(state_Id, city_Id);
	}

}
