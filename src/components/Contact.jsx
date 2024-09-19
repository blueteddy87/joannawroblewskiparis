import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import contact from "../assets/contact.jpg";
import { FaWhatsapp } from "react-icons/fa";
import { IoMailOutline } from "react-icons/io5";
import { FaFacebookMessenger } from "react-icons/fa";
import { MdSend } from "react-icons/md";

const Contact = () => {
  const [state, handleSubmit] = useForm("mqazoneg"); // Replace with your Formspree form ID
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [messageSent, setMessageSent] = useState(false); // State to control form visibility after submission

  // Using useEffect to control modal visibility when the form is successfully submitted
  useEffect(() => {
    if (state.succeeded) {
      setShowModal(true);
    }
  }, [state.succeeded]);

  const closeModal = () => {
    setShowModal(false);
    setMessageSent(true); // Set to true to hide the form and show the success message
  };

  return (
    <div className="relative w-full pb-20 pt-24 flex justify-center">
      {/* Background Div */}
      {/* <div className="absolute inset-0 -z-10 bg-white [background:radial-gradient(105%_105%_at_50%_10%,#fff_20%,#231b30_100%)]" /> */}
      <div className="" />

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row max-w-[1400px] w-full p-8 bg-zinc-100 rounded-xl">
        {/* Contact Section with Image */}
        <div
          id="contact"
          className="lg:w-1/2 p-4 flex flex-col items-center lg:items-start"
        >
          <h1 className="my-5 text-center text-5xl font-bold text-blue-950 lg:text-left">
            Kontakt
          </h1>
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
            <span className="text-xl font-light text-gray-600">
              <a
                href="mailto:j.wrob7@gmail.com"
                className="text-cyan-700 underline"
              >
                j.wrob7@gmail.com
              </a>
            </span>
          </div>

          <div className="flex items-center space-x-2 py-2">
            <FaWhatsapp className="text-4xl text-green-900" />
            <span className="text-xl font-light text-gray-600">
              <a
                href="https://api.whatsapp.com/send?phone=%2B33670938958&app=facebook&entry_point=page_cta&fbclid=IwY2xjawFVGABleHRuA2FlbQIxMAABHYsAj7OKiAlAsc-vbx_tLbhDAVNxSLR40lqcAce4QCpzs_VxS0PVjoN-PQ_aem_H6i-DORP-Va7Y4nzYAOBLg"
                className="text-cyan-700 underline"
              >
                +33 670 938 958
              </a>
            </span>
          </div>
          <div className="flex items-center space-x-2 py-2">
            <FaFacebookMessenger className="text-4xl text-blue-900" />
            <span className="text-xl font-light text-gray-600">
              <a
                href="https://www.facebook.com/joannawroblewskiparyz"
                className="text-cyan-700 underline"
              >
                napisz na messengerze
              </a>
            </span>
          </div>
        </div>

        {/* Form Section */}
        <div className="lg:w-1/2 p-4 flex flex-col justify-between">
          {!messageSent ? (
            <>
              <p className="pt-10 pb-6 text-center text-2xl text-gray-600 leading-relaxed lg:text-left">
                Napisz do mnie kiedy przyjeżdzasz
              </p>

              <form
                id="contact-form"
                onSubmit={handleSubmit}
                className="flex flex-col h-full"
              >
                <input
                  className="p-3 mb-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black"
                  type="text"
                  placeholder="Twoje imię"
                  name="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />
                <input
                  className="p-3 mb-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black"
                  type="email"
                  placeholder="Email"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  className="p-3 mb-6 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black flex-grow"
                  name="message"
                  placeholder="Wiadomość"
                  rows="8"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button
                  className="bg-gradient-to-r from-pink-700 via-purple-600 to-blue-500 hover:bg-cyan-700 duration-300 text-white font-bold py-4 px-6 rounded-full mx-auto flex items-center justify-center"
                  type="submit"
                  disabled={state.submitting}
                >
                  Wyślij <MdSend className="ml-3 text-2xl" />
                </button>
              </form>
            </>
          ) : (
            <div className="flex flex-col justify-center items-center h-full">
              <p className="text-center text-2xl font-semibold text-blue-950 ">
                Twoja wiadomość została wysłana!
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-20 max-w-xl text-center shadow-lg">
            <h2 className="text-4xl font-bold text-blue-950 mb-4">
              Dziękuję za wiadomość!
            </h2>
            <p className="text-gray-900">Wkrótce do Ciebie odpiszę</p>
            <button
              className="mt-6 bg-blue-950 text-white py-2 px-4 rounded-md hover:bg-blue-900"
              onClick={closeModal}
            >
              Zamknij
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
