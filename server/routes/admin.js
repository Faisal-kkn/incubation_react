const express = require('express')
const router = express.Router()
const bcrypt = require('bcrypt')
const adminLogin = require('../models/admin/adminLogin')
const applicationForm = require('../models/user/application')
const slots = require('../models/user/slots')
var jwt = require('jsonwebtoken');


const verifyAdminJWT = (req, res, next) => {
    const token = req.headers["x-access-token"];
    if (!token) {
        res.send("We need a token, please give it to us next time");
    } else {
        jwt.verify(token, "adminToken", (err, decoded) => {
            if (err) {
                console.log(err);
                res.json({ auth: false, message: "you are failed to authenticate" });
            } else {
                next();
            }
        });
    }
};

router.get('/isAdminAuth', verifyAdminJWT, (req, res) => {
    res.status(200).json({ auth: true, message: "You are authenticated Congrats!" })
})


router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body

        adminLogin.findOne({ email: email }).then(response => {
            var mailStatus = true;
            var passwordStatus = true;
            if (!response) {
                mailStatus = false;
                return res.status(200).json({ auth: false, mailStatus });
            }
            else mailStatus = true;
            bcrypt.compare(password, response.password).then(result => {
                if (!result) {
                    passwordStatus = false;
                    return res.status(200).json({ auth: false, passwordStatus })
                } else {
                    passwordStatus = true;
                    let resp = {
                        id: response._id,
                    }

                    let adminToken = jwt.sign(resp, process.env.JWT_ADMIN_SECRET, { expiresIn: 300 });
                    res.status(200).json({ auth: true, adminToken: adminToken, passwordStatus })

                }
            })
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/home', verifyAdminJWT, async (req, res) => {
    try {
        applicationForm.find({ status: "pending" }).then(response => {
            response.auth = true
            res.status(200).json(response)
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})

router.post('/approve/:id', verifyAdminJWT, async (req, res) => {
    try {
        applicationForm.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                status: "approved"
            }
        }).then(response => {
            if (response) res.status(200).json({ update: true })
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})

router.post('/reject/:id', verifyAdminJWT, async (req, res) => {
    try {
        applicationForm.findByIdAndUpdate({ _id: req.params.id }, {
            $set: {
                status: "rejected"
            }
        }).then(response => {
            if (response) res.status(200).json({ update: true })
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/approved', verifyAdminJWT, async (req, res) => {
    try {
        applicationForm.find({ status: "approved" }).then(response => {
            res.status(200).json(response)
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})


router.get('/rejected', verifyAdminJWT, async (req, res) => {
    try {
        applicationForm.find({ status: "rejected" }).then(response => {
            res.status(200).json(response)
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/booking_slots', verifyAdminJWT, async (req, res) => {
    try {
        slots.find().then(response => {
            res.status(200).json(response)
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})

router.get('/slotBooking', verifyAdminJWT, async (req, res) => {
    try {
        applicationForm.findOneAndUpdate({ _id: req.query.companyId }, {
            $set: {
                status: "Booked"
            }
        }).then(response => {
            if (response) {
                slots.findOneAndUpdate({ sloatNo: req.query.slotId }, {
                    $set: {
                        "bookedId": req.query.companyId,
                        "status": true
                    }
                }).then(response => {
                    res.status(200).json(response)
                }).catch(error => res.json(error))
            }
        }).catch(error => res.json(error))


    } catch (error) {
        console.log(error);
    }
})

router.get('/progress', verifyAdminJWT, async (req, res) => {
    try {
        applicationForm.find().then(response => {
            res.status(200).json(response)
        }).catch(error => {
            res.json(error)
        })
    } catch (error) {
        console.log(error);
    }
})

module.exports = router