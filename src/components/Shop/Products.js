import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import Loader from "react-loader-spinner";

const Products = (props) => {
  let [PRODUCTS, setProducts] = useState([]);

  const products_url = "https://fakestoreapi.com/products/";

  useEffect(() => {
    const fetchData = async (products_url) => {
      try {
        const response = await fetch(products_url);
        const data = await response.json();
        if (data.length > 0) {
          setProducts(data);
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData(products_url);
  }, [products_url]);

  return (
    <section class="container-fluid">
      {!PRODUCTS.length > 0 && (
        <Loader
          className={classes.loader}
          type="Puff"
          color="#00BFFF"
          height={80}
          width={80}
        />
      )}
      <div class="row row-cols-1 row-cols-md-3 g-4 mt-3 p-3">
        {PRODUCTS.map((product) => {
          return <ProductItem key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default Products;
