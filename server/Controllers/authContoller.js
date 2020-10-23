// where we put our handler functions. we will be installing bcrypt package. bcrypt=hash salt, hash passwords. 
//  cant store blank, encoded, eencrypted passwords. 
// salt = random set of characters that gets added to beggining of passwrods to add an extra layer of security 
// makes sense to have multiple controllers that work with different data

const bcrypt=require('bcryptjs')
 module.exports={
     register: async(req, res) => {
         const {email, password} = req.body,
            db = req.app.get('db');
        
        const foundUser = await db.check_user({email});
        if(foundUser[0]){
            return res.status(400).send('Email already in use.')
        }

        let salt = bcrypt.genSaltSync(10),
            hash = bcrypt.hashSync(password, salt);

        const newUser = await db.register_user({email, hash});
        req.session.user = newUser[0];
        res.status(201).send(req.session.user);

     },
     login: async(req, res) => {
            const {email, password} = req.body,
                db = req.app.get('db');

            const foundUser = await db.check_user({email});
                 if(!foundUser[0]){
                 res.status(400).send('Email not found');
            }

            const authenticated = bcrypt.compareSync(password, foundUser[0].password);
                if(!authenticated){
                    return res.status(401).send('Password is incorrect.')
                }

                delete foundUser[0].password;
                req.session.user = foundUser[0];
                res.status(202).send(req.session.user);
     },
     logout: (req, res) => {
            req.session.destroy();
            res.sendStatus(200);
     }
 }

//  what do these functions need to work properly.
// async await = i want this function to be asynchronus 
//  register 
// logout clears info on session from anywhere that is not in the database. clears from the application, stays in the database. 



//  ^^ 3 handler functions for authentication; probably the most code intensive handler functions we learn at dMountain