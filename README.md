# Abby Shonebarger Photography Website

A responsive static photography portfolio website for GitHub Pages.

## What's included
- `index.html` — website sections, gallery, pricing, and booking inquiry form
- `style.css` — styling and mobile-responsive layout
- `script.js` — mobile navigation, gallery filters/lightbox, and booking email behavior
- `images/` — the photographs supplied for the portfolio

## Before publishing
1. Open `script.js`.
2. Find `const BOOKING_EMAIL = "ADD-YOUR-EMAIL-HERE";`
3. Replace `ADD-YOUR-EMAIL-HERE` with the email address where you want booking inquiries sent.
4. Save the file.

The booking form opens the visitor's email app with the inquiry pre-filled. It does not automatically confirm a booking or store form submissions on a server.

## Publish on GitHub Pages
1. Unzip this folder.
2. Create or open your GitHub repository.
3. Upload the **contents** of this folder (`index.html`, `style.css`, `script.js`, and `images/`) into the repository's root.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
6. Wait for GitHub Pages to publish and open the URL shown in the Pages section.

You can update the photos by replacing files in `images/` while keeping the same filenames, or edit the gallery cards in `index.html`.
