package com.hotelmanagment.springboot.hotelmanagement.DAO;

import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hotelmanagment.springboot.hotelmanagement.entity.StaffMaster;

@Repository
public class StaffMasterDAOImpl implements StaffMasterDAO {

	EntityManager entityManager;
	
	@Autowired
	public StaffMasterDAOImpl(EntityManager entityManager) {
		super();
		this.entityManager = entityManager;
	}

	@Override
	public StaffMaster getStaffMaster(int staff_id) {
		Session currentSession = entityManager.unwrap(Session.class);
		StaffMaster staffMaster = currentSession.get(StaffMaster.class,staff_id);
		return staffMaster;
	}

}
