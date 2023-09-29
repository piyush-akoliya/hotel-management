package com.hotelmanagment.springboot.hotelmanagement.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanagment.springboot.hotelmanagement.entity.Roommaster;
import com.hotelmanagment.springboot.hotelmanagement.service.RoomMasterService;

@RestController
class RoomMasterController {
	
	RoomMasterService roomMasterService;
	
	@Autowired
	RoomMasterController(RoomMasterService theRoomMasterService){
		roomMasterService=theRoomMasterService;
	}
	@GetMapping("/GetAllRooms/{id}")
	public Roommaster getroom(@PathVariable int id)
	{
		return roomMasterService.get_room(id);
	}
}
