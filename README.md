# CurioTrail

Start with what you love, and find the people who've been doing it for generations.

CurioTrail matches a visitor's interests (painting, weaving, cooking, music…) to living traditions in Jammu & Kashmir, Punjab and Uttarakhand. Each tradition has a "Behind the Practice" record: what people do, the process, materials, history and the community that carries it on.

The rule we care about most: **a tradition existing doesn't mean you're invited.** Watching or joining a session only shows up once the practitioner confirms it. Until then, the record is for reading.

Built by **Team PyTorch** for Innovathon 2.0 at the University of Jammu (theme: Digital Heritage, Culture & Inclusive Innovation).

## What's in it

- **Match** – type your interests in plain words and get traditions that fit, with the reason for each match
- **Traditions** – 158 records from every region of India, each with a photo: 47 from J&K, Punjab, Uttarakhand and the folk painting collection, plus 111 more across North, West & Central, East, Northeast and South India. Eight categories, filterable by state, district, type and how close you want to get; the grid opens with one page of cards and a Read more button
- **Trails** – day routes, either within one region or following one interest across states
- **Workshops** and **Marketplace** – separate pages listing hands-on sessions you can book
- **For practitioners** – a demo panel where a craftsperson sets what visitors may do (read / visit / watch / try)
- English / Hindi toggle

## Running it

No build step and no dependencies. It's plain HTML, CSS and JavaScript.

```bash
python -m http.server 5173
```

Then open http://localhost:5173. (Opening `index.html` directly also works, but a local server is closer to how it'll be hosted.)

## Files

| File | What it holds |
| --- | --- |
| `index.html` | Home page |
| `workshops.html`, `marketplace.html` | Workshops and Marketplace pages |
| `styles.css` | All styling |
| `app.js` | Matching, filters, record view, practitioner panel, animations |
| `data.js` | The 27 regional tradition records, 4 trails and workshops |
| `data-north.js` | 26 traditions from J&K, Ladakh, Himachal, Punjab, Haryana, Uttarakhand, UP, Delhi and Chandigarh |
| `data-west.js` | 24 traditions from Rajasthan, Gujarat, Maharashtra, Goa, Madhya Pradesh and Chhattisgarh |
| `data-east.js` | 16 traditions from West Bengal, Odisha, Bihar and Jharkhand |
| `data-northeast.js` | 18 traditions from Assam, Arunachal, Nagaland, Manipur, Meghalaya, Mizoram, Tripura and Sikkim |
| `data-south.js` | 27 traditions from Tamil Nadu, Kerala, Karnataka, Andhra Pradesh, Telangana and Puducherry |
| `paintings.js` | 20 painting traditions, shown as Traditions cards |
| `leaves.js` | Falling-leaf animation in the right margin (three.js) |
| `photos.js` | Photo credits |
| `assets/img/` | Photos and painting images |
| `assets/vendor/` | three.js (MIT) |

## Sources

Tradition details come from district websites, the GI Registry of India, UNESCO's Intangible Cultural Heritage lists and state tourism departments. Practitioner permissions in this version are demo data stored only in the browser.

## License

Code is under the MIT License (see `LICENSE`).

Photos in `assets/img/` are from Wikimedia Commons and keep their original licences (CC BY, CC BY-SA, CC0 or public domain). The author, licence and source page for each one is listed in `photos.js`. Eleven photos (Kaavi, Godna, Palm-leaf, Paitkar, Kishtwar Loi, Punjabi Durrie, Panipat, Bhadohi, Leheriya, Ajrakh, Tangaliya) were supplied by Team PyTorch and are marked as such in `photos.js`; confirm their original sources and licences before the site goes public.

The folk painting images (`assets/img/fp-*.webp`, `sanjhi.webp`, `aipan.webp`) are figures from *Living Traditions: Tribal and Folk Paintings of India* (CCRT, Ministry of Culture, 2017) and E. Sharma, "Tribal Folk Arts of India", *JIARM* 3(5), 2015. They are credited on each record and are not covered by the MIT License. The Thangka image (`fp-thangka.webp`) is a photo by Prof Ranga Sai from Wikimedia Commons, under CC BY-SA 4.0.
