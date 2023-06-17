import React from 'react';

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <div className='h-8 flex justify-center items-center' style={{ backgroundColor: "#d9ddde" }}>
            <p className='text-gray-600'><small>© {year} by A.K.M Ahsanul Habib</small></p>
        </div>
    );
};

export default Footer;