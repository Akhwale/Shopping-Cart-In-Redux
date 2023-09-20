// Initial state for the cart
const initialState = {
    cart: [],
};

// Reducer function
const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case 'ADD_TO_CART':
            // Check if the product is already in the cart
            const existingProductIndex = state.cart.findIndex(
                (product) => product._id === action.payload._id
            );

            if (existingProductIndex !== -1) {
                // If the product is already in the cart, update its quantity
                const updatedCart = [...state.cart];
                updatedCart[existingProductIndex].quantity += 1;
                return { ...state, cart: updatedCart };
            } else {
                // If the product is not in the cart, add it
                return { ...state, cart: [...state.cart, action.payload] };
            }

        case 'REMOVE_FROM_CART':
            // Remove the product from the cart
            const updatedCart = state.cart.filter(
                (product) => product._id !== action.payload._id
            );
            return { ...state, cart: updatedCart };


        case 'INCREASE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map((product) =>
                    product._id === action.payload
                        ? { ...product, quantity: product.quantity + 1 }
                        : product
                ),
            };

        case 'DECREASE_QUANTITY':
            return {
                ...state,
                cart: state.cart.map((product) =>
                    product._id === action.payload
                        ? { ...product, quantity: Math.max(1, product.quantity - 1) }
                        : product
                ),
            };

        default:
            return state;
    }
};

export default cartReducer;

