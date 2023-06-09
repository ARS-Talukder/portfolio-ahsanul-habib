import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const menuItems = <>
        <li><Link to='/' className='font-bold text-white rounded-lg'><small><em>ABOUT ME</em></small></Link></li>
        <li><a href='/academics' className='font-bold text-white rounded-lg'><small><em>ACADEMICS</em></small></a></li>
        <li><a href='/research' className='font-bold text-white rounded-lg'><small><em>RESEARCH</em></small></a></li>
        <li><Link to='/experience' className='font-bold text-white rounded-lg'><small><em>EXPERIENCE</em></small></Link></li>
        <li><Link to='/blogs' className='font-bold text-white rounded-lg'><small><em>BLOGS</em></small></Link></li>
        <li><Link to='/contact' className='font-bold text-white rounded-lg'><small><em>CONTACT</em></small></Link></li>


    </>
    return (
        <div className="navbar text-neutral-content h-14" style={{ "backgroundColor": "#332e2b" }}>
            <div className="lg:navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-44 text-center" style={{ "backgroundColor": "#332e2b" }}>
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className="lg:ml-8">
                    <h2 className='lg:text-xl font-bold'>A.K.M AHSANUL HABIB</h2>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex lg:ml-16">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
        </div>
    );
};

export default Header;