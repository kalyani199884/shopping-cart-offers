export function cheeseOffer(quantity: number, price: number): number {
  const freeItems = Math.floor(quantity / 2);
  return freeItems * price;
}

export function soupBreadOffer(
  soupQty: number,
  breadQty: number,
  breadPrice: number
): number {
  const discountedBreads = Math.min(soupQty, breadQty);
  return discountedBreads * (breadPrice / 2);
}

export function butterOffer(quantity: number, price: number): number {
  return quantity * (price / 3);
}