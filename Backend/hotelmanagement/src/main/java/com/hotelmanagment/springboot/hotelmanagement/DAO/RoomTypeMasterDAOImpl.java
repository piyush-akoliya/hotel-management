package com.hotelmanagment.springboot.hotelmanagement.DAO;

import javax.persistence.EntityManager;

import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hotelmanagment.springboot.hotelmanagement.entity.RoomTypeMaster;

@Repository
public class RoomTypeMasterDAOImpl implements RoomTypeMasterDAO{

	EntityManager entityManager;
	
	@Autowired
	public RoomTypeMasterDAOImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	
	@Override
	public RoomTypeMaster getRoomType(int roomTypeId) {
		Session currentSession=entityManager.unwrap(Session.class);
		
		RoomTypeMaster roomTypeMaster=currentSession.get(RoomTypeMaster.class, roomTypeId);
		
		return roomTypeMaster;
	}

}
