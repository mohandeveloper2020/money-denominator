# ₹ Money Denominator

A simple, clean web app to count Indian currency denominations and compute the total amount instantly.

![App Screenshot](app-screenshot.svg)

---

## Features

- **All standard INR denominations** — covers ₹500, ₹200, ₹100, ₹50, ₹20, ₹10, ₹5, ₹2, and ₹1
- **Live calculation** — results update in real time as you type the count for each denomination
- **Auto total** — the grand total is computed automatically by summing all denomination values
- **Three-column layout** — denominations are grouped for quick entry:
  - **High Value** — ₹500, ₹200, ₹100
  - **Mid Value** — ₹50, ₹20, ₹10
  - **Low Value** — ₹5, ₹2, ₹1
- **Indian Rupee note colours** — each denomination row is tinted with its actual RBI note colour:
  | Denomination | Note Colour |
  |---|---|
  | ₹500 | Stone Grey |
  | ₹200 | Bright Yellow |
  | ₹100 | Lavender |
  | ₹50 | Fluorescent Blue |
  | ₹20 | Greenish-Yellow |
  | ₹10 | Chocolate Brown |
- **Glassmorphism UI** — dark navy gradient background with a frosted-glass card
- **No dependencies** — pure HTML, CSS, and JavaScript; no frameworks or build tools required

---

## Getting Started

1. Clone or download the repository
2. Open `index.html` in any modern browser
3. Enter the count of notes/coins for each denomination
4. The total updates automatically

```
money-denominator/
├── index.html        # App markup
├── style.css         # Styles
├── script.js         # Calculation logic
└── README.md
```

---

## How It Works

Each row follows the formula:

```
denomination × count = subtotal
```

The grand total is the sum of all subtotals:

```
Total = Σ (denomination × count)
```

---

## Browser Support

Works in all modern browsers (Chrome, Firefox, Edge, Safari).
