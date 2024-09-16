import { HiOutlineMail } from 'react-icons/hi';
import contact from "../assets/contact.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdSend } from "react-icons/md";


const Contact = () => {
  return (
    <div className="relative w-full pb-20 pt-12 flex justify-center">
      {/* Background Div */}
      <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(105%_105%_at_50%_10%,#fff_20%,#231b30_100%)]" />
      
      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-[1400px] w-full p-8 bg-zinc-100 rounded-xl">
        {/* Contact Section with Image */}
        <div className="lg:w-1/2 p-4 flex flex-col items-center lg:items-start">
          <h1 className="my-5 text-center text-5xl font-bold text-blue-950 lg:text-left">Kontakt</h1>
          {/* Image */}
          <img 
              src={contact} 
              alt="Contact" 
              className="w-80 h-80 rounded-full object-cover mb-6" 
          />
          <p className="pb-2 text-center text-2xl text-gray-600 leading-relaxed lg:text-left">
              Joanna Wróblewski
          </p>
          <p className="pb-2 text-center text-xl font-light text-gray-600 leading-relaxed lg:text-left">
              Licencjonowany przewodnik po Paryżu oraz Francji <br />
          </p>


          <div className="flex items-center space-x-2 py-2">
              <IoMailOutline className="text-4xl text-red-900" />
              <span className="text-xl font-light text-gray-600"><a href="mailto:j.wrob7@gmail.com" className="text-cyan-700 underline">j.wrob7@gmail.com</a></span>
          </div>
          
          <div className="flex items-center space-x-2 py-2">
              <FaWhatsapp className="text-4xl text-green-900" />
              <span className="text-xl font-light text-gray-600"><a href="https://api.whatsapp.com/send?phone=%2B33670938958&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFVGABleHRuA2FlbQIxMAABHYsAj7OKiAlAsc-vbx_tLbhDAVNxSLR40lqcAce4QCpzs_VxS0PVjoN-PQ_aem_H6i-DORP-Va7Y4nzYAOBLg" className="text-cyan-700 underline">+33 670 938 958</a></span>
          </div>
          <div className="flex items-center space-x-2 py-2">
              <FaFacebookMessenger className="text-4xl text-blue-900" />
              <span className="text-xl font-light text-gray-600"><a href="https://www.facebook.com/joannawroblewskiparyz" className="text-cyan-700 underline">napisz na messengerze</a></span>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 p-4 flex flex-col justify-between">
       
        <p className="pt-10 pb-6 text-center text-2xl text-gray-600 leading-relaxed lg:text-left">
              Napisz do mnie kiedy przyjeżdzasz
          </p>
            <form method='POST' action="https://getform.io/f/bfb3b6ca-9c73-44ce-a268-6241faa780b1" className='flex flex-col h-full'>
                <input className='p-3 mb-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black' type="text" placeholder='Twoje imię' name='name' />
                <input className='p-3 mb-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black' type="email" placeholder='Email' name='email' />
                <textarea className='p-3 mb-6 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black flex-grow' name="message" placeholder='Wiadomość' rows="8"></textarea>
                <button className='bg-gradient-to-r from-pink-700 via-purple-600 to-blue-500 hover:bg-cyan-700 duration-300 text-white font-bold py-4 px-6 rounded-full mx-auto flex items-center justify-center'>
                Zapraszam do współpracy <MdSend className='ml-3 text-2xl' />
                </button>
            </form>
        </div>

      </div>
    </div>
  );
}

export default Contact;
