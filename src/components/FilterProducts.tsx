import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faFilter } from "@fortawesome/free-solid-svg-icons";
import { useGetAllProductsQuery } from "../store/apiSlice";
import ProductCard from "./ProductCard";
import Toggle from "./Toggle";

const FilterProducts = () => {
  const { data } = useGetAllProductsQuery(1);
  const shoesSize = [
    35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5,
    45, 45.5, 46, 47, 47.5, 48.5, 50,
  ];
  // const filteredCategories = data.shoes.category.filter(
  //  (shoe: any) => shoe.category === "Lifestyle Shoes"
  // );
  // console.log(filteredCategories);

  return (
    <div>
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
          <Toggle
            title="Categories"
            className="filter-categories"
            isTitleOnlyToggle={true}
          >
            <div className="categories">
              <span>Lifestyle</span>
              <span>Training</span>
            </div>
          </Toggle>
          <Toggle
            isTitleOnlyToggle={true}
            title="Gender"
            className="filter-categories"
          >
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
          </Toggle>

          <Toggle
            isTitleOnlyToggle={true}
            title="Size"
            className="filter-categories"
          >
            <div className="size">
              <ul>
                {shoesSize.map((size) => (
                  <li key={size}>
                    <button>{size}</button>
                  </li>
                ))}
              </ul>
            </div>
          </Toggle>

          <Toggle
            isTitleOnlyToggle={true}
            title="Shoe Height"
            className="filter-categories"
          >
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
          </Toggle>

          <Toggle
            isTitleOnlyToggle={true}
            title="Shop By Price"
            className="filter-categories"
          >
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
          </Toggle>
        </div>
        <div className="all-shoes">
          <ProductCard />
        </div>
      </div>
    </div>
  );
};

export default FilterProducts;
