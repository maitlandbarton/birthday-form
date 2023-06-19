import Deets from "../components/Deets";
import pearlBg from "../images/pearl.jpeg";
import pearlVBg from "../images/pearl-v.jpeg";
import ImageBlock from "../components/reusables/ImageBlock";
import BoatImage from "../images/boat1.jpg";
import MyPhoto from "../images/me.JPG";

function AboutPage() {
  return (
    <div className="flex flex-col">
      <div
        id="big-screen"
        className="hidden lg:block bg-cover flex-grow pt-5 pb-10"
        style={{ backgroundImage: `url(${pearlBg})` }}
      >
        <div className="text-center p-5">
          <h1 className="font-primary text-6xl hidden md:block md:text-7xl lg:text-8xl glowing-font">
            mattie turns 27
          </h1>
          <div className="sm:block md:hidden">
            <h1 className="font-primary text-6xl">mattie</h1>
            <br/>
            <h1 className="font-primary text-6xl">turns 27</h1>
          </div>
        </div>
        <div id="container" className="flex justify-center items-center">
          <div id="image1" className="flex flex-col p-10">
            <ImageBlock image={BoatImage} height={64} />
          </div>
          <Deets />
          <div id="image2" className="flex flex-col p-10">
            <ImageBlock image={MyPhoto} height={96} />
          </div>
        </div>
      </div>
      <div
        id="small-screen"
        className="sm:block lg:hidden bg-cover pt-5 pb-10"
        style={{ backgroundImage: `url(${pearlVBg})` }}
      >
        <div className="text-center p-5">
          <h1 className="font-primary text-6xl md:text-7xl lg:text-8xl glowing-font">
            mattie turns 27
          </h1>
        </div>
        <div id="container" className="flex flex-col justify-center items-center">
          <div id="image1" className="flex flex-col px-10 pb-5">
            <ImageBlock image={BoatImage} height={64} />
          </div>
          <Deets />
          <div id="image2" className="flex flex-col px-10 py-5">
            <ImageBlock image={MyPhoto} height={96} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
