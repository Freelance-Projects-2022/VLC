-- ====================================================//Drop DataBase
Drop Database if exists VLC;

-- ====================================================//Create DataBase
Create Database VLC;

SET
    CHARACTER SET utf8;

SET
    SESSION collation_connection = 'utf8_general_ci';

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
    phone varchar(255) not null UNIQUE,
    password varchar(255) not null,
    role_id int not null,
    is_deleted TINYINT Default 0,
    Foreign key (role_id) references Role(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- ====================================================//Create petrol_car Table
CREATE TABLE petrol_car(
    id int not null auto_increment primary key,
    car_no VARCHAR(255),
    car_type VARCHAR(255),
    car_vin VARCHAR(255),
    car_color VARCHAR(255),
    car_model VARCHAR(255),
    vin_tr VARCHAR(255),
    vin_tl VARCHAR(255),
    vin_br VARCHAR(255),
    vin_bl VARCHAR(255),
    body_note VARCHAR(255),
    engine_test varchar(255),
    gear_test varchar(255),
    back_acss VARCHAR(255),
    is_deleted TINYINT Default 0
);

-- ====================================================//Create hybrid_car Table
CREATE TABLE hybrid_car(
    id int not null auto_increment primary key,
    car_no VARCHAR(255),
    car_type VARCHAR(255),
    car_vin VARCHAR(255),
    engine_test varchar(255),
    transmission varchar(255),
    srs VARCHAR(255),
    abs_system VARCHAR(255),
    ac varchar(255),
    hybrid_system varchar(255),
    hv_battery varchar(255),
    eleectric_system varchar(255),
    emc varchar(255),
    soh varchar(255),
    note varchar(255),
    is_deleted TINYINT Default 0,
    test_price decimal,
    car_order_no VARCHAR(255),
    car_notes VARCHAR(255)
);

-- ====================================================//Create order_test Table
-- CREATE TABLE order_test(
--     id int not null auto_increment primary key,
--     car_no VARCHAR(255) NOT NULL,
--     car_type VARCHAR(255) NOT NULL,
--     car_vin VARCHAR(255) NOT NULL,
--     car_color VARCHAR(255) NOT NULL,
--     car_model VARCHAR(255) NOT NULL,
--     car_order_no VARCHAR(255) NOT NULL,
--     car_notes VARCHAR(255) NOT NULL,
--     test_price decimal NOT NULL,
--     car_petrol_test int not null,
--     car_hybrid_test int not null,
--     is_deleted TINYINT Default 0,
--     Foreign key (car_petrol_test) references petrol_car(id) ON DELETE CASCADE ON UPDATE CASCADE,
--     Foreign key (car_hybrid_test) references hybrid_car(id) ON DELETE CASCADE ON UPDATE CASCADE
-- );
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
    (
        'iyad',
        '0780000000',
        '$2b$10$KojD1.HRAX/ykKMR.paEruIwR9OiyJ1XMamQvjq2LvLcCBCnI.h.u',
        2
    );

INSERT INTO
    users (fullName, phone, password, role_id)
VALUES
    (
        'Haitham',
        '0790000000',
        '$2b$10$KojD1.HRAX/ykKMR.paEruIwR9OiyJ1XMamQvjq2LvLcCBCnI.h.u',
        2
    );

INSERT INTO
    users (fullName, phone, password, role_id)
VALUES
    (
        'admin',
        '0770000000',
        '$2b$10$KojD1.HRAX/ykKMR.paEruIwR9OiyJ1XMamQvjq2LvLcCBCnI.h.u',
        1
    );

-- ====================================================// Petrol cars Table Data
INSERT into
    petrol_car (
        car_no,
        car_type,
        car_vin,
        car_color,
        car_model,

        vin_tr,
        vin_tl,
        vin_br,
        vin_bl,
        body_note,
        engine_test,
        gear_test,
        back_acss
    )
values
(
        "22-5484",
        "تويتا بريوس",
        "H6565365d",
        "لؤلؤي",
        "2018",
        "جيد",
        "جيد",
        "جيد",
        "جيد",
        "لا يوجد مشاكل في البودي",
        "ماتور يحتاج صيانة",
        "الجير ممتاز",
        "يحتاج الى صيانة"
    );

-- ====================================================// hybrid cars Table Data
insert into
    hybrid_car (
        car_no,
        car_type,
        car_vin,
        engine_test,
        transmission,
        srs,
        abs_system,
        ac,
        hybrid_system,
        hv_battery,
        eleectric_system,
        emc,
        soh,
        note
    )
values
    (
        "22-5484",
        "تويتا بريوس",
        "H6565365d",
        "CODES",
        "NO DTC",
        "NO DTC",
        "NO DTC",
        "OK",
        "NO DTC",
        "OK",
        "=========",
        "=========",
        "=========",
        "========="
    );