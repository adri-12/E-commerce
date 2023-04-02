import SaleBanner from "../components/SaleBanner";
import Header from "../components/Header";
import { useState } from "react";
import FourGridCategory from "../components/FourGridCategory";
import ItemsSlider from "../components/ItemsSlider";

const LandingPage = () => {
  const [toggleBanner, setToggleBanner] = useState(false);

    return ( 
        <>
      <SaleBanner toggleBanner={toggleBanner} setToggleBanner={setToggleBanner}/>
      <Header />
      <div className="body-container">
      <FourGridCategory />
      <ItemsSlider />
      </div>
        </>
     );
}
 
export default LandingPage;