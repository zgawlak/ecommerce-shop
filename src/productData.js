// home accessories
import rechargeableFan from './img/products/rechargeable-fan.webp';
import airDiffuser from './img/products/air-diffuser.webp';
import cushionCover from './img/products/cushion-cover.webp';
import seatCushion from './img/products/seat-cushion.webp';
// cleaning tools
import carpetCleaner from './img/products/carpet-cleaner.webp';
import bathroomScrubber from './img/products/bathroom-scrubber.webp';
// bathroom
import toothbrushes from './img/products/toothbrushes.webp';
import loofah from './img/products/loofah.webp';
// stationery
import notebook from './img/products/dot-notebook.webp';
import stickyNotes from './img/products/sticky-notes.webp';
import ballpointPen from './img/products/ballpoint-pen.webp';
import highlighter from './img/products/highlighter.webp';
// women's clothing
import linenCollarShirt from './img/products/linen-collar-shirt.webp';
import longVest from './img/products/long-vest.webp';
import polyesterPants from './img/products/polyester-pants.webp';
import kapokShirt from './img/products/kapok-shirt.webp';
// men's clothing
import jerseyShirt from './img/products/jersey-shirt.webp';
import oxfordShirt from './img/products/oxford-shirt.webp';
import broadShorts from './img/products/broad-shorts.webp';
import naturalDenim from './img/products/natural-denim.webp';

const productData =
  [
    {
      "category": "Home Accessories",
      "description": "This portable fan is the perfect size to bring with you on-the-go. Head is foldable up to 120°, so it can be angled up and used on a tabletop as well. Simple button control allows you to turn the fan on/off and cycle through the 4 modes with ease",
      "id": 1,
      "image": rechargeableFan,
      "price": 24.90,
      "title": "Rechargeable Compact Handheld Fan"
    },
    {
      "category": "Home Accessories",
      "description": "The essential oil diffuser uses ultrasonic waves to diffuse and disperse a fragrant mist around the room.",
      "id": 2,
      "image": airDiffuser,
      "price": 89.00,
      "title": "Ultrasonic Aroma Diffuser 100ml"
    },
    {
      "category": "Home Accessories",
      "description": "This Indian Cotton Madras Check Cushion Cover is made to add a sense of comfort to your living space. Crafted from 100% cotton, it will surely deliver a cozy feel while providing a stylish touch.",
      "id": 3,
      "image": cushionCover,
      "price": 17.90,
      "title": "Indian Cotton Madras Check Cushion Cover"
    },
    {
      "category": "Home Accessories",
      "description": "It is a comfortable seat cushion that sinks slowly. You can remove the cover and wash it in the washing machine.",
      "id": 4,
      "image": seatCushion,
      "price": 9.90,
      "title": "Low Rebounding Cotton Seat Cushion"
    },
    {
      "category": "Cleaning Tools",
      "description": "Our lint rollers are tough, able to easily remove lint from carpet, rugs, and clothing. Conveniently free-standing type for storage. Can be stored from either side of the cover.",
      "id": 5,
      "image": carpetCleaner,
      "price": 8.90,
      "title": "Cleaning System Carpet Cleaner"
    },
    {
      "category": "Cleaning Tools",
      "description": "A bath brush that can be attached to a pole for use. Since the joint part is movable, it is easy to clean in narrow spaces. The shape is also easy to hold if you're only using the main body.",
      "id": 6,
      "image": bathroomScrubber,
      "price": 5.90,
      "title": "Cleaning System Bathroom Scrubber"
    },
    {
      "category": "Bathroom",
      "description": "A pack of 4 toothbrushes with regular bristles.",
      "id": 7,
      "image": toothbrushes,
      "price": 14.90,
      "title": "Polypropylene Toothbrush 4 Colours Set"
    },
    {
      "category": "Bathroom",
      "description": "Made of fine mesh, each foaming ball is handmade into its shape. You can easily create a soft whip-like foam with little friction, so it is less irritating to the skin and can be washed gently.",
      "id": 8,
      "image": loofah,
      "price": 2.50,
      "title": "Foaming Net Ball"
    },
    {
      "category": "Stationery",
      "description": "A dot grid notebook made with high quality recycled paper that does not bleed through easily, and a sturdy paperboard cover. The double rings allow you to fully open the notebook and write from any direction, and the strap keeps the notebook closed for on-the-go usage.",
      "id": 9,
      "image": notebook,
      "price": 4.90,
      "title": "Wireless Dot Grid Notebook with Strap"
    },
    {
      "category": "Stationery",
      "description": "Sticky notes that are perfect for labelling, color-coding, and organizing your notes. Comes in a set of five, with four different colours. Each pad contains 100 sheets.",
      "id": 10,
      "image": stickyNotes,
      "price": 3.90,
      "title": "Bookmark Sticky Notes"
    },
    {
      "category": "Stationery",
      "description": "A simple pen for everyday use. The oil based ink can withstand a light wash, and is good for multi-media sketches.",
      "id": 11,
      "image": ballpointPen,
      "price": 2.40,
      "title": "Polycarbonate Ballpoint Pen"
    },
    {
      "category": "Stationery",
      "description": "One of our signature products, there is a small window on the tip of the highlighter, making it easier to see exactly where you're marking. The other end is a fine tip highlighter pen using the same water-based ink so you have 2 marking options for each vibrant colour.",
      "id": 12,
      "image": highlighter,
      "price": 2.90,
      "title": "Highlighter with Window"
    },
    {
      "category": "Women's Clothing",
      "description": "A stand collar shirt made with pre-washed linen for its soft finish that is comfortable on the skin.",
      "id": 13,
      "image": linenCollarShirt,
      "price": 59.90,
      "title": "Linen Stand Collar Shirt"
    },
    {
      "category": "Women's Clothing",
      "description": "Uses stretchy yarn. Machine washable. Has a smooth texture.",
      "id": 14,
      "image": longVest,
      "price": 59.90,
      "title": "Milano Rib Long Vest"
    },
    {
      "category": "Women's Clothing",
      "description": "Wide-leg elastic waist pants with a center press made with recycled polyester fabric that is wrinkle-resistant and water-repellent.",
      "id": 15,
      "image": polyesterPants,
      "price": 59.90,
      "title": "Recycled Polyester Wide Pants"
    },
    {
      "category": "Women's Clothing",
      "description": "The fabric is a blend of organic cotton and kapok, an environmentally friendly plant grown without pesticides. By using a fabric that mixes kapok with cotton, it is softer and lighter than conventional 100% cotton.",
      "id": 16,
      "image": kapokShirt,
      "price": 79.90,
      "title": "Cotton Kapok Skirt"
    },
    {
      "category": "Men's Clothing",
      "description": "A thick and durable fabric woven from thick cotton thread, made using organic cotton.",
      "id": 17,
      "image": jerseyShirt,
      "price": 39.90,
      "title": "Heavy Weight Jersey Long Sleeve T-Shirt"
    },
    {
      "category": "Men's Clothing",
      "description": "An oxford short-sleeve shirt made with organic cotton for that great regular fit. Easy to wash and take care of. The shirts have been pre-washed during the manufacturing process to remove any stiffness and to give you the natural softness of 100% cotton.",
      "id": 18,
      "image": oxfordShirt,
      "price": 44.90,
      "title": "Oxford Button Down Short Sleeve Shirt"
    },
    {
      "category": "Men's Clothing",
      "description": "Made from organic cotton for soft and comfortable wear.",
      "id": 19,
      "image": broadShorts,
      "price": 39.90,
      "title": "Broad Short Pants"
    },
    {
      "category": "Men's Clothing",
      "description": "Denim pants made with organic cotton, grown on soil free of agriculture or chemical fertilizers for at least three years.",
      "id": 20,
      "image": naturalDenim,
      "price": 59.90,
      "title": "Denim Regular Pants Natural"
    }
  ]

export default productData;
