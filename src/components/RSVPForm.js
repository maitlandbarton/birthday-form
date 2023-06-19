import { Link } from "react-router-dom";

function RSVPForm() {
  return (
    <div className="w-3/4 lg:w-1/2 mx-auto p-5 rounded-md bg-purple h-3/4 ring-4 ring-aqua shadow-xl shadow-ltPink flex flex-col items-center overflow-scroll">
      <div className="pb-2 text-dkMauve">
        <Link to="/about">
        <p className="hover:text-ltPink">Party deets here!</p>
        </Link>
      </div>
      <form className="my-auto">
        <div id="form-item-1" className="px-5 pb-5 text-ltPink">
          <label className="pr-5 text-xl lg:text-3xl" for="name">
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            className="rounded-md leading-loose px-3 text-purple placeholder-rose focus:outline-aqua"
            placeholder="first & last"
          />
        </div>

        <div id="form-item-2" className="p-5 text-ltPink">
          <p className="text-lg lg:text-2xl">Will you be attending ?</p>
          <div className="pl-4 text-md lg:text-xl accent-aqua">
            <input type="radio" id="RSVPyes" name="attending" value="yes"/>
            <label for="RSVPyes" className="px-3">Yes 🤍</label>
            <br />
            <input type="radio" id="RSVPno" name="attending" value="no" />
            <label for="RSVPno" className="px-3">No :'( </label>
          </div>
        </div>

        <div id="form-item-3" className="p-5 text-ltPink">
          <p className="text-lg lg:text-2xl">Do you need a +1 ?*</p>
          <div className="pl-4 text-md lg:text-xl accent-aqua">
            <input type="radio" id="RSVPyes" name="plusOne" value="yes"/>
            <label for="RSVPyes" className="px-3">Yes</label>
            <br />
            <input type="radio" id="RSVPno" name="plusOne" value="no" />
            <label for="RSVPno" className="px-3">No</label>
          </div>
          <p className="text-ltPink">
            *please only bring a plus one if you have a friend visiting!
          </p>
        </div>

        <div id="form-item-4" className="p-5 text-ltPink">
          <p className="text-lg lg:text-2xl">Do you have a cooler ?</p>
          <div className="pl-4 text-md lg:text-xl accent-aqua">
            <input type="radio" id="yesCooler" name="cooler" value="yes" />
            <label for="yesCooler" className="px-3">Yes, I can bring it!</label>
            <br />
            <input type="radio" id="noCooler" name="cooler" value="no" />
            <label for="noCooler" className="px-3">No, but I can bring ice! 🧊</label>
          </div>
        </div>

        <div id="form-button" className="w-full flex items-center flex-col mt-2
        ">
          <button className="bg-aqua shadow-md shadow-white hover:bg-ltPink text-xl text-purple hover:text-rose hover:shadow-md hover:shadow-rose px-4 py-2 rounded-lg">
            <input type="submit" value="Submit" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default RSVPForm;
