import React from 'react'
import EmployeesTable from './EmployeesTable'
import { useState } from 'react'

const Navbar = () => {

    const [isEmployee, setIsEmployee] = useState(true);

    return (
        <div style={{ marginLeft: '20px' }}>
            <h1
                style={{
                    textAlign: 'left',
                    color: "rgb(34, 198, 238)",
                    marginTop: "50px",
                    marginLeft: '5px'
                }}
            >Employees Management</h1>
            <div style={{ marginTop: '30px' }}>
                <nav className='navbar bg-light' style={{ maxWidth: '200px', marginLeft: '20px' }}>
                    <a href="#" style={{ fontSize: 'larger' }} onClick={() => setIsEmployee(true)}>Employee</a>
                    <a href="#" style={{ fontSize: 'larger' }} onClick={() => setIsEmployee(false)}>HR</a>
                </nav>
            </div>
            <EmployeesTable isEmployee={isEmployee} />
        </div>
    )
}

export default Navbar
