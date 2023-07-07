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
            <div className="flex flex-col items-center my-auto">
              <h1>Thank you for your response!</h1>
              <Link to="/">
                <button>back to party details</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Submitted;
