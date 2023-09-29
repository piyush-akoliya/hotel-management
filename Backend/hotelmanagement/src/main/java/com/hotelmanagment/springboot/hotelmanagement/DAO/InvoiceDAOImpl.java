package com.hotelmanagment.springboot.hotelmanagement.DAO;

/*import java.util.Iterator;
import java.util.List;
import org.hibernate.query.Query;*/
import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hotelmanagment.springboot.hotelmanagement.entity.Invoice;

@Repository
public class InvoiceDAOImpl implements InvoiceDAO {

	EntityManager entityManager;

	@Autowired
	InvoiceDAOImpl(EntityManager theEntityManager) {
		this.entityManager = theEntityManager;
	}

	/*
	 * @Override public Invoice getInvoice(int id) {
	 * 
	 * Session currentSession=entityManager.unwrap(Session.class); Invoice invoice =
	 * currentSession.get(Invoice.class, id);
	 * 
	 * return invoice; }
	 */

	@Override
	public void add(Invoice inv) {
		Session currentSession = entityManager.unwrap(Session.class);
		currentSession.saveOrUpdate(inv);
	}

	public Invoice getInvoice(int id) {
		Invoice invoice = null;
		try {
			System.out.println("The invoice id requested is ::" + id);
			String hql = "FROM Invoice I WHERE I.booking_id = :bookid";
			Session currentSession = entityManager.unwrap(Session.class);
			Query query = currentSession.createQuery(hql);
			query.setParameter("bookid", id);
			invoice = (Invoice) query.getSingleResult();
			return invoice;
		} catch (Exception ex) {
			System.out.println("Exception occurred while getting the invoice is :: " + ex);
		}
		return invoice;

	}
}
