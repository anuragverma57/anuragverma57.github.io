# anuragverma57.github.io

Personal portfolio site for **Anurag Verma** — a static, minimal dark-themed site hosted on [GitHub Pages](https://pages.github.com/).

## Stack

- **HTML5** — structure and content  
- **CSS3** — layout, typography, responsive styles  
- **Vanilla JavaScript** — mobile navigation and scroll-reveal (no frameworks or build step)

## Project layout

| File | Purpose |
|------|---------|
| `index.html` | Single-page layout: hero, experience, projects, skills, education, contact, footer |
| `style.css` | Global styles, dark theme, components, breakpoints |
| `script.js` | Menu toggle, `IntersectionObserver` for section animations |
| `resume/AnuragVerma_Resume.pdf` | Resume file served for download links |

## Features

- Responsive navigation with a mobile menu  
- Hero stats; the DSA stat links to [LeetCode](https://leetcode.com/u/anuragverma57/)  
- Resume download via **Resume PDF** (hero) and **Contact → Resume**  
- Contact: email, GitHub, LinkedIn (no phone on the public site)

## Local preview

From the repository root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080` in a browser. You can also open `index.html` directly for a quick check (some browsers restrict `file://` behavior; a local server is preferred).

## GitHub Pages

This repo uses the **username.github.io** naming convention, so the site is published from the default branch (typically `main`) at:

**https://anuragverma57.github.io**

Ensure `index.html` is at the repository root and push changes to GitHub; Pages builds automatically.

## Updating content

- **Copy & sections:** Edit `index.html`.  
- **Look & feel:** Edit `style.css` (CSS variables at the top control colors and borders).  
- **Resume:** Replace `resume/AnuragVerma_Resume.pdf` and keep the same filename, or update every `href` / `download` that points to it.
