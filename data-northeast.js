// Northeast India & Sikkim traditions: Assam, Arunachal Pradesh, Nagaland, Manipur, Meghalaya,
// Mizoram, Tripura and Sikkim. Loaded after data.js; each record joins the main list.
// Thangka (Arunachal & Sikkim) is already on the site and is not repeated here.
(function () {
  const learnOnly = { visit: false, observe: false, participate: false };
  const R = "Nov 2026";
  window.CT_DATA.records.push(
    /* ---------- Assam ---------- */
    {
      id: "muga-silk", name: "Muga Silk", nameHi: "मूगा सिल्क",
      state: "Assam", district: "Kamrup", place: "Sualkuchi and Upper Assam", category: "Weaving & textiles",
      tags: ["textile", "farming", "history"],
      hook: "A golden silk found only in Assam, whose shine grows richer with every wash.",
      does: "Muga silkworms feed outdoors on som and soalu trees. Their cocoons are boiled and reeled, and the golden yarn is woven into mekhela chadors and gamosas.",
      materials: ["Muga cocoons", "Som and soalu trees", "Reeling tools", "Handloom"],
      process: ["Rear the silkworms on the trees", "Collect and boil the cocoons", "Reel the yarn", "Weave"],
      context: "Assam Muga silk holds a GI tag.",
      community: "Silk rearers and weavers of Assam",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 45
    },
    {
      id: "eri-silk", name: "Eri Silk", nameHi: "एरी सिल्क",
      state: "Assam", district: "Across Assam", place: "Village homes", category: "Weaving & textiles",
      tags: ["textile", "farming"],
      hook: "A warm, soft silk spun after the moth has left its cocoon, often called peace silk.",
      does: "Eri silkworms are reared indoors on castor leaves. Once the moths emerge, the open cocoons are boiled and hand-spun, and the yarn is woven into shawls and wraps.",
      materials: ["Eri cocoons", "Castor leaves", "Hand spindle", "Handloom"],
      process: ["Rear the silkworms on castor leaves", "Let the moths emerge", "Boil and hand-spin", "Weave"],
      context: "Eri is reared by many communities across Assam and Meghalaya and is prized for winter wraps.",
      community: "Bodo, Mising and other weaving communities of Assam",
      engagement: learnOnly, sources: ["Central Silk Board"], reviewed: R, hue: 30
    },
    {
      id: "sualkuchi-weaving", name: "Sualkuchi Weaving", nameHi: "सुआलकुची बुनाई",
      state: "Assam", district: "Kamrup", place: "Sualkuchi", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "A riverside village where almost every house has a loom weaving silk mekhela chadors.",
      does: "Weavers work Pat, Muga and Eri silk on handlooms, adding motifs with extra weft to make the two-piece mekhela chador worn by Assamese women.",
      materials: ["Pat, Muga and Eri silk", "Handloom"],
      process: ["Prepare the yarn", "Warp the loom", "Weave in the motifs", "Finish"],
      context: "Sualkuchi, on the north bank of the Brahmaputra, is known as the weaving heart of Assam.",
      community: "Weavers of Sualkuchi",
      engagement: learnOnly, sources: ["Assam Tourism"], reviewed: R, hue: 330
    },
    {
      id: "jaapi", name: "Jaapi", nameHi: "जापी",
      state: "Assam", district: "Across Assam", place: "Nalbari and Dhemaji", category: "Handicrafts",
      tags: ["handwork", "history"],
      hook: "A conical hat of bamboo and palm leaf, worn in the fields and given to honour guests.",
      does: "Craftspeople weave two layers of split bamboo and cane and sandwich palm leaves between them. Decorative jaapis are covered in coloured cloth and patterns.",
      materials: ["Split bamboo and cane", "Tokou palm leaves", "Coloured cloth"],
      process: ["Split the bamboo", "Weave the frame", "Layer in the palm leaves", "Decorate"],
      context: "A symbol of Assamese identity, offered to guests as a mark of respect.",
      community: "Jaapi makers of Assam",
      engagement: learnOnly, sources: ["Assam Tourism"], reviewed: R, hue: 40
    },
    {
      id: "majuli-masks", name: "Majuli Masks", nameHi: "माजुली मुखौटे",
      state: "Assam", district: "Majuli", place: "Samaguri Satra", category: "Handicrafts",
      tags: ["handwork", "spiritual", "music"],
      hook: "Masks of bamboo, cloth and clay, made in the monasteries of a great river island.",
      does: "Craftsmen weave a bamboo frame, cover it with cloth dipped in clay and dung, shape the features and paint them.",
      materials: ["Bamboo", "Cloth", "Clay and cow dung", "Colours"],
      process: ["Weave the bamboo frame", "Cover with clay-dipped cloth", "Shape the features", "Paint"],
      context: "Made for bhaona, the devotional theatre of the Vaishnava satras founded by Srimanta Sankardev.",
      community: "Mask makers of Samaguri Satra",
      engagement: learnOnly, sources: ["Assam Tourism"], reviewed: R, hue: 200
    },
    {
      id: "sarthebari-metal", name: "Sarthebari Bell Metal", nameHi: "सार्थेबारी कांसा",
      state: "Assam", district: "Barpeta", place: "Sarthebari", category: "Handicrafts",
      tags: ["metal", "handwork", "history"],
      hook: "Bell-metal plates, bowls and cymbals beaten out by hand in Barpeta.",
      does: "Metalworkers melt copper and tin into bell metal, cast it into discs and beat them into plates, bowls and cymbals.",
      materials: ["Bell metal (copper and tin)", "Furnace", "Hammers"],
      process: ["Melt and alloy the metal", "Cast the discs", "Beat into shape", "Polish"],
      context: "The bota, a bell-metal tray on a stand, is used to offer gifts and honour guests in Assam.",
      community: "Bell-metal workers of Sarthebari",
      engagement: learnOnly, sources: ["Assam Tourism"], reviewed: R, hue: 38
    },

    /* ---------- Arunachal Pradesh ---------- */
    {
      id: "arunachal-cane", name: "Arunachal Cane & Bamboo Craft", nameHi: "अरुणाचल बेंत-बाँस शिल्प",
      state: "Arunachal Pradesh", district: "Across Arunachal", place: "Siang valley villages", category: "Handicrafts",
      tags: ["handwork", "farming"],
      hook: "Baskets, hats and even river bridges woven from cane and bamboo.",
      does: "Craftspeople split cane and bamboo and weave carrying baskets, hats, mats and containers. Some communities also build cane suspension bridges across rivers.",
      materials: ["Cane (rattan)", "Bamboo", "Knives"],
      process: ["Cut and split the cane", "Smooth the strips", "Weave", "Finish the rim"],
      context: "The Adi carry grain and firewood in a cane-and-bamboo basket called the nadang.",
      community: "Adi and other communities of Arunachal",
      engagement: learnOnly, sources: ["Arunachal Pradesh Tourism"], reviewed: R, hue: 70
    },

    /* ---------- Nagaland ---------- */
    {
      id: "naga-shawl", name: "Naga Shawls", nameHi: "नागा शॉल",
      state: "Nagaland", district: "Across Nagaland", place: "Kohima and Phek", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "Each tribe's shawl has its own colours and bands, worn to show who you are.",
      does: "Women weave shawls on backstrap looms, with stripes and bands that mark the tribe and sometimes the wearer's status. Some bands carry painted or embroidered animals.",
      materials: ["Cotton yarn", "Backstrap loom", "Dyes"],
      process: ["Prepare the yarn", "Weave on the backstrap loom", "Add the bands and motifs", "Finish"],
      context: "The Chakhesang shawl holds a GI tag.",
      community: "Women weavers of the Naga tribes",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 0
    },
    {
      id: "naga-beadwork", name: "Naga Beadwork", nameHi: "नागा मनके आभूषण",
      state: "Nagaland", district: "Across Nagaland", place: "Kohima and Dimapur", category: "Handicrafts",
      tags: ["handwork", "history"],
      hook: "Many-stranded necklaces of glass, shell and bone beads, worn at festivals.",
      does: "Artisans string glass, shell, bone and brass beads into necklaces, armlets and earrings, often in red, orange, white and black.",
      materials: ["Glass beads", "Shell and bone", "Brass"],
      process: ["Sort the beads", "String the strands", "Join with spacers", "Finish the ties"],
      context: "Worn at festivals such as Hornbill. The patterns once showed a person's rank and achievements.",
      community: "Naga jewellery makers",
      engagement: learnOnly, sources: ["Nagaland Tourism"], reviewed: R, hue: 15
    },
    {
      id: "naga-pottery", name: "Phom Pottery", nameHi: "फोम मृद्भांड",
      state: "Nagaland", district: "Longleng", place: "Phom villages", category: "Handicrafts",
      tags: ["handwork"],
      hook: "Pots shaped entirely by hand, without a wheel, by the Phom potters of Longleng.",
      does: "Potters build pots from coils of local clay, beat them into shape with a wooden paddle against a stone held inside, and fire them in an open fire.",
      materials: ["Local clay", "Wooden paddle and stone", "Open fire"],
      process: ["Prepare the clay", "Build with coils", "Beat into shape", "Fire in the open"],
      context: "One of several hand-built pottery traditions among the Naga peoples.",
      community: "Phom potters of Longleng",
      engagement: learnOnly, sources: ["Nagaland Tourism"], reviewed: R, hue: 20
    },

    /* ---------- Manipur ---------- */
    {
      id: "longpi-pottery", name: "Longpi Pottery", nameHi: "लोंगपी मृद्भांड",
      state: "Manipur", district: "Ukhrul", place: "Longpi village", category: "Handicrafts",
      tags: ["handwork"],
      hook: "Black cooking pots made from ground stone and clay, shaped by hand without a wheel.",
      does: "Potters grind black serpentine stone, mix it with clay, shape the ware by hand, fire it and polish it with a leaf until it is black and shiny. Many pieces get cane handles.",
      materials: ["Black serpentine stone", "Clay", "Leaves for polishing", "Cane"],
      process: ["Grind the stone and mix it with clay", "Shape by hand", "Fire", "Polish and fit cane handles"],
      context: "Made by the Tangkhul Naga of Longpi. The pots go straight from the stove to the table.",
      community: "Tangkhul Naga potters of Longpi",
      engagement: learnOnly, sources: ["Manipur Tourism"], reviewed: R, hue: 220
    },

    /* ---------- Meghalaya ---------- */
    {
      id: "ryndia", name: "Ryndia", nameHi: "रिंदिया",
      state: "Meghalaya", district: "Ri Bhoi", place: "Umden village", category: "Weaving & textiles",
      tags: ["textile", "farming"],
      hook: "Eri silk woven by Khasi women, soft and warm, in earthy plant colours.",
      does: "Women rear eri silkworms, hand-spin the yarn and weave it into shawls and cloth, often coloured with plant dyes.",
      materials: ["Eri silk", "Plant dyes", "Handloom"],
      process: ["Rear the silkworms", "Hand-spin the yarn", "Dye", "Weave"],
      context: "Umden in Ri Bhoi is a well-known centre of eri weaving.",
      community: "Khasi weavers of Ri Bhoi",
      engagement: learnOnly, sources: ["Meghalaya Tourism"], reviewed: R, hue: 35
    },
    {
      id: "khasi-basketry", name: "Khasi & Garo Basketry", nameHi: "खासी-गारो टोकरी",
      state: "Meghalaya", district: "Across Meghalaya", place: "Khasi and Garo hills", category: "Handicrafts",
      tags: ["handwork", "farming"],
      hook: "Cone-shaped bamboo baskets carried on the back with a strap across the forehead.",
      does: "Craftspeople split bamboo and cane and weave carrying baskets, fish traps, grain stores and rain shields.",
      materials: ["Bamboo", "Cane", "Head strap"],
      process: ["Split the bamboo", "Weave the base", "Build up the cone", "Fit the head strap"],
      context: "The cone basket, called khoh in Khasi, carries everything from produce to firewood.",
      community: "Khasi and Garo craftspeople",
      engagement: learnOnly, sources: ["Meghalaya Tourism"], reviewed: R, hue: 75
    },

    /* ---------- Mizoram ---------- */
    {
      id: "mizo-puan", name: "Mizo Puan", nameHi: "मिज़ो पुआन",
      state: "Mizoram", district: "Aizawl", place: "Aizawl", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "Wrap-around cloth woven on backstrap looms, with the Puanchei the brightest of all.",
      does: "Women weave on backstrap or frame looms, adding detailed extra-weft motifs. The Puanchei is worn at festivals and weddings.",
      materials: ["Cotton yarn", "Backstrap loom"],
      process: ["Prepare the warp", "Weave the ground", "Pick in the motifs", "Finish"],
      context: "Mizo Puanchei holds a GI tag.",
      community: "Mizo women weavers",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 330
    },

    /* ---------- Tripura ---------- */
    {
      id: "risa", name: "Risa & Rignai", nameHi: "रिसा और रिग्नाई",
      state: "Tripura", district: "Across Tripura", place: "Tripuri villages", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "Handwoven cloths of Tripuri women: the risa across the chest and the rignai wrap below.",
      does: "Women weave on backstrap looms, making the narrow risa with bright bands and the wider rignai wrap.",
      materials: ["Cotton yarn", "Backstrap loom"],
      process: ["Prepare the yarn", "Warp the backstrap loom", "Weave the bands", "Finish"],
      context: "A girl is traditionally given her first risa at a ceremony in her early teens.",
      community: "Tripuri and Bru women weavers",
      engagement: learnOnly, sources: ["Tripura Tourism"], reviewed: R, hue: 355
    },
    {
      id: "tripura-bamboo", name: "Tripura Bamboo Craft", nameHi: "त्रिपुरा बाँस शिल्प",
      state: "Tripura", district: "West Tripura", place: "Agartala", category: "Handicrafts",
      tags: ["handwork"],
      hook: "Fine bamboo mats and screens, and faces carved from bamboo roots.",
      does: "Craftspeople split bamboo into fine strips for mats, blinds and screens, and carve faces and figures from bamboo roots.",
      materials: ["Bamboo", "Bamboo roots", "Knives"],
      process: ["Split the bamboo", "Weave or carve", "Finish", "Paint or lacquer"],
      context: "Tripura is one of India's main centres of bamboo craft.",
      community: "Bamboo craftspeople of Tripura",
      engagement: learnOnly, sources: ["Tripura Tourism"], reviewed: R, hue: 70
    },

    /* ---------- Sikkim ---------- */
    {
      id: "lepcha-weaving", name: "Lepcha Weaving", nameHi: "लेप्चा बुनाई",
      state: "Sikkim", district: "Mangan", place: "Dzongu and North Sikkim", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "Striped cloth woven on narrow backstrap looms by the Lepcha, among Sikkim's first people.",
      does: "Weavers use a backstrap loom to make narrow strips of patterned cloth, which are joined into bags, belts and garments.",
      materials: ["Cotton and wool yarn", "Backstrap loom"],
      process: ["Prepare the yarn", "Warp the loom", "Weave the strips", "Join and finish"],
      context: "The Lepcha are among the original inhabitants of Sikkim, and their patterns draw on the natural world.",
      community: "Lepcha weavers of North Sikkim",
      engagement: learnOnly, sources: ["Sikkim Tourism"], reviewed: R, hue: 15
    },
    {
      id: "sikkim-carpets", name: "Tibetan Wool Carpets of Sikkim", nameHi: "सिक्किम के ऊनी कालीन",
      state: "Sikkim", district: "Namchi", place: "Ravangla and Gangtok", category: "Weaving & textiles",
      tags: ["textile", "handwork", "spiritual"],
      hook: "Hand-knotted wool carpets with dragons, lotuses and snow lions.",
      does: "Weavers knot wool over a rod on an upright loom, the Tibetan way, then cut the loops and trim the pile into patterns.",
      materials: ["Hand-spun wool", "Upright loom", "Rod", "Dyes"],
      process: ["Spin and dye the wool", "Warp the loom", "Knot over a rod and cut", "Trim and wash"],
      context: "Woven by Tibetan and Sikkimese weavers and taught at the state's handicrafts and handloom institute in Gangtok.",
      community: "Tibetan and Sikkimese carpet weavers",
      engagement: learnOnly, sources: ["Sikkim Tourism"], reviewed: R, hue: 205
    }
  );
})();
