const inquirer = require('inquirer');
const mysql= require('mysql2')

const db = mysql.createConnection({host:"localhost", user:"root", password:"password", database:"employee_db"})
db.connect()




inquirer.prompt([
        {
        type: 'list',
        name: 'function',
        message: "What would you like to do?",
        choices: ["View all Employees", "Add Employee", "View All Roles", "Add Role", "View all Departments", "Add Department"]
        }, 
    ])
    .then((answers) => {
        if (answers.function === "View all Employees") {
            getAllEmployees()
        }if (answers.function === "Add Employee") {
            addEmployee()
        }if (answers.function === "View All Roles") {
            getAllRoles()
        }if (answers.function === "Add Role") {
            addRole()
        }if (answers.function === "View all Departments") {
            getAllDepartments()
        }if (answers.function === "Add Department") {
            addDepartments()
        }
        
});  

function menu() {
    inquirer.prompt([
        {
        type: 'list',
        name: 'function',
        message: "What would you like to do?",
        choices: ["View all Employees", "Add Employee", "View All Roles", "Add Role", "View all Departments", "Add Department"]
        }, 
    ])
    .then((answers) => {
        if (answers.function === "View all Employees") {
            getAllEmployees()
        }if (answers.function === "Add Employee") {
            addEmployee()
        }if (answers.function === "View All Roles") {
            getAllRoles()
        }if (answers.function === "Add Role") {
            addRole()
        }if (answers.function === "View all Departments") {
            getAllDepartments()
        }if (answers.function === "Add Department") {
            addDepartments()
        }
        
});

}

function getAllEmployees(){
    db.query("SELECT * FROM EMPLOYEE", (err, data)=>
    {
        if(err) console.log(err);
        console.table(data)
        menu()
    })

};



function addEmployee(){

    inquirer.prompt([
        {
        type: 'input',
        name: 'firstname',
        message: "What is the employee's first name?",
        },
        {
        type: 'input',
        name: 'lastname',
        message: "What is the employee's last name?",
        },  
        {
        type: 'input',
        name: 'role',
        message: "What is the employee's role ID?",
        },
        {
        type: 'input',
        name: 'manager',
        message: "What is the manager's ID?",
        }, 
    ])
    .then(
        answer=>{
            const firstName = answer.firstname
            const lastName = answer.lastname
            const role = answer.role
            const manager = answer.manager
            
            
            db.query("insert into EMPLOYEE set ?", {first_name: firstName, last_name: lastName, role_id: role, manager_id: manager},(err, data)=>
            {
                if(err) console.log(err);
                console.table(data)
                getAllEmployees()
            })
        }
    )
};


function getAllRoles(){
    db.query("SELECT * FROM EMPROLE", (err, data)=>
    {
        if(err) console.log(err);
        console.table(data)
        menu()
    })

};

function addRole(){

    inquirer.prompt([
        {
        type: 'input',
        name: 'roletitle',
        message: "What is the title of this role?",
        },
        {
        type: 'input',
        name: 'salary',
        message: "What is the salary of this role?",
        },  
        {
        type: 'input',
        name: 'department',
        message: "What is the department ID of this role?",
        },
    ])
    .then(
        answer=>{
            const roletitle = answer.roletitle
            const salary = answer.salary
            const department = answer.department
                       
            
            db.query("insert into EMPROLE set ?", {title: roletitle, salary: salary, department_id: department},(err, data)=>
            {
                if(err) console.log(err);
                console.table(data)
                getAllRoles()
            })
        }
    )
};

function getAllDepartments(){
    db.query("SELECT * FROM DEPARTMENT", (err, data)=>
    {
        if(err) console.log(err);
        console.table(data)
        menu()
    })

};

function addDepartments(){
    inquirer.prompt([
        {
        type: 'input',
        name: 'name',
        message: "What is the department name?",
        }
    ]).then(
        answer=>{
            const departmentName = answer.name
            db.query("insert into DEPARTMENT set ?", {dept_name: departmentName},(err, data)=>
            {
                if(err) console.log(err);
                console.table(data)
                getAllDepartments()
            })
        }
    )
};