import React from 'react';
import { FaFacebook, FaResearchgate } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const About = () => {
    return (
        <div className='py-4 px-6 lg:px-16'>
            <section className='flex justify-center'>
                <div className="avatar">
                    <div className="w-48 lg:w-56 rounded-full">
                        <img src="https://i.ibb.co/WvPDCf5/My-photo.jpg" alt='profile' />
                    </div>
                </div>
            </section>
            <section>
                {/* ------------------Header--------------- */}
                <div>
                    <h1 className='text-2xl my-2 lg:my-0 lg:text-3xl font-bold text-center'>A.K.M AHSANUL HABIB</h1>
                    <h2 className='text-xl my-2 lg:my-0 lg:text-2xl text-center text-orange-700 my-1'>Bsc student at Rajshahi University of Engineering & Technology</h2>
                    <h2 className='text-xl my-2 lg:my-0 lg:text-2xl text-center text-orange-800'>
                        Arctic Oceanography | Marine Ecology | Satellite Altimetry | Material Engineer
                    </h2>

                </div>

                {/* -----------------Connect--------------- */}
                <div className='flex justify-center items-center h-12 mt-4'>
                    <p className='mx-4'>
                        <a href="https://www.facebook.com/ahsanulhabib.soron" target="_blank" rel="noreferrer">
                            <span className='text-5xl mx-4' style={{ "color": "#0878e4", "width": "auto" }}>
                                <FaFacebook></FaFacebook>
                            </span></a>
                    </p>
                    <p className='mx-4'>
                        <a href="https://www.linkedin.com/in/a-k-m-ahsanul-habib-368455214/" target="_blank" rel="noreferrer">
                            <span className='text-6xl' style={{ "color": "#0a66c2" }}>
                                <TiSocialLinkedinCircular />
                            </span>
                        </a>
                    </p>
                    <p className='mx-4'>
                        <a href="https://www.researchgate.net/profile/Ahsanul-Habib-4" target="_blank" rel="noreferrer">
                            <span className='text-6xl' style={{ "color": "black" }}>
                                <FaResearchgate />
                            </span>
                        </a>
                    </p>
                </div>

                {/* -----------------Details--------------- */}
                <div>
                    <p className='text-justify text-gray-600 font-bold my-4'>I am very much interested in learning new
                        skills. Research is my passion. I want to be
                        researcher in future. I can stick with a
                        particular task for a long time until a result
                        come from it. This is one of my special
                        virtue which help me in my research a lot.
                        I am also a hardworking person and like
                        to finish the task in time. Another good
                        skill of mine is always active. I can reply to
                        any message within short time. I like to
                        read research papers which enlighten me
                        with new research information. I not only
                        read the papers but also sort out and
                        store demandable information from it.
                    </p>
                    <p className='text-justify text-gray-600 font-bold my-4'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus corporis porro commodi illo! Sit magnam dolore laborum hic assumenda eligendi labore suscipit ullam aut amet iusto obcaecati culpa, incidunt in tempora. Et voluptas, asperiores ipsa porro nam nemo voluptate tempore ullam nesciunt! Accusantium dolore, nobis ut minus veritatis, numquam labore nulla fuga necessitatibus tempora fugit? Non exercitationem nulla reiciendis beatae quaerat pariatur? Atque praesentium illo libero facere reiciendis dolor nihil!
                    </p>
                    <p className='text-justify text-gray-600 font-bold my-4'>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus corporis porro commodi illo! Sit magnam dolore laborum hic assumenda eligendi labore suscipit ullam aut amet iusto obcaecati culpa, incidunt in tempora. Et voluptas, asperiores ipsa porro nam nemo voluptate tempore ullam nesciunt! Accusantium dolore, nobis ut minus veritatis, numquam labore nulla fuga necessitatibus tempora fugit? Non exercitationem nulla reiciendis beatae quaerat pariatur? Atque praesentium illo libero facere reiciendis dolor nihil!
                    </p>
                </div>
            </section>
            {/* ------------------Header--------------- */}
            <section className='my-16'>
                <h1 className='text-gray-600 text-3xl text-center font-bold'>Skills</h1>
                <div className='flex justify-center'>
                    <div className='w-11/12 h-0.5 rounded-xl bg-gray-600'></div>
                </div>
                <div className='mt-4 flex justify-center'>
                    <div className='lg:w-1/4'>
                        <li className='text-xl font-bold text-gray-600'>MS-Office</li>
                        <li className='text-xl font-bold text-gray-600'>Mendeley Citation Tool</li>
                        <li className='text-xl font-bold text-gray-600'>Google Workspace</li>
                    </div>
                </div>
            </section>

            {/* ------------------Resume--------------- */}
            <section className='my-16'>
                <h1 className='text-gray-600 text-3xl text-center font-bold'>My Resume</h1>
                <div className='flex justify-center'>
                    <div className='w-11/12 h-0.5 rounded-xl bg-gray-600'></div>
                </div>
                <div className='flex justify-center mt-4'>
                    <a href="https://drive.google.com/file/d/12VPXLkOouBr2Bdsvrg0qwjsW1Bb0zAiS/view?fbclid=IwAR0TU9-vjyJaWsl0mhcd2Hw_DYxX_RVU7rDS9lGN9_QYv4TfORjjP8ylbpA" target='_blank' rel="noreferrer"><img src="https://i.ibb.co/fkQ1R2p/pdf.png" width={100} alt="logo" /></a>
                </div>
                <p className='text-center text-gray-600 hover:text-gray-500'><a href="https://drive.google.com/file/d/12VPXLkOouBr2Bdsvrg0qwjsW1Bb0zAiS/view?fbclid=IwAR0TU9-vjyJaWsl0mhcd2Hw_DYxX_RVU7rDS9lGN9_QYv4TfORjjP8ylbpA" target='_blank' rel="noreferrer">AkmAhsanulHabib.pdf</a></p>
            </section>
        </div>
    );
};

export default About;