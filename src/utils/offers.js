// Buy 1 get 1 free on Cheese
export function cheeseOffer(quantity, price) {
  const freeItems = Math.floor(quantity / 2);
  return freeItems * price;
}

// Buy Soup → Bread at half price
export function soupBreadOffer(soupQty, breadQty, breadPrice) {
  const discountedBreads = Math.min(soupQty, breadQty);
  return discountedBreads * (breadPrice / 2);
}

// Butter → one-third off
export function butterOffer(quantity, price) {
  return quantity * (price / 3);
}
