package com.hotelmanagment.springboot.hotelmanagement.DAO;

import com.hotelmanagment.springboot.hotelmanagement.entity.Invoice;

public interface InvoiceDAO {
	Invoice getInvoice(int id);
	void add(Invoice inv);

}
