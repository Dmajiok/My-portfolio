Dmajio — Portfolio (React)

This repository contains a React conversion of the original static portfolio site.

Quick start

1. Ensure Node.js (>=14) and npm are installed.
2. From the project root run:

```powershell
npm install
npm start
```

Notes & asset paths

- The original project included an `Images/` folder and `assets/`. For the React dev server to serve them as-is, move the `Images/` and `assets/` folders into `public/` (so `public/Images/...` and `public/assets/...`).
- The App references `"/assets/dmajio.jpg"` and `"/Images/...jpg"`. If you don't move the files, update those paths.

Files created

- `package.json` — project metadata & scripts
- `public/index.html` — React mount point and fonts/icons
- `src/index.js` — React entry
- `src/App.js` — main app (layout, modal, contact form)
- `src/App.css` — copied & scoped styles

Next steps

- Replace sample portfolio items with your real projects (edit `src/App.js`).
- Hook the contact form to a backend or email provider.
- Optionally migrate to Vite for a faster dev environment.
