const User = require('../../models/user');
const bcrypt = require('bcryptjs');

const postRegister = async (req, res) => {
    try{
        const { username, mail, password } = req.body;

        // Check user exists
        const userExists = await User.exists({mail});

        if(userExists) {
            return res.status(409).send("Error occured. Please try again");    
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
        const token = 'JWT TOKEN';

        return res.status(201).json({
            mail: user.mail,
            token: token,
            username: username
        })
        
    } catch(err) {
        return res.status(500).send("Error occured. Please try again");
    }
};

module.exports = postRegister;