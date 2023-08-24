import "../styles/section1.css";
import Navbar from "./Navbar";
import ArticlesRow from "./ArticlesRow";
const Section1 = () => {
  return (
    <div className="Section1">
      <Navbar />
      <p className="heading-title-1">NEW AGE DESTINATION MANAGEMENT</p>
      <h1 className="heading-1">Take the world for a ride</h1>
      <div className="contact-us-icon">
        <img src="" alt="" />
      </div>
      <button className="contact-us-button">contact us</button>
      <div className="hero-group">
        <div className="article-preview">
          <h1 className="heading-2">Journey that cant be beat</h1>
          <p className="article-content-preview">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            inventore ea temporibus architecto quibusdam iste ex debitis animi
            magnam eum. Lorem ipsum dolor sit amet, consectetur adipisicing
            elit. Quibusdam et vitae, cum odio suscipit placeat voluptatum
            dolorum labore reprehenderit! Ducimus veniam porro accusamus?
            Dolorum exercitationem dicta, corporis cum temporibus molestiae.
          </p>
          <div className="article-options">
            <img className="bookmark-icon" src="" alt="" />
            <button className="read-more">Read more</button>
          </div>
        </div>
        <ArticlesRow />
      </div>
      <div className="blurred-bottom">
        <div className="blurred-bottom-inner"></div>
      </div>
      <div className="blurred-bottom-inner-second"></div>
    </div>
  );
};

export default Section1;
