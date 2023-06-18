function RSVPForm() {
  return (
    <div className="w-1/2 mx-auto p-5 rounded-md bg-purple lg:h-3/4 ring-4 ring-aqua shadow-xl shadow-ltPink flex flex-col items-center">
      <form className="my-auto">
        <div id="form-item-1" className="px-5 pb-5 text-ltPink">
          <label className="pr-5 text-3xl" for="name">
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            className="rounded-md leading-loose px-3 text-purple placeholder-rose focus:outline-aqua"
            placeholder="first & last name"
          />
        </div>

        <div id="form-item-2" className="p-5 text-ltPink">
          <p className="text-2xl">Will you be attending?</p>
          <div className="pl-4 text-xl accent-aqua">
            <input type="radio" id="RSVPyes" name="attending" value="yes"/>
            <label for="RSVPyes" className="px-3">Yes 💜</label>
            <br />
            <input type="radio" id="RSVPno" name="attending" value="no" />
            <label for="RSVPno" className="px-3">No 💔</label>
          </div>
        </div>

        <div id="form-item-3" className="p-5 text-ltPink">
          <p className="text-2xl">Do you need a +1?*</p>
          <div className="pl-4 text-xl accent-aqua">
            <input type="radio" id="RSVPyes" name="plusOne" value="yes"/>
            <label for="RSVPyes" className="px-3">Yes</label>
            <br />
            <input type="radio" id="RSVPno" name="plusOne" value="no" />
            <label for="RSVPno" className="px-3">No</label>
          </div>
          <p className="text-ltPink">
            *please only plus ones if you have a friend visiting!
          </p>
        </div>

        <div id="form-item-4" className="p-5 text-ltPink">
          <p className="text-2xl">Do you have a cooler?</p>
          <div className="pl-4 text-xl accent-aqua">
            <input type="radio" id="yesCooler" name="cooler" value="yes" />
            <label for="yesCooler" className="px-3">Yes, I can bring it!</label>
            <br />
            <input type="radio" id="noCooler" name="cooler" value="no" />
            <label for="noCooler" className="px-3">No, but I can bring ice!</label>
          </div>
        </div>

        <div id="form-button" className="w-full flex items-center flex-col mt-5">
          <button className="bg-aqua shadow-md shadow-white hover:bg-ltPink font-primary text-purple hover:text-rose hover:shadow-md hover:shadow-rose px-4 py-2 rounded-lg">
            <input type="submit" value="Submit" />
          </button>
        </div>
      </form>
    </div>
  );
}

export default RSVPForm;
