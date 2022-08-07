\c weather

ALTER TABLE temperature RENAME TO weather;

ALTER TABLE weather ADD COLUMN humidity bigint;
ALTER TABLE weather ADD COLUMN wind_speed decimal;
ALTER TABLE weather ADD COLUMN zip_code bigint;

CREATE TABLE location (
    zip_code bigint PRIMARY KEY,
    location_code bigint,
    city_name VARCHAR(255),
    country VARCHAR(255)
);