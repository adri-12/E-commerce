import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return ( 
        <footer>
            <div className="container">
            <img className="logo" src=".\logo512.png" alt="logo" />
            <ul>
                <li><FontAwesomeIcon icon={faFacebookSquare}/></li>
                <li><FontAwesomeIcon icon={faTwitterSquare}/></li>
                <li><FontAwesomeIcon icon={faInstagramSquare}/></li>
            </ul>
            </div>
            <span>Copyright</span>
        </footer>
     );
}
 
export default Footer;