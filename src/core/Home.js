import React from "react";
import "../styles.css";
//import { API } from "../backend";
import Base from "./Base";
// import { getProducts } from "./helper/coreapicalls";

export default function Home() {
  // const [products, setProducts] = useState([]);
  // const [error, setError] = useState(false);

  // const loadAllProduct = () => {
  //   getProducts().then((data) => {
  //     if (data.error) {
  //       setError(data.error);
  //     } else {
  //       setProducts(data);
  //     }
  //   });
  // };

  // useEffect(() => {
  //   loadAllProduct();
  // }, [])

  return (
    <Base title="The News" description="Truth First">
      <div className="row text-center">
          <h1 className="text-white">Hot News</h1>
          <div className="row">
              {/* {products.map((product, index) => {
                  return(
                      <div key={index} className="col-4 mb-4">
                        <Card product={product}/>
                      </div>
                  )
              })} */}
          </div>
      </div>
    </Base>
  );
}
