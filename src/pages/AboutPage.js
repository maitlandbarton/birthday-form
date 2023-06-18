import Deets from "../components/Deets";
import pearlBg from "../images/pearl.jpeg";

function AboutPage() {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${pearlBg})` }}>
      <div className="text-center p-5">
        <h1 className="font-primary text-6xl md:text-7xl lg:text-8xl glowing-font">
          PARTY DEETS :)
        </h1>
      </div>
      <Deets />
    </div>
  );
}

export default AboutPage;
