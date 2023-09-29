package com.hotelmanagment.springboot.hotelmanagement.rest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.hotelmanagment.springboot.hotelmanagement.entity.Invoice;
import com.hotelmanagment.springboot.hotelmanagement.service.InvoiceService;




@RestController
@CrossOrigin
public class InvoiceController {
	
	@Autowired
	private InvoiceService invoiceService;
	
	/*@GetMapping("/inv/{invid}")
	public Invoice getInvoice(@PathVariable String invid) {
		return invoiceService.getInvoice(Integer.parseInt(invid));
	}*/
	
	@PutMapping("/inv")
	public void Add(@RequestBody Invoice inv) {
		invoiceService.add(inv);
		
	}
	
	@GetMapping("/inv/{bookid}")
	public Invoice getInvoice(@PathVariable String bookid) { 
		Invoice invoice= invoiceService.getInvoice(Integer.parseInt(bookid));
		return invoice;
		
	}

}
