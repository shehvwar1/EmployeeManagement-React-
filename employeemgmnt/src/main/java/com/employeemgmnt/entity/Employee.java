package com.employeemgmnt.entity;

import java.util.*;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

import org.hibernate.annotations.CreationTimestamp;
import org.springframework.format.annotation.DateTimeFormat;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

//import java.sql.Date;
@Data
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name="employee")
public class Employee {
	@Id
	private Integer employeeId;
	@Column
	private String employeeName;
	@Column
	private double salary;
//	@CreationTimestamp
	@Column
//	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "dd-MM-yyyy")
	@Temporal(TemporalType.DATE)
////	spring.jackson.date-format=yyyy-MM-dd
//	// @DateTimeFormat(pattern = "dd-MM-yyyy")
 	@JsonFormat(pattern="dd-MM-yy")
	private Date joiningDate;

}
