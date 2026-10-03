# Rattanaporn & Ian — Digital Wedding Invitation

This project is a full front-end wedding invitation architecture using plain HTML, CSS and JavaScript.

## Structure

```text
wedding-invitation-pro/
├── index.html
├── css/
│   └── style.css
├── js/
│   ├── config.js
│   ├── i18n.js
│   ├── countdown.js
│   ├── music.js
│   ├── guestbook.js
│   └── main.js
├── assets/
│   ├── images/
│   │   └── README.md
│   └── audio/
│       └── README.txt
├── backend/
│   └── supabase/
│       └── schema.sql
└── docs/
    └── SETUP.md
```

## Run locally

Because the invitation loads JavaScript modules/files, use a local web server instead of opening `index.html` directly with `file://`.

### Python

```bash
python -m http.server 5500
```

Then open:

`http://localhost:5500`

### VS Code

Install **Live Server**, right-click `index.html`, and choose **Open with Live Server**.

## Music

Put your own MP3 file here:

```text
assets/audio/wedding-song.mp3
```

The floating music button is intentionally user-triggered because modern browsers may block automatic audio playback until the visitor interacts with the page.

## Countdown

The countdown target is centralized in `js/config.js`:

```js
wedding: {
  dateISO: '2027-04-05T17:00:00+07:00'
}
```

Change that one value when the date/time changes.

## Online wishes

The guestbook works immediately in **local mode** so the UI can be tested without any account. For public online sharing, Supabase is wired as the next step.

1. Create a Supabase project.
2. Run `backend/supabase/schema.sql` in Supabase SQL Editor.
3. Put your project URL and anon key in `js/config.js`.
4. Change:

```js
guestbook: {
  provider: 'supabase'
}
```

The browser will then read and write wishes from Supabase.

For a public wedding guestbook, consider adding moderation, CAPTCHA/rate limiting, and stronger content controls before publishing widely.

## Images

The source design currently uses the same Unsplash image URLs from the supplied HTML. The `assets/images/` folder is ready for local images; replace the `src` URLs in `index.html` with local files such as:

```html
<img src="assets/images/story.jpg" alt="Rattanaporn and Ian">
```

The environment used to package this project cannot directly download those external Unsplash images, so they remain remote in this first architecture refactor rather than inventing substitute photos.
