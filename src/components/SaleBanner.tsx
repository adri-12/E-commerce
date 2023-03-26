import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SaleBanner = () => {
    return ( 
        <div className="banner">
            <h3>Spring Sale - up to 60% off with code: spring 
                <a href="#">SHOP NOW</a>
                </h3>
                <FontAwesomeIcon className="close-icon" icon={faX} />
        </div>
     );
}
 
export default SaleBanner;