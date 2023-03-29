import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const SaleBanner = ({ toggleBanner, setToggleBanner }: any) => {
    return ( 
        <div className={`banner ${toggleBanner ? 'close' : ''}`}>
            <h3>Spring Sale - up to 60% off with code: spring 
                <a href="/sale">SHOP NOW</a>
                </h3>
                <FontAwesomeIcon className="close-icon" icon={faX} onClick={() => setToggleBanner(!toggleBanner)} />
        </div>
     );
}
 
export default SaleBanner;