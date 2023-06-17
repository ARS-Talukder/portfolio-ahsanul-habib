import React from 'react';
import { BsArrowUpRight } from "react-icons/bs";
import Pulse from 'react-reveal/Pulse';

const Contact = () => {
    return (
        <div className='py-4 px-6 lg:px-36'>
            <section>
                <h1 className='text-3xl font-bold text-center text-gray-600'>Contact Me</h1>
                <div className='flex justify-center'>
                    <div className='w-11/12 h-0.5 rounded-xl bg-gray-600'></div>
                </div>
            </section>

            <section>
                {/* ---------------Gmail---------------- */}
                <Pulse>
                    <div className='lg:w-3/4 mx-auto my-12 py-10 px-4 rounded-3xl' style={{ backgroundColor: "#e0edce" }}>
                        <a href="mailto:ahsanulhabibsoron@gmail.com" target='_blank' rel="noreferrer" className='lg:flex justify-evenly'>
                            <div className='flex justify-center items-center'>
                                <img src="https://i.ibb.co/gv8n01k/gmail.png" width={80} alt="logo" />
                            </div>
                            <div>
                                <h2 className='text-3xl lg:text-2xl font-bold text-gray-600 text-center underline lg:no-underline lg:text-left mt-6 mb-4 lg:mt-0 lg:mb-0'>Gmail</h2>
                                <p className='font-bold text-gray-600 text-center'>Drop me an email I'll be in touch. Let's connect.</p>
                            </div>
                            <p className='text-3xl hidden lg:flex items-center'><BsArrowUpRight></BsArrowUpRight></p>
                        </a>
                    </div>
                </Pulse>

                {/* ---------------Mobile---------------- */}
                <Pulse>
                    <div className='lg:w-3/4 mx-auto my-12 py-10 px-4 rounded-3xl' style={{ backgroundColor: "#e0edce" }}>
                        <a href="tel:+880 1751 514293" target='_blank' rel="noreferrer" className='lg:flex justify-evenly'>
                            <div className='flex justify-center items-center'>
                                <img src="https://i.ibb.co/4FXBxrr/mobile.png" width={80} alt="logo" />
                            </div>
                            <div>
                                <h2 className='text-3xl lg:text-2xl font-bold text-gray-600 text-center underline lg:no-underline lg:text-left mt-6 mb-4 lg:mt-0 lg:mb-0'>Mobile</h2>
                                <p className='font-bold text-gray-600 text-center'>Feel free to make a call to contact with me directly</p>
                            </div>
                            <p className='text-3xl hidden lg:flex items-center'><BsArrowUpRight></BsArrowUpRight></p>
                        </a>
                    </div>
                </Pulse>

                {/* ---------------Linkedin---------------- */}
                <Pulse>
                    <div className='lg:w-3/4 mx-auto my-12 py-10 px-4 rounded-3xl' style={{ backgroundColor: "#e0edce" }}>
                        <a href="https://www.linkedin.com/in/a-k-m-ahsanul-habib-368455214/" target='_blank' rel="noreferrer" className='lg:flex justify-evenly'>
                            <div className='flex justify-center items-center'>
                                <img src="https://i.ibb.co/q9sQYtL/linkedin.png" width={80} alt="logo" />
                            </div>
                            <div>
                                <h2 className='text-3xl lg:text-2xl font-bold text-gray-600 text-center underline lg:no-underline lg:text-left mt-6 mb-4 lg:mt-0 lg:mb-0'>Linkedin</h2>
                                <p className='font-bold text-gray-600 text-center'>Connect with me in linkedin. Let's connect</p>
                            </div>
                            <p className='text-3xl hidden lg:flex items-center'><BsArrowUpRight></BsArrowUpRight></p>
                        </a>
                    </div>
                </Pulse>

                {/* ---------------ResearchGate---------------- */}
                <Pulse>
                    <div className='lg:w-3/4 mx-auto my-12 py-10 px-4 rounded-3xl' style={{ backgroundColor: "#e0edce" }}>
                        <a href="https://www.researchgate.net/profile/Ahsanul-Habib-4" target='_blank' rel="noreferrer" className='lg:flex justify-evenly'>
                            <div className='flex justify-center items-center'>
                                <img src="https://i.ibb.co/5TTYnvR/research.png" width={80} alt="logo" />
                            </div>
                            <div>
                                <h2 className='text-3xl lg:text-2xl font-bold text-gray-600 text-center underline lg:no-underline lg:text-left mt-6 mb-4 lg:mt-0 lg:mb-0'>ResearchGate</h2>
                                <p className='font-bold text-gray-600 text-center'>Check my ResearchGate profile. Let's contact</p>
                            </div>
                            <p className='text-3xl hidden lg:flex items-center'><BsArrowUpRight></BsArrowUpRight></p>
                        </a>
                    </div>
                </Pulse>

                {/* ---------------Facebook---------------- */}
                <Pulse>
                    <div className='lg:w-3/4 mx-auto my-12 py-10 px-4 rounded-3xl' style={{ backgroundColor: "#e0edce" }}>
                        <a href="https://www.facebook.com/ahsanulhabib.soron" target='_blank' rel="noreferrer" className='lg:flex justify-evenly'>
                            <div className='flex justify-center items-center'>
                                <img src="https://i.ibb.co/R7Wrbnd/facebook.png" width={80} alt="logo" />
                            </div>
                            <div>
                                <h2 className='text-3xl lg:text-2xl font-bold text-gray-600 text-center underline lg:no-underline lg:text-left mt-6 mb-4 lg:mt-0 lg:mb-0'>Facebook</h2>
                                <p className='font-bold text-gray-600 text-center'>Follow my facebook profile to see my content</p>
                            </div>
                            <p className='text-3xl hidden lg:flex items-center'><BsArrowUpRight></BsArrowUpRight></p>
                        </a>
                    </div>
                </Pulse>
            </section>

            <section className='mt-24 mb-2'>
                <h3 className='text-center text-xl font-bold'>Thank you for visiting my website</h3>
            </section>
        </div>
    );
};

export default Contact;