// South India & island traditions: Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana,
// Puducherry, Andaman & Nicobar Islands and Lakshadweep. Loaded after data.js; each record joins
// the main list. Kalamkari, Cherial and Nirmal paintings are already on the site.
(function () {
  const learnOnly = { visit: false, observe: false, participate: false };
  const R = "Nov 2026";
  const GI = ["GI Registry of India"];
  window.CT_DATA.records.push(
    /* ---------- Tamil Nadu ---------- */
    {
      id: "thanjavur-painting", name: "Thanjavur Painting", nameHi: "तंजावुर चित्रकला",
      state: "Tamil Nadu", district: "Thanjavur", place: "Thanjavur", category: "Painting",
      tags: ["painting", "spiritual", "history"],
      hook: "Gods painted in rich colours on wood, with raised work covered in real gold foil and set with glass stones.",
      does: "Artists paste cloth onto a wooden board and coat it with chalk paste, draw the figure, build up raised areas with a lime-and-gum paste, set glass stones, lay gold foil and then paint.",
      materials: ["Wooden board", "Cloth and chalk paste", "Gold foil", "Glass stones", "Colours"],
      process: ["Prepare the board", "Draw the figure", "Build the raised work and set the stones", "Lay the gold foil and paint"],
      context: "Flourished under the Maratha rulers of Thanjavur. Thanjavur paintings hold a GI tag.",
      community: "Painters of Thanjavur",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 45
    },
    {
      id: "kanchipuram-silk", name: "Kanchipuram Silk", nameHi: "कांचीपुरम रेशम",
      state: "Tamil Nadu", district: "Kanchipuram", place: "Kanchipuram", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Heavy silk saris whose contrasting borders are woven separately and interlocked by hand.",
      does: "Weavers weave the body and the border with separate shuttles and interlock them (korvai), so a border of a different colour is joined firmly. The zari is silk thread wound with silver and gold.",
      materials: ["Mulberry silk", "Zari", "Handloom"],
      process: ["Dye the silk", "Warp the loom", "Weave the body and border with korvai", "Weave the pallu"],
      context: "Worn at South Indian weddings. Kanchipuram silk holds a GI tag.",
      community: "Weavers of Kanchipuram",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 340
    },
    {
      id: "toda-embroidery", name: "Toda Embroidery", nameHi: "टोडा कढ़ाई",
      state: "Tamil Nadu", district: "Nilgiris", place: "Toda hamlets near Ooty", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Red and black geometric embroidery on white cotton, stitched by Toda women of the Nilgiris.",
      does: "Women count the threads of the cloth and darn red and black wool through it in geometric patterns, so dense that the work looks almost woven.",
      materials: ["White cotton cloth", "Red and black wool", "Needle"],
      process: ["Choose the cloth", "Count the threads", "Darn the pattern", "Finish the shawl"],
      context: "The embroidered poothkuli shawl is worn by Toda men and women. Toda embroidery holds a GI tag.",
      community: "Toda women of the Nilgiris",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 0
    },
    {
      id: "pattamadai-mats", name: "Pattamadai Korai Mats", nameHi: "पट्टमडै चटाई",
      state: "Tamil Nadu", district: "Tirunelveli", place: "Pattamadai", category: "Weaving & textiles",
      tags: ["textile", "handwork", "farming"],
      hook: "Mats woven from korai grass split so finely they feel like silk.",
      does: "Weavers split korai grass into very fine strands, soak and dye some of them, and weave them over a cotton warp into finely patterned mats.",
      materials: ["Korai grass", "Cotton warp", "Dyes", "Loom"],
      process: ["Split and soak the grass", "Dye some strands", "Weave on the loom", "Finish"],
      context: "Fine Pattamadai mats are traditionally given at weddings.",
      community: "Mat weavers of Pattamadai",
      engagement: learnOnly, sources: ["Tamil Nadu Tourism"], reviewed: R, hue: 60
    },
    {
      id: "swamimalai-bronze", name: "Swamimalai Bronze", nameHi: "स्वामीमलै कांस्य",
      state: "Tamil Nadu", district: "Thanjavur", place: "Swamimalai", category: "Handicrafts",
      tags: ["metal", "spiritual", "history"],
      hook: "Temple bronzes cast by the lost-wax method of the Chola craftsmen.",
      does: "Sthapathis model the deity in wax to set proportions, cover it with fine river clay, melt out the wax and pour in molten bronze. The figure is then finished with chisels.",
      materials: ["Beeswax", "River clay", "Bronze alloy"],
      process: ["Model the figure in wax", "Coat it in clay", "Melt out the wax and pour the metal", "Break the mould and chisel the details"],
      context: "Swamimalai bronze icons hold a GI tag.",
      community: "Sthapathi families of Swamimalai",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 35
    },
    {
      id: "athangudi-tiles", name: "Athangudi Tiles", nameHi: "अथंगुडी टाइल्स",
      state: "Tamil Nadu", district: "Sivaganga", place: "Athangudi, Chettinad", category: "Handicrafts",
      tags: ["handwork", "history"],
      hook: "Handmade floor tiles in bright patterns, cured in water instead of being fired.",
      does: "Makers pour coloured cement into a metal stencil set on glass to form the pattern, back it with sand and cement, then cure the tiles in water.",
      materials: ["Cement and oxide colours", "Glass sheet", "Metal stencils", "Water"],
      process: ["Pour the colours into the stencil on glass", "Back with sand and cement", "Dry", "Cure in water"],
      context: "Made for the grand Chettiar mansions of Chettinad and still laid in homes today.",
      community: "Tile makers of Athangudi",
      engagement: learnOnly, sources: ["Tamil Nadu Tourism"], reviewed: R, hue: 15
    },
    {
      id: "mahabalipuram-stone", name: "Mamallapuram Stone Carving", nameHi: "मामल्लपुरम शिल्प",
      state: "Tamil Nadu", district: "Chengalpattu", place: "Mamallapuram", category: "Handicrafts",
      tags: ["handwork", "history", "spiritual"],
      hook: "Sculptors carving granite in the town of the Pallava shore temples.",
      does: "Sculptors shape granite and soapstone with chisels and hammers into deities and temple sculptures, following set proportions.",
      materials: ["Granite and soapstone", "Chisels and hammers"],
      process: ["Choose the stone", "Mark the proportions", "Rough out the form", "Carve and polish"],
      context: "Mamallapuram's Pallava monuments are a UNESCO World Heritage Site, and the town has a government college of sculpture.",
      community: "Stone sculptors of Mamallapuram",
      engagement: learnOnly, sources: ["UNESCO", "Tamil Nadu Tourism"], reviewed: R, hue: 30
    },

    /* ---------- Kerala ---------- */
    {
      id: "kasavu", name: "Kasavu (Balaramapuram Handloom)", nameHi: "कसवु",
      state: "Kerala", district: "Thiruvananthapuram", place: "Balaramapuram", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "Off-white cotton with a gold zari border, the classic Kerala sari and mundu.",
      does: "Weavers weave fine unbleached cotton on handlooms and add a border of gold zari, called kasavu.",
      materials: ["Fine cotton yarn", "Gold zari", "Handloom"],
      process: ["Prepare the yarn", "Warp the loom", "Weave the body", "Weave in the zari border"],
      context: "Worn at Onam, Vishu and weddings. Balaramapuram handloom saris hold a GI tag.",
      community: "Weavers of Balaramapuram",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 45
    },
    {
      id: "alleppey-coir", name: "Alleppey Coir", nameHi: "अलेप्पी कॉयर",
      state: "Kerala", district: "Alappuzha", place: "Alappuzha backwaters", category: "Weaving & textiles",
      tags: ["textile", "handwork", "farming"],
      hook: "Coconut husk turned into rope, mats and carpets along the backwaters.",
      does: "Husks are soaked in the backwaters, beaten to free the fibre, spun into yarn and woven into mats and carpets.",
      materials: ["Coconut husk", "Spinning wheels", "Looms"],
      process: ["Soak the husks", "Beat out the fibre", "Spin into yarn", "Weave mats"],
      context: "Alleppey coir holds a GI tag.",
      community: "Coir workers of Alappuzha",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 30
    },
    {
      id: "aranmula-kannadi", name: "Aranmula Kannadi", nameHi: "आरन्मुळा कण्णाडी",
      state: "Kerala", district: "Pathanamthitta", place: "Aranmula", category: "Handicrafts",
      tags: ["metal", "handwork", "spiritual"],
      hook: "A mirror made of polished metal instead of glass, from a closely kept alloy.",
      does: "Craftsmen cast a special copper-tin alloy into discs in clay moulds and polish them for days until they reflect as clearly as glass.",
      materials: ["Copper-tin alloy", "Clay moulds", "Polishing materials"],
      process: ["Melt the alloy", "Cast it in clay moulds", "Polish for days", "Set it in a frame"],
      context: "Made by a few families in Aranmula and counted among Kerala's auspicious objects. Aranmula Kannadi holds a GI tag.",
      community: "Metalsmith families of Aranmula",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 40
    },
    {
      id: "nettipattam", name: "Nettipattam", nameHi: "नेट्टिपट्टम",
      state: "Kerala", district: "Thrissur", place: "Thrissur", category: "Handicrafts",
      tags: ["handwork", "spiritual"],
      hook: "Gold-coloured caparisons that crown the temple elephants at Kerala's festivals.",
      does: "Craftspeople sew hundreds of brass or gold-plated pieces onto a cloth base in a set pattern, with a crescent at the centre and tassels at the bottom.",
      materials: ["Brass or gold-plated pieces", "Cloth base", "Thread"],
      process: ["Cut and shape the metal pieces", "Lay out the pattern", "Sew them to the cloth", "Add the tassels"],
      context: "Worn by elephants at Thrissur Pooram and other temple festivals. Small versions are made to hang in homes.",
      community: "Craftspeople of Thrissur",
      engagement: learnOnly, sources: ["Kerala Tourism"], reviewed: R, hue: 45
    },
    {
      id: "kerala-woodcarving", name: "Rosewood & Sandalwood Carving", nameHi: "शीशम और चंदन नक्काशी",
      state: "Kerala", district: "Thiruvananthapuram", place: "Thiruvananthapuram", category: "Handicrafts",
      tags: ["wood", "handwork"],
      hook: "Elephants, deities and boxes carved in rosewood and fragrant sandalwood.",
      does: "Carvers work rosewood and sandalwood with fine chisels into elephants, figures and boxes, then polish them.",
      materials: ["Rosewood", "Sandalwood", "Chisels"],
      process: ["Select the wood", "Rough out the form", "Carve", "Polish"],
      context: "Sandalwood is tightly controlled in India, so most carving today uses rosewood and other woods.",
      community: "Wood carvers of Thiruvananthapuram",
      engagement: learnOnly, sources: ["Kerala Tourism"], reviewed: R, hue: 25
    },

    /* ---------- Karnataka ---------- */
    {
      id: "mysore-silk", name: "Mysore Silk", nameHi: "मैसूर सिल्क",
      state: "Karnataka", district: "Mysuru", place: "Mysuru", category: "Weaving & textiles",
      tags: ["textile", "history"],
      hook: "Pure silk saris with a soft sheen and a zari border of real gold.",
      does: "Silk reeled from Karnataka cocoons is dyed and woven at Mysuru's government silk factory, with zari containing pure gold and silver.",
      materials: ["Mulberry silk", "Gold zari", "Looms"],
      process: ["Reel the silk", "Dye", "Weave", "Add the zari border"],
      context: "Began under the Wodeyar kings of Mysore. Mysore silk holds a GI tag.",
      community: "Silk weavers of Mysuru",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 300
    },
    {
      id: "kasuti", name: "Kasuti Embroidery", nameHi: "कसूती कढ़ाई",
      state: "Karnataka", district: "Dharwad", place: "Dharwad and north Karnataka", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Counted-thread embroidery of temples, chariots and lamps that looks the same front and back.",
      does: "Women count the threads of the cloth and work four stitches, gavanti, murgi, negi and menthi, so both sides of the cloth match.",
      materials: ["Cotton or silk cloth", "Silk or cotton thread", "Needle"],
      process: ["Choose the motif", "Count the threads", "Stitch", "Finish"],
      context: "Traditionally stitched on Ilkal saris. Kasuti holds a GI tag.",
      community: "Women embroiderers of north Karnataka",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 350
    },
    {
      id: "ilkal-saree", name: "Ilkal Saree", nameHi: "इलकल साड़ी",
      state: "Karnataka", district: "Bagalkot", place: "Ilkal", category: "Weaving & textiles",
      tags: ["textile", "handwork"],
      hook: "A cotton body and a silk pallu, joined on the loom with a looped technique called tope teni.",
      does: "Weavers join the cotton warp of the body to the silk warp of the pallu with a row of loops (tope teni), then weave the red pallu with its white motifs.",
      materials: ["Cotton and silk", "Handloom"],
      process: ["Prepare both warps", "Loop the body and pallu warps together", "Weave", "Finish"],
      context: "Ilkal saris hold a GI tag.",
      community: "Weavers of Ilkal",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 0
    },
    {
      id: "channapatna-toys", name: "Channapatna Toys", nameHi: "चन्नपटना खिलौने",
      state: "Karnataka", district: "Bengaluru South", place: "Channapatna", category: "Handicrafts",
      tags: ["wood", "handwork"],
      hook: "Smooth, bright lacquered wooden toys from Karnataka's toy town.",
      does: "Craftsmen turn ivory-wood on a lathe, colour it with lac mixed with vegetable dyes, and polish it with a screw-pine leaf.",
      materials: ["Ivory-wood (aale mara)", "Lac", "Vegetable dyes", "Lathe"],
      process: ["Season the wood", "Turn it on the lathe", "Apply the coloured lac", "Polish"],
      context: "The craft is traced to the time of Tipu Sultan. Channapatna toys hold a GI tag.",
      community: "Toy makers of Channapatna",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 0
    },
    {
      id: "bidriware", name: "Bidriware", nameHi: "बिदरी",
      state: "Karnataka", district: "Bidar", place: "Bidar", category: "Handicrafts",
      tags: ["metal", "handwork", "history"],
      hook: "Black metal inlaid with shining silver, darkened with soil from Bidar fort.",
      does: "Craftsmen cast an alloy of zinc and copper, engrave the design, hammer in fine silver wire or sheet, then blacken the base with a paste of special soil and ammonium chloride.",
      materials: ["Zinc-copper alloy", "Silver wire and sheet", "Soil from Bidar fort"],
      process: ["Cast the piece", "Engrave the design", "Inlay the silver", "Blacken with the soil paste"],
      context: "Grew under the Bahmani sultans. Bidriware holds a GI tag.",
      community: "Bidri craftsmen of Bidar",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 220
    },
    {
      id: "mysore-rosewood-inlay", name: "Mysore Rosewood Inlay", nameHi: "मैसूर रोज़वुड इनले",
      state: "Karnataka", district: "Mysuru", place: "Mysuru", category: "Handicrafts",
      tags: ["wood", "handwork"],
      hook: "Pictures made by setting pieces of lighter wood into dark rosewood.",
      does: "Artisans cut the design out of a rosewood panel and fill it with pieces of lighter woods, then sand and polish it smooth.",
      materials: ["Rosewood", "Lighter woods", "Fret saw"],
      process: ["Draw the design", "Cut out the rosewood", "Fit the inlay pieces", "Sand and polish"],
      context: "Mysore rosewood inlay holds a GI tag.",
      community: "Inlay craftsmen of Mysuru",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 20
    },
    {
      id: "kinhal-craft", name: "Kinhal Craft", nameHi: "किन्हाल शिल्प",
      state: "Karnataka", district: "Koppal", place: "Kinhal", category: "Handicrafts",
      tags: ["wood", "handwork", "spiritual"],
      hook: "Brightly painted wooden gods and animals, made in a village near Hampi.",
      does: "Craftsmen carve light wood, build up details with kitta, a paste of sawdust and tamarind seed, and paint the figures in bright colours with gold.",
      materials: ["Light wood", "Kitta paste", "Paints and gold"],
      process: ["Carve the figure", "Model the details with kitta", "Paint", "Add gold"],
      context: "Kinhal craftsmen trace their work to the Vijayanagara period. Kinhal toys hold a GI tag.",
      community: "Chitragara craftsmen of Kinhal",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 35
    },

    /* ---------- Andhra Pradesh ---------- */
    {
      id: "kondapalli-toys", name: "Kondapalli Toys", nameHi: "कोंडापल्ली खिलौने",
      state: "Andhra Pradesh", district: "NTR district", place: "Kondapalli", category: "Handicrafts",
      tags: ["wood", "handwork"],
      hook: "Soft-wood figures of villagers, animals and gods, painted in bright colours.",
      does: "Craftsmen carve light tella poniki wood, join the parts with tamarind-seed paste, and paint the figures.",
      materials: ["Tella poniki wood", "Tamarind-seed paste", "Colours"],
      process: ["Carve the parts", "Join them with paste", "Smooth", "Paint"],
      context: "Set out in homes for Sankranti and Dasara displays. Kondapalli toys hold a GI tag.",
      community: "Toy makers of Kondapalli",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 50
    },
    {
      id: "etikoppaka-toys", name: "Etikoppaka Toys", nameHi: "एटिकोप्पाका खिलौने",
      state: "Andhra Pradesh", district: "Anakapalli", place: "Etikoppaka", category: "Handicrafts",
      tags: ["wood", "handwork"],
      hook: "Rounded, lacquered wooden toys coloured with natural dyes.",
      does: "Craftsmen turn ankudu wood on a lathe and colour it with lac mixed with natural dyes from seeds, bark and roots.",
      materials: ["Ankudu wood", "Lac", "Natural dyes", "Lathe"],
      process: ["Season the wood", "Turn it on the lathe", "Apply the coloured lac", "Polish"],
      context: "Etikoppaka toys hold a GI tag.",
      community: "Toy makers of Etikoppaka",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 0
    },
    {
      id: "bobbili-veena", name: "Bobbili Veena", nameHi: "बोब्बिली वीणा",
      state: "Andhra Pradesh", district: "Vizianagaram", place: "Gollapalli, near Bobbili", category: "Handicrafts",
      tags: ["wood", "music", "handwork"],
      hook: "A veena carved from a single block of jackfruit wood.",
      does: "Craftsmen carve the body, neck and resonator of the veena from one piece of jackfruit wood, then fit the frets and strings.",
      materials: ["Jackfruit wood", "Chisels", "Frets and strings"],
      process: ["Choose a single block", "Carve the body and neck", "Fit the frets and strings", "Tune and finish"],
      context: "Bobbili veena holds a GI tag.",
      community: "Veena makers of Gollapalli",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 25
    },
    {
      id: "tholu-bommalata", name: "Tholu Bommalata Puppets", nameHi: "तोलु बोम्मलाटा",
      state: "Andhra Pradesh", district: "Sri Sathya Sai", place: "Nimmalakunta", category: "Handicrafts",
      tags: ["handwork", "music", "history"],
      hook: "Large translucent leather puppets that throw coloured shadows on a screen.",
      does: "Craftspeople treat goat leather until it lets light through, cut and punch out the figures and colour them. Puppeteers work them behind a lit screen to tell the epics.",
      materials: ["Goat leather", "Punches and knives", "Dyes"],
      process: ["Treat the leather", "Cut and punch the figure", "Colour it", "Join the limbs"],
      context: "Nimmalakunta is the main centre. Andhra Pradesh leather puppetry holds a GI tag.",
      community: "Puppet makers of Nimmalakunta",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 20
    },

    /* ---------- Telangana ---------- */
    {
      id: "pochampally-ikat", name: "Pochampally Ikat", nameHi: "पोचमपल्ली इकत",
      state: "Telangana", district: "Yadadri Bhuvanagiri", place: "Bhoodan Pochampally", category: "Weaving & textiles",
      tags: ["textile", "handwork"],
      hook: "Sharp geometric ikat saris from Telangana's weaving village.",
      does: "Weavers tie and dye the yarn into diamond and geometric patterns before weaving, in single or double ikat.",
      materials: ["Silk and cotton yarn", "Dyes", "Handloom"],
      process: ["Plan the pattern", "Tie and dye the yarn", "Weave", "Finish"],
      context: "Pochampally ikat holds a GI tag, and the village was named one of the best tourism villages by the UN World Tourism Organization in 2021.",
      community: "Weavers of Pochampally",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 0
    },
    {
      id: "nirmal-toys", name: "Nirmal Toys", nameHi: "निर्मल खिलौने",
      state: "Telangana", district: "Nirmal", place: "Nirmal", category: "Handicrafts",
      tags: ["wood", "handwork"],
      hook: "Light wooden birds, fruits and animals painted in bright colours.",
      does: "Craftsmen carve light ponuku wood, join the pieces with tamarind paste, and paint them.",
      materials: ["Ponuku wood", "Tamarind paste", "Paints"],
      process: ["Carve the pieces", "Join them", "Smooth", "Paint"],
      context: "Nirmal toys hold a GI tag. The same Nakash artists paint Nirmal paintings.",
      community: "Nakash craftsmen of Nirmal",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 55
    },
    {
      id: "karimnagar-filigree", name: "Karimnagar Silver Filigree", nameHi: "करीमनगर चाँदी तारकशी",
      state: "Telangana", district: "Karimnagar", place: "Karimnagar", category: "Handicrafts",
      tags: ["metal", "handwork"],
      hook: "Silver wire twisted into delicate boxes, trays and jewellery.",
      does: "Silversmiths draw silver into fine wire, twist and curl it into patterns, and solder it onto frames.",
      materials: ["Silver", "Draw plates", "Soldering tools"],
      process: ["Draw the silver into wire", "Twist and curl", "Fill the frames", "Solder and polish"],
      context: "The silver filigree of Karimnagar holds a GI tag.",
      community: "Silversmiths of Karimnagar",
      engagement: learnOnly, sources: GI, reviewed: R, hue: 215
    },

    /* ---------- Puducherry ---------- */
    {
      id: "villianur-terracotta", name: "Villianur Terracotta", nameHi: "विल्लियनूर टेराकोटा",
      state: "Puducherry", district: "Puducherry", place: "Villianur", category: "Handicrafts",
      tags: ["handwork", "spiritual"],
      hook: "Clay figures of deities, horses and village guardians.",
      does: "Potters shape and model clay into figures, dry them and fire them in kilns, sometimes painting them afterwards.",
      materials: ["Local clay", "Modelling tools", "Kiln"],
      process: ["Prepare the clay", "Model the figure", "Dry", "Fire and paint"],
      context: "Large terracotta horses are offered to Ayyanar, the village guardian deity of the Tamil countryside.",
      community: "Potters of Villianur",
      engagement: learnOnly, sources: ["Puducherry Tourism"], reviewed: R, hue: 15
    },
  );
})();
