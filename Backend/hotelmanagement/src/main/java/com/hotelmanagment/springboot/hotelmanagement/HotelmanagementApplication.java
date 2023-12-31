package com.hotelmanagment.springboot.hotelmanagement;

import java.util.Collections;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class HotelmanagementApplication {

	public static void main(String[] args) {
//		SpringApplication.run(HotelmanagementApplication.class, args);
		
		SpringApplication app = new SpringApplication(HotelmanagementApplication.class);
        app.setDefaultProperties(Collections.singletonMap("server.port", "8083"));
        app.run(args);
	}

}
