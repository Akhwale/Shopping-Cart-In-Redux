import { useEffect, useState } from "react"

import axios from "axios";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export default function AllProducts() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        //get products from the end point

        axios.get("http://localhost:5000/product/products")
            .then((response) => {
                setProducts(response.data);

            }, []);

    })

    return (
        <div>
            <Navbar />
            <h1>This is where all Products are listed</h1>

            <button>Go to my Cart</button>

            {products.map((products) => (
                <div key={products._id}>
                    <Link to={`/products/${products._id}`}>
                        <div>
                            <img src={products.imageUrl} alt={products.name} style={{ "height": "200px" }} />
                        </div>
                        <div>
                            {products.name}
                        </div>

                        <div>
                            {products.description}
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    )
}