INSERT INTO department (dept_name)
VALUES ("Engineering"),
("Finance"),
("Legal"),
("Sales"),
("Service");

      
       
       
INSERT INTO emprole (title, salary, department_id)
VALUES ('Manager', 80000, 001),
('Supervisor', 70000, 002),
('Specialist', 60000, 003);



INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jim", "Ally", 001, NULL),
("Sam", "Smith", 002, 001),
("Kevin", "Jones", 003, 002);



       
