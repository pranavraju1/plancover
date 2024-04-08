import "./App.scss";
import AppScreenshots from "./component/AppScreenshots/AppScreenshots";
import Footer from "./component/Footer/Footer";
import Home from "./component/Home/Home";
import HowItWorks from "./component/HowItWorks/HowItWorks";
import NavigationBar from "./component/NavigationBar/NavigationBar";
import Pages from "./component/PagesandFeatures/Pages";
import Pricing from "./component/Pricing/Pricing";

const App = () => {
  return (
    <div>
      <NavigationBar />
      <Home />
      <Pages />
      <HowItWorks />
      <AppScreenshots />
      <Pricing />
      <Footer />
    </div>
  );
};

export default App;
