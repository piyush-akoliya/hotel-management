package com.hotelmanagment.springboot.hotelmanagement.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanagment.springboot.hotelmanagement.entity.RoomTypeMaster;
import com.hotelmanagment.springboot.hotelmanagement.service.RoomTypeMasterServiceImpl;

@RestController
public class RoomTypeMasterController {

	@Autowired
	private RoomTypeMasterServiceImpl roomTypeMasterServiceImpl;

	@GetMapping("/roomtype/{roomTypeId}")
	public RoomTypeMaster getSingleRoomType(@PathVariable int roomTypeId)
	{
		return roomTypeMasterServiceImpl.getRoomType(roomTypeId);
	}
}
