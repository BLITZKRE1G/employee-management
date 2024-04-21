import axios from 'axios';
import React from 'react'

const EmployeeSearch = (setEmployees) => {

    const searchEmployee = (event) => {
        event.preventDefault();
        console.log("Employee Search");
        const employeeId = document.querySelector('#employee_id').value;
        const employeeName = document.querySelector('#employee_name').value;

        axios.get('')
            .then(result => {
                console.log(result.data);
                setEmployees(result.data);
            }).catch(error => console.log('Error:', error))
            .finally(console.log('Searched'))
    }
    return (
        <>
            <form action="" method="get">
                <div>
                    <label htmlFor="employee-id">Employee ID</label>
                    <input type="number" name="employee-id" id="employee_id" />
                </div>
                <div>
                    <label htmlFor="employee-name">Employee Name</label>
                    <input type="text" name="employee-name" id="employee_name" />
                </div>
                <button type='submit'
                    onClick={(event) => {
                        searchEmployee(event);
                    }}
                >Search Employee</button>
            </form>
        </>
    )
}

export default EmployeeSearch