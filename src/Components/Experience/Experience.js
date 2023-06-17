import React from 'react';
import Pulse from 'react-reveal/Pulse';

const Experience = () => {
    const experience = 'Under this project I am working in collaboration with a team of reputed university students from US and Bangladesh. My main topic is “Aging of materials under Hydrogen environment”. Under this topic I have studied about how hydrogen assist in aging of a material, hydrogen storage systems and materials used in this sector, different gasket materials aging under hydrogen environment, hydrogen fuel cell, hydrogen transportation and safety etc.';
    return (
        <div className='py-4 px-6 lg:px-36'>
            <section>
                <h1 className='text-3xl font-bold text-center text-gray-600'>Experience</h1>
                <div className='flex justify-center'>
                    <div className='w-11/12 h-0.5 rounded-xl bg-gray-600'></div>
                </div>
            </section>

            <section>
                <Pulse>
                    <div className='my-12 lg:flex justify-center py-8 px-4 lg:p-4 rounded-xl' style={{ backgroundColor: "#e1e2e3" }}>
                        <div className='w-3/4 mx-auto mb-2 lg:mb-0 lg:w-1/4 lg:mr-8'>
                            <img src="https://i.ibb.co/YtQhpTb/nanotech.png" alt="logo" />
                        </div>

                        <div className='lg:w-3/4'>
                            <h2 className='text-2xl font-bold underline text-center lg:text-left text-gray-600'><em>Experience Title</em></h2>
                            <p className='font-bold text-justify lg:text-left text-gray-600 my-3'><em>{experience.slice(0, 250)}...</em></p>
                            <div className='flex justify-center lg:block'>
                                <button className='btn btn-sm btn-success mt-1'>Read More</button>
                            </div>
                        </div>

                    </div>
                </Pulse>

                <Pulse>
                    <div className='my-12 lg:flex justify-center py-8 px-4 lg:p-4 rounded-xl' style={{ backgroundColor: "#e1e2e3" }}>
                        <div className='w-3/4 mx-auto mb-2 lg:mb-0 lg:w-1/4 lg:mr-8'>
                            <img src="https://i.ibb.co/YtQhpTb/nanotech.png" alt="logo" />
                        </div>

                        <div className='lg:w-3/4'>
                            <h2 className='text-2xl font-bold underline text-center lg:text-left text-gray-600'><em>Experience Title</em></h2>
                            <p className='font-bold text-justify lg:text-left text-gray-600 my-3'><em>{experience.slice(0, 250)}...</em></p>
                            <div className='flex justify-center lg:block'>
                                <button className='btn btn-sm btn-success mt-1'>Read More</button>
                            </div>
                        </div>

                    </div>
                </Pulse>
            </section>
        </div>
    );
};

export default Experience;