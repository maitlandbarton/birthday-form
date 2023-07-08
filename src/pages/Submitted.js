import pearlBg from "../images/pearl.jpeg";
import pearlVBg from "../images/pearl-v.jpeg";
import { Link } from "react-router-dom";

function Submitted() {
  return (
    <div>
      <div
        id="big-screen"
        className="lg:block bg-cover pt-5 pb-10 min-h-screen border relative"
        style={{ backgroundImage: `url(${pearlBg})` }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-3/4 border lg:w-1/2 m-auto p-5 rounded-md bg-purple h-3/4 ring-4 ring-aqua shadow-xl shadow-ltPink flex flex-col items-center overflow-scroll">
            <div className="flex flex-col items-center my-auto text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl text-mauve glowing-font mb-10">Thank you for your response!</h1>
              <Link to="/">
                <button className="bg-aqua shadow-md shadow-white hover:bg-ltPink text-xl text-purple hover:text-rose hover:shadow-md hover:shadow-rose px-4 py-2 rounded-lg">back to party details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
