import "./styles.scss";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <p className="footer-text1">Subscribe to our Newsletter</p>
        <div className="footer-devider"></div>
        <p className="footer-text2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et <br />
          dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.
        </p>
        <div className="footer-inputs">
          <input type="text" placeholder="Enter Yout Email..." />
          <button>Subscribe</button>
        </div>
        <div className="footer-contact">
          <div className="footer-contact-info">
            <p className="footer-contact-info-text1">Our Office</p>
            <p className="footer-contact-info-text2">
              3rd Floor, Estate House 200 North City, Atlantica SA 3000
            </p>
          </div>
          <div className="footer-contact-info">
            <p className="footer-contact-info-text1">Our Office</p>
            <p className="footer-contact-info-text2">
              3rd Floor, Estate House 200 North City, Atlantica SA 3000
            </p>
          </div>
          <div className="footer-contact-info">
            <div className="download-from">
              <p>Download App From</p>
              <img src="window-logo.png" alt="" />
            </div>
            <p className="footer-contact-info-text2">
              Follow Us On :{" "}
              <img src="socials.png" style={{ marginLeft: "10px" }} />
            </p>
          </div>
          <div className="footer-contact-info">
            <div className="download-from">
              <p>Download App From</p>
              <img src="apple-logo.png" alt="" />
            </div>
            <p className="footer-contact-info-text2">Support : 24/7</p>
          </div>
        </div>
      </div>
      <div className="copyrights">
        © Copyrights musicapp_Design All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
