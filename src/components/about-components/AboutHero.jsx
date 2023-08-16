
import "../../styles/about-styles/about-hero.scss";
import aboutPhoto from "../../assets/about-photo-1.jpg";

function AboutHero() {
    return (
      <div className="greetings-about">
        <div className="greetings-about-container">
          <div className="text-column">
            <h2 className="subtitle-about">So nice to meet you!</h2>
            <p className="paragraph-about">
              While being the owner of an adorable poodle, passionately detailed
              photographer and your biggest cheerleader you will come to know, I
              have quite the eventful life. I currently work in the ER and tend to
              patients in the hospital while I try and figure out my budget to
              travel the world. However, my days are usually spent either
              adventuring out with my quirky family, pampering my toy poodle
              Berkley, or out editing photos with a glass of wine on the porch.
            </p>
          </div>
        </div>
        <div className="image-column">
          <div className="about-photo">
            <img src={aboutPhoto} alt="About Me" />
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutHero;