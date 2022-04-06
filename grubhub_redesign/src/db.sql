CREATE TABLE Restaurants (RestaurantName VARCHAR(100), Address VARCHAR (500) , Cuisine VARCHAR (100), 
PRIMARY KEY (`RestaurantName`)
);
INSERT INTO Restaurants(RestaurantName,Address, Cuisine)
       VALUES 
       ("Civetta Italian Kitchen + Bar","7828-E Rea Rd., Charlotte, NC 28277","Italian"),
       ("Dot Dot Dot","4237 Park Rd., Suite B Charlotte, NC 28209","Chinese"),
       ("Village Tavern","4201 Congress St #190, Charlotte, NC 28209","Mediterrian"),
       ("Foxcroft Wine Co.","7824 Fairview Road, Charlotte, NC 28226","Seafood"),
       ("Bar Marcel","3920 Sharon Rd., Suite 160 Charlotte, NC 28211","Pizza"),
       ("Epic Chophouse","104 S. Main St., Charlotte, NC 28115","American"),
       ("Luisa’s Brick Oven Pizzeria","1730 Abbey Pl., Charlotte, NC 28209","Mexican"),
       ("Libations Kitchen & Bar","895 W. Trade St., Charlotte, NC 28202","Barbecue");
       



       CREATE TABLE Dishes (CuisineName VARCHAR(100), Dish1 VARCHAR (500),Dish2 VARCHAR (500),Dish3 VARCHAR (500),
PRIMARY KEY (`Cuisine`)

);
INSERT INTO Dishes( CuisineName,Dish1,Dish2,Dish3)
       VALUES 
       (" Italian "," Pastas","chicken parmasean","Polenta"),
        (" Mediterrian ","Soupchu","Wraps","Rice-bowls"),
        (" Seafood "," Fish & Shellfish","Appetizers","Salads"),
         (" Pizza "," Pepperoni-Pizza"," Cheese-Pizza","Veggie-Pizza "),
          (" American "," Apple Pie","Hamburger","Bagel and Lox"),
           (" Mexican "," Burritos","Quesadillas","Tacos"),
            (" Chinese "," Kung Pao Chicken","Dumplings","Hot Pot"),
             (" Barbecue "," BBQ Drumsticks with Edamame","Sweet Heat Cheerwine Baby Back Ribs","Alabama White BBQ Shrimp");
      