package com.hotelmanagment.springboot.hotelmanagement.DAO;

import java.util.List;

import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hotelmanagment.springboot.hotelmanagement.entity.Booking;

@Repository
public class BookingDaoImpl implements BookingDao  {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public Booking getBooking(int bookid) {
		Session currentSession=entityManager.unwrap(Session.class);
		Booking book=currentSession.get(Booking.class, bookid); 
		return book;
	}

	@Override
	public Booking addBooking(Booking book) {
		Session currentSession=entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(book);
		return book;
	}

	@Override
	public Booking get_Bookingemail(String email) {
		Session currentSession=entityManager.unwrap(Session.class);
		String hql = "FROM Booking C WHERE C.cust_email_id=:email ORDER BY booking_id DESC";
		Query<Booking> query =  currentSession.createQuery(hql);
		query.setParameter("email",email);
		List <Booking> booking = query.getResultList();
		return booking.get(0);
	}

}
