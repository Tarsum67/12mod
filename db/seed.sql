INSERT INTO department (name)
VALUES ('Raid Boss'),
       ('Strike Boss'),
       ('Story Boss'),
       ('Prison Boss');

INSERT INTO role (title, salary, department_id)
VALUES ('Vex',80000 ,2 ), 
       ('Fallen',500000 , 4),
       ('Hive',100000 ,3),
       ('Kabal', 60000,1 );



INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES 
('Orxy', 'Taken King', 3, NULL),
('Savathun', 'Witch Queen', 3, NULL),
('Undying', 'Mind', 2, NULL),
('Protheon', 'Modular Mind', 2, NULL),
('Skolas', 'Kell of Kells', 4, NULL),
('Kaliks', 'Reborn', 4, NULL),
('Val', 'Ca our', 1, NULL),
('Gahlran', 'Sarrow barror', 1, NULL);

