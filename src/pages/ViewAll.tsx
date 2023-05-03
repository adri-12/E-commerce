import FilterProducts from "../components/FilterProducts";

const ViewAll = () => {
  return (
    <div className="view-all">
      <div className="news-banner">
        <h3>FREE DELIVERY</h3>
        <span>
          React Members get free delivery. <a href="#">Learn More</a>{" "}
          <a href="#">Join Us</a>{" "}
        </span>
      </div>
      <FilterProducts />
    </div>
  );
};

export default ViewAll;
