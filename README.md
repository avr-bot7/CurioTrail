# CurioTrail

Start with what you love, and find the people who've been doing it for generations.

CurioTrail matches a visitor's interests (painting, weaving, cooking, music…) to living traditions in Jammu & Kashmir, Punjab and Uttarakhand. Each tradition has a "Behind the Practice" record: what people do, the process, materials, history and the community that carries it on.

The rule we care about most: **a tradition existing doesn't mean you're invited.** Watching or joining a session only shows up once the practitioner confirms it. Until then, the record is for reading.

Built by **Team PyTorch** for Innovathon 2.0 at the University of Jammu (theme: Digital Heritage, Culture & Inclusive Innovation).

## What's in it

- **Match** – type your interests in plain words and get traditions that fit, with the reason for each match
- **Traditions** – 18 records (12 from J&K), filterable by state, district, type and how close you want to get
- **Trails** – day routes, either within one region or following one interest across states
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
| `index.html` | Page structure |
| `styles.css` | All styling |
| `app.js` | Matching, filters, record view, practitioner panel, animations |
| `data.js` | The 18 tradition records and 4 trails |
| `photos.js` | Photo credits |
| `assets/img/` | Photos |

## Sources

Tradition details come from district websites, the GI Registry of India, UNESCO's Intangible Cultural Heritage lists and state tourism departments. Practitioner permissions in this version are demo data stored only in the browser.

## License

Code is under the MIT License (see `LICENSE`).

Photos in `assets/img/` are from Wikimedia Commons and keep their original licences (CC BY, CC BY-SA, CC0 or public domain). The author, licence and source page for each one is listed in `photos.js`.
