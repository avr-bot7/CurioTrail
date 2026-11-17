// West & Central India traditions: Rajasthan, Gujarat, Maharashtra, Goa, Madhya Pradesh and
// Chhattisgarh. Loaded after data.js; each record joins the main list. Traditions already on the
// site (Warli, Gond, Phad, Pichhvai, Pithora, Kaavad, Mandana, Mata ni Pachedi, Chitrakathi,
// Ganjifa, Zardozi) are not repeated here.
(function () {
  const learnOnly = { visit: false, observe: false, participate: false };
  const R = "Nov 2026";
  window.CT_DATA.records.push(
    /* ---------- Rajasthan ---------- */
    {
      id: "sanganeri-print", name: "Sanganeri & Bagru Block Printing", nameHi: "सांगानेरी और बगरू छपाई",
      state: "Rajasthan", district: "Jaipur", place: "Sanganer and Bagru", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Carved wooden blocks stamp flowers onto cotton, row after row, in two villages outside Jaipur.",
      does: "Chhipa printers dip carved blocks in dye and press them onto cloth laid on long padded tables, lining each block up exactly with the last. Sanganer is known for fine florals on white; Bagru for earthy colours and dabu, a mud-resist print.",
      materials: ["Carved teak blocks", "Cotton cloth", "Dyes", "Dabu mud resist"],
      process: ["Wash and prepare the cloth", "Print the outline block", "Print each colour block", "Fix the colours, wash and dry in the sun"],
      context: "Both Sanganeri and Bagru hand block prints hold GI tags.",
      community: "Chhipa printer families of Sanganer and Bagru",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 15
    },
    {
      id: "bandhani", name: "Bandhani (Bandhej)", nameHi: "बांधनी",
      state: "Rajasthan & Gujarat", district: "Across both states", place: "Kutch, Jamnagar and Jaipur", category: "Weaving & textiles",
      tags: ["textile", "handwork"],
      hook: "Thousands of tiny knots, tied by hand, turn into dots of colour once the cloth is dyed.",
      does: "Women pinch up tiny points of cloth and bind each one tightly with thread, following a printed pattern. The cloth is dyed, often in several rounds, and when the knots are untied the undyed dots form the design.",
      materials: ["Silk or cotton cloth", "Thread", "Dyes"],
      process: ["Print the dot pattern", "Tie thousands of knots", "Dye, lightest colour first", "Dry and untie the knots"],
      context: "Worn at weddings and festivals, where the colours and patterns often mark the occasion.",
      community: "Khatri dyers and women knotters of Gujarat and Rajasthan",
      engagement: learnOnly, sources: ["Gujarat Tourism", "Rajasthan Tourism"], reviewed: R, hue: 340
    },
    {
      id: "jaipur-blue-pottery", name: "Jaipur Blue Pottery", nameHi: "जयपुरी नीली पॉटरी",
      state: "Rajasthan", district: "Jaipur", place: "Jaipur", category: "Handicrafts",
      tags: ["handwork", "painting", "history"],
      hook: "Cobalt and turquoise flowers on white ware that contains no clay at all.",
      does: "The body is a dough of quartz powder, powdered glass, Multani mitti, borax and gum, pressed into moulds. It is painted with cobalt and copper colours, glazed and fired at a low temperature.",
      materials: ["Quartz powder", "Powdered glass", "Multani mitti", "Cobalt and copper oxides"],
      process: ["Mix the quartz dough", "Shape it in moulds", "Paint the design", "Glaze and fire"],
      context: "A Turko-Persian technique that took root in Jaipur in the 19th century. Jaipur Blue Pottery holds a GI tag.",
      community: "Potters of Jaipur",
      engagement: learnOnly, sources: ["GI Registry of India", "Albert Hall Museum, Jaipur"], reviewed: R, hue: 210
    },
    {
      id: "kathputli", name: "Kathputli", nameHi: "कठपुतली",
      state: "Rajasthan", district: "Across Rajasthan", place: "Fairs and villages", category: "Handicrafts",
      tags: ["handwork", "music", "history"],
      hook: "String puppets of kings, dancers and snake charmers, carved, dressed and brought to life by Bhat families.",
      does: "Puppeteers carve the heads from mango wood, paint them and dress the bodies in bright cloth, then work them with strings while a family member plays the dholak and sings.",
      materials: ["Mango wood", "Cloth and tinsel", "Strings", "Dholak"],
      process: ["Carve the head", "Paint and dress the puppet", "Attach the strings", "Perform with music"],
      context: "Bhat puppeteers tell stories such as the tale of Amar Singh Rathore at fairs and festivals.",
      community: "Bhat puppeteer families of Rajasthan",
      engagement: learnOnly, sources: ["Rajasthan Tourism"], reviewed: R, hue: 350
    },
    {
      id: "makrana-marble", name: "Makrana Marble Carving", nameHi: "मकराना संगमरमर",
      state: "Rajasthan", district: "Didwana-Kuchaman", place: "Makrana", category: "Handicrafts",
      tags: ["handwork", "history"],
      hook: "The white marble of the Taj Mahal comes from here, and carvers still shape it into figures, screens and vessels.",
      does: "Quarried marble is cut into blocks. Carvers rough out the form with chisels, refine it with files and abrasive stones, and polish it until it glows.",
      materials: ["Makrana marble", "Chisels and files", "Abrasive stones"],
      process: ["Cut the block", "Rough out the form", "Carve the detail", "Polish"],
      context: "Makrana marble was used in the Taj Mahal and the Victoria Memorial, and holds a GI tag.",
      community: "Marble carvers of Makrana",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 40
    },

    /* ---------- Gujarat ---------- */
    {
      id: "rogan-art", name: "Rogan Painting", nameHi: "रोगन कला",
      state: "Gujarat", district: "Kutch", place: "Nirona village", category: "Painting",
      tags: ["painting", "handwork", "history"],
      hook: "A thick castor-oil paste drawn into fine threads with a metal stick and laid on cloth without touching it.",
      does: "Castor oil is boiled for hours into a sticky paste and mixed with colour. The artist twirls it on a metal stylus and trails fine lines onto the cloth, then often folds the cloth to print a mirror image of the design.",
      materials: ["Castor-oil paste (rogan)", "Mineral colours", "Metal stylus", "Cloth"],
      process: ["Boil the castor oil into paste", "Mix in the colours", "Draw lines with the stylus", "Fold to print the mirror half"],
      context: "Kept alive by a handful of families in Nirona.",
      community: "Rogan artist families of Nirona",
      engagement: learnOnly, sources: ["Gujarat Tourism"], reviewed: R, hue: 0
    },
    {
      id: "patan-patola", name: "Patan Patola", nameHi: "पाटण पटोला",
      state: "Gujarat", district: "Patan", place: "Patan", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Double ikat silk: warp and weft are both tie-dyed before weaving, so the pattern shows on both sides.",
      does: "Weavers tie and dye the warp and weft threads separately to a planned pattern, then line them up thread by thread on a slanting handloom. A single sari can take months.",
      materials: ["Silk yarn", "Dyes", "Slanting handloom"],
      process: ["Plan the pattern", "Tie and dye the warp and weft", "Line them up on the loom", "Weave"],
      context: "Made for generations by the Salvi family of Patan and once traded as far as Indonesia. Patan Patola holds a GI tag.",
      community: "Salvi weaving family of Patan",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 350
    },
    {
      id: "kutch-embroidery", name: "Kutch Embroidery", nameHi: "कच्छी कढ़ाई",
      state: "Gujarat", district: "Kutch", place: "Kutch villages", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Mirrors, bright silk and dense stitching, with every community keeping its own style.",
      does: "Women embroider clothes, wall hangings and bags with chain, buttonhole and interlacing stitches, setting small mirrors (abhla) into the work.",
      materials: ["Cotton or silk cloth", "Silk and cotton thread", "Small mirrors (abhla)"],
      process: ["Draw the design", "Fix the mirrors", "Embroider", "Finish"],
      context: "The Ahir, Rabari, Jat, Mutva and other communities each have their own style. Kutch embroidery holds a GI tag.",
      community: "Women of Kutch's pastoral communities",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 15
    },
    {
      id: "sankheda-furniture", name: "Sankheda Furniture", nameHi: "संखेडा फ़र्नीचर",
      state: "Gujarat", district: "Chhota Udaipur", place: "Sankheda", category: "Handicrafts",
      tags: ["wood", "handwork"],
      hook: "Teak furniture turned on a lathe and lacquered in deep red, brown and gold.",
      does: "Craftsmen turn teak on a hand lathe, paint designs in tin foil and colour, and seal them with lacquer, rubbing the surface with a dry leaf to bring up the shine.",
      materials: ["Teak wood", "Lacquer", "Tin foil and colours", "Hand lathe"],
      process: ["Turn the parts on a lathe", "Paint the designs", "Apply lacquer", "Polish and assemble"],
      context: "Sankheda furniture holds a GI tag.",
      community: "Kharadi craftsmen of Sankheda",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 18
    },

    /* ---------- Maharashtra ---------- */
    {
      id: "paithani", name: "Paithani", nameHi: "पैठणी",
      state: "Maharashtra", district: "Chhatrapati Sambhajinagar", place: "Paithan and Yeola", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Silk saris with peacocks and lotuses woven into a gold zari border.",
      does: "Weavers use a tapestry technique, interlocking coloured silk threads by hand to form parrots, peacocks and flowers in the border and pallu.",
      materials: ["Silk", "Zari", "Handloom"],
      process: ["Dye the silk", "Warp the loom", "Weave the body", "Interlock the motifs in the pallu"],
      context: "Woven in Paithan for centuries and today also in Yeola. Paithani saris hold a GI tag.",
      community: "Weavers of Paithan and Yeola",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 290
    },
    {
      id: "himroo", name: "Himroo", nameHi: "हिमरू",
      state: "Maharashtra", district: "Chhatrapati Sambhajinagar", place: "Old city", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "A soft cotton-and-silk brocade with Persian-style flowers, a lighter cousin of royal kamkhwab.",
      does: "Weavers use an extra-weft technique on the handloom to build floral and paisley patterns in cotton and silk.",
      materials: ["Cotton and silk yarn", "Handloom"],
      process: ["Draw the design", "Set up the loom", "Weave the pattern", "Finish"],
      context: "Linked to the weavers who came to the Deccan in the 14th century, when Muhammad bin Tughlaq moved his capital to Daulatabad.",
      community: "Himroo weavers of Chhatrapati Sambhajinagar",
      engagement: learnOnly, sources: ["Maharashtra Tourism"], reviewed: R, hue: 30
    },
    {
      id: "kolhapuri-chappal", name: "Kolhapuri Chappal", nameHi: "कोल्हापुरी चप्पल",
      state: "Maharashtra", district: "Kolhapur", place: "Kolhapur", category: "Handicrafts",
      tags: ["handwork"],
      hook: "Hand-stitched leather sandals, tanned with plant dyes and braided by hand.",
      does: "Leather workers tan hide with vegetable tannins, cut the soles and straps, and stitch and braid them by hand without nails.",
      materials: ["Vegetable-tanned leather", "Cotton thread", "Awls and knives"],
      process: ["Tan the leather", "Cut the soles and straps", "Stitch and braid", "Finish"],
      context: "Kolhapuri chappals hold a GI tag shared by districts of Maharashtra and Karnataka.",
      community: "Leather workers of Kolhapur",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 28
    },
    {
      id: "sawantwadi-toys", name: "Sawantwadi Wooden Toys", nameHi: "सावंतवाडी लकड़ी के खिलौने",
      state: "Maharashtra", district: "Sindhudurg", place: "Sawantwadi", category: "Handicrafts",
      tags: ["wood", "handwork"],
      hook: "Lacquered wooden fruits, dolls and tiny kitchen sets, turned and painted by hand.",
      does: "Craftsmen shape light pangara wood on a lathe or by hand, then paint it in bright colours and finish it with lacquer.",
      materials: ["Pangara wood", "Lathe", "Lacquer and paints"],
      process: ["Shape the wood", "Smooth and prime it", "Paint", "Lacquer"],
      context: "The craft grew under the royal family of Sawantwadi, who also supported the painting of Ganjifa cards.",
      community: "Chitari craftsmen of Sawantwadi",
      engagement: learnOnly, sources: ["Maharashtra Tourism"], reviewed: R, hue: 45
    },

    /* ---------- Goa ---------- */
    {
      id: "kunbi-saree", name: "Kunbi Saree", nameHi: "कुणबी साड़ी",
      state: "Goa", district: "Across Goa", place: "Goan villages", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "A red-and-white checked cotton sari, the everyday wear of Goa's Kunbi women.",
      does: "Weavers make a coarse, sturdy cotton cloth in red and white checks. Kunbi women traditionally wore it knee-length for work in the fields.",
      materials: ["Cotton", "Handloom", "Red and white yarn"],
      process: ["Dye the yarn", "Warp the loom", "Weave the checks", "Finish"],
      context: "Once nearly lost, the Kunbi saree has been revived by Goan designers and weavers.",
      community: "Kunbi community of Goa",
      engagement: learnOnly, sources: ["Goa Tourism"], reviewed: R, hue: 0
    },
    {
      id: "goa-azulejos", name: "Goan Azulejos", nameHi: "गोवा अज़ुलेजो",
      state: "Goa", district: "North Goa", place: "Old Goa and Panaji", category: "Handicrafts",
      tags: ["handwork", "painting", "history"],
      hook: "Hand-painted blue-and-white tiles, a Portuguese art still made in Goan studios.",
      does: "Artists paint glazed tiles with metal-oxide colours, often cobalt blue, and fire them so the design fuses into the glaze.",
      materials: ["Ceramic tiles", "Glaze", "Cobalt and other oxides", "Kiln"],
      process: ["Glaze the tile", "Paint the design", "Fire", "Set the tiles into panels"],
      context: "Brought by the Portuguese, azulejos decorate churches, houses and street name plates across Goa.",
      community: "Tile painters of Goa",
      engagement: learnOnly, sources: ["Goa Tourism"], reviewed: R, hue: 215
    },

    /* ---------- Madhya Pradesh ---------- */
    {
      id: "chanderi", name: "Chanderi", nameHi: "चंदेरी",
      state: "Madhya Pradesh", district: "Ashoknagar", place: "Chanderi", category: "Weaving & textiles",
      tags: ["textile", "handwork"],
      hook: "Sheer, glossy saris of silk and cotton with little gold motifs, woven in a hilltop town.",
      does: "Weavers combine silk and fine cotton yarn on handlooms and add small motifs (buti) with an extra weft, so the cloth stays light and translucent.",
      materials: ["Silk and cotton yarn", "Zari", "Handloom"],
      process: ["Prepare the yarn", "Warp the loom", "Weave in the buti", "Finish"],
      context: "Chanderi fabric holds a GI tag.",
      community: "Weavers of Chanderi",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 300
    },
    {
      id: "maheshwari", name: "Maheshwari", nameHi: "महेश्वरी",
      state: "Madhya Pradesh", district: "Khargone", place: "Maheshwar", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "Light silk-and-cotton saris with a reversible border, woven on the banks of the Narmada.",
      does: "Weavers combine cotton, silk and zari into saris with simple stripes or checks, and a border called bugdi that looks the same on both sides, so the sari can be worn either way.",
      materials: ["Cotton and silk yarn", "Zari", "Handloom"],
      process: ["Dye the yarn", "Warp the loom", "Weave", "Finish"],
      context: "Associated with Rani Ahilyabai Holkar, who made Maheshwar her capital in 1767. Maheshwari saris received a GI tag in 2010.",
      community: "Weavers of Maheshwar",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 160
    },
    {
      id: "bagh-print", name: "Bagh Print", nameHi: "बाग प्रिंट",
      state: "Madhya Pradesh", district: "Dhar", place: "Bagh", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Red and black block prints, washed in the waters of the Baghini river.",
      does: "Khatri printers stamp geometric and floral patterns with mordants from carved blocks, then boil the cloth with natural dyes so the colours develop.",
      materials: ["Cotton", "Carved wooden blocks", "Alum and iron mordants", "Natural dyes"],
      process: ["Prepare the cloth", "Print with mordants", "Boil with dyes", "Wash in the river and dry"],
      context: "Bagh prints hold a GI tag.",
      community: "Khatri printers of Bagh",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 5
    },

    /* ---------- Chhattisgarh ---------- */
    {
      id: "bastar-dhokra", name: "Bastar Dhokra", nameHi: "बस्तर ढोकरा",
      state: "Chhattisgarh", district: "Kondagaon", place: "Kondagaon", category: "Handicrafts",
      tags: ["metal", "handwork", "history"],
      hook: "Lost-wax brass figures of animals, musicians and deities, made the way they were thousands of years ago.",
      does: "Craftsmen model the figure in clay, cover it with fine wax threads and coat it in clay again. Molten brass is poured in to replace the melted wax, and the mould is broken to free the figure.",
      materials: ["Clay", "Beeswax", "Brass", "Open-fire kiln"],
      process: ["Model the core in clay", "Cover it with wax threads", "Coat in clay and fire", "Pour the brass and break the mould"],
      context: "Bastar Dhokra holds a GI tag, and Kondagaon is its main centre.",
      community: "Ghadwa metal casters of Bastar",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 35
    },
    /* ---------- Restored with team photos ---------- */
    {
      id: "leheriya", name: "Leheriya", nameHi: "लहरिया",
      state: "Rajasthan", district: "Jaipur", place: "Jaipur and Jodhpur", category: "Weaving & textiles",
      tags: ["textile", "handwork"],
      hook: "Diagonal stripes like ripples of wind on desert sand, made by rolling and tying the cloth before it is dyed.",
      does: "Thin cloth is rolled on the diagonal, tied at intervals and dyed. Rolling and dyeing again in the other direction gives the crossed pattern called mothra.",
      materials: ["Thin cotton or silk", "Thread", "Dyes"],
      process: ["Roll the cloth on the diagonal", "Tie at intervals", "Dye", "Untie, re-roll and dye again for mothra"],
      context: "The name comes from lehar, a wave. Leheriya is worn for Teej, Gangaur and the monsoon, and newly married women often wear the crossed mothra at Teej.",
      community: "Dyers of Jaipur and Jodhpur",
      engagement: learnOnly, sources: ["Rajasthan Tourism"], reviewed: R, hue: 290
    },
    {
      id: "ajrakh", name: "Ajrakh Printing", nameHi: "अजरख",
      state: "Gujarat", district: "Kutch", place: "Ajrakhpur and Dhamadka", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Deep indigo and madder red, printed and dyed in around fourteen stages over two to three weeks.",
      does: "The cloth is washed and treated, printed with resists and mordants from carved blocks, and dyed in indigo and madder again and again, with washing and drying in the sun between stages.",
      materials: ["Cotton", "Indigo", "Madder or alizarin", "Carved wooden blocks"],
      process: ["Wash and treat the cloth", "Print the resist and mordant", "Dye in indigo", "Dye in madder and wash"],
      context: "The Khatri community brought the craft from Sindh about 400 years ago. After the 2001 earthquake many families moved from Dhamadka to the new village of Ajrakhpur. Kutch Ajrakh received a GI tag in 2024.",
      community: "Khatri printer families of Kutch",
      engagement: learnOnly, sources: ["GI Registry of India", "Development Commissioner (Handicrafts), Ministry of Textiles"], reviewed: R, hue: 220
    },
    {
      id: "tangaliya", name: "Tangaliya", nameHi: "टांगलिया",
      state: "Gujarat", district: "Surendranagar", place: "Vastadi and Dedadra", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Tiny raised dots of thread, twisted into the warp one by one, that build into patterns on wool and cotton.",
      does: "As they weave, weavers twist a contrasting thread around small groups of warp threads, so raised dots called daana build up into geometric motifs.",
      materials: ["Sheep wool or cotton", "Pit loom", "Coloured yarn"],
      process: ["Warp the loom", "Weave the ground", "Twist in the daana dots", "Finish"],
      context: "Woven for about 700 years by the Dangasia community in villages of Surendranagar. Tangaliya shawls received a GI tag in 2009.",
      community: "Dangasia weavers of Surendranagar",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 30
    },
    {
      id: "kaavi-art", name: "Kaavi Art", nameHi: "कावी कला",
      state: "Goa", district: "Across Goa", place: "Temples and old houses", category: "Painting",
      tags: ["painting", "history", "spiritual"],
      hook: "Murals cut into wet plaster in a single red made from laterite earth, on Goa's temples and old houses.",
      does: "Artists lay a white lime plaster and cover it with red kaav, laterite ground with lime. While it is still wet they etch the design and scrape back the red, so the pattern shows in white.",
      materials: ["Red laterite pigment (kaav)", "Shell-lime plaster", "Steel scrapers, compasses and stencils"],
      process: ["Lay a white lime plaster", "Cover it with red kaav", "Etch the design while wet", "Scrape back to reveal the white"],
      context: "Found on temples, old chapels and houses along the Konkan coast. A 2016 survey led by heritage writer Heta Pandit recorded Kaavi work in more than 21 temples and four houses in Goa.",
      community: "Kaavi artists of Goa and the Konkan",
      engagement: learnOnly, sources: ["Development Commissioner (Handicrafts), Ministry of Textiles"], reviewed: R, hue: 10
    },
    {
      id: "godna-painting", name: "Godna Painting", nameHi: "गोदना चित्रकला",
      state: "Chhattisgarh", district: "Surguja", place: "Jamgala and Surguja villages", category: "Painting",
      tags: ["painting", "history"],
      hook: "Patterns once tattooed on the skin, now drawn on paper and cloth.",
      does: "Women paint the dots, lines, birds and trees of traditional godna tattoos onto paper and cloth, often working together in self-help groups.",
      materials: ["Paper and cloth", "Natural colours and ink", "Fine brushes"],
      process: ["Draw the motifs", "Fill with dots and lines", "Build the border", "Finish"],
      context: "Godna began as tattooing, traditionally done by women for women. Chhattisgarh's painted styles include Godi Godna of Surguja and Devar Godna of Rajnandgaon, and a Gond women's group in Jamgala village is a known centre.",
      community: "Women artists of Surguja",
      engagement: learnOnly, sources: ["Chhattisgarh Tourism", "People's Archive of Rural India"], reviewed: R, hue: 20
    }
  );
})();
