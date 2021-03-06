require ('dotenv').config();
const express =require('express'),
        massive = require('massive'),
        session = require('express-session'),
        authCtrl = require('./Controllers/authController'),
        { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
        app = express();

         

        

app.use(express.json())

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
)

massive({
    connectionString:CONNECTION_STRING,
    ssl:{rejectUnauthorized: false}
}).then(db => {
    app.set('db', db);
    console.log('Db connected')
}).catch(err=> console.log(err));



// Auth Endpoints
app.post('/api/register', authCtrl.register);
app.post('/api/login', authCtrl.login);
app.get('/api/logout', authCtrl.logout);

// CHECK ENDPOINTS WITH POSTMAN

app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`));
