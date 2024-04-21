package personal.project.employees_backend.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import personal.project.employees_backend.model.Employee;
import personal.project.employees_backend.services.EmployeesService;

@CrossOrigin
@RestController
@RequestMapping(value = "/employees")
public class EmployeesController {

    public final EmployeesService service;

    @Autowired
    public EmployeesController(EmployeesService service) {
        this.service = service;
    }

    @GetMapping(value = "/")
    public String atHome() {
        return "The visitor is at Home";
    }

    @GetMapping(value = "/all-employees")
    public List<Employee> getAllEmployees() {
        return service.getAllEmployees();
    }

    @PostMapping(value = "/add-employee")
    public Employee addEmployee(@RequestBody Employee employee) {
        return service.addEmployee(employee);
    }

    @PutMapping(value = "/update-employee")
    public Employee updateEmployee(@RequestBody Employee employee) {
        return service.updateEmployee(employee);
    }

    @DeleteMapping(value = "/delete-employee")
    public Employee deleteEmployee(@RequestParam(value = "employeeId") Integer employeeId) {
        return service.deleteEmployee(employeeId);
    }
}
