import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight, faStar, faHeart } from "@fortawesome/free-solid-svg-icons";

const categories = [
    { href: '/men-sneakers', imgSrc: '/sneakers.webp', text: 'sneakers' },
    { href: '/men-tops', imgSrc: '/tops.webp', text: 'tops' },
    { href: '/men-hoodies-sweatshirts', imgSrc: '/hoodies.jpg', text: 'hoodies-sweatshirts' },
    { href: '/men-pants', imgSrc: '/pants.webp', text: 'pants' },
];

const Men = () => {
    return ( 
        <div className="body-container">
            <ul className="items-categories">
              {categories.map((item, index) => (
                <li key={index}>
                    <a href={item.href}>
                        <img src={item.imgSrc} alt={item.text} />
                        <span>{item.text}</span>
                    </a>
                </li>
              ))}
            </ul>
            <div className="top-picks">
                <div className="picks-header">
                <h2>TOP PICKS FOR YOU</h2>

                <div>
                <FontAwesomeIcon className="angle-icons" icon={faAngleLeft} />
                <FontAwesomeIcon className="angle-icons" icon={faAngleRight} />
                </div>

                </div>

                <div className="items-container">
                    <ul>
                        <li>
                            <a href="">
                                <div className="items-on-image">
                                <img src="/shoes1.webp" alt="" />
                                <FontAwesomeIcon className="star-icon" icon={faHeart} />
                                <span>$75</span>
                                </div>
                                <div>
                                    <span>Samba Classic Shoes</span>
                                    <span>Performance</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <div>
                                <img src="" alt="" />
                                <FontAwesomeIcon icon={faStar} />
                                <span>$75</span>
                                <div>
                                    <span>Samba Classic Shoes</span>
                                    <span>Performance</span>
                                </div>
                            </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
     );
}
 
export default Men;