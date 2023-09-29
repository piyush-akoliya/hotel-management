package com.hotelmanagment.springboot.hotelmanagement.DAO;

import java.util.List;

import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hotelmanagment.springboot.hotelmanagement.entity.Customer;

@Repository
public class CustomerMasterDAOImpl implements CustomerMasterDAO {

	EntityManager entityManager;
	
	@Autowired
	public CustomerMasterDAOImpl(EntityManager entityManager) {
		this.entityManager = entityManager;
	}
	@Override
	public Customer get_customer(int id) {
		Session currentSession=entityManager.unwrap(Session.class);
		Customer customer=currentSession.get(Customer.class, id);
		return customer;
	}
	
	@Override
	public void addcustomer(Customer csm) {
		Session currentSession=entityManager.unwrap(Session.class);
		currentSession.save(csm);
	}

	@Override
	public void update_customer(Customer csm,int id) {
		Session currentSession=entityManager.unwrap(Session.class);
		csm.setCust_id(id);
		currentSession.saveOrUpdate(csm);
	}
	
	@Override
	public Customer get_customeremail(String email) {
		Session currentSession=entityManager.unwrap(Session.class);
		String hql = "FROM Customer C WHERE C.cust_email_id=:email";
		@SuppressWarnings("unchecked")
		Query<Customer> query = currentSession.createQuery(hql);
		 query.setParameter("email",email);
		List <Customer> customer = query.getResultList();
		return customer.get(0);
	}
}
