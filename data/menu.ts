/**
 * Menu data — drives both the /menu page and the homepage "Signature" cards.
 *
 * Prices: most sandwiches run about $11, but exact prices are NOT confirmed.
 * Every price is "$—" until the owners supply the real board.
 * TODO: Replace placeholder items and "$—" prices with the real menu.
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  /** Display price, e.g. "$11.00". Use "$—" until confirmed. */
  price: string;
  glutenFreeAvailable?: boolean;
  bestSeller?: boolean;
  /** Shown as a card on the homepage Signature section. */
  signature?: boolean;
  /** Path under /public. Swap the SVG for a real photo with the same name stem. */
  image?: string;
  /** True for invented filler items that must be replaced with real ones. */
  placeholder?: boolean;
}

export interface MenuCategory {
  id: string;
  name: string;
  blurb?: string;
  items: MenuItem[];
}

const TBD = "$—";

export const menu: MenuCategory[] = [
  {
    id: "breakfast",
    name: "Breakfast",
    blurb: "Served from 8am.",
    items: [
      // TODO: Placeholder item — replace with a real breakfast sandwich.
      {
        id: "breakfast-sandwich",
        name: "Breakfast Sandwich",
        description: "Egg and cheese with your choice of meat on your choice of bread.",
        price: TBD,
        glutenFreeAvailable: true,
        placeholder: true,
      },
      // TODO: Placeholder item — confirm whether this is offered.
      {
        id: "maple-french-toast",
        name: "Maple French Toast",
        description: "Thick-cut bread, griddled golden, with real Vermont maple syrup.",
        price: TBD,
        placeholder: true,
      },
      // TODO: Placeholder item — replace with a real breakfast option.
      {
        id: "breakfast-wrap",
        name: "Breakfast Wrap",
        description: "Scrambled eggs, cheddar and potatoes wrapped up to go.",
        price: TBD,
        placeholder: true,
      },
    ],
  },
  {
    id: "hot-sandwiches",
    name: "Hot Sandwiches & Paninis",
    blurb: "Boar's Head meats, sliced to order and grilled fresh.",
    items: [
      {
        id: "the-miranda",
        name: "The Miranda",
        description:
          "Pastrami, melted Swiss, house-made coleslaw and our house 1,000 Island on grilled rye.",
        price: TBD,
        bestSeller: true,
        signature: true,
        glutenFreeAvailable: true,
        image: "/images/sandwich-the-miranda.svg",
      },
      {
        id: "the-livy-lou",
        name: "The Livy Lou",
        description: "Ham, melted Swiss and honey mustard on grilled rye.",
        price: TBD,
        signature: true,
        glutenFreeAvailable: true,
        image: "/images/sandwich-the-livy-lou.svg",
      },
      // TODO: Description not confirmed — get the real Maple Bird build from the owners.
      {
        id: "maple-bird",
        name: "Maple Bird",
        description:
          "Sliced turkey and Vermont cheddar with our house-made maple mustard, grilled until melty.",
        price: TBD,
        signature: true,
        glutenFreeAvailable: true,
        image: "/images/sandwich-maple-bird.svg",
      },
      // TODO: Placeholder item — replace with a real panini.
      {
        id: "vermont-panini",
        name: "Vermont Cheddar Panini",
        description: "Sharp Vermont cheddar and apple, pressed on sourdough.",
        price: TBD,
        glutenFreeAvailable: true,
        placeholder: true,
      },
    ],
  },
  {
    id: "cold-sandwiches",
    name: "Cold Sandwiches",
    blurb: "Built to order. Gluten-free bread available.",
    items: [
      // TODO: Placeholder item — replace with a real cold sandwich.
      {
        id: "classic-italian",
        name: "Classic Italian",
        description:
          "Boar's Head Italian meats, provolone, lettuce, tomato, onion and oil & vinegar.",
        price: TBD,
        glutenFreeAvailable: true,
        placeholder: true,
      },
      // TODO: Placeholder item — replace with a real cold sandwich.
      {
        id: "turkey-club",
        name: "Turkey Club",
        description: "Boar's Head turkey, bacon, lettuce, tomato and mayo.",
        price: TBD,
        glutenFreeAvailable: true,
        placeholder: true,
      },
    ],
  },
  {
    id: "salads",
    name: "Salads",
    items: [
      // TODO: Placeholder item — replace with a real salad.
      {
        id: "garden-salad",
        name: "Garden Salad",
        description: "Fresh greens and vegetables with your choice of house dressing.",
        price: TBD,
        glutenFreeAvailable: true,
        placeholder: true,
      },
      // TODO: Placeholder item — replace with a real salad.
      {
        id: "chef-salad",
        name: "Chef Salad",
        description: "Greens topped with Boar's Head ham and turkey, cheddar and egg.",
        price: TBD,
        glutenFreeAvailable: true,
        placeholder: true,
      },
    ],
  },
  {
    id: "soups-sides",
    name: "Soups & Sides",
    blurb: "Soups are homemade — ask what's in the pot today.",
    items: [
      // TODO: Description not confirmed — check the real recipe details.
      {
        id: "vermont-mac-and-cheese",
        name: "Vermont Cheddar Mac & Cheese",
        description: "Creamy, generous and made with real Vermont cheddar.",
        price: TBD,
        signature: true,
        image: "/images/side-vermont-mac-and-cheese.svg",
      },
      // TODO: Description not confirmed — check the real recipe details.
      {
        id: "shepherds-pie",
        name: "Shepherd's Pie",
        description: "Hearty seasoned beef and vegetables under a golden mashed-potato top.",
        price: TBD,
        signature: true,
        image: "/images/entree-shepherds-pie.svg",
      },
      // TODO: Placeholder item — confirm soup offering & pricing.
      {
        id: "soup-of-the-day",
        name: "Homemade Soup of the Day",
        description: "Cup or bowl. See the board for today's pot.",
        price: TBD,
        placeholder: true,
      },
      // TODO: Placeholder item — confirm.
      {
        id: "house-coleslaw",
        name: "House-Made Coleslaw",
        description: "The same slaw that goes on The Miranda.",
        price: TBD,
        glutenFreeAvailable: true,
        placeholder: true,
      },
    ],
  },
  {
    id: "baked-goods",
    name: "Baked Goods",
    blurb: "Baked in-house. Selection changes daily.",
    items: [
      // TODO: Placeholder item — replace with real baked goods.
      {
        id: "cookies",
        name: "Fresh-Baked Cookies",
        description: "Ask what came out of the oven this morning.",
        price: TBD,
        placeholder: true,
      },
      // TODO: Placeholder item — replace with real baked goods.
      {
        id: "maple-scone",
        name: "Maple Scone",
        description: "Tender scone with a Vermont maple glaze.",
        price: TBD,
        placeholder: true,
      },
    ],
  },
  {
    id: "drinks",
    name: "Drinks",
    items: [
      // TODO: Placeholder item — confirm coffee offering.
      {
        id: "coffee",
        name: "Hot Coffee",
        description: "Fresh-brewed, all morning long.",
        price: TBD,
        placeholder: true,
      },
      // TODO: Placeholder item — confirm.
      {
        id: "maple-latte",
        name: "Maple Latte",
        description: "Sweetened with real Vermont maple syrup.",
        price: TBD,
        placeholder: true,
      },
      // TODO: Placeholder item — confirm.
      {
        id: "cold-drinks",
        name: "Bottled Drinks",
        description: "Sodas, juices and water from the cooler.",
        price: TBD,
        placeholder: true,
      },
    ],
  },
];

export const signatureItems: MenuItem[] = menu.flatMap((c) => c.items).filter((i) => i.signature);

export const specialsNote = "Daily specials on the board in-store.";
