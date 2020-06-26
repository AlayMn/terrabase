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

import org.hibernate.annotations.Formula;
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
		//private String code;
		
		@NotBlank(message = "Please enter the supplier name!")
		private String supplier_name;
		@NotBlank(message = "Please enter the Challan No.!")
		private String challan_no;
		
		@Column(name = "category")
		//@Min(value = 1, message="Please select at least one value!")
		private String category;
		
		
		@NotBlank(message = "Please enter the truck number!")
		private String truck_no;
		@NotBlank(message = "Please enter the Mhl!")
		private String mhl;
	    
		@Column(name = "quantity")
		private int quantity;
		
		@NotBlank(message = "Please enter the Date!")
		private String date;
		
		
		@Column(name = "rate")
		//@Min(value = 1, message="Please select at least one value!")
		private double rate;
		
		

	    
		@Column(name = "amount")
		//@Min(value = 1, message="Please select at least one value!")
		private double amount;
		
		@Column(name = "paid_amount")
		private double paid_amount;
		
		@Column(name = "outstanding")
		private double outstanding;
		
		
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
		
	//	this.code = "PRD" + UUID.randomUUID().toString().substring(26).toUpperCase();
		
	}
	
		
		
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
	/*	public String getCode() {
			return code;
		}
		public void setCode(String code) {
			this.code = code;
		}*/
		public String getSupplier_name() {
			return supplier_name;
		}
		public void setSupplier_name(String supplier_name) {
			this.supplier_name = supplier_name;
		}
		public String getChallan_no() {
			return challan_no;
		}
		public void setChallan_no(String challan_no) {
			this.challan_no = challan_no;
		}
		
		public String getCategory() {
			return category;
		}
		public void setCategory(String category) {
			this.category = category;
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
		
		public double getRate() {
			return rate;
		}
		public void setRate(double rate) {
			this.rate = rate;
		}
		
		public String getDate() {
			return date;
		}
		public void setDate(String date) {
			this.date = date;
		}
		
		
		
		public double getAmount() {
			return amount;
		}
		public void setAmount(double amount) {
			this.amount = amount;
		}
		
		public double getPaid_amount() {
			return paid_amount;
		}
		public void setPaid_amount(double paid_amount) {
			this.paid_amount = paid_amount;
		}
		

		public double getOutstanding() {
			return outstanding;
		}
		public void setOutstanding(double outstanding) {
			this.outstanding = outstanding;
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
			return "Brick [id=" + id + ",  supplier_name=" + supplier_name + ", challan_no=" + challan_no + ", category="+ category +
					", truck_no=" + truck_no + ", mhl=" + mhl + ", quantity=" + quantity +", rate="+rate+", date="+ date+", amount="+ amount+", paid_amount="+paid_amount+", outstanding="+outstanding
					+ ", categoryId=" + categoryId + ", supplierId=" + supplierId +  "]";
		}
	
}
