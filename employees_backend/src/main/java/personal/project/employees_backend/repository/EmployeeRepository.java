package personal.project.employees_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import personal.project.employees_backend.model.Employee;

public interface EmployeeRepository extends JpaRepository<Employee, Integer> {

}
