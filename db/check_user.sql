-- checks if user is/ is not in database. Will use email bc email is unique. 
SELECT * FROM test_user
WHERE email = ${email};