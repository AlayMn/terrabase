package net.sm.terrabasebackend.dto;


import java.io.Serializable;
import java.util.UUID;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Transient;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import com.fasterxml.jackson.annotation.JsonIgnore;
//@Component
@Entity
public class Brick implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	
	// private fields
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int id;
		private String code;
		
		@NotBlank(message = "Please enter the supplier name!")
		private String supplier_name;
		@NotBlank(message = "Please enter the brick color!")
		private String brick_color;
		
		@NotBlank(message = "Please enter the truck number!")
		private String truck_no;
		@NotBlank(message = "Please enter the Mhl!")
		private String mhl;
	    
		private int quantity;
		
		@NotBlank(message = "Please enter the Date!")
		private String date;
		
		@Column(name = "amount_paid")
		//@Min(value = 1, message="Please select at least one value!")
		private double amount_paid;
		
		@Column(name = "excess_paid")
		private double excess_paid;
		
		@Column(name = "total_amount")
		private double total_amount;
		
		
		/*
		@Column(name = "is_active")	
		private boolean active;*/
		@Column(name = "category_id")
		@JsonIgnore
		private int categoryId;
		@Column(name = "supplier_id")
		@JsonIgnore
		private int supplierId;
		

		/*@Transient
		private MultipartFile file;
				
		public MultipartFile getFile() {
			return file;
		}

		public void setFile(MultipartFile file) {
			this.file = file;
		}*/

		
		
	public Brick() {
		
		this.code = "PRD" + UUID.randomUUID().toString().substring(26).toUpperCase();
		
	}
	
		
		
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getCode() {
			return code;
		}
		public void setCode(String code) {
			this.code = code;
		}
		public String getSupplier_name() {
			return supplier_name;
		}
		public void setSupplier_name(String supplier_name) {
			this.supplier_name = supplier_name;
		}
		public String getBrick_color() {
			return brick_color;
		}
		public void setBrick_color(String brick_color) {
			this.brick_color = brick_color;
		}
		
		public String getTruck_no() {
			return truck_no;
		}
		public void setTruck_no(String truck_no) {
			this.truck_no = truck_no;
		}
		
		public String getMhl() {
			return mhl;
		}
		public void setMhl(String mhl) {
			this.mhl = mhl;
		}
		
		public int getQuantity() {
			return quantity;
		}
		public void setQuantity(int quantity) {
			this.quantity = quantity;
		}
		
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		
		
		
		public double getAmount_paid() {
			return amount_paid;
		}
		public void setAmount_paid(double amount_paid) {
			this.amount_paid = amount_paid;
		}
		
		public double getExcess_paid() {
			return excess_paid;
		}
		public void setExcess_paid(double excess_paid) {
			this.excess_paid = excess_paid;
		}
		

		public double getTotal_amount() {
			return total_amount;
		}
		public void setTotal_amount(double total_amount) {
			this.total_amount = total_amount;
		}
		
		
		public int getCategoryId() {
			return categoryId;
		}
		public void setCategoryId(int categoryId) {
			this.categoryId = categoryId;
		}
		public int getSupplierId() {
			return supplierId;
		}
		public void setSupplierId(int supplierId) {
			this.supplierId = supplierId;
		}
			
	
		

		// toString for debugging
		@Override
		public String toString() {
			return "Brick [id=" + id + ", code=" + code + ", supplier_name=" + supplier_name + ", brick_color=" + brick_color + 
					", truck_no=" + truck_no + ", mhl=" + mhl + ", quantity=" + quantity +", date="+ date+", amount_paid="+ amount_paid+", excess_paid="+excess_paid+", total_amount="+total_amount
					+ ", categoryId=" + categoryId + ", supplierId=" + supplierId +  "]";
		}
	
}
