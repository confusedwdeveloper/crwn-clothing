import { createSelector } from "reselect";

// input selector gets state and returns a slice of state
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accoumulatedQuantity, cartItem) =>
        accoumulatedQuantity + cartItem.quantity,
      0
    )
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accoumulatedQuantity, cartItem) =>
      accoumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  )
);
