import React from 'react';

const Academics = () => {
    return (
        <div className='py-4 px-6 lg:px-32'>
            <section>
                <h1 className='text-3xl font-bold text-center text-gray-600'>Academic Credentials</h1>
                <div className='flex justify-center'>
                    <div className='w-11/12 h-0.5 rounded-xl bg-gray-600'></div>
                </div>
                <h2 className='text-xl text-justify text-gray-600 mt-6'>
                    Currently, I am a graduate research assistant (GRA) at the center of Fluids and Thermal Sciences at Brown University. My research interest lies in oceanography, satellite altimetry, and the submesoscale dynamics in the arctic. I am seeking exposure in developing a mechanical, and mathematical model to address the favor of the environment, marine ecology, and biodiversity analyzing the sea-ice dynamics, and their interaction specifically the marginal ice zones (MIZ).
                </h2>
            </section>
            <section className='mt-12'>
                <div className='my-20 lg:flex justify-between'>
                    <div className='md:flex justify-center'>
                        <div>
                            <h2 className='text-2xl font-bold underline text-gray-600'><em>Bachelor of Science in Mechanical Engineering</em></h2>
                            <h2 className='text-xl font-bold text-gray-600'>Rajshahi University of Engineering & Technology</h2>
                            <h3 className='text-xl font-bold text-gray-600'>(Jan 2019 - Jan 2024)</h3>
                            <p className='font-bold text-gray-600'><em>CGPA 3.66/4.00</em></p>
                            <p className='ml-4 font-bold text-gray-600'><li>Ranked 25th in a graduating class of 210 students</li></p>
                            <p className='ml-4 font-bold text-gray-600'><li>Ranked 25th in a graduating class of 210 students</li></p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 lg:mt-0'>
                        <img src="https://i.ibb.co/4PgYBGW/Ruet-logo-1.png" width={170} alt="logo" />
                    </div>
                </div>
                <div className='my-20 lg:flex justify-between'>
                    <div className='md:flex justify-center'>
                        <div>
                            <h2 className='text-2xl font-bold underline text-gray-600'><em>Higher Secondary School Certificate</em></h2>
                            <h2 className='text-xl font-bold text-gray-600'>Dhaka City College</h2>
                            <h3 className='text-xl font-bold text-gray-600'>(Jun 2016 - Apr 2018)</h3>
                            <p className='font-bold text-gray-600'><em>GPA 5.00/5.00</em></p>
                            <p className='ml-4 font-bold text-gray-600'><li><em>National Education Board Scholarship</em></li></p>
                            <p className='ml-4 font-bold text-gray-600'><li>Ranked 25th in a graduating class of 210 students</li></p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 lg:mt-0'>
                        <img src="https://i.ibb.co/44CL3Gk/DCC-logo.png" width={170} alt="logo" />
                    </div>
                </div>
                <div className='my-20 lg:flex justify-between'>
                    <div className='md:flex justify-center'>
                        <div>
                            <h2 className='text-2xl font-bold underline text-gray-600'><em>Secondary School Certificate</em></h2>
                            <h2 className='text-xl font-bold text-gray-600'>Mokamtola High School</h2>
                            <h3 className='text-xl font-bold text-gray-600'>(Jan 2011 - Feb 2016)</h3>
                            <p className='font-bold text-gray-600'><em>GPA 5.00/5.00</em></p>
                            <p className='ml-4 font-bold text-gray-600'><li><em>National Education Board Scholarship</em></li></p>
                            <p className='ml-4 font-bold text-gray-600'><li>Ranked 25th in a graduating class of 210 students</li></p>
                        </div>
                    </div>
                    <div className='flex justify-center mt-8 lg:mt-0'>
                        <img src="https://i.ibb.co/s932CPr/school.png" width={170} alt="logo" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Academics;