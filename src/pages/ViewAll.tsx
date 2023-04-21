import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSortDown, faFilter } from "@fortawesome/free-solid-svg-icons";

const ViewAll = () => {
    const shoesSize = [35.5, 36, 36.5, 37.5, 38, 38.5, 39, 40, 40.5, 41, 42, 42.5, 43, 44, 44.5, 45, 45.5, 46, 47, 47.5, 48.5, 50]
  return (
    <div className="view-all">
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
          <div className="categories">
            <span>Lifestyle</span>
            <span>Training</span>
          </div>
          <div className="gender">
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
          <div className="size">
<ul>{shoesSize.map(size => <li key={size}><button>{size}</button></li>)}</ul>
          </div>
        </div>
        <div className="all-shoes">
            <h1>All Shoes</h1>
        </div>
      </div>
    </div>
  );
};

export default ViewAll;
