import "./styles.scss";

const AppScreenshots = () => {
  return (
    <div className="screenshots" id="screenshots">
      <p className="screen-head">App Screenshots</p>
      <div className="screen-devider"></div>
      <p className="screen-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Quis ipsum
        suspendisse ultrices gravida.
      </p>
      <img src="screen-banner.png" className="screen-banner" alt="" />
      <div className="overview">
        <p>Take quick overview</p>
        <img src="overview.png" alt="" />
        <p>of this App</p>
      </div>
    </div>
  );
};

export default AppScreenshots;
