package com.hotelmanagment.springboot.hotelmanagement.DAO;

import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hotelmanagment.springboot.hotelmanagement.entity.HotelMaster;

@Repository
public class HotelMasterDAOImpl implements HotelMasterDAO {

	private EntityManager entityManager;
	
	@Autowired
	public HotelMasterDAOImpl(EntityManager theEntityManager)
	{
		entityManager=theEntityManager;
	}
	
	@Override
	public List<HotelMaster> getAllHotels() {
		Session currentSession=entityManager.unwrap(Session.class);
		Query<HotelMaster> query=currentSession.createQuery("from HotelMaster",HotelMaster.class);
		List<HotelMaster> listHotels=query.getResultList();	
		return listHotels;
	}

	@Override
	public HotelMaster getSingleHotel(int hotel_id) {
		Session currentSession=entityManager.unwrap(Session.class);
		HotelMaster hotelMaster=currentSession.get(HotelMaster.class, hotel_id);
		return hotelMaster;
	}

	@Override
	public List<HotelMaster> getHotels(int state_Id, int city_Id) {
		Session currentSession=entityManager.unwrap(Session.class);
		String hql = "from HotelMaster where state_id=:st_id and city_id=:ct_id";
		Query<HotelMaster> query=currentSession.createQuery(hql);
		query.setParameter("st_id", state_Id);
		query.setParameter("ct_id", city_Id);
		List<HotelMaster> listHotels=query.getResultList();	
		return listHotels;
	}

}
