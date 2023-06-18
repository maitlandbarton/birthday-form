import RSVPForm from "../components/RSVPForm";
import waterBg from "../images/pearl.jpeg";

function HomePage() {
  return (
    <div className="bg-repeat-x h-screen"
      style={{ backgroundImage: `url(${waterBg})` }}
    >
      <div className="text-center p-5">
        <h1 className="font-primary text-6xl md:text-7xl lg:text-8xl glowing-font">
          MATTIE TURNS 27
        </h1>
      </div>
      <RSVPForm />
    </div>
  );
}

export default HomePage;
