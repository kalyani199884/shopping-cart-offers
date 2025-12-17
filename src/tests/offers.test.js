import { cheeseOffer, soupBreadOffer, butterOffer } from "../utils/offers";

test("Cheese BOGO offer", () => {
  expect(cheeseOffer(2, 0.9)).toBe(0.9);
});

test("Soup bread half price", () => {
  expect(soupBreadOffer(2, 1, 1.1)).toBe(0.55);
});

test("Butter one third off", () => {
  expect(butterOffer(1, 1.2)).toBe(0.4);
});
