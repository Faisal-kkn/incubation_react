const express = require('express')
const router = express.Router()
const registerForm = require('../models/user/register')
const bcrypt = require('bcrypt')

router.post('/register', async (req, res)=>{
    try{
        let mailId = await registerForm.findOne({ email: req.body.email })
        if(!mailId){
            const saltRounds = await bcrypt.genSalt(10)
            const securePassword = await bcrypt.hash(req.body.password, saltRounds,);

            const registerUser = new registerForm({
                name: req.body.name,
                email: req.body.email,
                password: securePassword,
            })

            registerUser.save().then(data => {
                res.json(data)
            }).catch(error => {
                res.json(error)
            })
        }else{
            res.json({msg: true})
        }
    }catch(error){
        console.log(error);
    }
})



router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body 

        registerForm.findOne({ email: email}).then(response => {
            var mailStatus = true;
            var passwordStatus = true;
            if (!response){
                mailStatus = false;
                return res.status(200).json({ mailStatus });
            }
            else mailStatus = true;
            bcrypt.compare(password, response.password).then(response => {
                if (!response) {
                    passwordStatus = false;
                    return res.status(200).json({ passwordStatus }) 
                }
                else passwordStatus = true;
                response.status = true
                res.json(response)
            })
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})




module.exports = router