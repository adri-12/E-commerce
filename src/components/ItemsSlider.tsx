import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";
import SliderItemsContainer from "./ItemsListSlider";

const ItemsSlider = () => {
  return (
    <div className="slider-container body-container">
      <div className="slider-categories">
        <ul>
          <FontAwesomeIcon className="long-arrow" icon={faArrowRightLong} />
          <li><a href="#">New Arrivals</a></li>
          <li><a href="#">What's Trending</a></li>
          <li><a href="#">Member Exclusives</a></li>
          <div className="right-side-slider">
          <a href="#">VIEW ALL</a>
          <div>
            <FontAwesomeIcon className="angle-icons" icon={faAngleLeft} />
            <FontAwesomeIcon className="angle-icons" icon={faAngleRight} />
          </div>
        </div>
        </ul>
        <SliderItemsContainer />
      </div>
    </div>
  );
};

export default ItemsSlider;
