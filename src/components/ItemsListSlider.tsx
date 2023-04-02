import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faStar,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const items = [
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
  {
    image: "/shoes1.webp",
    title: "Samba Classic Shoes",
    category: "Performance",
    price: "$75",
  },
];
    const SliderItemsContainer = () => {
  return (
    <div className="slider-items-container">
      <div className="items-container">
        <ul>
          {items.map((item, index) => (
            <li key={index}>
              <a href="#">
                <div className="items-on-image">
                  <img src={item.image} alt="image" />
                  <FontAwesomeIcon className="star-icon" icon={faStar} />
                  <span className="price">{item.price}</span>
                </div>
                <div className="text-under-image">
                  <span>{item.title}</span>
                  <span>{item.category}</span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
          };
export default SliderItemsContainer;
