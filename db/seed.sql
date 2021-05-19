-- Ideas array --
INSERT INTO department (name)
VALUES ("Food"); 
INSERT INTO department (name)
VALUES ("Indoor Activities");
INSERT INTO department (name)
VALUES ("Outdoor Activities");
INSERT INTO department (name)
VALUES ("At Home Activities");

-- Role Array --
INSERT INTO role (title, cost, food_id)
VALUES ("Watercourse", $$, 1);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Tropical Smoothie", $$, 1);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Woody's Woodfired Pizza", cost, 1);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("West on 29th", $$$$, 1);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Himchuli", $$$, 1);
-- Food
INSERT INTO role (activity, cost, indoor_id)
VALUES ("Bowling", $$, 2);
-- Indoor Activities
INSERT INTO role (title, cost, indoor_id)
VALUES ("Go Karts", $$, 2);
-- Indoor Activities
INSERT INTO role (title, cost, indoor_id)
VALUES ("Arcade", $$, 2);
-- Indoor Activities
INSERT INTO role (title, cost, indoor_id)
VALUES ("Movie Theatre", $$, 2);
-- Indoor Activities
INSERT INTO role (title, cost, indoor_id)
VALUES ("Escape Room", $$, 2);
-- Indoor Activities
INSERT INTO role (title, cost, outdoor_id)
VALUES ("Drive-in Theatre", $$, 3);
-- Outdoor Activities
INSERT INTO role (title, cost, outdoor_id)
VALUES ("Fishing", $$, 3);
-- Outdoor Activities
INSERT INTO role (title, cost, outdoor_id)
VALUES ("Hiking", $$, 3);
-- Outdoor Activities
INSERT INTO role (title, cost, outdoor_id)
VALUES ("Rock Climbing", $$, 3);
-- Outdoor Activities
INSERT INTO role (title, cost, outdoor_id)
VALUES ("Rafting", $$, 3);
-- Outdoor Activities
INSERT INTO role (title, cost, department_id)
VALUES ("Video Games", 250000, 4);
-- At Home Activities 
INSERT INTO role (title, cost, department_id)
VALUES ("Puzzles", 250000, 4);
-- At Home Activities 
INSERT INTO role (title, cost, department_id)
VALUES ("Board Games", 250000, 4);
-- At Home Activities 
INSERT INTO role (title, cost, department_id)
VALUES ("Cook a meal", 250000, 4);
-- At Home Activities 
INSERT INTO role (title, cost, department_id)
VALUES ("Netflix & Chill", 250000, 4);
-- At Home Activities 



-- -- Employee Array --
-- INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
-- -- Jaco Pastorius - CFO - Food
-- VALUES (1, "Jaco", "Pastorius", 1, null); 
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- -- Trey Anastasio - Account Manager - Food
-- VALUES ("Trey", "Anastasio", 2, 1);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)

-- -- Victor Wooten - Partner - Indoor Activities
-- VALUES ("Victor", "Wooten", 3, null);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- -- Eddie Vedder - Marketing Director - Indoor Activities
-- VALUES ("Eddie", "Vedder", 4, 3);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)

-- -- Kurt Cobain - COO-Indoor Activities
-- VALUES ("Kurt", "Cobain", 5, null);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)
-- -- Courtney Love - Operations Manager -Indoor Activities
-- VALUES ("Courtney", "Love", 6, 5);
-- INSERT INTO employee (first_name, last_name, role_id, manager_id)

-- -- Dave Matthews - Legal Team Lead - Purchase Department
-- VALUES ("Dave", "Matthews", 7, 1);