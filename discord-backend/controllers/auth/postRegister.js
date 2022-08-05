const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postRegister = async (req, res) => {
    try{
        const { username, mail, password } = req.body;

        res.set('Access-Control-Allow-Origin', '*');

        // Check user exists
        const userExists = await User.exists({mail});

        if(userExists) {
            return res.status(409).send("Error occured. User exists");    
        }

        // Encrypt password
        const encryptedPassword = await bcrypt.hash(password, 10);

        // Create user document and same in database
        const user = User.create({
            username,
            mail: mail.toLowerCase(),
            password: encryptedPassword
        });

        // Create Jwt token
        const token = jwt.sign(
            {
                userId: user._id,
                mail: user.mail
            },
            process.env.TOKEN_KEY,
            {
                expiresIn: "24h"
            }
        );

        return res.status(201).json(
            {
            mail: user.mail,
            token: token,
            username: username
        })
        
    } catch(err) {
        return res.status(500).send("Error occured. Please try again");
    }
};

module.exports = postRegister;