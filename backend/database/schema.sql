Drop Database if exists carTest;

Create Database carTest;

use carTest;
CREATE TABLE Role (
    id int not null auto_increment primary key,
    title VARCHAR(255) NOT NULL
);

CREATE TABLE permission (
    id int not null auto_increment primary key,
    permission VARCHAR(255) NOT NULL
);

CREATE TABLE role_permission (
    id int not null auto_increment primary key,
    role_id int not null,
    permission_id int not null,
    FOREIGN KEY (role_id) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permission(id) ON DELETE CASCADE ON UPDATE CASCADE
);
create table user(
    id int not null auto_increment primary key,
    firstName varchar(255) not null,
    lastName varchar(255) not null,
    phone varchar(255) not null,
    password varchar(255) not null,
    is_deleted TINYINT Default 0,
    role_id int not null,
    Foreign key (role_id) references Role(id) ON DELETE CASCADE ON UPDATE CASCADE
);

Create Table petrol(
    id int not null auto_increment primary key,
    car_no VARCHAR(255) NOT NULL,
    car_type VARCHAR(255) NOT NULL,
    vin VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    vin_tr VARCHAR(255) NOT NULL,
    vin_tl VARCHAR(255) NOT NULL,
    vin_br VARCHAR(255) NOT NULL,
    vin_bl VARCHAR(255) NOT NULL,
    body_note VARCHAR(255) NOT NULL,
    engine_test varchar(255) NOT NULL,
    gearch_test varchar(255) NOT NULL,
    back_acss VARCHAR(255) NOT NULL,

);
create Table order(
        id int not null auto_increment primary key,
        order_no VARCHAR(255) NOT NULL,
        personal_note VARCHAR(255) NOT NULL,
        price decimal(10,2) NOT NULL,
        petrol_test int not null,
        Foreign key (petrol_test) references petrol(id) ON DELETE CASCADE ON UPDATE CASCADE
);
Create Table hybrid(); 


