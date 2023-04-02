const categories = [
  { href: "/men-sneakers", imgSrc: "/sneakers.webp", text: "men's sneakers" },
  { href: "/women-sneakers", imgSrc: "/women-sneakers.webp", text: "women's sneakers" },
  {
    href: "/men-shoes",
    imgSrc: "/men-shoes.webp",
    text: "men's shoes",
  },
  { href: "/women-shoes", imgSrc: "/women-shoes.webp", text: "women's shoes" },
];

const FourGridCategory = () => {
  return (
    <div className="men-container">
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
    </div>
  );
};

export default FourGridCategory;
