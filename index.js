const inquirer = require('inquirer');
const mysql= require('mysql2')

const db = mysql.createConnection({host:"localhost", user:"root", password:"password", database:"employee_db"})
db.connect()




inquirer.prompt([
        {
        type: 'list',
        name: 'function',
        message: "What would you like to do?",
        choices: ["View all Employees", "Add Employee", "Update Employee Role", "View All Roles", "Add Role", "View all Departments", "Add Department"]
        }, 
    ])
    .then((answers) => {
        if (answers.function === "View all Employees") {
            getAllEmployees()
            // menu()
        }if (answers.function === "Add Employee") {
            addEmployee()
            // menu()
        }if (answers.function === "Update Employee Role") {
            updateRole()
            // menu()
        }if (answers.function === "View All Roles") {
            getAllRoles()
            // menu()
        }if (answers.function === "Add Role") {
            addRole()
            // menu()
        }if (answers.function === "View all Departments") {
            getAllDepartments()
            // menu()
        }if (answers.function === "Add Department") {
            addDepartments()
            // menu()
        }
        
});  

function getAllEmployees(){
    db.query("SELECT * FROM EMPLOYEE", (err, data)=>
    {
        if(err) console.log(err);
        console.table(data)
        // menu()
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
        type: 'list',
        name: 'role',
        message: "What is the employee's role?",
        choices: ['SELECT first_name FROM employee']
        },
        {
        type: 'list',
        name: 'manager',
        message: "Who is the employee's manager?",
        choices: [`SELECT first_name FROM employee`]
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
                console.table(data);
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
        // menu()
    })

};

function getAllDepartments(){
    db.query("SELECT * FROM DEPARTMENT", (err, data)=>
    {
        if(err) console.log(err);
        console.table(data)
        // menu()
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
                console.table(data);
                getAllDepartments()
            })
        }
    )
};