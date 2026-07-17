# eDSL — Vessel Services Website

Static website (HTML/CSS/JS, no build step) for eDSL vessel services: landing, register, resources, user guide, privacy policy, vessel-services pages. Clean URLs via directory structure + Apache `.htaccess`.

## Deploy

- GitHub → Hostinger auto-pull webhook (standard setup). Push to `master` = deploy. **Do not rename this folder or repo.**
- `.htaccess` handles clean-URL rewrites — keep it when restructuring pages.

## Conventions

- Design: follow existing page styles; don't introduce new design systems without asking.
- `scrape/` + `scrape.py` + `requirements.txt` = auxiliary Python scraper, not part of the deployed site.
- Duplicate page pattern: `page.html` + `page/` directory both exist for clean-URL support — keep them in sync when editing content.
