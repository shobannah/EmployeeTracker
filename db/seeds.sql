INSERT INTO department (dept_name)
VALUES ("Finance"),
("Legal"),
("Sales");


      
       
       
INSERT INTO emprole (title, salary, department_id)
VALUES ('Manager', 80000, 001),
('Supervisor', 70000, 002),
('Specialist', 60000, 003),
('Advisor', 50000, 001),
('Assistant', 40000, 002);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Peterson", 001, NULL),
("Sam", "Kim", 002, 001),
("Kevin", "Jones", 005, 002),
("Hannah", "Richards", 003, 001),
("Adam", "Cruz", 004, 002);



       
