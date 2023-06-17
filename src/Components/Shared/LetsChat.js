import React from 'react';
import ReactWhatsapp from 'react-whatsapp';

const LetsChat = () => {
    return (
        <div className='flex justify-end mb-1 sticky bottom-0 right-0'>
            <ReactWhatsapp className='border border-4 border-green-400 rounded-3xl hover:border-green-500' number="+880 1751 514293" message="Hello, Ahsanul Habib. I want to get in touch with you." style={{ backgroundColor: "#e0edce" }}>
                <img src="https://i.ibb.co/p67tz8w/Chat.png" width={80} alt="chat" />
            </ReactWhatsapp>
        </div>
    );
};

export default LetsChat;