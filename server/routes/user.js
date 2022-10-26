const express = require('express')
const router = express.Router()
const registerForm = require('../models/user/register')
const applicationForm = require('../models/user/application')
const bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken');

const multer = require('multer');

const storage = multer.diskStorage({
    destination(req, file, callback) {
        callback(null, '../client/public/images');
    },
    filename(req, file, callback) {
        callback(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
    },
});

const upload = multer({ storage });

const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        res.send("We need a token, please give it to us next time");
    } else {
        jwt.verify(token, "jwtSecret", (err, decoded) => {
            if (err) {
                console.log(err);
                res.json({ auth: false, message: "you are failed to authenticate" });
            } else {
                next();
            }
        });
    }
};

router.get('/isUserAuth', verifyJWT, (req, res) => {
    res.status(200).json({ auth: true, message: "You are authenticated Congrats!" })
})


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
                console.log(data);
                res.json({data:true})
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

router.post('/login',   async (req, res) => {
    try {
        const { email, password } = req.body 

        registerForm.findOne({ email: email}).then(response => {
            var mailStatus = true;
            var passwordStatus = true;
            if (!response){
                mailStatus = false;
                return res.status(200).json({ auth: false, mailStatus });
            }
            else mailStatus = true;
            bcrypt.compare(password, response.password).then(result => {
                if (!result) {
                    passwordStatus = false;
                    return res.status(200).json({ auth: false, passwordStatus }) 
                }else{
                    passwordStatus = true;
                    let token = jwt.sign({name: response.name}, process.env.JWT_SECRET, {expiresIn: 300});
                    res.status(200).json({ auth: true, token: token, passwordStatus  })
                }
            })
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})

router.post('/application', verifyJWT,  upload.single('image'), (req, res) => {
    try{
        const application = new applicationForm({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            company_name: req.body.company_name,
            image: req.file.filename,
            Incubation: req.body.Incubation,
            status: "pending",
        })

        application.save().then(data => {
            console.log(data);
            res.json(data)
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }

})


module.exports = router