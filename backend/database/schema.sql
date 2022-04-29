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
    permission VARCHAR(255) NOT NULL
);

-- ====================================================//Create role_permissions Table
CREATE TABLE role_permission (
    id int not null auto_increment primary key,
    role_id int not null,
    permission_id int not null,
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
    gear_test varchar(255) NOT NULL,
    back_acss VARCHAR(255) NOT NULL

);

-- ====================================================//Create petrol_car Table
CREATE TABLE order_test(
    id int not null auto_increment primary key,
    order_no VARCHAR(255) NOT NULL,
    notes VARCHAR(255) NOT NULL,
    price decimal NOT NULL,
    test int not null,
    Foreign key (test) references petrol_car(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ====================================================//Create hybrid_car Table

-- CREATE TABLE hybrid_car(); 




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
    ('iyad', '0780000000', '$2b$10$KojD1.HRAX/ykKMR.paEruIwR9OiyJ1XMamQvjq2LvLcCBCnI.h.u', 2);

    INSERT INTO
    users (fullName, phone, password, role_id)
VALUES
    ('Haitham', '0790000000', '$2b$10$KojD1.HRAX/ykKMR.paEruIwR9OiyJ1XMamQvjq2LvLcCBCnI.h.u', 2);

        INSERT INTO
    users (fullName, phone, password, role_id)
VALUES
    ('admin', '0770000000', '$2b$10$KojD1.HRAX/ykKMR.paEruIwR9OiyJ1XMamQvjq2LvLcCBCnI.h.u', 1);


-- ====================================================// petrol car Table Data

