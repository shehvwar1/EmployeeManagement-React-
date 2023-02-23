package com.employeemgmnt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.employeemgmnt.entity.Employee;
import com.employeemgmnt.serviceimpl.EmployeServiceImpl;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class EmployeeController {
	
	@Autowired
	EmployeServiceImpl employeeServiceImpl;
	
	@PostMapping("/addEmployee")
	ResponseEntity<Employee> addEmployeeRecord(@RequestBody Employee employee)
	{
		return new ResponseEntity<>(employeeServiceImpl.insertEmployee(employee), HttpStatus.OK);
	}
	@GetMapping("/employees")
	public ResponseEntity<List<Employee>> getALlEmployees()
	{
		return new ResponseEntity<>(employeeServiceImpl.getAllEmployee(),HttpStatus.OK);
	}
	
	@GetMapping("/employeeById/{employeeId}")
	public ResponseEntity<Employee> getEmployeeRecord(@PathVariable("employeeId") int employeeId)
	{
		return new ResponseEntity<Employee>(employeeServiceImpl.getEmployeeById(employeeId), HttpStatus.OK);
	}
	@PutMapping("/updateRecord/{employeeId}")
	public ResponseEntity<String> updateById(@PathVariable("employeeId") int employeeId, @RequestBody Employee employee)
	{
		return new ResponseEntity<String>(employeeServiceImpl.updateEmployeeRecord(employee, employeeId), HttpStatus.ACCEPTED);
	}
	@DeleteMapping("/deletedById/{employeeId}")
	public ResponseEntity<String> deleteById(@PathVariable("employeeId") int employeeId)
	{
		return new ResponseEntity<String>(employeeServiceImpl.deleteRecord(employeeId), HttpStatus.ACCEPTED);
	}
	
		@GetMapping("/search")
		public ResponseEntity<List<Employee>> getEmployeeByName(@RequestParam String employeeName)
		{
			return new ResponseEntity<List<Employee>>(employeeServiceImpl.getEmployeeName(employeeName),HttpStatus.OK);
		}
	//	@GetMapping("/employees/employeeName")
//	 public ResponseEntity<List<Employee>> getEmployeeByName(@PathVariable("employeeName") String employeeName)
//	 {
//		 return new ResponseEntity<List<Employee>>(employeeServiceImpl.getAllEmployeeByName(employeeName),HttpStatus.OK);
//	 }
	
	

}
