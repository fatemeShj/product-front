import { useState, useEffect } from "react";
import "./App.css";

const URL = import.meta.env.VITE_API_URL;

function App() {
  const [products, setProducts] = useState({ data: [] });

  useEffect(() => {
    fetch(`${URL}/api/products`)
      .then((res) => res.json())
      .then((response) => {
        setProducts(response); // Set the entire response object
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  console.log("products=>", products.data);
  console.log("productsLeng=>", products.data.length);

  return (
    <div>
      <h1>Products</h1>
      {products.data.length > 0 ? ( // Check `products.data.length`
        <ul>
          {products.data.map((product) => (
            <li key={product.id}>
              {product.name} - ${product.price}
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
}

export default App;
