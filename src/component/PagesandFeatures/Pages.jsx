import "./styles.scss";
const Pages = () => {
  return (
    <div className="pages">
      <div className="page" id="page">
        <div className="page-item">
          <div className="overlay"></div>
          <img src="pages-logo1.png" alt="" />
          <p className="page-item-head">8,756+</p>
          <p className="page-item-text">Users</p>
        </div>
        <div className="page-item">
          <div className="overlay"></div>
          <img src="pages-logo2.png" alt="" />
          <p className="page-item-head">5,500+</p>
          <p className="page-item-text">Downloads</p>
        </div>
        <div className="page-item">
          <div className="overlay"></div>
          <img src="pages-logo3.png" alt="" />
          <p className="page-item-head">3,650+</p>
          <p className="page-item-text">Reviews</p>
        </div>
        <div className="page-item">
          <div className="overlay"></div>
          <img src="pages-logo4.png" alt="" />
          <p className="page-item-head">6,058+</p>
          <p className="page-item-text">Likes</p>
        </div>
      </div>
      <div className="features" id="features">
        <p className="features-text1">Awesome Apps Features</p>
        <div className="features-divider"></div>
        <p className="features-text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore <br />
          et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>
        <div className="feature">
          <div className="feature-item">
            <img src="pages-logo5.png" alt="" />
            <p className="feature-item-text1">CREATIVE DESIGN</p>
            <p className="feature-item-text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="feature-item">
            <img src="pages-logo6.png" alt="" />
            <p className="feature-item-text1" style={{ color: "#15293b" }}>
              CREATIVE DESIGN
            </p>
            <p className="feature-item-text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="feature-item">
            <img src="pages-logo7.png" alt="" />
            <p className="feature-item-text1">CREATIVE DESIGN</p>
            <p className="feature-item-text2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pages;
