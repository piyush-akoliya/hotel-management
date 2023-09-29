package com.hotelmanagment.springboot.hotelmanagement.DAO;

import java.util.List;

import com.hotelmanagment.springboot.hotelmanagement.entity.State;

public interface StateDAO {
	List<State> get_states();
	State get_state(int id);
}
