import React, { useState, useEffect } from 'react';
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';


function Login() {

    const Navigate = useNavigate()

    useEffect(() => {
        userAuthenticeted()
    }, [Navigate]);

    const userAuthenticeted = () => {
        axios.get("http://localhost:4000/isUserAuth", {
            headers: {
                "x-access-token": localStorage.getItem("token"),
            },
        }).then((response) => {
            if (response.data.auth) Navigate('/')
            else Navigate("/login");
        });
    };


   
    const [logErr, setLogErr] = useState({
        email: true,
        password: true,
        msg: ''
    })

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e)=>{
        const { name, value } = e.target
        setLogin({
            ...login,
            [name]: value
        })
    }

    const loginForm = (e)=>{
        e.preventDefault()
        if( !login.email.match(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/)){
            setLogErr({
                email: false,
                password: true,
                msg: 'Email is required'
            })
        }else if( login.password === '' ){
            setLogErr({
                email: true,
                password: false,
                msg: 'Password is required'
            })
        }else{
            axios.post('http://localhost:4000/login', login).then((response => {
                if (response.data.mailStatus === false) {
                    setLogErr({
                        email: false,
                        password: true,
                        msg: 'The email address that you entered does not match an account'
                    })
                } else if (response.data.passwordStatus === false) {
                    setLogErr({
                        email: true,
                        password: false,
                        msg: 'The password that you entered is incorrect'
                    })
                } else {
                    if (response.data.auth){
                        setLogErr({
                            email: true,
                            password: true,
                            msg: ''
                        })
                        localStorage.setItem("token", response.data.token)
                        Navigate('/')
                    } else Navigate('/login')
                }
            })).catch(error => console.log(error))
        }
    }


    return (
        <div>
            <main className='flex justify-center items-center w-full h-[90vh] '>
                <div className="bg-white rounded-2xl shadow-2xl flex w-2/3 max-w-4xl">
                    <div className='w-3/5 p-5'>
                        <div className='text-left font-bold'>
                            <span className="text-green-500">REVA </span>NEST
                        </div>
                        <div className="py-10 text-center">
                            <h2 className='text-3xl font-bold text-green-500 mb-2'> Sign in to Account </h2>
                            <div className='w-fit mx-auto'>
                                <div className=' bg-green-500 border-2 w-10 border-green-500 inline-block mb-2'></div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='mx-auto w-[75%]'>
                                    <form onSubmit={loginForm} >
                                        <div className='bg-gray-100 p-2 flex items-center'>
                                            <EnvelopeIcon className='text-gray-400 m-2 h-6 w-6' />
                                            <input type="email" name="email" value={login.email} onChange={handleChange} id="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1' />
                                        </div>
                                        <p className='font-normal text-xs m-0  mb-3 text-left text-red-600'>{logErr.email ? '' : logErr.msg}</p>
                                        <div className='bg-gray-100 p-2 flex items-center'>
                                            <LockClosedIcon className='text-gray-400 m-2 h-6 w-6' />
                                            <input type="password" name="password" value={login.password} onChange={handleChange} id="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                                        </div>
                                        <p className='font-normal text-xs m-0   mb-5 text-left text-red-600'>{logErr.password ? '' : logErr.msg}</p>
                                        <button className='border-2 text-green-500 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Login</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-2/5 bg-green-500 text-white rounded-tr-2xl rounded-br-2xl py-36 px-12 text-center'>
                        <h2 className='text-3xl font-bold mb-2'> Hello, Friends! </h2>
                        <div className='w-fit mx-auto'>
                            <div className=' bg-white border-2 w-10 border-white inline-block mb-2'></div>
                        </div>
                        <p className='mb-10 '>Thanking consumers who created an account,  Greeting returning visitors</p>
                        <NavLink to='/register'><button className='border-2 text-white border-white rounded-full px-12 py-2 inline-block font-semibold hover:bg-white hover:text-green-500'>Register</button></NavLink>
                        
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Login
