
export const addToCart = (product) => {
  return {
    type: 'ADD_TO_CART',
    payload: {
      ...product,
      quantity: 1
    }
  };
};

export const removeFromCart = (product) => {
  return {
    type: 'REMOVE_FROM_CART',
    payload: product,
  };
};

// cartActions.js


export const increaseQuantity = (productId) => {
  return {
    type: 'INCREASE_QUANTITY',
    payload: productId,
  };
};

export const decreaseQuantity = (productId) => {
  return {
    type: 'DECREASE_QUANTITY',
    payload: productId,
  };
};



