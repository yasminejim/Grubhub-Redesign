CREATE TABLE  Pizza(RestaurantName VARCHAR(100), Address VARCHAR (500) , Cuisine VARCHAR (100), 
PRIMARY KEY (`RestaurantName`)
);
INSERT INTO Pizza(RestaurantName,Address, Cuisine)
       VALUES 
       ("Bar Marcel","3920 Sharon Rd., Suite 160 Charlotte, NC 28211","Pizza"),
	   ("Benny Pennello","2902 N. Davidson St,Ste. 100 Charlotte, NC 28205","Pizza"),
	   ("Fuel Pizza Cafe","4267 Park Rd., Charlotte, NC 28209","Pizza");

CREATE TABLE  American(RestaurantName VARCHAR(100), Address VARCHAR (500) , Cuisine VARCHAR (100), 
PRIMARY KEY (`RestaurantName`)
);
INSERT INTO American(RestaurantName,Address, Cuisine)
       VALUES 
       ("Epic Chophouse","104 S. Main St., Charlotte, NC 28115","American"),
       ("Beef 'N' Bottle","4538 South Blvd., Charlotte, NC 28209","American"),
       ("Bad Daddy's Burger Bar","15105 John J. Delaney Dr., Charlotte, NC 28277","American");


CREATE TABLE  Mexican(RestaurantName VARCHAR(100), Address VARCHAR (500) , Cuisine VARCHAR (100), 
PRIMARY KEY (`RestaurantName`)
);
INSERT INTO Mexican(RestaurantName,Address, Cuisine)
       VALUES 
        ("Luisa’s Brick Oven Pizzeria","1730 Abbey Pl., Charlotte, NC 28209","Mexican"),
        ("Cantina 1511","7708 Rea Rd., Stonecrest Charlotte, NC 28277","Mexican"),
		("Zapatas Cantina","8927 J.M. Keynes Dr., Charlotte, NC 28262","Mexican");

CREATE TABLE  Barbecue(RestaurantName VARCHAR(100), Address VARCHAR (500) , Cuisine VARCHAR (100), 
PRIMARY KEY (`RestaurantName`)
);
INSERT INTO Barbecue(RestaurantName,Address, Cuisine)
       VALUES 
       ("Libations Kitchen & Bar","895 W. Trade St., Charlotte, NC 28202","Barbecue"),
       ("Chima Brazilian Steakhouse","139 S. Tryon St., Charlotte, NC 28202","Barbecue"),
       ("Bill Spoon's Barbecue","5524 South Blvd., Charlotte, NC 28217","Barbecue");


CREATE TABLE Italian(RestaurantName VARCHAR(100), Address VARCHAR (500) , Cuisine VARCHAR (100), 
PRIMARY KEY (`RestaurantName`)
);
INSERT INTO Italian(RestaurantName,Address, Cuisine)
       VALUES 
("Civetta Italian Kitchen + Bar","7828-E Rea Rd., Charlotte, NC 28277","Italian"),
("Aria Tuscan Grill","100 N. Tryon St., Charlotte, NC 28202","Italian"),
("Mama Ricotta's","601 S. Kings Dr., Charlotte, NC 28204","Italian");

CREATE TABLE Chinese(RestaurantName VARCHAR(100), Address VARCHAR (500) , Cuisine VARCHAR (100), 
PRIMARY KEY (`RestaurantName`)
);
INSERT INTO Chinese(RestaurantName,Address, Cuisine)
       VALUES 
 ("Dim Sum","2920-B Central Ave., Charlotte, NC 28205","Chinese"),
 ("Wan-Fu","10719 Kettering Dr., Charlotte, NC 28277","Chinese"),
 ("Baoding","4722 Sharon Rd., Sharon Corners Charlotte, NC 28210","Chinese");
 
 CREATE TABLE Mediterranean(RestaurantName VARCHAR(100), Address VARCHAR (500) , Cuisine VARCHAR (100), 
PRIMARY KEY (`RestaurantName`)
);
INSERT INTO Mediterranean(RestaurantName,Address, Cuisine)
       VALUES
("Yafo Kitchen","720 Governor Morrison St., #120 Charlotte, NC 28211","Mediterranean"),
("Kid Cashew","1608 East Blvd., Charlotte, NC 28203","Mediterranean"),
("Terra","545-B Providence Rd., Charlotte, NC 28207","Mediterranean");
 
 CREATE TABLE Seafood(RestaurantName VARCHAR(100), Address VARCHAR (500) , Cuisine VARCHAR (100), 
PRIMARY KEY (`RestaurantName`)
);
INSERT INTO Seafood(RestaurantName,Address, Cuisine)
       VALUES
("Cabo Fish Taco","3201 N. Davidson St, Charlotte, NC 28205","Seafood"),
("Sea Level","129 E 5th St., Charlotte, NC 28202","Seafood"),
("Pearlz Oyster Bar","7804 Rea Road, Charlotte, NC 28277","Seafood");
