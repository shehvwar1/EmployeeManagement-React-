package com.employeemgmnt.service;

import java.util.List;

import com.employeemgmnt.entity.Employee;

public interface EmployeeService {
public Employee insertEmployee(Employee employee);
	public List<Employee> getAllEmployee();
	public Employee getEmployeeById(int employeeId);
	public String updateEmployeeRecord(Employee params, int employeeId);
	public String deleteRecord(int employeeId);
	List<Employee> getEmployeeName(String employeeName);
//	List<Employee> searchByName(String query);
//	public List<Employee> getAllEmployeeByName(String employeeName);
}
