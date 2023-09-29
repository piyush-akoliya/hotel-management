package com.hotelmanagment.springboot.hotelmanagement.DAO;

import java.util.List;

import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hotelmanagment.springboot.hotelmanagement.entity.City;

@Repository
public class CityDAOimpl implements CityDAO {
	
	private EntityManager entityManager;
	
	@Autowired
	public CityDAOimpl(EntityManager theEntityManager)
	{
		entityManager=theEntityManager;
	}
	
	@Override
	public List<City> get_cities() {
		// TODO Auto-generated method stub
		Session currentSession=entityManager.unwrap(Session.class);
		Query<City> query=currentSession.createQuery("from City",City.class);
		List<City> list=query.getResultList();
		return list;
	}
	
	@Override
	public City get_city(int id) {
		// TODO Auto-generated method stub
		Session currentSession=entityManager.unwrap(Session.class);
		City city=currentSession.get(City.class, id);
		return city;
	}

}
