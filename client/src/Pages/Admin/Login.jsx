import React from 'react';
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";


function Login() {
    return (
        <div>
            <main className='flex justify-center items-center min-h-[100vh] bg-green-300'>
                <div className="bg-white rounded-2xl shadow-2xl flex w-1/3 max-w-4xl">
                    <div className='w-full p-5'>
                        <div className='text-left font-bold'>
                            <span className="text-green-500">REVA </span>NEST
                        </div>
                        <div className="py-10 text-center">
                            <h2 className='text-3xl font-bold text-green-500 mb-2'> Sign in to Account </h2>
                            <div className='w-fit mx-auto'>
                                <div className=' bg-green-500 border-2 w-10 border-green-500 inline-block mb-2'></div>
                            </div>
                            <div className='flex flex-col items-center'>
                                <div className='bg-gray-100 w-[75%] p-2 flex items-center mb-3 rounded'>
                                    <EnvelopeIcon className='text-gray-400 m-2 h-6 w-6' />
                                    <input type="email" name="email" id="email" placeholder='Email' className='bg-gray-100 outline-none text-sm flex-1 ' />
                                </div>
                                <div className='bg-gray-100 w-[75%] p-2 flex items-center mb-5 rounded'>
                                    <LockClosedIcon className='text-gray-400 m-2 h-6 w-6' />
                                    <input type="password" name="password" id="password" placeholder='Password' className='bg-gray-100 outline-none text-sm flex-1' />
                                </div>
                                <button className='border-2 text-green-500 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Login</button>
                            </div>
                        </div>
                    </div>
                </div>
            </main>

        </div>
    )
}

export default Login
