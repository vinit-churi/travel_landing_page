import "../styles/Section2.css";
import FeatureCards from "./FeatureCards";
const Section2 = () => {
  return (
    <div className="Section2">
      <div className="cards-container">
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
      </div>
      <div className="section2-background">
        <img src="/train.png" alt="" />
      </div>
    </div>
  );
};

export default Section2;
