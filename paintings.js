// Tribal and folk painting traditions of India. app.js turns each one into a card in the Traditions section.
// Facts are summarised in our own words from:
//   - "Living Traditions: Tribal and Folk Paintings of India", Centre for Cultural Resources
//     and Training (CCRT), Ministry of Culture, Government of India, 2017 (src: "ccrt")
//   - Ekta Sharma, "Tribal Folk Arts of India", Journal of International Academic Research
//     for Multidisciplinary 3(5), June 2015, pp. 300-308 (src: "jiarm")
// Images are figures reproduced from those two publications, credited on every card.
window.CT_PAINTINGS = {
  sources: {
    ccrt: "Living Traditions: Tribal and Folk Paintings of India (CCRT, Ministry of Culture, 2017)",
    jiarm: "E. Sharma, “Tribal Folk Arts of India”, JIARM 3(5), 2015"
  },
  items: [
    {
      id: "pithora", size: [1200, 809], name: "Pithora", nameHi: "पिथोरा", state: "Gujarat & Madhya Pradesh", surface: "wall",
      district: "Panchmahal", place: "Rathwa villages", tags: ["painting", "handwork", "spiritual"], hue: 28,
      centres: "Panchmahal and Vadodara in Gujarat; Dhar and Jhabua in Madhya Pradesh",
      community: "Rathwa, Bhil and Bhilala families",
      hook: "Rows of painted horses gallop across a house wall. Each one is a god, painted to say thank you for a wish that came true.",
      story: "Families ask for a Pithora after a birth, a good harvest or a wedding. Gods sit above a wavy line at the top, Pithoro’s wedding procession runs below, and farmers, cowherds and forest animals fill the lower half. When it is done, the priest (badvo) points to each figure in turn and tells its story while drummers play.",
      technique: "Unmarried girls re-plaster the wall with clay and dung. The painter, called a lakhindra, draws the horses partly freehand and partly with a block, then fills every gap with figures.",
      colours: ["White from lime", "Black from lampblack", "Red from vermilion", "Green from leaf extract", "Pigments mixed with milk", "Palash-twig brushes"],
      occasion: "Spring, or after a wish is fulfilled",
      fig: "Sacred Pithora painting, Gujarat. Crafts Museum, New Delhi", src: "ccrt"
    },
    {
      id: "gond", size: [785, 1200], name: "Gond", nameHi: "गोंड", state: "Madhya Pradesh", surface: "wall",
      district: "Mandla", place: "Narmada valley", tags: ["painting", "handwork"], hue: 150,
      centres: "Mandla and the Narmada valley",
      community: "Gond and Pardhan communities",
      hook: "Deer, tigers and trees built entirely from dots and dashes, with no border to hold them in.",
      story: "The Gonds are among India’s largest adivasi communities. At festivals they cover walls and floors with paintings of village deities, birds, animals and trees. The pictures carry their stories, and the bond between people, plants and animals is the theme they return to most.",
      technique: "The surface is coated with straw, dung and soil, then smoothed with white chhui clay. Painters use a bark brush called a koochi for broad areas and thin twigs for dots and fine lines.",
      colours: ["Black from charcoal or black clay", "White from chhui clay", "Red from geru", "Yellow from ramraj soil", "Green from cow dung"],
      occasion: "Festivals",
      fig: "Gond painting, Madhya Pradesh. CCRT Archives, New Delhi", src: "ccrt"
    },
    {
      id: "warli", size: [1200, 1029], name: "Warli", nameHi: "वारली", state: "Maharashtra", surface: "wall",
      district: "Palghar", place: "Warli villages", tags: ["painting", "handwork"], hue: 20,
      centres: "Thane and Palghar, north of Mumbai",
      community: "Warli, Malkhar Koli, Kokna and Dhodi communities",
      hook: "Circles, triangles and squares become a whole village: farmers, dancers, tigers and trees in white on red earth.",
      story: "Painted on mud walls for weddings, births and the harvest. At the centre is the chauk, a square holding Palaghat, goddess of plants and fertility. Around it, spirals of Tarpa dancers show the Warli belief that life is a circle with no end.",
      technique: "Walls get a coat of red geru, then figures are painted in rice paste with a chewed bamboo stick or salati grass. Every figure has its own space and nothing overlaps.",
      colours: ["Red earth (geru) ground", "White rice paste", "Bamboo-stick brush"],
      occasion: "Weddings, births and harvest",
      fig: "Warli painting, Maharashtra. CCRT Archives, New Delhi", src: "ccrt"
    },
    {
      id: "saura", size: [863, 1200], name: "Saura", nameHi: "सौरा", state: "Odisha", surface: "wall",
      district: "Rayagada", place: "Saura villages", tags: ["painting", "handwork", "spiritual"], hue: 32,
      centres: "Rayagada, Gajapati and Koraput districts",
      community: "Saura (Sora) community",
      hook: "A painted house for the spirits, drawn when someone falls ill, a child is born or a crop needs blessing.",
      story: "A Saura icon (ittalam) is made in hard times and in good ones. The painter is often a priest who works as the shaman directs. He fills a house-shaped frame with horses and riders, the sun and moon, elephants and peacocks, and these days trains and motor cars too.",
      technique: "The wall is washed with red earth. Figures are drawn in white from rice, chalk or lime with a twig frayed at the tip. Almost no space is left empty.",
      colours: ["White from rice, chalk or lime", "Red-earth ground", "Lampblack, ochre and indigo accents"],
      occasion: "Illness, childbirth, festivals and sowing",
      fig: "Saura painting, Odisha. CCRT Archives, New Delhi", src: "ccrt"
    },
    {
      id: "santhal", size: [587, 1200], name: "Santhal Jadupatua", nameHi: "संथाल जादुपटुआ", state: "West Bengal & Jharkhand", surface: "paper",
      district: "Birbhum", place: "Santhal villages", tags: ["painting", "handwork", "history"], hue: 45,
      centres: "Birbhum, Bankura, Bardhaman and Medinipur",
      community: "Santhal community and Jadupatua painters",
      hook: "Narrow scrolls that tell how the Santhal world began, and an eye painted in so the departed can find their way.",
      story: "Jadupatua painters unroll their scrolls panel by panel while singing the story of creation, the Baha flower festival and the journey of the dead. Their animals are bold and wide-eyed, like the tiger god in this scroll.",
      technique: "Sheets of paper are glued or sewn into scrolls rarely wider than 12 inches and fixed to bamboo rollers. Colours come from turmeric, leaves and fruit, bound with gum from wood apple or neem.",
      colours: ["Yellow from turmeric", "Green from bean leaves", "Wood-apple or neem gum", "Squirrel-hair brushes"],
      occasion: "Festivals and funeral rites",
      fig: "The Tiger’s God, Santhal painting. National Museum, New Delhi", src: "ccrt"
    },
    {
      id: "cherial", size: [1200, 483], name: "Cherial Scroll", nameHi: "चेरियाल पट", state: "Telangana", surface: "cloth",
      district: "Siddipet", place: "Cherial", tags: ["painting", "handwork", "history"], hue: 8,
      centres: "Cherial village",
      community: "Nakashi painters",
      hook: "Scrolls up to 40 feet long, opened one panel at a time over four nights of storytelling.",
      story: "Storytellers sing the epics and community ballads while musicians sit beside the scroll. Every scroll opens with Ganesha and Saraswati. After that come scenes of everyday life: fishermen, cobblers, and farmers at work in the paddy fields.",
      technique: "Khadi cloth is coated three times with rice starch, white mud and tamarind-seed paste. Outlines go straight on with squirrel-hair brushes over a red ground. A scroll holds 40–50 panels and around 500 figures.",
      colours: ["Red ground", "White from sea shells", "Black from lamp soot", "Yellow from turmeric", "Blue from indigo"],
      occasion: "Community storytelling nights",
      fig: "Cherial scroll painting. Crafts Museum, New Delhi", src: "ccrt"
    },
    {
      id: "ganjifa", size: [1200, 944], name: "Ganjifa Cards", nameHi: "गंजीफ़ा", state: "West Bengal, Odisha & Maharashtra", surface: "paper",
      district: "Bankura", place: "Bishnupur", tags: ["painting", "handwork", "history"], hue: 38,
      centres: "Bishnupur (Bankura), Puri and Ganjam, Sawantwadi",
      community: "Card painters of Bishnupur, Odisha and Sawantwadi",
      hook: "Round, hand-painted playing cards. A Dashavatar deck holds 120 of them, one suit for each of Vishnu’s ten avatars.",
      story: "Ganjifa was played at the Mughal court and is described in the Ain-i-Akbari. Bishnupur’s Dashavatar sets have ten suits of twelve cards each. Other packs show kings, horses, elephants and treasures.",
      technique: "Cotton rags are layered with tamarind glue, coated with chalk and polished with a stone. Discs are cut out and painted on one face, and the back is sealed with shellac and vermilion.",
      colours: ["Tamarind-glued cloth", "Chalk coating", "Shellac and vermilion backs", "Plant colours"],
      occasion: "Played through the year",
      fig: "Ganjifa playing cards. CCRT Archives, New Delhi", src: "ccrt"
    },
    {
      id: "madhubani", size: [1200, 839], name: "Madhubani (Mithila)", nameHi: "मधुबनी", state: "Bihar", surface: "wall",
      district: "Madhubani", place: "Jitwarpur", tags: ["painting", "handwork", "spiritual"], hue: 340,
      centres: "Jitwarpur, Simri, Bhavanipur, Laheriyaganj and Tarauni",
      community: "Women painters of Mithila",
      hook: "Wedding rooms in Mithila are painted edge to edge with lotus, fish and gods in double outlines.",
      story: "Painted for births, sacred-thread ceremonies and above all weddings, when the kohbar room is covered in symbols of fertility. After the 1967 drought, women began painting on paper to earn a living, and artists like Sita Devi and Baua Devi became famous.",
      technique: "A double outline is drawn freehand without a sketch, then the gap is filled with fine hatching. The brush is a bamboo stick with a frayed, cotton-wrapped tip, and there is no shading.",
      colours: ["Yellow from turmeric", "Black from burnt jowar or lamp soot", "Orange from palash flowers", "Green from bilva leaves", "Banana-leaf resin"],
      occasion: "Weddings, births and festivals",
      fig: "Madhubani painting, Bihar. National Museum, New Delhi", src: "ccrt"
    },
    {
      id: "mata-ni-pachedi", size: [1200, 502], name: "Mata ni Pachedi", nameHi: "माता नी पछेड़ी", state: "Gujarat", surface: "cloth",
      district: "Ahmedabad", place: "Vasna", tags: ["painting", "handwork", "spiritual"], hue: 355,
      centres: "Ahmedabad (Vasna, Mirzapur)",
      community: "Chitara families",
      hook: "A shrine made of cloth for the mother goddess, painted in maroon, black and white.",
      story: "The name means “behind the mother goddess”. During Navratri, four or five painted panels are joined into a shrine or canopy. Each panel tells the story of one of the seven mothers, with the goddess at the centre on her mount.",
      technique: "The cloth is stiffened with chalk and gum. Main figures are drawn with a bamboo kalam or printed with blocks, and family members fill in the colour. The black is made from rusted iron soaked in jaggery water.",
      colours: ["Black from rusted iron", "Maroon from alizarin", "Bamboo kalam", "Homespun cotton"],
      occasion: "Navratri",
      fig: "Mata-ni-pachedi painting, Gujarat. National Museum, New Delhi", src: "ccrt"
    },
    {
      id: "chitrakathi", size: [1200, 1177], name: "Chitrakathi", nameHi: "चित्रकथी", state: "Maharashtra", surface: "paper",
      district: "Sindhudurg", place: "Pinguli", tags: ["painting", "handwork", "history"], hue: 25,
      centres: "Pinguli (Sindhudurg) and Paithan",
      community: "Chitrakathi storytellers of Pinguli",
      hook: "Painted sheets held up one after another while a storyteller sings the Ramayana and the Mahabharata.",
      story: "Chitrakathis travelled from village to village with bundles (pothi) of paintings. They showed the sheets back to back on a stick during a night’s performance, and always began with Ganesha and Saraswati. Battles, hunts and heroes fill the pictures.",
      technique: "Painted on thick handmade paper with bold black outlines. Faces are in profile with large almond eyes, and colour mostly red, blue and yellow only fills the shapes.",
      colours: ["Handmade paper", "Bold black outline", "Red and reddish-brown", "Blue and yellow"],
      occasion: "Village storytelling",
      fig: "Hanuman fights Akshay Kumar, Chitrakathi painting. Crafts Museum, New Delhi", src: "ccrt"
    },
    {
      id: "patachitra", size: [1200, 1159], name: "Patachitra", nameHi: "पटचित्र", state: "Odisha", surface: "cloth",
      district: "Puri", place: "Raghurajpur", tags: ["painting", "handwork", "spiritual"], hue: 4,
      centres: "Raghurajpur and Puri",
      community: "Chitrakar families of Puri",
      hook: "Jagannath, Balabhadra and Subhadra in colours made from stone and shell, painted for the pilgrims of Puri.",
      story: "Before the Rath Yatra, while the temple’s wooden idols are being repaired, painted cloths take their place, and copies are sold to pilgrims. Themes include the Jagannath temple, Krishna’s childhood and Vishnu’s ten avatars, always inside decorative borders.",
      technique: "Cloth is stiffened with tamarind seed and chalk. The borders are painted first, with no pencil sketch. A final coat of lacquer makes the painting glossy and waterproof.",
      colours: ["Black from lampblack", "Yellow from haritali stone", "Red from hingula stone", "White from conch shell"],
      occasion: "Rath Yatra and temple festivals",
      fig: "Jagannath, Balabhadra and Subhadra, Patachitra. CCRT Archives, New Delhi", src: "ccrt"
    },
    {
      id: "kaavad", size: [1018, 1200], name: "Kaavad", nameHi: "कावड़", state: "Rajasthan", surface: "paper",
      district: "Chittorgarh", place: "Bassi", tags: ["painting", "handwork", "spiritual"], hue: 0,
      centres: "Bassi, near Chittorgarh",
      community: "Suthar makers and Kaavadiya Bhat storytellers",
      hook: "A wooden shrine whose doors open one at a time until the last one shows Ram, Lakshman and Sita.",
      story: "Kaavadiya Bhats carry the shrine to the families who are their patrons. They recite each family’s genealogy and the epics, pointing to the pictures with a peacock feather. The tradition is about 400 years old.",
      technique: "Men do the carpentry and painting, and women grind the colours and finish the work. The soft wood is primed with khaddi soil from Bhilwara, then painted in mineral colours with squirrel-hair brushes.",
      colours: ["Hinglu red", "Piyawadi yellow", "Khaddi-soil primer", "Squirrel-hair brushes"],
      occasion: "Births, wishes and remembrance",
      fig: "Painted Kaavad shrine from Bhagwata Basayata, Rajasthan. National Museum, New Delhi", src: "ccrt"
    },
    {
      id: "phad", size: [938, 1200], name: "Phad", nameHi: "फड़", state: "Rajasthan", surface: "cloth",
      district: "Bhilwara", place: "Shahpura", tags: ["painting", "handwork", "spiritual"], hue: 22,
      centres: "Shahpura and Bhilwara",
      community: "Joshi painters and Bhopa singer-priests",
      hook: "A shrine on a scroll. The Dev Narayan Phad can run to almost 35 feet.",
      story: "Bhopa priests sing the deeds of the folk heroes Pabuji and Dev Narayan all night, moving a lamp from panel to panel. The scroll is treated as a travelling temple, and a worn-out one is put to rest in a holy river.",
      technique: "Coarse khadi is sized with wheat or barley flour and gum, then burnished with a stone. Colour goes on one shade at a time: red for the heroes’ clothes, orange for skin, blue for water.",
      colours: ["Mineral colours in gum", "Flour-and-gum primer", "Red, orange, yellow, green, blue"],
      occasion: "All-night recitals",
      fig: "Phad painting, Rajasthan. CCRT Archives, New Delhi", src: "ccrt"
    },
    {
      id: "patua", size: [1126, 1200], name: "Patua Scroll", nameHi: "पटुआ", state: "West Bengal", surface: "cloth",
      district: "Paschim Medinipur", place: "Naya", tags: ["painting", "handwork", "history"], hue: 30,
      centres: "Naya (Paschim Medinipur), Bankura, Birbhum and 24 Parganas",
      community: "Patua (Chitrakar) singer-painters",
      hook: "Painter-singers unroll a scroll panel by panel and sing the story, from the Ramayana to the news.",
      story: "Patuas take their rolled scrolls to village fairs. They paint the epics, Manasa the snake goddess and the saint Chaitanya, as well as real social and political events, which is how they carry news from place to place.",
      technique: "Long cotton or paper scrolls are coated with clay and dung, then painted in five earth colours, with indigo kept for Krishna. Tamarind or barley paste fixes the paint.",
      colours: ["White", "Yellow", "Lamp-black", "Green-brown", "Red", "Indigo for Krishna"],
      occasion: "Village fairs and rites",
      fig: "Episodes from the Ramayana, Patua scroll. National Museum, New Delhi", src: "ccrt"
    },
    {
      id: "kalighat", size: [964, 1200], name: "Kalighat", nameHi: "कालीघाट", state: "West Bengal", surface: "paper",
      district: "Kolkata", place: "Kalighat", tags: ["painting", "handwork", "history"], hue: 200,
      centres: "Around the Kalighat temple, Kolkata",
      community: "Patuas who moved to Kolkata in the 19th century",
      hook: "Quick, bold watercolours sold to pilgrims at the Kali temple, often with a sharp eye for city gossip.",
      story: "Village scroll painters set up studios near the Kalighat temple and painted single images on cheap paper. They painted gods, animals, and satires of Kolkata’s wealthy babus. Rounded outlines and blank backgrounds make the figures look solid.",
      technique: "Colour is dabbed on with a rag or a coarse brush, then the contours are lined in black or in silver from tin. Shading gives the figures volume rather than depth.",
      colours: ["Mill-made paper", "Watercolour", "Black or tin-silver outlines"],
      occasion: "Sold to temple visitors",
      fig: "Child Krishna, Kalighat painting. From Kalighat Patas, B. N. Mukherjee", src: "ccrt"
    },
    {
      id: "kalamkari", size: [1200, 787], name: "Kalamkari", nameHi: "कलमकारी", state: "Andhra Pradesh", surface: "cloth",
      district: "Tirupati", place: "Srikalahasti", tags: ["painting", "handwork", "history"], hue: 15,
      centres: "Srikalahasti and Machilipatnam",
      community: "Pen painters of Srikalahasti, block printers of Machilipatnam",
      hook: "Drawing with a bamboo pen and natural dyes. European traders called it chintz.",
      story: "Srikalahasti’s temple cloths show the epics in rows with written captions. Machilipatnam’s block-printed cloth was traded to Persia and Europe. The Tree of Life is a favourite motif in both.",
      technique: "Lines are drawn with kasimi, made from iron soaked with jaggery for about three weeks, using a bamboo pen wrapped in cloth. Between colours the cloth is boiled and washed.",
      colours: ["Kasimi black (iron and jaggery)", "Myrobalan yellow", "Indigo blue", "Chay-root red"],
      occasion: "Temple cloths and textiles",
      fig: "Kalamkari painting, Andhra Pradesh. CCRT Archives, New Delhi", src: "ccrt"
    },
    {
      id: "pichhvai", size: [899, 1200], name: "Pichhvai", nameHi: "पिछवाई", state: "Rajasthan", surface: "cloth",
      district: "Rajsamand", place: "Nathdwara", tags: ["painting", "handwork", "spiritual"], hue: 220,
      centres: "Nathdwara, Rajsamand",
      community: "Painters of Nathdwara",
      hook: "Cloth backdrops for Shrinathji, changed with every festival and season.",
      story: "Pichhvai means “at the back”. These cloths hang behind the image of Shrinathji at Nathdwara and change through the year, from the moonlit Raas Leela of Sharad Purnima to Mount Govardhan and the monsoon clouds.",
      technique: "Painted mostly in deep blues and greens, Krishna’s colours, and finished with gold. Each one is made as an offering to the temple.",
      colours: ["Cotton cloth", "Deep blue and green", "Gold"],
      occasion: "Festivals and seasons of the year",
      fig: "Maharasa Lila Pichhvai. Crafts Museum, New Delhi", src: "ccrt"
    },
    {
      id: "mandana", size: [444, 362], name: "Mandana", nameHi: "मांडना", state: "Rajasthan & Madhya Pradesh", surface: "wall",
      district: "Bundi", place: "Bundi and Jhalawar", tags: ["painting", "handwork", "spiritual"], hue: 12,
      centres: "Bundi and Jhalawar",
      community: "Households of eastern Rajasthan and Madhya Pradesh",
      hook: "Geometric floor designs in white lime on red earth, plotted from a grid of dots.",
      story: "Mandanas are drawn on floors and walls for festivals. The tradition is strongest in eastern Rajasthan, especially around Bundi and Jhalawar.",
      technique: "The ground is coated with cow dung mixed with local rati clay and red ochre. Points are plotted first, three at a time for each triangle, and the motifs are drawn in lime or chalk.",
      colours: ["Cow dung and rati clay", "Red ochre", "Lime and chalk powder"],
      occasion: "Festivals",
      fig: "Mandana of Madhya Pradesh and Rajasthan", src: "jiarm"
    },
    {
      id: "nirmal", size: [659, 320], name: "Nirmal", nameHi: "निर्मल", state: "Telangana", surface: "paper",
      district: "Nirmal", place: "Nirmal", tags: ["painting", "handwork"], hue: 40,
      centres: "Nirmal town",
      community: "Nakash craftsmen",
      hook: "Scenes from the epics in herbal colours, with a gold tone that comes from plant juices.",
      story: "The Nakash craftsmen of Nirmal paint scenes from the Ramayana and the Mahabharata, along with scenes of village life.",
      technique: "Colours are made from herbs, gums and minerals. Even the gold tone comes from herbal juices.",
      colours: ["Herbal colours", "Natural gums", "Minerals", "Herbal gold tone"],
      occasion: "Made through the year",
      fig: "Nirmal painting", src: "jiarm"
    }
  ],
  // Data for the "why this matters" note in the practitioners section.
  insight: {
    text: "A 2015 study of India’s folk painters found the same problem again and again: no steady sales from buyers, and dependence on middlemen to sell their work.",
    src: "jiarm"
  }
};
