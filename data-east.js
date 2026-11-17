// East India traditions: West Bengal, Odisha, Bihar and Jharkhand. Loaded after data.js; each
// record joins the main list. Traditions already on the site (Madhubani, Pattachitra, Patua,
// Kalighat, Santhal Jadupatua, Ganjifa, Dhokra) are not repeated here.
(function () {
  const learnOnly = { visit: false, observe: false, participate: false };
  const R = "Nov 2026";
  window.CT_DATA.records.push(
    /* ---------- West Bengal ---------- */
    {
      id: "kantha", name: "Kantha Embroidery", nameHi: "कांथा कढ़ाई",
      state: "West Bengal", district: "Birbhum", place: "Bolpur and Birbhum villages", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Old saris layered and quilted with running stitch, covered in flowers, fish and stories.",
      does: "Women layer worn saris and dhotis and quilt them together with a simple running stitch, drawing pictures, borders and motifs in coloured thread, often pulled from the old sari borders.",
      materials: ["Old saris and dhotis", "Coloured thread", "Needle"],
      process: ["Layer the old cloth", "Draw the motifs", "Fill with running stitch", "Stitch the borders"],
      context: "Today kantha is also stitched onto new silk and cotton saris, and women's groups around Shantiniketan sell it widely.",
      community: "Women embroiderers of Birbhum and rural Bengal",
      engagement: learnOnly, sources: ["West Bengal Tourism"], reviewed: R, hue: 20
    },
    {
      id: "baluchari", name: "Baluchari Saree", nameHi: "बालूचरी साड़ी",
      state: "West Bengal", district: "Bankura", place: "Bishnupur", category: "Weaving & textiles",
      tags: ["textile", "handwork", "history"],
      hook: "Silk saris whose pallu tells a story, with scenes from the epics woven thread by thread.",
      does: "Weavers use a jacquard on the handloom to weave narrative panels from the Ramayana and Mahabharata into the pallu and border, in silk and sometimes in gold or silver zari.",
      materials: ["Mulberry silk", "Zari", "Jacquard handloom"],
      process: ["Design the panels", "Punch the jacquard cards", "Weave the body and pallu", "Finish"],
      context: "Began in Baluchar village in Murshidabad and later moved to Bishnupur. Baluchari saris hold a GI tag.",
      community: "Weavers of Bishnupur",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 330
    },
    {
      id: "shantiniketan-leather", name: "Shantiniketan Leather Craft", nameHi: "शांतिनिकेतन चर्म शिल्प",
      state: "West Bengal", district: "Birbhum", place: "Shantiniketan and Bolpur", category: "Handicrafts",
      tags: ["handwork", "painting"],
      hook: "Embossed and coloured leather bags and purses with batik-like patterns.",
      does: "Craftspeople cut tanned leather, emboss or stamp a design, colour it with dyes in a batik-like process and stitch it into bags and purses.",
      materials: ["Tanned leather", "Dyes and wax", "Embossing tools"],
      process: ["Cut the leather", "Emboss the design", "Colour and finish", "Stitch"],
      context: "Grew around Rabindranath Tagore's Visva-Bharati and its rural craft work in the early 20th century. Shantiniketan leather goods hold a GI tag.",
      community: "Leather craftspeople of Bolpur and Shantiniketan",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 25
    },
    {
      id: "bankura-horse", name: "Bankura Terracotta Horse", nameHi: "बांकुड़ा का घोड़ा",
      state: "West Bengal", district: "Bankura", place: "Panchmura", category: "Handicrafts",
      tags: ["handwork", "spiritual", "history"],
      hook: "Tall clay horses with long necks and pricked ears, offered to the village gods.",
      does: "Potters throw the parts on the wheel, join them into body, neck and head, then fire the horse to a deep red-brown.",
      materials: ["Local clay", "Potter's wheel", "Kiln"],
      process: ["Throw the parts on the wheel", "Join and shape", "Dry", "Fire"],
      context: "Offered at village shrines when a wish is granted, the Panchmura horse has become a symbol of Indian craft. Bankura Panchmura terracotta holds a GI tag.",
      community: "Kumbhakar potters of Panchmura",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 15
    },
    {
      id: "krishnanagar-dolls", name: "Krishnanagar Clay Dolls", nameHi: "कृष्णनगर मिट्टी की गुड़ियाँ",
      state: "West Bengal", district: "Nadia", place: "Ghurni, Krishnanagar", category: "Handicrafts",
      tags: ["handwork", "history"],
      hook: "Lifelike clay figures of villagers, workers and gods, true down to the wrinkles.",
      does: "Artists model figures from fine river clay over a wire frame, dry them, then paint them and add real cloth and hair.",
      materials: ["River clay", "Wire and straw frames", "Paints", "Cloth and hair"],
      process: ["Build the frame", "Model in clay", "Dry", "Paint and dress"],
      context: "Grew under the patronage of Raja Krishnachandra of Nadia in the 18th century. Krishnanagar clay dolls hold a GI tag.",
      community: "Clay modellers of Ghurni",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 30
    },
    {
      id: "purulia-chhau-mask", name: "Purulia Chhau Masks", nameHi: "पुरुलिया छऊ मुखौटे",
      state: "West Bengal", district: "Purulia", place: "Charida village", category: "Handicrafts",
      tags: ["handwork", "music", "spiritual"],
      hook: "Huge painted masks crowned with beads and feathers, made for the leaping Chhau dance.",
      does: "Mask makers build up layers of paper and cloth over a clay mould, paint the face and decorate the crown with beads, foil and feathers.",
      materials: ["Clay mould", "Paper and cloth", "Paints", "Beads, foil and feathers"],
      process: ["Shape the clay mould", "Layer paper and cloth", "Dry and lift off", "Paint and decorate"],
      context: "Charida is the centre of the craft, and Purulia Chhau masks hold a GI tag. Chhau dance is on UNESCO's list of Intangible Cultural Heritage.",
      community: "Sutradhar mask makers of Charida",
      engagement: learnOnly, sources: ["GI Registry of India", "UNESCO"], reviewed: R, hue: 120
    },

    /* ---------- Odisha ---------- */
    {
      id: "palm-leaf-engraving", name: "Palm-leaf Engraving (Talapatra Chitra)", nameHi: "तालपत्र चित्र",
      state: "Odisha", district: "Puri", place: "Raghurajpur", category: "Painting",
      tags: ["painting", "handwork", "history"],
      hook: "Pictures scratched into dried palm leaves with an iron stylus, then darkened with lamp-black.",
      does: "Palm leaves are sun-dried, soaked and treated with turmeric, then cut and stitched into panels or folding books. The artist engraves the design with an iron stylus and rubs in lamp-black and oil; when the surface is wiped, the black stays in the lines. Some pieces are touched with colour.",
      materials: ["Dried palm leaves", "Turmeric", "Iron stylus", "Lamp-black and oil", "Thread"],
      process: ["Dry and cut the leaves", "Stitch them into panels", "Engrave with the stylus", "Rub in the black"],
      context: "Grew from the old practice of writing manuscripts on palm leaves. Many of Raghurajpur's artists also paint Pattachitra.",
      community: "Chitrakar families of Raghurajpur",
      engagement: learnOnly, sources: ["Odisha Tourism"], reviewed: R, hue: 40
    },
    {
      id: "pipli-applique", name: "Pipli Appliqué", nameHi: "पिपली एप्लीक",
      state: "Odisha", district: "Puri", place: "Pipli", category: "Weaving & textiles",
      tags: ["textile", "handwork", "spiritual"],
      hook: "Bright cut-cloth suns, birds and gods stitched onto canopies, umbrellas and lanterns.",
      does: "Tailors cut shapes from coloured cloth and stitch them onto a contrasting base, edging them with embroidery and small mirrors.",
      materials: ["Coloured cotton cloth", "Thread", "Small mirrors"],
      process: ["Cut the motifs", "Arrange them on the base cloth", "Stitch the edges", "Add embroidery"],
      context: "Made for the chariots and canopies of the Rath Yatra in Puri. Pipli appliqué holds a GI tag.",
      community: "Darji tailors of Pipli",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 0
    },
    {
      id: "sambalpuri-ikat", name: "Sambalpuri Ikat", nameHi: "संबलपुरी इकत",
      state: "Odisha", district: "Subarnapur", place: "Sonepur and Bargarh", category: "Weaving & textiles",
      tags: ["textile", "handwork"],
      hook: "Tie-dyed yarn woven into saris with conch shells, wheels and flowers.",
      does: "Weavers tie and dye bundles of yarn to a planned pattern before weaving, so the motifs appear as the cloth comes off the loom.",
      materials: ["Cotton or silk yarn", "Dyes", "Handloom"],
      process: ["Plan the pattern", "Tie and dye the yarn", "Weave", "Finish"],
      context: "Sambalpuri saris hold a GI tag and are worn across Odisha.",
      community: "Bhulia and Kostha weavers of western Odisha",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 330
    },
    {
      id: "cuttack-tarakasi", name: "Cuttack Tarakasi", nameHi: "कटक तारकशी",
      state: "Odisha", district: "Cuttack", place: "Cuttack", category: "Handicrafts",
      tags: ["metal", "handwork"],
      hook: "Silver drawn into fine wire and curled into lace-like jewellery.",
      does: "Silversmiths draw silver into fine wire, twist and flatten it, then bend it into curls and solder them into frames.",
      materials: ["Silver", "Draw plates", "Soldering tools"],
      process: ["Draw the silver into wire", "Twist and flatten it", "Shape the curls into frames", "Solder and polish"],
      context: "Cuttack's silver filigree is made into jewellery and also into figures for the city's Durga Puja.",
      community: "Silversmiths of Cuttack",
      engagement: learnOnly, sources: ["Odisha Tourism"], reviewed: R, hue: 220
    },
    {
      id: "konark-stone", name: "Konark Stone Carving", nameHi: "कोणार्क पत्थर नक्काशी",
      state: "Odisha", district: "Puri", place: "Konark and Puri", category: "Handicrafts",
      tags: ["handwork", "history", "spiritual"],
      hook: "Carvers who still cut stone the way their ancestors carved the Sun Temple.",
      does: "Sculptors carve soft soapstone, sandstone and hard chlorite with chisels into deities, wheels and temple panels.",
      materials: ["Sandstone, soapstone and chlorite", "Chisels and hammers"],
      process: ["Choose and cut the stone", "Mark the design", "Rough out and carve", "Finish and polish"],
      context: "Inspired by the 13th-century Sun Temple at Konark, a UNESCO World Heritage Site.",
      community: "Stone carvers of Puri and Konark",
      engagement: learnOnly, sources: ["Odisha Tourism", "UNESCO"], reviewed: R, hue: 25
    },

    /* ---------- Bihar ---------- */
    {
      id: "tikuli", name: "Tikuli Art", nameHi: "टिकुली कला",
      state: "Bihar", district: "Patna", place: "Patna", category: "Painting",
      tags: ["painting", "handwork"],
      hook: "A tiny decorated bindi grown into bright enamel-painted panels.",
      does: "Artists paint fine motifs in enamel colours on hardboard or wood, often outlined in gold.",
      materials: ["Hardboard or wood", "Enamel paints", "Fine brushes"],
      process: ["Cut and prime the board", "Paint the base colour", "Paint the motif", "Outline in gold"],
      context: "Tikuli once meant a glass bindi decorated with gold. Artists in Patna revived the craft as painted panels.",
      community: "Tikuli artists of Patna",
      engagement: learnOnly, sources: ["Bihar Tourism"], reviewed: R, hue: 0
    },
    {
      id: "patna-qalam", name: "Patna Qalam", nameHi: "पटना कलम",
      state: "Bihar", district: "Patna", place: "Patna", category: "Painting",
      tags: ["painting", "history"],
      hook: "Watercolours of everyday 19th-century life: sweet sellers, weavers and bullock carts.",
      does: "Painters worked straight in colour with the brush, without a pencil sketch, on paper and mica, using colours they made themselves.",
      materials: ["Paper and mica", "Handmade colours", "Fine brushes"],
      process: ["Prepare the colours", "Paint directly with the brush", "Build up the detail", "Finish"],
      context: "Grew from Mughal-trained painters who settled in Patna in the 18th century and painted for European buyers. Only a few artists keep it alive today.",
      community: "Painters keeping the Patna school alive",
      engagement: learnOnly, sources: ["Patna Museum"], reviewed: R, hue: 35
    },
    {
      id: "sikki", name: "Sikki Grass Craft", nameHi: "सिक्की शिल्प",
      state: "Bihar", district: "Madhubani", place: "Mithila villages", category: "Handicrafts",
      tags: ["handwork", "farming"],
      hook: "A golden wetland grass coiled into boxes, baskets and figures.",
      does: "Women dry sikki grass, dye some of it in bright colours, and coil and stitch it around a core of munj grass into boxes, baskets and toys.",
      materials: ["Sikki grass", "Munj grass", "Dyes", "Needle"],
      process: ["Harvest and dry the grass", "Dye some strands", "Coil around the munj core", "Stitch into shape"],
      context: "Sikki boxes are part of the gifts a Mithila bride takes to her new home. Sikki grass craft holds a GI tag.",
      community: "Women artisans of Mithila",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 50
    },

    /* ---------- Jharkhand ---------- */
    {
      id: "sohrai-khovar", name: "Sohrai & Khovar Painting", nameHi: "सोहराय और खोवर चित्रकला",
      state: "Jharkhand", district: "Hazaribagh", place: "Hazaribagh villages", category: "Painting",
      tags: ["painting", "spiritual", "farming"],
      hook: "Earth-coloured animals and plants painted on mud walls for the harvest and for weddings.",
      does: "Women paint the walls of their houses with natural earth colours using twigs, cloth and fingers. Sohrai is painted for the harvest festival; Khovar, often scratched through layers of colour with a comb, decorates the bridal room.",
      materials: ["Natural earth colours", "Twig brushes", "Combs for scratching"],
      process: ["Plaster the wall with mud", "Lay the base colour", "Paint or scratch the design", "Renew it each season"],
      context: "Sohrai-Khovar painting from Hazaribagh holds a GI tag.",
      community: "Women of Hazaribagh's adivasi villages",
      engagement: learnOnly, sources: ["GI Registry of India"], reviewed: R, hue: 18
    },
    /* ---------- Restored with team photos ---------- */
    {
      id: "paitkar", name: "Paitkar Painting", nameHi: "पैटकर चित्रकला",
      state: "Jharkhand", district: "East Singhbhum", place: "Amadubi village", category: "Painting",
      tags: ["painting", "history", "spiritual"],
      hook: "Scroll paintings once carried door to door and sung, panel by panel.",
      does: "Chitrakar painters make long scrolls of twenty or more panels in natural colours and sing the story as they unroll them.",
      materials: ["Paper scrolls", "Natural colours", "Brushes"],
      process: ["Prepare the scroll", "Sketch the panels", "Fill with colour", "Unroll and sing"],
      context: "Amadubi, near Dhalbhumgarh, is the last main centre. Common themes are life after death and festivals such as Karam and Bandna. Many painters have left the work, and the art now survives largely as single framed paintings.",
      community: "Chitrakar painter families of Amadubi",
      engagement: learnOnly, sources: ["Development Commissioner (Handicrafts), Ministry of Textiles", "People's Archive of Rural India"], reviewed: R, hue: 28
    }
  );
})();
