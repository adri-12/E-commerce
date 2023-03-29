import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookSquare, faInstagramSquare, faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
    return ( 
        <footer>
            <div className="container">
            <a href="/"><h1>Logo</h1></a>
            <ul>
                <li><FontAwesomeIcon icon={faFacebookSquare}/></li>
                <li><FontAwesomeIcon icon={faTwitterSquare}/></li>
                <li><FontAwesomeIcon icon={faInstagramSquare}/></li>
            </ul>
            </div>
            <span>© 2023 Shop America</span>
        </footer>
     );
}
 
export default Footer;