import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import DataTable from 'react-data-table-component';
import EmployeeSearch from './search/EmployeeSearch';
import SearchHr from './search/HrSearch';

const EmployeesTable = ({ isEmployee }) => {

    const [employees, setEmployees] = useState([]);
    const fetchEmployeesData = async () => {

        axios.get('http://localhost:1080/employees/all-employees')
            .then(response => {

                console.log('Response Data:', response.data);
                setEmployees(response.data);
            }).catch(error => {
                console.log(error);
            }).finally(() => console.log('Fetched the Records'));
    };

    useEffect(() => {
        fetchEmployeesData();
    }, []);

    const tableColumns = [
        {
            name: 'Employee ID',
            selector: row => row.id,
            sortable: true
        }, {
            name: 'Employee Name',
            selector: row => row.name
        }, {
            name: 'Email ID',
            selector: row => row.email
        }, {
            name: 'Contact Number',
            selector: row => row.phone
        }, {
            name: 'Address',
            selector: row => row.address
        }, {
            name: 'Designation',
            selector: row => row.position
        }, {
            name: 'Department',
            selector: row => row.department
        }
    ]

    return (
        <>
            <DataTable
                columns={tableColumns}
                data={employees}
                pagination
                fixedHeader
                fixedHeaderScrollHeight='350px'
                selectableRows
                selectableRowsHighlight
                highlightOnHover
                subHeader
                subHeaderComponent={
                    <>
                        <div>{isEmployee ? <EmployeeSearch setEmployees={setEmployees} /> : <SearchHr />}</div>
                        <button className='btn btn-md btn-info' style={{
                            marginLeft: '630px',
                            marginRight: '10px',
                            color: 'white',
                            padding: '20px 30px',
                            fontSize: 'large'
                        }}>+ Add Employee</button>
                    </>
                }
                subHeaderAlign='right'
            />
        </>
    )
}

export default EmployeesTable
