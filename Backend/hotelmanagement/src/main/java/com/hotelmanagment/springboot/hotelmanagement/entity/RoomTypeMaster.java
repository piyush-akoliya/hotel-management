package com.hotelmanagment.springboot.hotelmanagement.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="room_typ_master")
public class RoomTypeMaster {
	
		@Id
		@GeneratedValue(strategy=GenerationType.IDENTITY)
		int room_type_id;
		String room_type_desc;
		String img_path;
		
		public RoomTypeMaster() {
		}

		public RoomTypeMaster(String room_type_desc, String img_path) {
			this.room_type_desc = room_type_desc;
			this.img_path = img_path;
		}
		public int getRoom_type_id() {
			return room_type_id;
		}
		public void setRoom_type_id(int room_type_id) {
			this.room_type_id = room_type_id;
		}
		public String getRoom_type_desc() {
			return room_type_desc;
		}
		public void setRoom_type_desc(String room_type_desc) {
			this.room_type_desc = room_type_desc;
		}
		public String getImg_path() {
			return img_path;
		}
		public void setImg_path(String img_path) {
			this.img_path = img_path;
		}
		@Override
		public String toString() {
			return "RoomTypeMaster [room_type_desc=" + room_type_desc + ", img_path=" + img_path + "]";
		}		
}
