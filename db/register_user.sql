-- Want to make sure user is not in the database. do not want to make user another account if user has already been registered 
INSERT INTO test_user(
    email,
    password
) VALUES (
    ${email},
    ${hash}
)
RETURNING user_id, email; 


-- do not return the password from client side. must compare passwords when logging in. 
