const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const postLogin = async (req, res) => {
    try{
        const { mail, password } = req.body;

        res.set('Access-Control-Allow-Origin', '*');
        
        // Check user exists
        const user = await User.findOne({mail: mail.toLowerCase()});
        
        if(user && (await bcrypt.compare(password, user.password))) {
            // send new token
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
            return res.status(200).json({
                mail: user.mail,
                token: token,
                username: user.username
            });
        }

        return res.status(400).send('Something went wrong. Please try again');
        

    } catch (err) {
        console.log(err)
        return res.status(500).send("Error occured. Please try again");
    }
    
    
    
    
    
    
};

module.exports = postLogin;