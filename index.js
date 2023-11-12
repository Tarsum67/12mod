const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: "localhost",
    user:"root",
    password:"root",
    database:"employment_db"
});
// Create a function to view departments
function viewDepartments() {
    connection.query("SELECT * FROM departments", (error, results, fields) => {
        if (error) {
            console.error("Error retrieving departments:", error.message);
            return;
        }

        console.log("List of Departments:");
        results.forEach((department, index) => {
            console.log(`${index + 1}. ${department.department_name}`);
        });
    });
}
function viewRoles() {
    connection.query("SELECT * FROM roles", (error, results, fields) => {
        if (error) {
            console.error("Error retrieving roles:", error.message);
            return;
        }

        console.log("List of Roles:");
        results.forEach((role, index) => {
            console.log(`${index + 1}. ${role.title}`);
        });
    });
}
function viewEmployees() {
    connection.query("SELECT * FROM employees", (error, results, fields) => {
        if (error) {
            console.error("Error retrieving employees:", error.message);
            return;
        }

        console.log("List of Employees:");
        results.forEach((employee, index) => {
            console.log(`${index + 1}. ${employee.first_name} ${employee.last_name}`);
        });
    });
}
function addDepartment() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'departmentName',
            message: 'Enter the name of the department:'
        }
    ]).then(answers => {
        const query = "INSERT INTO departments (department_name) VALUES (?)";

        connection.query(query, [answers.departmentName], (error, results, fields) => {
            if (error) {
                console.error("Error adding department:", error.message);
                return;
            }

            console.log(`Department "${answers.departmentName}" added successfully.`);
        });
    });
}
// Function to add a role
function addRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Enter the title of the role:'
        },
        {
            type: 'input',
            name: 'salary',
            message: 'Enter the salary for this role:'
        },
        {
            type: 'input',
            name: 'departmentId',
            message: 'Enter the department ID for this role:'
        }
    ]).then(answers => {
        const query = "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)";

        connection.query(query, [answers.title, answers.salary, answers.departmentId], (error, results, fields) => {
            if (error) {
                console.error("Error adding role:", error.message);
                return;
            }

            console.log(`Role "${answers.title}" added successfully.`);
        });
    });
}
function addEmployee() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'firstName',
            message: 'Enter the first name of the employee:'
        },
        {
            type: 'input',
            name: 'lastName',
            message: 'Enter the last name of the employee:'
        },
        {
            type: 'input',
            name: 'roleId',
            message: 'Enter the role ID for this employee:'
        },
        {
            type: 'input',
            name: 'managerId',
            message: 'Enter the manager ID for this employee (optional, press Enter to skip):'
        }
    ]).then(answers => {
        const query = "INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)";

        // If the managerId is not provided, set it to null in the query
        const managerId = answers.managerId.trim() !== '' ? answers.managerId : null;

        connection.query(query, [answers.firstName, answers.lastName, answers.roleId, managerId], (error, results, fields) => {
            if (error) {
                console.error("Error adding employee:", error.message);
                return;
            }

            console.log(`Employee "${answers.firstName} ${answers.lastName}" added successfully.`);
        });
    });
}
function updateEmployeeRole() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter the ID of the employee whose role you want to update:'
        },
        {
            type: 'input',
            name: 'newRoleId',
            message: 'Enter the new role ID for this employee:'
        }
    ]).then(answers => {
        const query = "UPDATE employees SET role_id = ? WHERE id = ?";

        connection.query(query, [answers.newRoleId, answers.employeeId], (error, results, fields) => {
            if (error) {
                console.error("Error updating employee role:", error.message);
                return;
            }

            console.log(`Employee with ID ${answers.employeeId} has been updated to new role ID ${answers.newRoleId}.`);
        });
    });
}
module.exports = {
    connection,
    viewDepartments,
    viewRoles,
    viewEmployees,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};