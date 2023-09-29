package com.hotelmanagment.springboot.hotelmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.hotelmanagment.springboot.hotelmanagement.DAO.RoomTypeMasterDAOImpl;
import com.hotelmanagment.springboot.hotelmanagement.entity.RoomTypeMaster;

@Service
public class RoomTypeMasterServiceImpl implements RoomTypeMasterService {

	RoomTypeMasterDAOImpl roomTypeMasterDAOImpl;
	
	@Autowired
	public RoomTypeMasterServiceImpl(RoomTypeMasterDAOImpl roomTypeMasterDAOImpl) {
		this.roomTypeMasterDAOImpl = roomTypeMasterDAOImpl;
	}


	@Override
	@Transactional
	public RoomTypeMaster getRoomType(int roomTypeId) {
		return roomTypeMasterDAOImpl.getRoomType(roomTypeId);
	}

}
