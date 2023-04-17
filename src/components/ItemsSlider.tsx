import { useEffect, useState } from "react";
import { useGetAllProductsQuery } from "../features/posts/apiSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faHeart,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const ItemsSlider = () => {
  const [sliderIndex, setSliderIndex] = useState(0);
  const handlePrevClick = () => {
    setSliderIndex((prevIndex) => prevIndex + 1);
  };

  const handleNextClick = () => {
    setSliderIndex((prevIndex) => prevIndex - 1);
  };

  const { data } = useGetAllProductsQuery(1);
  return (
    <>
      <div className="slider-container body-container">
        <div className="slider-categories">
          <ul>
            <FontAwesomeIcon className="long-arrow" icon={faArrowRightLong} />
            <li>
              <a href="#">New Arrivals</a>
            </li>
            <li>
              <a href="#">What's Trending</a>
            </li>
            <li>
              <a href="#">Member Exclusives</a>
            </li>
            <div className="right-side-slider">
              <a href="#">VIEW ALL</a>
              <div>
                <FontAwesomeIcon
                  className="angle-icons"
                  icon={faAngleLeft}
                  onClick={handlePrevClick}
                />
                <FontAwesomeIcon
                  className="angle-icons"
                  icon={faAngleRight}
                  onClick={handleNextClick}
                />
              </div>
            </div>
          </ul>
          <div className="slider-items-container">
            <div
              className="items-container"
              style={
                {
                  transform: `translateX(calc(${sliderIndex} * -100%))`,
                } as React.CSSProperties
              }
            >
              <ul>
                {data &&
                  (data["men-shoes"] || [])
                    .concat(data["women-shoes"] || [])
                    .map((item: any, id: any) => (
                      <li key={id}>
                        <a href="#">
                          <div className="items-on-image">
                            <img src={item.image} alt="image" />
                            <FontAwesomeIcon
                              className="star-icon"
                              icon={faStar}
                            />
                            <span className="price">RON {item.price}</span>
                          </div>
                          <div className="text-under-image">
                            <span>{item.name}</span>
                            <span>{item.category}</span>
                          </div>
                        </a>
                      </li>
                    ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemsSlider;
