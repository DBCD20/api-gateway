require('dotenv').config();
const express       = require('express');
const app           = express();
const helmet        = require('helmet');
const CORS          = require('cors');
const PORT          = process.env.PORT || 3007;
const userRoute     = require('./routes/user');
const membersRoute  = require('./routes/member');
const { isLoggedIn } = require('./auth_middleware');

app.use(helmet());
app.use(CORS());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use('/api/user', userRoute);
app.use('/api/members',isLoggedin, membersRoute);
// app.use('/api/members',isLoggedIn, membersRoute);


// ====== ERROR HANDLERS =======
app.use((req, res, next) => {
    let err = new Error("NOT FOUND");
    err.status = 400;
    return next(err)
});

app.use((err, req, res, next) => {
    res.status( err.status || 500).json({
        message: err.message || "SOMETHING WENT WRONG"
    });
});

app.listen(PORT, () => console.log( `Auth service is now up and running on ${PORT}` ));

