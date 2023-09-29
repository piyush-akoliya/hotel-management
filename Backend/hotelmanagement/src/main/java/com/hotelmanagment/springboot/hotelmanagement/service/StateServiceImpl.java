package com.hotelmanagment.springboot.hotelmanagement.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotelmanagment.springboot.hotelmanagement.DAO.StateDAO;
import com.hotelmanagment.springboot.hotelmanagement.entity.State;

@Service
public class StateServiceImpl implements StateService {

	StateDAO stateDAO;
	
	@Autowired
	StateServiceImpl (StateDAO theStateDAO) {
		this.stateDAO=theStateDAO;
	}
	
	@Override
	@Transactional
	public List<State> get_states() {
		return stateDAO.get_states();
	}

	@Override
	@Transactional
	public State get_state(int id) {
		return stateDAO.get_state(id);
	}

}
