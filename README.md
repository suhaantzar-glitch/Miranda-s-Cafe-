# Miranda's Cafe: A Taste of Vermont

Website for **Miranda's Cafe: A Taste of Vermont**, a family-run Vermont-style deli and cafe at
11 Main St, Canton, NY 13617. Owned by Rob & Miranda Gladding.

Built with Next.js (App Router, TypeScript), Tailwind CSS 4, GSAP + ScrollTrigger and Lenis.
Every route is statically generated, so there's no backend and it deploys to Vercel as-is.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build (must pass with no errors)
npm run lint       # ESLint
npm run typecheck  # tsc --noEmit
npm run format     # Prettier
```

Deploy by importing the repo into Vercel; it needs no configuration. Set `NEXT_PUBLIC_SITE_URL`
in Vercel to the production domain (it's used for canonical URLs, the sitemap, Open Graph tags and
JSON-LD).

## Where content lives

| What                                              | File               |
| ------------------------------------------------- | ------------------ |
| Name, address, phone, hours, payment, links       | `data/business.ts` |
| Full menu and homepage signature cards            | `data/menu.ts`     |
| Testimonials and Google rating                    | `data/reviews.ts`  |
| "What makes us different" and Vermont Market list | `data/content.ts`  |
| Placeholder illustrations                         | `public/images/`   |

`data/business.ts` is the single source of truth for hours. The hours table, the footer, the
"Open now / Closed now" pill (computed in America/New_York time) and the JSON-LD
`openingHoursSpecification` all read from it.

### Swapping in real photos

Each placeholder in `public/images/` is named for what it shows (`sandwich-the-miranda.svg`,
`hero-vermont-sandwich.svg`, `about-storefront.svg`, and so on). Add the real photo under the same
name stem (for example `sandwich-the-miranda.jpg`), then update the path in `data/menu.ts` or in
the section component. `next/image` optimizes JPG and PNG files automatically.

## TODO before launch

Search the code for `TODO` to find each of these.

- [ ] **Real menu and prices.** Every price currently shows `$—` (most sandwiches run about $11,
      but no exact price has been made up). Breakfast, Cold Sandwiches, Salads, Baked Goods, Drinks,
      the panini, the soup and the coleslaw are all placeholder items, flagged with
      `placeholder: true` in `data/menu.ts`.
- [ ] **Confirm signature item descriptions.** Maple Bird, Vermont Cheddar Mac & Cheese and
      Shepherd's Pie are written from best guesses. The Miranda and The Livy Lou are confirmed.
- [ ] **Confirm gluten-free flags.** The `glutenFreeAvailable` flags assume any sandwich can be made
      on GF bread. Confirm this with the owners.
- [ ] **Photos.** Replace every SVG in `public/images/`, plus the generated share image in
      `app/opengraph-image.tsx`.
- [ ] **Logo.** The header and footer use a text wordmark with a maple leaf
      (`components/Logo.tsx`). The favicon is `app/icon.svg`.
- [ ] **Facebook URL.** Update `facebookUrl` in `data/business.ts`. It currently points to
      facebook.com.
- [ ] **Contact email.** Set `email` in `data/business.ts`. It isn't displayed anywhere yet.
- [ ] **Domain.** Set `NEXT_PUBLIC_SITE_URL`, or change the fallback `siteUrl` in
      `data/business.ts` (currently `https://www.mirandascafecanton.com`, which is a placeholder).
- [ ] **Confirm hours.** The current hours are Mon, Tue and Thu–Sun 8am–3pm, closed Wednesday. Check
      for seasonal or holiday changes.
- [ ] **Real reviews.** The three testimonials in `data/reviews.ts` are paraphrased themes. Replace
      them with real Google quotes (with permission), and keep the 4.9★ rating current.
- [ ] **Verify the map pin and geo coordinates** (44.5956, -75.1723) once the Google Business
      listing is final.
