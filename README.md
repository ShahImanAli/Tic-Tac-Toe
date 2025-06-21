Tic-Tac-Toe
A modern, responsive Tic-Tac-Toe web app built with HTML, CSS, and vanilla JavaScript. Features two-player gameplay, customizable settings, and clean architecture using module & factory patterns.

Table of Contents
Demo

Features

Tech Stack

🧠 Game Logic

Getting Started

Code Structure

Contributing

License

Demo
Try it live here: https://github.com/ShahImanAli/Tic-Tac-Toe copy the index.html path to GitHub Pages.

Features
🚀 Two-player mode: Local matches between Player X and Player O.

✍️ Custom player names: Personalize your game.

🔄 Real-time turn tracking: Visual UI cues indicate current player.

🎉 Automatic win/draw detection: Highlights winning row and announces game outcomes.

🔁 Instant reset button: Clear board and start fresh.

📱 Responsive design: Works seamlessly across devices.

⚙️ Clean architecture: Uses JavaScript modules + factory functions for modular, maintainable code.

Tech Stack
HTML5 – semantic markup for structure

CSS3 – styled with Flexbox/Grid for modern layout

JavaScript (ES6+) – modular code, no frameworks

Design Patterns – Module & Factory functions for separation of concerns

🧠 Game Logic
The game follows classic Tic‑Tac‑Toe rules:

Players alternate placing Xs and Os in a 3×3 grid

A player wins by marking three in a row, column, or diagonal

Board is checked after every move. A win triggers highlighting and reset option.

If all 9 cells are filled without a winner, it’s a draw 
community.appinventor.mit.edu
github.com
+1
community.appinventor.mit.edu
+1
github.com
+2
en.wikipedia.org
+2
github.com
+2

Getting Started
Prerequisites
Any modern web browser (Chrome, Firefox, Safari, Edge).

Run Locally
bash
Copy
Edit
git clone https://github.com/ShahImanAli/Tic-Tac-Toe.git
cd Tic-Tac-Toe
# Open index.html in your browser
Optional: Serve with a live server (e.g. npm install -g serve and serve .) for hot reloading.

Code Structure
bash
Copy
Edit
/
├── index.html         # Core markup
├── style.css          # Layout & styles
└── game.js            # Game logic and UI control
game.js organizes code into:

Game board module – handles turn-taking, moves, win/draw checks

DOM controller module – updates board, listens for clicks, resets UI

Factory functions produce player objects with their name and marker

Contributing
Want to improve this project?

Fork the repo & create a new branch

Make your changes (e.g. animations, AI opponent, enhanced UI)

Open a Pull Request with clear details

All enhancements, feature suggestions, and bug fixes are welcome!

License
Licensed under the MIT License — feel free to use, modify, or distribute 🚀
