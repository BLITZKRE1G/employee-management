package personal.project.employees_backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import personal.project.employees_backend.model.Employee;
import personal.project.employees_backend.repository.EmployeeRepository;

import java.util.List;

@Service
public class EmployeesService {

    public final EmployeeRepository repository;

    EmployeesService(EmployeeRepository repository) {
        this.repository = repository;
    }

    public List<Employee> getAllEmployees() {
        return repository.findAll();
    }

    public Employee addEmployee(Employee employee) {

        List<Employee> employeeList = getAllEmployees();
        List<Employee> matchedEmployees = employeeList.stream()
                .filter(emp -> emp.getId().equals(employee.getId()))
                .toList();

        if (matchedEmployees.size() >= 1) {
            System.out.println("Duplicate Employee");
        } else {
            return repository.save(employee);
        }

        return new Employee();
    }

    public Employee updateEmployee(Employee employee) {

        List<Employee> employees = getAllEmployees();
        List<Employee> matchedEmployees = employees.stream()
                .filter(emp -> emp.getId().equals(employee.getId()))
                .toList();

        if (matchedEmployees.isEmpty()) {
            System.out.println("This is a new Employee");
        } else {
            return repository.save(employee);
        }

        return new Employee();
    }

    public Employee deleteEmployee(Integer employeeId) {

        Employee deletedEmployee = repository.findById(employeeId)
                .orElse(new Employee());

        if (deletedEmployee.getId() == null) {

            repository.delete(deletedEmployee);
            System.out.println("Deleted: " + deletedEmployee);
        } else {
            System.out.println("Coudn't find the Employee to Delete!!!");
        }

        return deletedEmployee;
    }
}
