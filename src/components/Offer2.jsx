import { RiGuideLine } from "react-icons/ri";
import { BiHotel } from "react-icons/bi";
import { MdDinnerDining } from "react-icons/md";
import { MdOutlineDirectionsBoatFilled } from "react-icons/md";
import { FaRegSmileWink } from "react-icons/fa";


const Offer2 = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <h1 className="my-20 text-center text-4xl">Co organizuje</h1>
      <div className="flex flex-wrap items-center justify-center gap-8">

      <div className="flex flex-col items-center gap-2">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <RiGuideLine className="text-7xl text-blue-900" />
          </div>
          <p className="text-center font-light tracking-tighter">Wycieczki</p>
        </div>


        <div className="flex flex-col items-center gap-2">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <BiHotel className="text-7xl text-blue-500" />
          </div>
          <p className="text-center font-light tracking-tighter">Noclegi</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <MdDinnerDining className="text-7xl text-white" />
          </div>
          <p className="text-center font-light tracking-tighter">Obiady</p>
        </div>

        <div className="flex flex-col items-center gap-2">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <MdOutlineDirectionsBoatFilled className="text-7xl text-red-700" />
          </div>
          <p className="text-center font-light tracking-tighter">Rejsy sekwaną</p>
        </div>



        <div className="flex flex-col items-center gap-2">
          <div className="rounded-2xl border-4 border-neutral-800 p-4">
            <FaRegSmileWink className="text-7xl text-red-900" />
          </div>
          <p className="text-center font-light tracking-tighter">Bez stresu</p>
        </div>

      </div>
    </div>
  );
};

export default Offer2;
