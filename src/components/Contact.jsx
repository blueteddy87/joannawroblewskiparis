import { HiOutlineMail } from 'react-icons/hi'

const Contact = () => {
  return (
    <div name='contact' className="w-full border-b border-neutral-900 pb-20 pt-12 bg-gray-100 flex justify-center">
      <div className="flex flex-col lg:flex-row max-w-[1200px] w-full p-8">
        {/* Sekcja z danymi kontaktowymi */}
        <div className="lg:w-1/2 p-4">
          <h1 className="my-10 text-center text-5xl font-bold text-blue-950 lg:text-left">Kontakt</h1>
          <p className="pb-2 text-center text-2xl text-gray-600 leading-relaxed lg:text-left">
            Joanna Wróblewski
          </p>
          <p className="pb-2 text-center text-xl font-light text-gray-600 leading-relaxed lg:text-left">
            Licencjonowany przewodnik po Paryżu oraz Francji <br />
          </p>
          <p className="pb-2 text-center text-xl font-light text-gray-600 leading-relaxed lg:text-left">
            <a href="mailto:j.wrob7@gmail.com" className="text-cyan-700 underline">j.wrob7@gmail.com</a> <br />
            +33 670 938 958
          </p>
        </div>

        {/* Formularz */}
        <div className="lg:w-1/2 p-4">
          <form method='POST' action="https://getform.io/f/bfb3b6ca-9c73-44ce-a268-6241faa780b1" className='flex flex-col'>
            <input className='p-3 mb-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400' type="text" placeholder='Imię i nazwisko' name='name' />
            <input className='p-3 mb-4 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400' type="email" placeholder='Email' name='email' />
            <textarea className='p-3 mb-6 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-cyan-400' name="message" placeholder='Wiadomość' rows="8"></textarea>
            <button className='bg-cyan-400 hover:bg-cyan-700 transition-colors duration-300 text-white font-bold py-4 px-6 rounded-full mx-auto flex items-center justify-center'>
              Zapraszam do współpracy <HiOutlineMail className='ml-3 text-2xl' />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
