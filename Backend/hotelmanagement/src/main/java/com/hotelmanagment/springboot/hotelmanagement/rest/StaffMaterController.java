package com.hotelmanagment.springboot.hotelmanagement.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanagment.springboot.hotelmanagement.entity.StaffMaster;
import com.hotelmanagment.springboot.hotelmanagement.service.StaffMasterService;

@RestController
public class StaffMaterController {
  
	@Autowired
	private StaffMasterService staffMasterService;
  

	@GetMapping("/staffmaster/{staff_id}")
	public StaffMaster getStaffMaster(@PathVariable int staff_id)
	{
		return staffMasterService.getStaffMaster(staff_id);
	}
	
}
