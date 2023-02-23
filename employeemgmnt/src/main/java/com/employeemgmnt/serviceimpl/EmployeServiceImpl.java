package com.employeemgmnt.serviceimpl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.employeemgmnt.entity.Employee;
import com.employeemgmnt.repository.EmployeeRepository;
import com.employeemgmnt.service.EmployeeService;

@Service
public class EmployeServiceImpl implements EmployeeService{
	
	@Autowired
	EmployeeRepository employeeRepository;

	@Override
	public Employee insertEmployee(Employee employee) {
		return employeeRepository.save(employee);
	}

	@Override
	public List<Employee> getAllEmployee() {
		return employeeRepository.findAll();
	}

	@Override
	public Employee getEmployeeById(int employeeId) {
		return employeeRepository.findById(employeeId).get();
	}

	@Override
	public String updateEmployeeRecord(Employee params, int employeeId) {
		Employee employee = employeeRepository.findById(employeeId).get();
		employee.setEmployeeName(params.getEmployeeName());
		employee.setSalary(params.getSalary());
		employee.setJoiningDate(params.getJoiningDate());
		employeeRepository.save(employee);
		return "Employee with Id : " + employeeId + " updated successfully";
	}

	@Override
	public String deleteRecord(int employeeId) {
		employeeRepository.deleteById(employeeId);
		return "Employee With Id: " + employeeId + " is deleted Successfully";
	}

	@Override
	public List<Employee> getEmployeeName(String employeeName) {
		// TODO Auto-generated method stub
		return employeeRepository.findByemployeeName(employeeName);
	}

	
//	public List<Employee> searchByName(String query) {
//		// TODO Auto-generated method stub
//		List<Employee>employees =  employeeRepository.searchByName(query);
//		return employees;
//	}

//	@Override
//	public List<Employee> getAllEmployeeByName(String employeeName) {
//		return employeeRepository.findByEmployeeName(employeeName);
//	}
}
