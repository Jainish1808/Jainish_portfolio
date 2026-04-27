# Portfolio - Production Ready React + Vite

This project is now organized as a production-ready React app with Vite and React Router.

The UI tokens and typography are aligned to your Unframer MCP project:

- Black: rgb(21, 19, 18)
- White: rgb(255, 255, 255)
- Gray: rgb(153, 143, 143)
- Green: rgb(197, 255, 65)
- Orange: rgb(244, 108, 56)
- Dark Gray: rgb(106, 107, 110)
- Soft Gray: rgba(182, 180, 189, 0.2)
- Font family: Poppins

Image areas are intentionally left as empty placeholders.

## Project Structure

```text
.
├── .vscode/
│   └── mcp.json
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   │   └── .gitkeep
│   ├── components/
│   │   ├── Cards.css
│   │   ├── Cards.jsx
│   │   ├── Navbar.css
│   │   ├── Navbar.jsx
│   │   ├── StickyProfile.css
│   │   └── StickyProfile.jsx
│   ├── data/
│   │   └── cms.js
│   ├── pages/
│   │   ├── Blog.jsx
│   │   ├── Experience.jsx
│   │   ├── Home.css
│   │   ├── Home.jsx
│   │   ├── InnerPage.css
│   │   ├── Projects.jsx
│   │   └── Tools.jsx
│   └── styles/
│       └── global.css
├── .gitignore
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
npm run preview
```

## Content Editing

Update content in `src/data/cms.js`:

- profile info
- projects
- experience
- tools
- blog posts

## Routing

- /
- /projects
- /experience
- /tools
- /blog
