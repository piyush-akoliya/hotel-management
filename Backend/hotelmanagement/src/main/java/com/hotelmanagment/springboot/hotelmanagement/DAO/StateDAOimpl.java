package com.hotelmanagment.springboot.hotelmanagement.DAO;

import java.util.List;
import javax.persistence.EntityManager;
import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.hotelmanagment.springboot.hotelmanagement.entity.State;

@Repository
public class StateDAOimpl implements StateDAO {

	private EntityManager entityManager;

	@Autowired
	public StateDAOimpl(EntityManager theEntityManager) {
		entityManager = theEntityManager;
	}

	@Override
	public List<State> get_states() {
		Session currentSession = entityManager.unwrap(Session.class);
		Query<State> query = currentSession.createQuery("from State", State.class);
		List<State> list = query.getResultList();
		return list;
	}

	@Override
	public State get_state(int id) {
		Session currentSession=entityManager.unwrap(Session.class);
		State state=currentSession.get(State.class, id);
		return state;
	}
}
