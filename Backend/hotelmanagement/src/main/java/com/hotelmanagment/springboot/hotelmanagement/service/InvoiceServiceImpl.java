package com.hotelmanagment.springboot.hotelmanagement.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.hotelmanagment.springboot.hotelmanagement.DAO.InvoiceDAO;
import com.hotelmanagment.springboot.hotelmanagement.entity.Invoice;

@Service
public class InvoiceServiceImpl implements InvoiceService {

	InvoiceDAO invoiceDAO;
	
	@Autowired
	InvoiceServiceImpl(InvoiceDAO theInvoiceDAO){
		invoiceDAO=theInvoiceDAO;
	}
	
	@Override
	@Transactional
	public Invoice getInvoice(int id) {
		return invoiceDAO.getInvoice(id);
	}

	@Override
	@Transactional
	public void add(Invoice inv) {
		invoiceDAO.add(inv);
	}

}
