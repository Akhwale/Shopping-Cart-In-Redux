import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <div>
            
            <Link to="/shoppingCart">
            <button>Shopping Cart</button>
            </Link>
            <Link to="/products">
            <button>ALL Products Page</button>
            </Link>
        </div>
    )
}