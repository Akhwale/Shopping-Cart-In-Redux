import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from 'react-redux'; // Import useDispatch from react-redux
import Navbar from "./Navbar";
import { addToCart } from "./actions/cartActions";

export default function ProductDetails(){
    const {_id} = useParams();
    const [product, setProduct] = useState({});
    const dispatch = useDispatch()  // Get the dispatch function from Redux
  

    useEffect(() => {
        // Fetch product details from the server using the product ID
        axios.get(`http://localhost:5000/product/products/${_id}`)
          .then(response => setProduct(response.data))
          .catch(error => console.log(error));
      }, [_id]);
    


    return(
    <div>
        <Navbar/>
        <div className="product-card">
            <img src={product.imageUrl}  alt= {product.name} style={{"height": "200px"}} />
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>{product.price}</div>
            <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
           
        </div>
    </div>
    )
}