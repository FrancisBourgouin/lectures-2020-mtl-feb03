DROP TABLE drinks;
DROP TABLE spirit_types;

CREATE TABLE spirit_types(
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    description TEXT NOT NULL
);

CREATE TABLE drinks(
   id SERIAL PRIMARY KEY,
   name TEXT NOT NULL,
   price FLOAT NOT NULL,
   volume INT NOT NULL,
   spirit_type_id INT REFERENCES spirit_types(id)
);



INSERT INTO spirit_types (name, description) VALUES ('Whiskey', 'The bigger family of whiskey, scotch, bourbon, and blends, etc.');
INSERT INTO spirit_types (name, description) VALUES ('Scotch', 'The fancy one from Scotland');
INSERT INTO spirit_types (name, description) VALUES ('Beer', 'You know, the usual.');


INSERT INTO drinks (name, price, volume, spirit_type_id) VALUES ('Pikachu', 4.99, 500, 3);
INSERT INTO drinks (name, price, volume, spirit_type_id) VALUES ('Macallan 21', 499.00, 50, 2);
INSERT INTO drinks (name, price, volume, spirit_type_id) VALUES ('Hibiki 21', 49.99, 50, 1);