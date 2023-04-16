import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const dummy_products = [
  {
    id: 1,
    price: 6,
    title: "Hair Shampoo",
    description: "Good For hair",
    name:'Hair Shampoon'
  },
  {
    id: 2,
    price: 100,
    title: "TV",
    description: "LED SMART TV",
    name:'TV'
  },
];
const Products = (props) => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {dummy_products.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            name={product.name}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
