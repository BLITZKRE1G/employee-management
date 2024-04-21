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
        <div style={{ marginTop: '10px' }}>
            <form action="" method="get" style={{ display: 'flex' }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginRight: '5px'
                }}>
                    <label htmlFor="employee-id" style={{ marginBottom: '5px' }}>Employee ID</label>
                    <input type="number" name="employee-id" id="employee_id" />
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    paddingLeft: '10px',
                    paddingRight: '10px',
                    alignItems: 'flex-start'
                }}>
                    <label htmlFor="employee-name" style={{ marginBottom: '5px' }}>Employee Name</label>
                    <input type="text" name="employee-name" id="employee_name" />
                </div>
                <button type='submit'
                    className='btn btn-info'
                    style={{ paddingLeft: '15px', paddingRight: '15px', color: 'white', marginLeft: '10px' }}
                    onClick={(event) => {
                        searchEmployee(event);
                    }}
                >Search Employee</button>
            </form>
        </div>
    )
}

export default EmployeeSearch
