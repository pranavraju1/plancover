import "./styles.scss";

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-texts">
        <div className="home-text">
          <div className="home-text1">Make your day colorful with</div>
          <div className="home-text2">This Application</div>
          <div className="home-text3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
            <br />
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </div>
          <div className="home-inputs">
            <input type="text" name="email" placeholder="Enter Your Email" />
            <button>Free Trail</button>
          </div>
        </div>
      </div>
      <div className="home-phone">
        <img src="banner-phone.png" alt="" />
      </div>
    </div>
  );
};

export default Home;
