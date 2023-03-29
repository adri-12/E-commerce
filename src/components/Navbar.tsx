import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faUser, faHeart, faBagShopping} from "@fortawesome/free-solid-svg-icons";


const Navbar = ({ toggleNavbar, setToggleNavbar }: any) => {
    return (
        <nav>
        <div>
            <a href="/"><h1>Logo</h1></a>
        </div>
        <ul className={`nav-links ${toggleNavbar ? 'nav-active' : ''}`}>
                <li><Link to='/men'>MEN</Link></li>
                <li><Link to='/women'>WOMEN</Link></li>
                <li><Link to='/kids'>KIDS</Link></li>
                <li><Link to='/sale'>SALE</Link></li>
        </ul>
        <div className="right-container">
            <div className="search-container">
            <input type="text" />
            <FontAwesomeIcon className='search-icon' icon={faMagnifyingGlass} />
            </div>
            <div className="icons">
            <FontAwesomeIcon className='shop-icons' icon={faUser} />
            <FontAwesomeIcon className='shop-icons' icon={faHeart} />
            <FontAwesomeIcon className='shop-icons' icon={faBagShopping} />
            </div>
        </div>
        <div className="burger" onClick={() => setToggleNavbar(!toggleNavbar)}>
            <div className='line1'></div>
            <div className='line2'></div>
            <div className='line3'></div>
        </div>
    </nav>

     );
    }
export default Navbar;