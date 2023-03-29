import SaleBanner from "../components/SaleBanner";
import Header from "../components/Header";
import { useState } from "react";

const LandingPage = () => {
  const [toggleBanner, setToggleBanner] = useState(false);

    return ( 
        <>
      <SaleBanner toggleBanner={toggleBanner} setToggleBanner={setToggleBanner}/>
      <Header />
        </>
     );
}
 
export default LandingPage;