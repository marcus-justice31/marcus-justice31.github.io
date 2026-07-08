/**
 * legoBuilds.js
 * ─────────────────────────────────────────────────────────
 *
 * Fields:
 *   id          (required) unique string, no spaces
 *   title       (required) name of the build
 *   description (required) 1-2 sentence blurb
 *   images      (required) array of image paths — put files in
 *               /public/assets/lego/ and reference them as
 *               "/assets/lego/filename.jpg". One image is fine,
 *               multiple gives the card a mini carousel.
 *   category    (optional) e.g. "Downtown", "Vehicles", "Castle"
 *               — not used yet, but wiring it in later (a filter
 *               bar like TechFilter) is a small addition, not a
 *               rebuild, as long as every build has one of these.
 *   funFact     (optional) shows behind a "Fun fact" toggle on the card
 *   pieceCount  (optional) number, shown as a little badge if present
 */

// import city from "../assets/lego/lego_city.jpg";
import city_closeup from "../assets/lego/lego_city_close.jpg";

const legoBuilds = [
  {
    id: "downtown-core",
    title: "The Downtown Core",
    description:
      "This is my LEGO city, which I've been building since 2020. All of the buildings have lights installed. It currently comprises of 7 modular buildings, with 5 additional modulars in progress. The city contains a hotel, an art gallery, a police station, a newspaper stand, a donut shop, a pizzaria, a jazz club, a coffee shop, a flower shop, a bakery, a book store, a townhouse, an apartment building that sits on top of Central Perk Cafe (from the show Friends), and Seasame Street's 123 Sesame Street building!",
    images: [
      city_closeup,
    ],
    category: "Downtown",
    pieceCount: 22935,
    funFact: "The lights are linked together to a central USB hub connected to an outlet power source. The hub is connected to an app on my phone that allows me to power on and off the city lights :)",
  },
];

export default legoBuilds;