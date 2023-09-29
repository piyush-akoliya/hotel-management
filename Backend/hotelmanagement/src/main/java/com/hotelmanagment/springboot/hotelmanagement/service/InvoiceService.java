package com.hotelmanagment.springboot.hotelmanagement.service;

import com.hotelmanagment.springboot.hotelmanagement.entity.Invoice;

public interface InvoiceService {
	Invoice getInvoice(int id);
	void add(Invoice inv);
}
