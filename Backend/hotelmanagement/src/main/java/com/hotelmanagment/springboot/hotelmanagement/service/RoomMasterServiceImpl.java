package com.hotelmanagment.springboot.hotelmanagement.service;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotelmanagment.springboot.hotelmanagement.DAO.RoomMasterDAO;
import com.hotelmanagment.springboot.hotelmanagement.entity.Roommaster;

@Service
public class RoomMasterServiceImpl implements RoomMasterService {

	RoomMasterDAO roomMasterDAO;
	
	RoomMasterServiceImpl(RoomMasterDAO theRoomMasterDAO){
		roomMasterDAO=theRoomMasterDAO;
	}
	
	@Override
	@Transactional
	public Roommaster get_room(int id) {
		return roomMasterDAO.get_room(id);
	}

}
