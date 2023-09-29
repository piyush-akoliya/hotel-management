package com.hotelmanagment.springboot.hotelmanagement.service;

import java.util.List;

import com.hotelmanagment.springboot.hotelmanagement.entity.State;

public interface StateService {
	List<State> get_states();
	State get_state(int id);
}
