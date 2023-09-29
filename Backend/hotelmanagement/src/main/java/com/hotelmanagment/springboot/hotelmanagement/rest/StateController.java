package com.hotelmanagment.springboot.hotelmanagement.rest;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanagment.springboot.hotelmanagement.entity.State;
import com.hotelmanagment.springboot.hotelmanagement.service.StateService;

@RestController
@CrossOrigin
public class StateController {
	
	@Autowired
	private StateService stateService;
	
	
	@GetMapping("/GetAllStates")
	public List<State> dipAllStates()
	{
		return stateService.get_states();
	}
	
	
	@GetMapping("/GetAllStates/{id}")
	public State getState(@PathVariable int id)
	{
		return stateService.get_state(id);
	}

}
