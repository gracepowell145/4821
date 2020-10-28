CREATE TABLE test_user (
    user_id SERIAL PRIMARY KEY,
    email VARCHAR(150),
    password VARCHAR(250)
);

-- HAS USERNAME COLUMN AS WELL! 



CREATE TABLE user_daily_input (
    user_id SERIAL PRIMARY KEY,
    daily_schedule TEXT,
    today_i_will TEXT,
    today_i_achieved TEXT, 
);