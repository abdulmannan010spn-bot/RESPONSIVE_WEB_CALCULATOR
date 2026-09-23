<div align="center">

# 🧮 Calculator

A sleek, responsive calculator built with vanilla HTML, CSS, and JavaScript — supports mouse clicks and full keyboard input, no frameworks required.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![License](https://img.shields.io/badge/license-MIT-green)

</div>

---

## 🎮 Overview

This is a lightweight, single-page calculator with a soft pink circular-button design and a grid background. It handles basic arithmetic, percentages, backspace/clear controls, and works seamlessly on both desktop and mobile screens.

## ✨ Features

- ➕➖✖️➗ Basic arithmetic: addition, subtraction, multiplication, division
- 💯 Percentage calculations
- ⌫ Delete (`DE`) to remove the last character, and `AC` to clear everything
- ⌨️ Full keyboard support — type numbers and operators directly, `Enter` to evaluate, `Backspace` to delete, `Escape` to clear
- 🔁 Smart operator handling — pressing two operators in a row replaces the previous one instead of stacking them
- 📱 Fully responsive layout with dedicated breakpoints for mobile and small mobile screens
- 💫 Smooth press animations and hover states on every button
- ⚡ Zero dependencies — pure HTML, CSS, and JavaScript

## 🚀 Getting Started

### Prerequisites

Just a web browser. No installation, no build step, no server required.

### Run Locally

```bash
# Clone the repository
git clone https://github.com/your-username/your-repo-name.git

# Navigate into the project directory
cd your-repo-name

# Open the app directly
open index.html        # macOS
start index.html        # Windows
xdg-open index.html      # Linux
```

Or serve it with any static file server:

```bash
npx serve .
```

Then visit the local address it prints (e.g. `http://localhost:3000`).

## 📁 Project Structure

```
├── index.html     # Markup and layout
├── index.css      # Styling, layout, and responsive rules
├── index.js       # Calculator logic and event handling
└── README.md
```

## 🧠 How It Works

1. Click a number or operator button, or type directly on your keyboard.
2. The current expression displays live in the input field.
3. Press **=** (or `Enter`) to evaluate the expression.
4. Percentages (`%`) are converted to division by 100 before evaluation.
5. Use **DE** (or `Backspace`) to remove the last character, or **AC** (or `Escape`) to clear everything.
6. If an invalid expression is entered, the display shows `Error`.

### ⌨️ Keyboard Shortcuts

| Key                | Action                  |
|--------------------|--------------------------|
| `0`–`9`            | Enter a digit            |
| `+` `-` `*` `/` `%` | Enter an operator        |
| `.`                | Decimal point             |
| `Enter`            | Evaluate (`=`)            |
| `Backspace`        | Delete last character (`DE`) |
| `Escape`           | Clear all (`AC`)          |

## 🛠️ Tech Stack

| Layer      | Technology                    |
|------------|--------------------------------|
| Structure  | HTML5                          |
| Styling    | CSS3 (custom, no framework)    |
| Logic      | Vanilla JavaScript (ES6)       |

## 🗺️ Possible Improvements

- [ ] Replace `eval()` with a safe expression parser
- [ ] Add a calculation history panel
- [ ] Add support for parentheses and order of operations
- [ ] Add a dark mode toggle
- [ ] Add haptic/audio feedback on button press

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/your-repo-name/issues) or open a pull request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<div align="center">
Made with 🧮 and vanilla JavaScript
</div>
