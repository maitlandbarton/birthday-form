import { Link, useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import { useState, useRef } from "react";


const RSVPForm = () => {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  const form = useRef();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [attending, setAttending] = useState("");
  const [plusOne, setPlusOne] = useState("");
  const [cooler, setCooler] = useState("");
  const [loading, isLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (!selectedOption) {
      alert('Please indicate if you are attending or not :)');
      return;
    }

    setName("");
    setAttending("");
    setPlusOne("");
    setCooler("");

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
				setName('')
				setAttending('')
        setPlusOne('')
        setCooler('')
        alert("RSVP submitted successfully!")
				isLoading(false);
      },
      (error) => {
        console.log(error.text);
				isLoading(false);
      }
    );

    navigate("/submitted");
  };

  return (
    <div className="w-3/4 lg:w-1/2 mx-auto p-5 rounded-md bg-purple h-3/4 ring-4 ring-aqua shadow-xl shadow-ltPink flex flex-col items-center overflow-scroll">
      <div className="pb-2 text-dkMauve">
        <Link to="/">
          <p className="hover:text-ltPink underline">back to party deets</p>
        </Link>
      </div>
      <form ref={form} onSubmit={sendEmail} className="my-auto">
        <div id="form-item-1" className="px-5 pb-5 text-ltPink text-center">
          <label className="pr-5 text-xl lg:text-3xl" htmlFor="name">
            Full Name:
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="rounded-md leading-loose px-3 text-purple placeholder-rose focus:outline-aqua"
            placeholder="first & last"
            required
          />
        </div>

        <div id="form-item-2" className="p-5 text-ltPink">
          <p className="text-lg lg:text-2xl">Will you be attending ?</p>
          <div className="pl-4 text-md lg:text-xl accent-aqua">
            <input type="radio" id="RSVPyes" name="attending" value="yes" checked={selectedOption === 'yes'} onChange={handleChange}/>
            <label htmlFor="RSVPyes" className="px-3">
              Yes 🤍
            </label>
            <br />
            <input type="radio" id="RSVPno" name="attending" value="no" checked={selectedOption === 'no'} onChange={handleChange}/>
            <label htmlFor="RSVPno" className="px-3">
              No :'({" "}
            </label>
          </div>
        </div>

        <div id="form-item-3" className="p-5 text-ltPink">
          <p className="text-lg lg:text-2xl">Do you need a +1 ?*</p>
          <div className="pl-4 text-md lg:text-xl accent-aqua">
            <input type="radio" id="RSVPyes" name="plusOne" value="yes" />
            <label htmlFor="RSVPyes" className="px-3">
              Yes
            </label>
            <br />
            <input type="radio" id="RSVPno" name="plusOne" value="no" />
            <label htmlFor="RSVPno" className="px-3">
              No
            </label>
          </div>
          <p className="text-mauve">
            *plus ones only for partners or friends visiting!
          </p>
        </div>

        <div id="form-item-4" className="p-5 text-ltPink">
          <p className="text-lg lg:text-2xl">Do you have a cooler ?</p>
          <div className="pl-4 text-md lg:text-xl accent-aqua">
            <input type="radio" id="yesCooler" name="cooler" value="yes" />
            <label htmlFor="yesCooler" className="pl-3">
              Yes, I can bring it!
            </label>
            <br />
            <input type="radio" id="noCooler" name="cooler" value="no" />
            <label htmlFor="noCooler" name="cooler "className="pl-3">
              No, but I'll  bring ice! 🧊
            </label>
          </div>
        </div>

        <div
          id="form-button"
          className="w-full flex items-center flex-col mt-2
        "
        >
          <button className="bg-aqua shadow-md shadow-white hover:bg-ltPink text-xl text-purple hover:text-rose hover:shadow-md hover:shadow-rose px-4 py-2 rounded-lg">
            <input type="submit" value="Submit" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default RSVPForm;
