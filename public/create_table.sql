CREATE TABLE IF NOT EXISTS employee (
	emp_id char(4) NOT NULL PRIMARY KEY,
    emp_name varchar(50) NOT NULL,
    emp_nik char(16) NOT NULL,
    emp_address varchar(200) NOT NULL,
    emp_phone_num varchar(15) NOT NULL,
    emp_division varchar(50) NOT NULL
);

CREATE TABLE IF NOT EXISTS purchase_transaction (
	purchase_t_id char(4) NOT NULL PRIMARY KEY,
    purchase_t_time datetime NOT NULL,
    purchase_total_price float NOT NULL
);

CREATE TABLE IF NOT EXISTS supplier (
	sup_id char(4) NOT NULL PRIMARY KEY,
    sup_name char(50) NOT NULL,
    sup_phone_num varchar(15) NOT NULL,
    sup_address varchar(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS sales_transaction (
	sales_t_id char(4) NOT NULL PRIMARY KEY,
    sales_t_time datetime NOT NULL,
    sales_total_price float NOT NULL
);

CREATE TABLE IF NOT EXISTS item (
	item_id char(4) NOT NULL PRIMARY KEY,
    item_name varchar(50) NOT NULL,
    item_sale_price float NOT NULL,
    item_purchase_price float NOT NULL,
    item_weight varchar(20) NOT NULL,
    item_stock int NOT NULL,
    discount int NOT NULL
);

CREATE TABLE IF NOT EXISTS customer (
	cust_id char(4) NOT NULL PRIMARY KEY,
    cust_name varchar(50) NOT NULL,
    cust_phone_num varchar(15) NOT NULL,
    cust_email varchar(50) NOT NULL,
    cust_registration_date date NOT NULL,
    cust_address varchar(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS item_category (
	ic_id char(4) NOT NULL PRIMARY KEY,
    ic_name varchar(50) NOT NULL
);

ALTER TABLE purchase_transaction
ADD emp_id char(4),
ADD sup_id char(4),
ADD FOREIGN KEY (emp_id) REFERENCES employee(emp_id),
ADD FOREIGN KEY (sup_id) REFERENCES supplier(sup_id);

ALTER TABLE sales_transaction
ADD cust_id char(4),
ADD emp_id char(4),
ADD FOREIGN KEY (cust_id) REFERENCES customer(cust_id),
ADD FOREIGN KEY (emp_id) REFERENCES employee(emp_id);

ALTER TABLE item
ADD ic_id char(4),
ADD FOREIGN KEY (ic_id) REFERENCES item_category(ic_id);

SELECT * FROM employee;
SELECT * FROM supplier;
SELECT * FROM customer;
SELECT * FROM item_category;
SELECT * FROM item;
SELECT * FROM purchase_transaction;
SELECT * FROM sales_transaction;