import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/outline'

function Application() {
    return (
        <div>
            <nav className='bg-white shadow-lg'>
                <div className='md:flex items-center justify-between py-2 px-8 md:px-12'>
                    <div className='flex justify-between items-center w-full'>
                        <div className='text-2xl font-bold text-gray-800 md:text-3xl'>
                            <a href="#">REVA NEST</a>
                        </div>
                        <div className='flex gap-6 items-center'>
                            <h4>User Name</h4>
                            <div className='flex gap-2 bg-green-300 py-2 px-3 rounded text-gray-700 font-semibold cursor-pointer'>
                                <ArrowRightIcon className='header-icon' /> Logout
                            </div>
                        </div>
                    </div>
                    
                </div>
            </nav>
            <main className='flex justify-center items-center w-full min-h-[100vh] py-5'>
                <div className="bg-white flex flex-col rounded-2xl shadow-2xl w-3/4">
                    <div className="w-full text-center py-2" >
                        <h2 className='text-3xl font-bold text-green-500 mb-2 uppercase'> Application for Incubation </h2>
                        <div className='w-fit mx-auto'>
                            <div className=' bg-green-500 border-2 w-10 border-green-500 inline-block mb-2'></div>
                        </div>
                    </div>
                    <form action="" autocomplete="off">
                        <div className="grid-cols-1  w-full grid md:grid-cols-2 gap-4 p-5">
                            <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                <input type="text" name="name" id="name" placeholder='Name *' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                <input type="text" name="address" id="address" placeholder='Address' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                <input type="text" name="city" id="city" placeholder='City *' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                <input type="text" name="state" id="state" placeholder='State' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                <input type="text" name="email" id="email" placeholder='Email *' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                <input type="text" name="phone" id="phone" placeholder='Phone no' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                <input type="text" name="company_name" id="company_name" placeholder='Company Name' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                <input type="file" name="image" id="image" placeholder='Image' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                            </div>


                            <div className='bg-gray-100 w-full p-2 mb-5 text-left'>
                                <textarea name="" id="" cols="30" rows="3" className='block w-full bg-gray-100 outline-none text-sm flex-1' placeholder='Describe Your Team and Background *' ></textarea>
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='Describe Your Company and Products *' ></textarea>
                            </div>

                            <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='Describe the Problem your are trying to solve *'></textarea>
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='What is unique about yout solution? *' ></textarea>
                            </div>

                            <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='What is your value proposition for the customer? *' ></textarea>
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='Who are your competitors and what is your competative advantage? *' ></textarea>
                            </div>

                            <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='Explain your revenue model *'></textarea>
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='What is the potential market size of the product? *'></textarea>
                            </div>

                            <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='How do you market or plan to market yout products and services *'></textarea>
                            </div>
                            <div>
                                <label htmlFor="" className='text-left'>Type of Incubation needed *</label>
                                <div className=' p-2 flex items-left'>
                                    <input type="radio" name="Incubation" id="physical" placeholder='' className=' ' />
                                    <label for="physical" class="text-sm font-medium text-gray-900 ml-2 block" >Physical Incubation</label>
                                </div>
                                <div className='p-2 flex items-left mb-5'>
                                    <input type="radio" name="Incubation" id="virtual" placeholder='' className=' ' />
                                    <label for="virtual" class="text-sm font-medium text-gray-900 ml-2 block">Virtual Incubation</label>
                                </div>
                            </div>
                            <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='Upload a Detailed business proposal *' ></textarea>
                            </div>
                        </div>
                        <div className='px-5 w-fit mx-auto pb-5'>
                            <button className='border-2 text-green-500 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </main>
            {/* <main className='flex justify-center items-center w-full min-h-[100vh] py-5'>
                <div className="bg-white flex flex-col rounded-2xl shadow-2xl w-3/4">
                    <div className="w-full text-center py-2" >
                        <h2 className='text-3xl font-bold text-green-500 mb-2 uppercase'> Application for Incubation </h2>
                        <div className='w-fit mx-auto'>
                            <div className=' bg-green-500 border-2 w-10 border-green-500 inline-block mb-2'></div>
                        </div>
                    </div>
                    <form action="" autocomplete="off">
                        <div className="w-full flex">
                            <div className='w-3/6 p-5 pb-0'>
                                <div className="text-center">
                                    <div className='flex flex-col items-center'>
                                        <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                            <input type="text" name="name" id="name" placeholder='Name *' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                                        </div>
                                        <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                            <input type="text" name="city" id="city" placeholder='City *' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                                        </div>
                                        <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                            <input type="text" name="email" id="email" placeholder='Email *' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                                        </div>
                                        <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                            <input type="text" name="company_name" id="company_name" placeholder='Company Name' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='w-3/6 p-5 pb-0 rounded-tr-2xl rounded-br-2xl'>
                                <div className="text-center">
                                    <div className='flex flex-col items-center'>
                                        <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                            <input type="text" name="address" id="address" placeholder='Address' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                                        </div>
                                        <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                            <input type="text" name="state" id="state" placeholder='State' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                                        </div>
                                        <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                            <input type="text" name="phone" id="phone" placeholder='Phone no' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                                        </div>
                                        <div className='bg-gray-100 w-full p-2 flex items-center mb-5'>
                                            <input type="file" name="image" id="image" placeholder='Image' className='bg-gray-100 outline-none text-sm flex-1 py-1' />
                                        </div>

                                    </div>
                                </div>
                            </div>
                            
                        </div>
                        <div className='w-full rounded-tr-2xl rounded-br-2xl flex'>
                            <div className="text-center w-3/6 pt-0 pb-0  p-5">
                                <div className='flex flex-col items-left'>
                                    <div className='bg-gray-100 w-full p-2 mb-5 text-left'>
                                        <textarea name="" id="" cols="30" rows="3" className='block w-full bg-gray-100 outline-none text-sm flex-1' placeholder='Describe Your Team and Background *' ></textarea>
                                    </div>
                                    
                                    <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                        <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='Describe the Problem your are trying to solve *'></textarea>
                                    </div>
                                    
                                    <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                        <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='What is your value proposition for the customer? *' ></textarea>
                                    </div>
                                    
                                    <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                        <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='Explain your revenue model *'></textarea>
                                    </div>
                                    
                                    <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                        <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='How do you market or plan to market yout products and services *'></textarea>
                                    </div>
                                    <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                        <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='Upload a Detailed business proposal *' ></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center w-3/6 p-5  pb-0 pt-0">
                                <div className='flex flex-col items-left'>
                                    
                                    <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                        <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='Describe Your Company and Products *' ></textarea>
                                    </div>
                                    
                                    <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                        <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='What is unique about yout solution? *' ></textarea>
                                    </div>
                                    
                                    <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                        <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='Who are your competitors and what is your competative advantage? *' ></textarea>
                                    </div>
                                    
                                    <div className='bg-gray-100 w-full p-2 flex items-center  mb-5'>
                                        <textarea name="" id="" cols="30" rows="3" className='bg-gray-100 outline-none text-sm flex-1' placeholder='What is the potential market size of the product? *'></textarea>
                                    </div>
                                    <label htmlFor="" className='text-left'>Type of Incubation needed *</label>
                                    <div className=' p-2 flex items-left'>
                                        <input type="radio" name="Incubation" id="physical" placeholder='' className=' ' />
                                        <label for="physical" class="text-sm font-medium text-gray-900 ml-2 block" >Physical Incubation</label>
                                    </div>
                                    <div className='p-2 flex items-left mb-5'>
                                        <input type="radio" name="Incubation" id="virtual" placeholder='' className=' ' />
                                        <label for="virtual" class="text-sm font-medium text-gray-900 ml-2 block">Virtual Incubation</label>
                                    </div>
                                </div>

                            </div>

                        </div>
                        <div className='px-5 w-fit mx-auto pb-5'>
                            <button className='border-2 text-green-500 border-green-500 rounded-full px-12 py-2 inline-block font-semibold hover:bg-green-500 hover:text-white'>Submit</button>
                        </div>
                    </form>
                </div>
            </main> */}

        </div>
    )
}

export default Application
