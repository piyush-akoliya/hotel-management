package com.hotelmanagment.springboot.hotelmanagement.service;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.hotelmanagment.springboot.hotelmanagement.DAO.StaffMasterDAO;
import com.hotelmanagment.springboot.hotelmanagement.entity.StaffMaster;

@Service
public class StaffMasterServiceImpl implements StaffMasterService {
	StaffMasterDAO staffmasterdao;

	/**
	 * @param staffmasterdao
	 */
	@Autowired
	public StaffMasterServiceImpl(StaffMasterDAO staffmasterdao) {
		super();
		this.staffmasterdao = staffmasterdao;
	}

	@Transactional
	@Override
	public StaffMaster getStaffMaster(int staff_id) {
		return staffmasterdao.getStaffMaster(staff_id);
	}

}
