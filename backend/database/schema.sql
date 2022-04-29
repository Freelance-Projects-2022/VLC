-- ====================================================//Drop DataBase
Drop Database if exists VLC;

-- ====================================================//Create DataBase
Create Database VLC;

-- ====================================================//Use DataBase
use VLC;

-- ====================================================//Create Role Table
CREATE TABLE Role (
    id int not null auto_increment primary key,
    name VARCHAR(255) NOT NULL,
    is_deleted TINYINT Default 0

);

-- ====================================================//Create Permision Table
CREATE TABLE permission (
    id int not null auto_increment primary key,
    permission VARCHAR(255) NOT NULL,
    is_deleted TINYINT Default 0
);

-- ====================================================//Create role_permissions Table
CREATE TABLE role_permission (
    id int not null auto_increment primary key,
    role_id int not null,
    permission_id int not null,
    is_deleted TINYINT Default 0,

    FOREIGN KEY (role_id) REFERENCES Role(id) ON DELETE CASCADE ON UPDATE CASCADE,
    FOREIGN KEY (permission_id) REFERENCES permission(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ====================================================//Create user Table
CREATE TABLE users (
    id int not null auto_increment primary key,
    fullName varchar(255) not null,
    phone varchar(255) not null UNIQUE ,
    password varchar(255) not null,
    role_id int not null,
    is_deleted TINYINT Default 0,
    Foreign key (role_id) references Role(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ====================================================//Create petrol_car Table
CREATE TABLE petrol_car(
    id int not null auto_increment primary key,
    vin_tr VARCHAR(255) NOT NULL,
    vin_tl VARCHAR(255) NOT NULL,
    vin_br VARCHAR(255) NOT NULL,
    vin_bl VARCHAR(255) NOT NULL,
    body_note VARCHAR(255) NOT NULL,
    engine_test varchar(255) NOT NULL,
    gear_test varchar(255) NOT NULL,
    back_acss VARCHAR(255) NOT NULL,
    is_deleted TINYINT Default 0

);


-- ====================================================//Create petrol_car Table
CREATE TABLE order_test(
    id int not null auto_increment primary key,
    car_no VARCHAR(255) NOT NULL,
    car_type VARCHAR(255) NOT NULL,
    vin VARCHAR(255) NOT NULL,
    color VARCHAR(255) NOT NULL,
    model VARCHAR(255) NOT NULL,
    order_no VARCHAR(255) NOT NULL,
    notes VARCHAR(255) NOT NULL,
    price decimal NOT NULL,
    petrol_test int not null,
    hybrid_test int not null,

    is_deleted TINYINT Default 0,

    Foreign key (petrol_test) references petrol_car(id) ON DELETE CASCADE ON UPDATE CASCADE,
    Foreign key (hybrid_test) references hybrid_car(id) ON DELETE CASCADE ON UPDATE CASCADE

);


-- ====================================================//Create hybrid_car Table

CREATE TABLE hybrid_car(
    id int not null auto_increment primary key,
    engine_test varchar(255) NOT NULL,
    transmission varchar(255) NOT NULL,
    srs VARCHAR(255) NOT NULL,
    abs VARCHAR(255) NOT NULL,
    ac varchar(255) NOT NULL,
    hybrid_system varchar(255) NOT NULL,
    hv_battery varchar(255) NOT NULL,
    eleectric_system varchar(255) NOT NULL,
    emc varchar(255) NOT NULL,
    soh varchar(255) NOT NULL,
    note varchar(255) NOT NULL,
    is_deleted TINYINT Default 0

); 




-- =====================================================//Role DATA
Insert INTO
    Role (name)
VALUES
    ('ADMIN');

Insert INTO
    Role (name)
VALUES
    ('USER');

-- ====================================================// user Table Data

INSERT INTO
    users (fullName, phone, password, role_id)
VALUES
    ('iyad saadeh', '0780000000', '$10$FSdYblJJZQgmg6rhK3ImdOAKT2RNpisW1BQrrgbAol7ulbWtspxBG', 2);

    INSERT INTO
    users (fullName, phone, password, role_id)
VALUES
    ('Haitham Alulaimi', '0790000000', '$10$FSdYblJJZQgmg6rhK3ImdOAKT2RNpisW1BQrrgbAol7ulbWtspxBG', 2);

        INSERT INTO
    users (fullName, phone, password, role_id)
VALUES
    ('adminadmin', '0770000000', '$10$FSdYblJJZQgmg6rhK3ImdOAKT2RNpisW1BQrrgbAol7ulbWtspxBG', 1);