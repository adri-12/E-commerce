import { useGetAllProductsQuery } from "../store/apiSlice";

const ProductCard = () => {
  const { data } = useGetAllProductsQuery(1);
  return (
    <div className="product-card">
      <ul>
        {data &&
          (data["men-shoes"] || [])
            .concat(data["women-shoes"] || [])
            .map((item: any, id: any) => (
              <li key={id}>
                <a href="#">
                  <img src={item.image} alt="image" />
                  <div className="description-container">
                    <span>{item.name}</span>
                    <span className="color-grey">{item.category}</span>
                    <span className="price">RON {item.price}</span>
                  </div>
                </a>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default ProductCard;
