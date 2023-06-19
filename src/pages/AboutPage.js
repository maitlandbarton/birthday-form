import Deets from "../components/Deets";
import pearlBg from "../images/pearl.jpeg";
import pearlVBg from "../images/pearl-v.jpeg";
import ImageBlock from "../components/reusables/ImageBlock";
import BoatImage from "../images/boat1.jpg"

function AboutPage() {
  return (
    <div className="flex flex-col">
      <div
        className="hidden lg:block bg-cover flex-grow pt-5 pb-10"
        style={{ backgroundImage: `url(${pearlBg})` }}
      >
        <div className="text-center p-5">
          <h1 className="font-primary text-6xl md:text-7xl lg:text-8xl glowing-font">
            PARTY DEETS :)
          </h1>
        </div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col border p-10">
            <ImageBlock image={BoatImage} />
          </div>
          <Deets />
          <div className="flex flex-col border p-10">
            <ImageBlock />
          </div>
        </div>
      </div>
      <div
        className="sm:block lg:hidden bg-cover pt-5 pb-10"
        style={{ backgroundImage: `url(${pearlVBg})` }}
      >
        <div className="text-center p-5">
          <h1 className="font-primary text-6xl md:text-7xl lg:text-8xl glowing-font">
            PARTY DEETS :)
          </h1>
        </div>
        <Deets />
      </div>
    </div>
  );
}

export default AboutPage;
