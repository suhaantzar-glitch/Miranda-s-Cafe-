/** Static marketing copy that isn't menu, hours or reviews. */

export const differentiators = [
  {
    title: "Vermont-sourced ingredients",
    body: "Real maple syrup and sharp Vermont cheddar, brought over from the Green Mountain State.",
    icon: "leaf",
  },
  {
    title: "House-made dressings",
    body: "Our maple mustard and 1,000 Island are made right here in the kitchen.",
    icon: "jar",
  },
  {
    title: "Boar's Head, sliced to order",
    body: "Premium deli meats and cheeses, sliced fresh for every sandwich — never pre-stacked.",
    icon: "slicer",
  },
  {
    title: "Gluten-free bread available",
    body: "Ask for any sandwich on gluten-free bread. We're happy to walk you through ingredients.",
    icon: "wheat",
  },
  {
    title: "Homemade soups & baked goods",
    body: "Soups simmered in-house and treats baked fresh. Check the board for today's lineup.",
    icon: "pot",
  },
  {
    title: "Fast, friendly service",
    body: "Made to order doesn't mean slow. Grab lunch between classes or on your way through town.",
    icon: "clock",
  },
] as const;

export type IconName = (typeof differentiators)[number]["icon"];

export const marketItems = [
  { name: "Vermont cheese bricks", note: "Sharp cheddar & more" },
  { name: "Maple syrup products", note: "Syrup, candy & cream" },
  { name: "Fresh baked goods", note: "Baked in-house" },
  { name: "New England chips", note: "Kettle-cooked favorites" },
];
