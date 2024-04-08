import "./styles.scss";

const HowItWorks = () => {
  return (
    <div id="howitworks" className="howitworks">
      <img src="how-phone.png" alt="" className="how-phone" />
      <div className="how">
        <p className="how-head">How it's Works?</p>
        <div className="how-divider"></div>
        <p className="how-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod <br />
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="how-details">
          <div className="how-detail">
            <div className="how-item">
              <img src="home-tick.png" alt="" />
              <div className="how-item-texts">
                <p className="how-item-text1">Download For Free</p>
                <p className="how-item-text2">
                  Fully layered dolor sit amet, consectetur adipisicing elit.
                  Facere, nobis, id expedita dolores officiis laboriosam.
                </p>
              </div>
            </div>
            <div className="how-item">
              <img src="home-tick.png" alt="" />
              <div className="how-item-texts">
                <p className="how-item-text1">Select Membership</p>
                <p className="how-item-text2">
                  Fully layered dolor sit amet, consectetur adipisicing elit.
                  Facere, nobis, id expedita dolores officiis laboriosam.
                </p>
              </div>
            </div>
          </div>
          <div className="how-detail">
            <div className="how-item">
              <img src="home-tick.png" alt="" />
              <div className="how-item-texts">
                <p className="how-item-text1">Login Your Account</p>
                <p className="how-item-text2">
                  Fully layered dolor sit amet, consectetur adipisicing elit.
                  Facere, nobis, id expedita dolores officiis laboriosam.
                </p>
              </div>
            </div>
            <div className="how-item">
              <img src="home-tick.png" alt="" />
              <div className="how-item-texts">
                <p className="how-item-text1">Enjoy This App</p>
                <p className="how-item-text2">
                  Fully layered dolor sit amet, consectetur adipisicing elit.
                  Facere, nobis, id expedita dolores officiis laboriosam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
