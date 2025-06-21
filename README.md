# Warframe Riven Roll Simulator

A web-based simulator that mimics rolling Rivens for Warframe weapons, using real community-curated weapon data.
Built with HTML, CSS, and JavaScript — no frameworks or build tools required!

---

## Features

- Live autocomplete for Warframe weapon names
- Riven stat roll simulator using in-game-style stats
- Disposition-based scaling for stat values
- Clean UI with dropdown suggestions
- Works entirely in the browser — no backend

---

## Project Structure

warframe-rng-project/
├── index.html # Main web page
├── style.css # UI styling
├── weapons.json # Weapon data (subset of Warframe weapons)
└── js/
├── data.js # Loads and provides access to weapons
├── autocomplete.js # Adds suggestions to the input field
└── rng.js # Handles RNG logic and roll button

---

## How to Run

1. **Download or clone this repo**
2. Open `index.html` in any browser
3. Type a weapon name and hit **Roll**

---

## Customization Ideas

- Add **negative stats** to simulate full Riven rolls
- Connect to live Warframe data using [WFCD/warframe-items](https://github.com/WFCD/warframe-items)
- Style with a Warframe-inspired theme
- Add animation or stat rarity colors

---

## Credits

- Weapon data structure inspired by [WFCD/warframe-items](https://github.com/WFCD/warframe-items)
- Developed as a learning project with Warframe community docs

---

## License

MIT License. This project is for educational use and not affiliated with Digital Extremes or Warframe.
