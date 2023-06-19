import RSVPForm from "../components/RSVPForm";
import pearlBg from "../images/pearl.jpeg";
import pearlVBg from "../images/pearl-v.jpeg"

function HomePage() {
  return (
    <div>
      <div
        className="hidden pt-5 pb-10 lg:block bg-cover"
        style={{ backgroundImage: `url(${pearlBg})` }}
      >
        <div className="text-center p-5">
          <h1 className="font-primary text-6xl md:text-7xl lg:text-8xl glowing-font">
            MATTIE TURNS 27
          </h1>
        </div>
        <RSVPForm />
      </div>
      <div className="sm:block lg:hidden bg-cover pt-5 pb-10"
      style={{ backgroundImage: `url(${pearlVBg})` }}>
        <div className="text-center p-5">
          <h1 className="font-primary text-6xl md:text-7xl lg:text-8xl glowing-font">
            MATTIE TURNS 27
          </h1>
        </div>
        <RSVPForm />
      </div>
    </div>
  );
}

export default HomePage;
