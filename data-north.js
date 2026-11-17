// North India traditions: J&K, Ladakh, Himachal Pradesh, Punjab, Haryana, Uttarakhand,
// Uttar Pradesh, Delhi and Chandigarh. Loaded after data.js; each record joins the main list.
// Categories follow the eight CurioTrail categories (Painting, Cooking & food, Weaving & textiles,
// Music & dance, Handicrafts, Spiritual, Farming & nature, History); woodwork and metalwork are
// secondary tags inside Handicrafts.
(function () {
  const learnOnly = { visit: false, observe: false, participate: false };
  const R = "Nov 2026";
  window.CT_DATA.records.push(
    /* ---------- Jammu & Kashmir ---------- */
    {
      id: "kashmir-pashmina", name: "Kashmir Pashmina", nameHi: "कश्मीरी पश्मीना",
      state: "Jammu & Kashmir", district: "Srinagar", place: "Old city, Srinagar", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Shawls spun from the fine winter undercoat of Himalayan goats, light enough to be drawn through a ring.",
      does: "Women clean the raw fibre and hand-spin it on a wooden wheel called a yinder. Men weave the yarn on handlooms into shawls, which are then washed, clipped and finished. Some are later embroidered.",
      materials: ["Raw pashm from Changthangi goats", "Yinder spinning wheel", "Handloom", "Water for washing and finishing"],
      process: ["Comb and clean the raw pashm", "Hand-spin fine yarn on the yinder", "Warp and weave on a handloom", "Wash, clip and finish the shawl"],
      context: "The fibre comes from goats herded on the high plateau of Ladakh. Hand-spun, handwoven Kashmir Pashmina holds a GI tag.",
      community: "Spinners and weavers of Srinagar's old city",
      engagement: learnOnly, sources: ["GI Registry of India", "Department of Handicrafts & Handloom, J&K"], reviewed: R, hue: 30
    },
    {
      id: "aari-embroidery", name: "Aari Embroidery (Kashidakari)", nameHi: "आरी कढ़ाई (कशीदाकारी)",
      state: "Jammu & Kashmir", district: "Srinagar", place: "Srinagar and nearby villages", category: "Weaving & textiles",
      tags: ["textile", "handwork"],
      hook: "A hooked needle traces chain-stitch vines and chinar leaves across shawls, rugs and cushion covers.",
      does: "The embroiderer holds the aari, a fine hook, like a pen and pulls wool or silk through the cloth in one continuous chain stitch, filling in flowers, birds and creepers.",
      materials: ["Aari hook", "Wool, cotton or silk thread", "Cotton, wool or felt cloth", "Wooden blocks for printing the design"],
      process: ["Print or draw the design on the cloth", "Stretch the cloth", "Chain-stitch the outlines and fill them", "Wash and finish"],
      context: "Kashidakari is the family name for Kashmir's embroidery. Aari chain stitch, known locally as zalakdozi, covers large areas quickly and is used on crewel furnishings and on namda felt rugs.",
      community: "Embroiderers of Srinagar and the Kashmir valley",
      engagement: learnOnly, sources: ["Department of Handicrafts & Handloom, J&K"], reviewed: R, hue: 350
    },
    {
      id: "khatamband", name: "Khatamband", nameHi: "खतमबंद",
      state: "Jammu & Kashmir", district: "Srinagar", place: "Old city, Srinagar", category: "Handicrafts",
      tags: ["wood", "handwork", "history"],
      hook: "Ceilings made of thousands of small wooden pieces locked into geometric patterns, with no nails.",
      does: "Carpenters cut thin strips and small polygons of deodar, pine or walnut and join them by groove and tongue into star and hexagon patterns that cover a whole ceiling.",
      materials: ["Deodar, pine or walnut wood", "Hand saws and planes", "Groove-and-tongue joints"],
      process: ["Plan the geometric pattern", "Cut strips and small polygons", "Join the pieces by groove and tongue", "Fit the panels to the ceiling"],
      context: "Linked to the Persian craftsmen who came to Kashmir in the 14th century, khatamband decorates mosques, shrines and old houses in Srinagar. It holds a GI tag.",
      community: "Khatamband carpenters of Srinagar",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 28
    },

    /* ---------- Ladakh ---------- */
    {
      id: "ladakh-pashmina", name: "Changthangi Pashmina", nameHi: "चांगथांगी पश्मीना",
      state: "Ladakh", district: "Leh", place: "Changthang plateau", category: "Weaving & textiles",
      tags: ["farming", "textile", "history"],
      hook: "Changpa herders raise pashmina goats above 4,000 metres, where the cold grows the finest undercoat.",
      does: "In early summer the herders comb the soft undercoat from their goats by hand. The raw fibre is sorted and cleaned, then spun and woven in Leh or sold to Kashmir's weavers.",
      materials: ["Changthangi goats", "Hand combs", "Raw pashm fibre"],
      process: ["Graze the herds on high pastures", "Comb the undercoat in early summer", "Sort and clean the fibre", "Spin and weave, or sell to weavers"],
      context: "The Changpa are nomadic herders of the Changthang plateau. Their goats give the raw fibre for the world's finest pashmina.",
      community: "Changpa herding families of Changthang",
      engagement: learnOnly, sources: ["Leh district website"], reviewed: R, hue: 45
    },
    {
      id: "ladakh-woodcarving", name: "Ladakhi Wood Carving (Shingskos)", nameHi: "लद्दाखी काष्ठ नक्काशी",
      state: "Ladakh", district: "Leh", place: "Leh", category: "Handicrafts",
      tags: ["wood", "handwork", "spiritual"],
      hook: "Carved and painted doors, windows and low choktse tables, full of dragons, lotuses and lucky symbols.",
      does: "Carpenters carve willow and poplar wood in relief with Buddhist motifs, then often paint it in bright colours for homes and monasteries.",
      materials: ["Willow and poplar wood", "Chisels and mallets", "Bright paints"],
      process: ["Season the wood", "Draw the motif", "Carve in relief", "Paint and finish"],
      context: "Ladakh's woodcraft decorates monastery doorways, household shrines and the choktse tables used for tea and prayer books.",
      community: "Carpenters and carvers of Leh",
      engagement: learnOnly, sources: ["Leh district website"], reviewed: R, hue: 25
    },

    /* ---------- Himachal Pradesh ---------- */
    {
      id: "kangra-painting", name: "Kangra Miniature Painting", nameHi: "कांगड़ा लघु चित्रकला",
      state: "Himachal Pradesh", district: "Kangra", place: "Kangra and Dharamshala", category: "Painting",
      tags: ["painting", "handwork", "history"],
      hook: "Soft greens, graceful figures and the love story of Radha and Krishna, painted in the Himalayan foothills.",
      does: "Painters prepare wasli paper, sketch with a fine brush, fill in mineral and vegetable colours, and finish faces and jewellery with squirrel-hair brushes.",
      materials: ["Wasli paper", "Mineral and vegetable colours", "Squirrel-hair brushes", "Gold"],
      process: ["Prepare and burnish the paper", "Sketch the outline", "Lay in colour", "Paint faces and fine detail", "Burnish the finished painting"],
      context: "Flourished in the late 18th century under Raja Sansar Chand of Kangra and is one of the best-known Pahari schools. Kangra paintings hold a GI tag.",
      community: "Painters of Kangra and the Himachal hills",
      engagement: learnOnly, sources: ["GI Registry of India", "Museum of Kangra Art, Dharamshala"], reviewed: R, hue: 120
    },
    {
      id: "kullu-shawl", name: "Kullu Shawl", nameHi: "कुल्लू शॉल",
      state: "Himachal Pradesh", district: "Kullu", place: "Kullu valley", category: "Weaving & textiles",
      tags: ["textile", "handwork"],
      hook: "Plain wool shawls with bright geometric borders, woven on wooden looms across the Kullu valley.",
      does: "Weavers weave the plain body of the shawl, then pick out the coloured border patterns thread by thread with an extra weft.",
      materials: ["Sheep wool, angora or pashmina", "Wooden handloom", "Coloured yarn for borders"],
      process: ["Spin and dye the yarn", "Warp the loom", "Weave the body", "Pick out the patterned border"],
      context: "Kullu shawls hold a GI tag. The same patterns appear on the pattu, the thick wool wrap worn by women in Kullu.",
      community: "Weavers of the Kullu valley",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 330
    },
    {
      id: "kinnauri-shawl", name: "Kinnauri Shawl", nameHi: "किन्नौरी शॉल",
      state: "Himachal Pradesh", district: "Kinnaur", place: "Kinnaur villages", category: "Weaving & textiles",
      tags: ["textile", "handwork", "spiritual"],
      hook: "Dense bands of colour woven with motifs drawn from Buddhist and Hindu symbols.",
      does: "Using an extra-weft technique on a handloom, weavers build the coloured border one motif at a time. A single shawl can take weeks.",
      materials: ["Local sheep wool", "Handloom", "Dyed yarns"],
      process: ["Spin and dye the yarn", "Warp the loom", "Weave the plain field", "Build the patterned bands"],
      context: "Kinnauri shawls hold a GI tag and are worn at festivals and weddings in Kinnaur.",
      community: "Weavers of Kinnaur",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 12
    },
    {
      id: "chamba-rumal", name: "Chamba Rumal", nameHi: "चंबा रुमाल",
      state: "Himachal Pradesh", district: "Chamba", place: "Chamba town", category: "Weaving & textiles",
      tags: ["textile", "painting", "handwork"],
      hook: "Square cloths embroidered so finely that the picture is the same on both sides.",
      does: "A design is drawn on fine cotton, often by miniature painters, then filled with untwisted silk in a double satin stitch (do-rukha), so the cloth has no wrong side.",
      materials: ["Fine muslin or khaddar", "Untwisted silk thread", "Needle"],
      process: ["Draw the design", "Choose the silk colours", "Fill with double satin stitch", "Finish the border"],
      context: "Used to cover gifts and offerings at weddings and festivals. Chamba rumals hold a GI tag.",
      community: "Embroiderers of Chamba",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 40
    },
    {
      id: "himachali-cap", name: "Himachali Cap", nameHi: "हिमाचली टोपी",
      state: "Himachal Pradesh", district: "Kullu", place: "Kullu and Kinnaur", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "A round wool cap with a coloured band, worn with pride at every festival in the hills.",
      does: "The crown is cut from handwoven wool and stitched to a stiffened band, which is faced with velvet or with a woven Kullu pattern.",
      materials: ["Handwoven wool", "Velvet or patterned band", "Thread"],
      process: ["Cut the crown and band", "Stiffen the band", "Stitch them together", "Add the coloured facing"],
      context: "The Kullu cap usually has a patterned woven band, and the Kinnauri cap a green velvet one. Both are part of formal dress.",
      community: "Cap makers of Kullu and Kinnaur",
      engagement: learnOnly, sources: ["Himachal Pradesh Tourism"], reviewed: R, hue: 140
    },
    {
      id: "mohras", name: "Mohras (Metal Faces of the Deities)", nameHi: "मोहरे",
      state: "Himachal Pradesh", district: "Kullu", place: "Kullu and Mandi temples", category: "Handicrafts",
      tags: ["metal", "spiritual", "history"],
      hook: "Brass and silver faces of the village gods, carried on palanquins at Kullu Dussehra.",
      does: "Metalsmiths cast or emboss brass, copper or silver into the face of a deity, which is mounted on the god's palanquin (rath) or kept in the temple.",
      materials: ["Brass, copper or silver", "Repoussé hammers", "Casting moulds"],
      process: ["Shape the face by casting or repoussé", "Chase the details", "Polish", "Consecrate it in the temple"],
      context: "Each village god has its own mohras. At Kullu Dussehra, hundreds of deities are carried to the Dhalpur ground with their metal faces shining.",
      community: "Metalsmiths and temple communities of Kullu and Mandi",
      engagement: learnOnly, sources: ["Kullu district website"], reviewed: R, hue: 45
    },

    /* ---------- Uttarakhand ---------- */
    {
      id: "bhotia-carpets", name: "Bhotia Dann Carpets", nameHi: "भोटिया दन कालीन",
      state: "Uttarakhand", district: "Pithoragarh", place: "Munsiyari and Dharchula", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Thick wool carpets with dragons and flowers, knotted by Bhotia women in the high valleys.",
      does: "Women knot wool carpets (dann) on upright looms, alongside thulma blankets and pankhi shawls, using wool from local sheep.",
      materials: ["Local sheep wool", "Upright loom", "Dyed wool"],
      process: ["Spin and dye the wool", "Warp the loom", "Knot the pile row by row", "Trim and finish"],
      context: "The Bhotia, a trans-Himalayan trading community, wove for their own use and for trade with Tibet. Weaving is still a key income in Munsiyari and Dharchula.",
      community: "Bhotia women weavers of Pithoragarh",
      engagement: learnOnly, sources: ["Pithoragarh district website"], reviewed: R, hue: 15
    },
    {
      id: "ringaal-craft", name: "Ringaal Basketry", nameHi: "रिंगाल शिल्प",
      state: "Uttarakhand", district: "Across Kumaon & Garhwal", place: "Hill villages", category: "Handicrafts",
      tags: ["handwork", "farming"],
      hook: "A slender hill bamboo, split and woven into the baskets carried on every back in the Uttarakhand hills.",
      does: "Craftspeople split ringaal, a dwarf hill bamboo, into thin strips and weave baskets, mats, trays and grain stores.",
      materials: ["Ringaal (dwarf bamboo)", "Knife"],
      process: ["Cut ringaal in season", "Split it into strips", "Soak the strips to keep them supple", "Weave"],
      context: "Ringaal baskets carry fodder, grain and firewood. The craft is traditionally practised by the Rudiya community.",
      community: "Ringaal craftspeople of the Uttarakhand hills",
      engagement: learnOnly, sources: ["Uttarakhand Bamboo and Fibre Development Board"], reviewed: R, hue: 70
    },

    /* ---------- Uttar Pradesh ---------- */
    {
      id: "chikankari", name: "Lucknow Chikankari", nameHi: "लखनवी चिकनकारी",
      state: "Uttar Pradesh", district: "Lucknow", place: "Old Lucknow", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "White-on-white shadow embroidery so delicate it looks like light falling on muslin.",
      does: "Designs are printed on fine cloth with wooden blocks in a washable dye. Embroiderers, mostly women working at home, fill them with around thirty stitches, from shadow-work to tiny knots, and the cloth is then washed.",
      materials: ["Muslin, cotton or georgette", "White and pastel cotton thread", "Wooden printing blocks"],
      process: ["Cut the garment", "Block-print the design", "Embroider", "Wash and finish"],
      context: "Associated with the Nawabs of Awadh. Lucknow Chikan Craft holds a GI tag.",
      community: "Women embroiderers of Lucknow and nearby villages",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 200
    },
    {
      id: "zardozi", name: "Zardozi", nameHi: "ज़रदोज़ी",
      state: "Uttar Pradesh", district: "Lucknow", place: "Lucknow, Bareilly and Farrukhabad", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Embroidery in gold and silver wire, once made for royal robes and still made for brides.",
      does: "Karigars stretch the cloth on a wooden frame (adda) and stitch on metallic wire, sequins, beads and coiled thread with a hooked needle.",
      materials: ["Metallic wire (zari)", "Sequins and beads", "Silk or velvet", "Wooden adda frame"],
      process: ["Trace the design", "Stretch the cloth on the adda", "Stitch down the metal threads", "Finish"],
      context: "Came to India from Persia and was patronised by the Mughals. Lucknow Zardozi holds a GI tag.",
      community: "Zardozi karigars of Lucknow, Bareilly and Farrukhabad",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 45
    },
    {
      id: "banarasi-silk", name: "Banarasi Silk", nameHi: "बनारसी रेशम",
      state: "Uttar Pradesh", district: "Varanasi", place: "Varanasi", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Silk saris woven with gold and silver brocade, at the heart of a north Indian bride's trousseau.",
      does: "Weavers set up a handloom with a jacquard of punched cards that lifts the threads for the pattern, then weave silk and zari together into brocade. One sari can take weeks.",
      materials: ["Mulberry silk", "Zari", "Jacquard handloom"],
      process: ["Design and punch the jacquard cards", "Warp the loom", "Weave the brocade", "Finish"],
      context: "Banaras Brocades and Sarees hold a GI tag. Many of the weavers belong to Ansari families in and around Varanasi.",
      community: "Weaving families of Varanasi",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 340
    },
    {
      id: "moradabad-brass", name: "Moradabad Brassware", nameHi: "मुरादाबाद पीतल",
      state: "Uttar Pradesh", district: "Moradabad", place: "Moradabad", category: "Handicrafts",
      tags: ["metal", "handwork"],
      hook: "Peetal Nagri, the brass city, where vases and trays are cast, engraved and coloured.",
      does: "Artisans cast brass in sand moulds, then engrave or emboss it, sometimes fill the patterns with coloured lacquer, and polish it.",
      materials: ["Brass", "Sand moulds", "Engraving tools", "Coloured lacquer"],
      process: ["Cast in sand moulds", "Turn and finish", "Engrave or emboss", "Colour and polish"],
      context: "Moradabad metal craft holds a GI tag, and the city sells brassware around the world.",
      community: "Metal craftsmen of Moradabad",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 40
    },
    {
      id: "khurja-pottery", name: "Khurja Pottery", nameHi: "खुर्जा मृद्भांड",
      state: "Uttar Pradesh", district: "Bulandshahr", place: "Khurja", category: "Handicrafts",
      tags: ["handwork"],
      hook: "Glazed pottery painted with bold flowers in blue, red and brown, from the pottery town of Khurja.",
      does: "Potters shape the ware on wheels or in moulds, paint it by hand, glaze it and fire it in kilns.",
      materials: ["Clay", "Glazes", "Potter's wheel and moulds", "Kilns"],
      process: ["Prepare the clay", "Shape on the wheel or in a mould", "Paint and glaze", "Fire"],
      context: "Khurja pottery holds a GI tag.",
      community: "Potters of Khurja",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 210
    },
    {
      id: "agra-inlay", name: "Agra Marble Inlay (Parchin Kari)", nameHi: "आगरा पच्चीकारी",
      state: "Uttar Pradesh", district: "Agra", place: "Agra", category: "Handicrafts",
      tags: ["handwork", "history"],
      hook: "Coloured stones set into white marble, the craft that decorates the Taj Mahal.",
      does: "Craftsmen cut thin pieces of stones such as lapis, malachite and carnelian on a hand-turned wheel, shape them to fit, and set them into grooves carved in the marble.",
      materials: ["White marble", "Semi-precious stones", "Hand-turned grinding wheel"],
      process: ["Draw and carve the grooves", "Cut and shape the stone pieces", "Set the pieces in place", "Polish"],
      context: "Parchin kari reached its height in Mughal buildings such as the Taj Mahal, and inlay workshops still work in Agra today.",
      community: "Inlay craftsmen of Agra",
      engagement: learnOnly, sources: ["Uttar Pradesh Tourism"], reviewed: R, hue: 180
    },
    {
      id: "nizamabad-pottery", name: "Nizamabad Black Pottery", nameHi: "निज़ामाबाद काली मिट्टी",
      state: "Uttar Pradesh", district: "Azamgarh", place: "Nizamabad", category: "Handicrafts",
      tags: ["handwork"],
      hook: "Jet-black pots etched with shining silver-coloured patterns.",
      does: "Potters shape the ware, coat it with a fine slip and fire it in a smothered kiln, where smoke turns it black. Patterns are etched and filled with a silver-coloured mix.",
      materials: ["Fine local clay", "Slip coating", "Smoke firing", "Silver-coloured filling"],
      process: ["Shape and dry", "Coat with slip", "Fire in a smothered kiln", "Etch and fill the pattern"],
      context: "Nizamabad black clay pottery holds a GI tag.",
      community: "Potters of Nizamabad",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 260
    },

    /* ---------- Delhi ---------- */
    {
      id: "delhi-meenakari", name: "Kundan-Meenakari Jewellery", nameHi: "कुंदन मीनाकारी",
      state: "Delhi", district: "Old Delhi", place: "Dariba Kalan", category: "Handicrafts",
      tags: ["metal", "handwork", "history"],
      hook: "Gems set in pure gold on the front, bright enamel on the back.",
      does: "The gold piece is shaped and engraved. The enameller fills the grooves with coloured enamel and fires it, then the setter fixes the stones in pure gold foil (kundan) on the front.",
      materials: ["Gold", "Enamel colours", "Gemstones", "Pure gold foil (kundan)"],
      process: ["Shape the gold", "Engrave the design", "Enamel and fire", "Set the stones in kundan"],
      context: "Kundan and meenakari flourished at the Mughal court. Dariba Kalan in Old Delhi is a long-standing street of jewellers.",
      community: "Jewellers and enamellers of Old Delhi",
      engagement: learnOnly, sources: ["Delhi Tourism"], reviewed: R, hue: 330
    },

    /* ---------- Chandigarh ---------- */
    {
      id: "chandigarh-furniture", name: "Chandigarh Modernist Furniture", nameHi: "चंडीगढ़ आधुनिक फ़र्नीचर",
      state: "Chandigarh", district: "Chandigarh", place: "Capitol Complex", category: "Handicrafts",
      tags: ["wood", "history"],
      hook: "Teak and cane chairs designed for a brand-new city in the 1950s and built by local carpenters.",
      does: "Local carpenters built teak and cane chairs, desks and benches for the city's offices and colleges from designs by Pierre Jeanneret and Le Corbusier's team.",
      materials: ["Teak", "Cane", "Hand joinery"],
      process: ["Cut and join the teak frames", "Weave the cane seats", "Finish and polish"],
      context: "The furniture became famous around the world, and Chandigarh now protects the surviving pieces as heritage.",
      community: "Carpenters and cane weavers of Chandigarh",
      engagement: learnOnly, sources: ["Chandigarh Administration"], reviewed: R, hue: 30
    },
    /* ---------- Restored with team photos ---------- */
    {
      id: "kishtwar-loi", name: "Kishtwar Loi", nameHi: "किश्तवाड़ी लोई",
      state: "Jammu & Kashmir", district: "Kishtwar", place: "Kishtwar villages", category: "Weaving & textiles",
      tags: ["textile", "handwork"],
      hook: "A thick, plain wool wrap that keeps out the cold of the high Kishtwar valleys.",
      does: "Local sheep wool is washed, carded and spun, then woven on a handloom into a dense cloth, often left in natural cream, grey or brown. The finished loi is worn as a large wrap by men.",
      materials: ["Local sheep wool", "Spindle or spinning wheel", "Handloom"],
      process: ["Shear and wash the wool", "Card and spin", "Weave on a handloom", "Wash and finish"],
      context: "The loi is the everyday men's wool wrap of the western Himalaya, worn through the long winters of the Kishtwar hills.",
      community: "Weaving families of Kishtwar district",
      engagement: learnOnly, sources: ["Department of Handicrafts & Handloom, J&K"], reviewed: R, hue: 40
    },
    {
      id: "punjabi-durrie", name: "Punjabi Durrie (Panja Dari)", nameHi: "पंजाबी दरी",
      state: "Punjab", district: "Across Punjab", place: "Village homes", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Flat cotton rugs woven at home by women and carried to a new home as part of the bride's dowry.",
      does: "Women stretch a cotton warp on a simple frame and weave thick cotton weft in geometric patterns, beating each row tight with a metal comb called a panja, which gives the craft its name.",
      materials: ["Cotton yarn", "Frame loom", "Panja (beating comb)"],
      process: ["Dye the cotton", "Set up the warp", "Weave the pattern row by row", "Beat each row tight with the panja"],
      context: "Bridal durries were woven by women for their own families, much like phulkari. Women's groups such as Virsa, around 200 artisans, are now reviving the craft.",
      community: "Women weavers in Punjab's villages",
      engagement: learnOnly, sources: ["Development Commissioner (Handicrafts), Ministry of Textiles"], reviewed: R, hue: 16
    },
    {
      id: "panipat-handloom", name: "Panipat Handloom", nameHi: "पानीपत हथकरघा",
      state: "Haryana", district: "Panipat", place: "Panipat", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "India's handloom city, weaving durries, khes and blankets, much of it from recycled yarn.",
      does: "Weavers make cotton durries, chequered khes sheets, blankets and furnishing fabric. Many workshops shred old clothes and spin the fibre into new yarn.",
      materials: ["Cotton and wool yarn", "Recycled fibre", "Handlooms"],
      process: ["Sort old cloth and recover the fibre", "Spin and dye the yarn", "Weave durries, khes and furnishings", "Finish"],
      context: "Weavers who came from West Punjab after Partition in 1947 brought the double-cloth khes with them. Today Panipat is one of the world's largest centres for recycling textiles into yarn.",
      community: "Weaving families and workshops of Panipat",
      engagement: learnOnly, sources: ["The Tribune", "Global InCH"], reviewed: R, hue: 200
    },
    {
      id: "bhadohi-carpets", name: "Bhadohi Hand-knotted Carpets", nameHi: "भदोही कालीन",
      state: "Uttar Pradesh", district: "Bhadohi", place: "Bhadohi and Mirzapur", category: "Weaving & textiles",
      tags: ["textile", "handwork"],
      hook: "India's carpet city, where wool rugs are knotted by hand for homes and halls around the world.",
      does: "Weavers sit at upright looms and tie wool knots row by row from a design graph, from about 30 to 300 knots per square inch. The carpet is then washed, clipped and stretched.",
      materials: ["Wool", "Cotton warp", "Upright loom", "Design graph"],
      process: ["Dye the wool", "Warp the loom", "Knot row by row", "Wash, clip and finish"],
      context: "Bhadohi's handmade carpets received a GI tag in 2010 that covers the whole carpet belt, from Mirzapur to Varanasi. Carpets for the new Parliament building, opened in 2023, were knotted here.",
      community: "Carpet weavers of Bhadohi and Mirzapur",
      engagement: learnOnly, sources: ["GI Registry of India", "India.gov.in, One District One Product"], reviewed: R, hue: 5
    }
  );
})();
