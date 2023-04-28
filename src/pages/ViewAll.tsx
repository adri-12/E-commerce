import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortDown,
  faFilter,
  faAngleDown,
  faAngleUp,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import ProductCard from "../components/ProductCard";
import { useGetAllProductsQuery } from "../store/apiSlice";

const ViewAll = () => {
  const { data } = useGetAllProductsQuery(1);
  const shoesSize = [
    35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5,
    45, 45.5, 46, 47, 47.5, 48.5, 50,
  ];
  const [openCategories, setOpenCategories] = useState(true);
  const handleOpenCategories = () => {
    setOpenCategories(!openCategories);
  };
  const [openGender, setOpenGender] = useState(true);
  const handleOpenGender = () => {
    setOpenGender(!openGender);
  };
  const [openSize, setOpenSize] = useState(true);
  const handleOpenSize = () => {
    setOpenSize(!openSize);
  };
  const [openShoeHeight, setOpenShoeHeight] = useState(true);
  const handleOpenShoeHeight = () => {
    setOpenShoeHeight(!openShoeHeight);
  };
  const [openShopPrice, setOpenShopPrice] = useState(true);
  const handleOpenShopPrice = () => {
    setOpenShopPrice(!openShopPrice);
  };

  return (
    <div className="view-all">
      <div className="news-banner">
        <h3>FREE DELIVERY</h3>
        <span>
          React Members get free delivery. <a href="#">Learn More</a>{" "}
          <a href="#">Join Us</a>{" "}
        </span>
      </div>
      <div className="container-view-all">
        <div className="header-products">
          <h2>All Shoes</h2>
          <div className="filter-icons">
            <div className="filter">
              <span>Hide Filters</span>
              <FontAwesomeIcon icon={faFilter} />
            </div>
            <div className="sort">
              <span>Sort By</span>
              <FontAwesomeIcon icon={faSortDown} />
            </div>
          </div>
        </div>
      </div>
      <div className="view-all-body">
        <div className="filter-slider">
          <span className="filter-categories" onClick={handleOpenCategories}>
            Categories
            <FontAwesomeIcon icon={openCategories ? faAngleUp : faAngleDown} />
          </span>
          {openCategories && (
            <div className="categories">
              <span>Lifestyle</span>
              <span>Training</span>
            </div>
          )}
          <span className="filter-categories" onClick={handleOpenGender}>
            Gender
            <FontAwesomeIcon icon={openGender ? faAngleUp : faAngleDown} />
          </span>
          {openGender && (
            <div className="categories">
              <ul>
                <li>
                  <input type="checkbox" />
                  Men
                </li>
                <li>
                  <input type="checkbox" />
                  Women
                </li>
                <li>
                  <input type="checkbox" />
                  Unisex
                </li>
              </ul>
            </div>
          )}
          <span className="filter-categories" onClick={handleOpenSize}>
            Size
            <FontAwesomeIcon icon={openSize ? faAngleUp : faAngleDown} />
          </span>

          <div className="size">
            {openSize && (
              <ul>
                {shoesSize.map((size) => (
                  <li key={size}>
                    <button>{size}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span className="filter-categories" onClick={handleOpenShoeHeight}>
            Shoe Height
            <FontAwesomeIcon icon={openShoeHeight ? faAngleUp : faAngleDown} />
          </span>
          {openShoeHeight && (
            <div className="categories">
              <ul>
                <li>
                  <input type="checkbox" />
                  Low Top
                </li>
                <li>
                  <input type="checkbox" />
                  Mid Top
                </li>
                <li>
                  <input type="checkbox" />
                  High Top
                </li>
              </ul>
            </div>
          )}
          <span className="filter-categories" onClick={handleOpenShopPrice}>
            Shop By Price
            <FontAwesomeIcon icon={openShopPrice ? faAngleUp : faAngleDown} />
          </span>
          {openShopPrice && (
            <div className="categories">
              <ul>
                <li>
                  <input type="checkbox" />
                  Under RON 239.99
                </li>
                <li>
                  <input type="checkbox" />
                  RON 239.99 - RON 479.99
                </li>
                <li>
                  <input type="checkbox" />
                  RON 479.99 - RON 719.99
                </li>
                <li>
                  <input type="checkbox" />
                  Over RON 719.99
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="all-shoes">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
