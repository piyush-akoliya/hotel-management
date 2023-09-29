package com.hotelmanagment.springboot.hotelmanagement.DAO;

import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hotelmanagment.springboot.hotelmanagement.entity.Roommaster;

@Repository
class RoomMasterDAOimpl implements RoomMasterDAO {
	
	private EntityManager entityManager;
	
	@Autowired
	public RoomMasterDAOimpl(EntityManager theEntityManager)
	{
		entityManager=theEntityManager;
	}
	
	@Override
	public Roommaster get_room(int id) {
		Session currentSession=entityManager.unwrap(Session.class);
		Roommaster room=currentSession.get(Roommaster.class,id);
		return room;
	}
}
