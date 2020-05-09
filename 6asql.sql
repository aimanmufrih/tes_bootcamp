/******************************************************************************
Welcome to GDB Online.
GDB online is an online compiler and debugger tool for C, C++, Python, Java, PHP, Ruby, Perl,
C#, VB, Swift, Pascal, Fortran, Haskell, Objective-C, Assembly, HTML, CSS, JS, SQLite, Prolog.
Code, Compile, Run and Debug online from anywhere in world.

*******************************************************************************/
/* Enter your sql queries here */

CREATE TABLE Product (
    id int PRIMARY KEY,
    name varchar(100),
    price int,
    id_category int,
    id_cashier int
);

CREATE TABLE Cat10egory(
    id int PRIMARY KEY,
    name varchar(100)
);

CREATE TABLE Cashier(
    id int PRIMARY KEY,
    name varchar(100)
);

INSERT INTO Product(id,name,price,id_category,id_cashier) VALUES(1,'Latte',10000,2,1),
(2,'Cake',20000,1,2),
(3,'Roti Buaya',45000,1,3);

INSERT INTO Cat10egory(id,name) VALUES(1,'Food'),
(2,'Drink');

INSERT INTO Cashier(id,name) VALUES(1,'Pevita Pearce'),
(2,'Raisa Andriana'),(3,'Aiman Hidayat');