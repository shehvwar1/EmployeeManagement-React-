package com.employeemgmnt.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.employeemgmnt.entity.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer>{
	List<Employee> findByemployeeName(String employeeName);
//	@Query("SELECT e FROM Employee e WHERE " + "e.employeeName LIKE CONCAT('%',:query,'%')")
//	List<Employee> searchByName(String query);
//	@Query("from Employee where employeeName=?1")
//public List<Employee> findByEmployeeName(String employeeName);
}
