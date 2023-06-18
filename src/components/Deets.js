import { Link } from "react-router-dom";

function Deets() {
  return (
    <div className="w-3/4 lg:w-1/2 mx-auto p-5 rounded-md bg-purple ring-4 ring-aqua shadow-xl shadow-ltPink flex flex-col items-center overflow-scroll">
      <div className="py-5 text-center text-ltPink text-xl">
        <h2 className="font-primary text-3xl glowing-font-2">When?</h2>
        <p>Sunday, 30 July</p>
        <p>Meet at: <span className="underline">11:45am !!</span></p>
        <p><span>Depart at: </span>12:00 sharp</p>
        <p>Return at: 20:00</p>
      </div>

      <div className="py-5 text-center text-ltPink text-xl">
        <h2 className="font-primary text-3xl glowing-font-2">Where?</h2>
        <Link to="https://www.google.com/maps/place/Lindenstra%C3%9Fe+27,+12555+Berlin/@52.4536661,13.5652145,17z/data=!3m1!4b1!4m6!3m5!1s0x47a84866a83cb09b:0x1cd0c51d2d5f58ee!8m2!3d52.4536629!4d13.5677894!16s%2Fg%2F11crshsn42?entry=ttu" className="hover:text-mauve underline">
        <p>Lindenstraße 27, 12555</p>
        </Link>
        <p>Company: ALS Bootsverleih</p>
      </div>

      <div className="py-5 text-center text-ltPink text-lg">
        <h2 className="font-primary text-3xl glowing-font-2">How much?</h2>
        <p className="text-xl">33€ per person</p>
        <p className="text-sm">(we'll have a top deck & a slide so it's worth it 😛)</p>
        <p>PayPal/N26: maitlandbarton@gmail.com</p>
        <p>IBAN: DE24 1001 1001 2629 9937 50</p>
      </div>

      <div id="form-button" className="w-full flex items-center flex-col mt-5">
        <Link to="/">
          <button className="bg-aqua shadow-md shadow-white hover:bg-ltPink text-xl text-purple hover:text-rose hover:shadow-md hover:shadow-rose px-4 py-2 rounded-lg">
            Fill out the form
          </button>
          </Link>
        </div>
    </div>
  );
}

export default Deets;
