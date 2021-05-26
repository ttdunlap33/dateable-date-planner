-- Ideas array --
INSERT INTO department (what)
VALUES ("Food"); 
INSERT INTO department (what)
VALUES ("Indoor Activities");
INSERT INTO department (what)
VALUES ("Outdoor Activities");
INSERT INTO department (what)
VALUES ("At Home Activities");

-- Role Array --
INSERT INTO role (title, cost, food_id)
VALUES ("Watercourse", "$$", 1);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Tropical Smoothie", "$$", 2);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Woody's Woodfired Pizza", "$$", 3);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("West on 29th", "$$$$", 4);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Himchuli", "$$$", 5);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("City O' City", "$$", 6);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Lucile's Creole Cafe", "$$", 7);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Sassafras", "$$", 8);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Blue Pan", "$$", 9);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Work & Class", "$$", 10);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Sushi Sasa", "$$$", 11);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Los Chingones", "$$", 12);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Sol", "$$", 13);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Little Ollies", "$$", 14);
-- Food
INSERT INTO role (title, cost, food_id)
VALUES ("Happa", "$$", 15);


-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Bowling", 1);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Go Karts", 2);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Arcade", 3);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Movie Theatre", 4);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Escape Room", 5);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Indoor Rock Climbing", 6);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Yoga", 7);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Nature and Science Museum", $$, 8);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Axe Throwing", 9);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Brewery Hopping", 10);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Aquarium", 11);
-- Indoor Activities
INSERT INTO role (activity, indoor_id)
VALUES ("Indoor Skydiving", 12);
-- Indoor Activities


-- Outdoor Activities
INSERT INTO role (title, outdoor_id)
VALUES ("Fishing", 1);
-- Outdoor Activities
INSERT INTO role (title, outdoor_id)
VALUES ("Hiking", 2);
-- Outdoor Activities
INSERT INTO role (title, outdoor_id)
VALUES ("Rock Climbing", 3);
-- Outdoor Activities
INSERT INTO role (title, outdoor_id)
VALUES ("Rafting", 4);
-- Outdoor Activities
INSERT INTO role (title, outdoor_id)
VALUES ("Denver Botanic Gardens", $$, 5);
-- Outdoor Activities
INSERT INTO role (title, outdoor_id)
VALUES ("Denver Zoo", 6);
-- -- Outdoor Activities
INSERT INTO role (title, outdoor_id
VALUES ("Mini Golf", 7);
-- Outdoor Activities
INSERT INTO role (title, outdoor_id
VALUES ("Tubing", 8);
-- Outdoor Activities
INSERT INTO role (title, outdoor_id
VALUES ("Outdoor sporting event(Rockies/Rapids/Broncos Game)", 9)
-- Outdoor Activities
INSERT INTO role (title, outdoor_id
VALUES ("Explore Red Rocks", 10);
--Outdoor Activities 
INSERT INTO role (title, outdoor_id
VALUES ("Paddleboarding", 11);
--Outdoor Activities
INSERT INTO role (title, outdoor_id)
VALUES ("Drive-in Theatre", 12);
-- Outdoor Activities
INSERT INTO role (title, outdoor_id)
VALUES ("Local Concert", 13);
-- Outdoor Activities



-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Puzzles", 1);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Board Games", 2);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Cook a meal", 3);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Netflix & Chill", 4);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Make a Cereal Treat", 5);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Bake Cookies", 6);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Video Games", 7);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Stream an Online Class", 8);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Fondue Night", 9);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("At Home Wine Tasting", 10);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Movie Marathon", 11);
-- At Home Activities 
INSERT INTO role (title, home_id)
VALUES ("Hire professionals for couples massage", 12);





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