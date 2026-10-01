# Arun Mathew — editable portfolio

This is the editable React + Framer Motion source for the redesigned portfolio. The source code is formatted, and images/fonts are normal files — no embedded image strings or minified application source.

## Start editing

1. Extract this ZIP.
2. Open the `arun-portfolio` folder in VS Code or your editor.
3. Install Node.js 22 LTS or newer if needed.
4. In a terminal inside this folder, run:

```sh
npm install
npm run dev
```

Open the local URL printed in the terminal. Changes update in your browser automatically. Use this local server; double-clicking the source `index.html` will not run React.

## Where to edit

| File or folder       | What it controls                                                         |
| -------------------- | ------------------------------------------------------------------------ |
| `src/site.js`        | Text logo, custom logo path, hero image, location, email, social links   |
| `public/images/`     | Your logo, hero photograph, and project screenshots                      |
| `src/projects.js`    | Project card titles, summaries, tags, and optional image paths           |
| `src/caseStudies.js` | Full project descriptions, flow steps, before/after, outcomes            |
| `src/categories.js`  | Project filter labels                                                    |
| `src/App.jsx`        | Page sections, headings, About, experience, contact, and motion behavior |
| `src/styles.css`     | Palette, typography, spacing, responsive layouts, image sizes            |
| `public/fonts/`      | Local font files                                                         |
| `index.html`         | Page title, description, and browser theme color                         |

## Replace the logo

The default is the text logo `am` with a decorative star.

For your own logo, copy `my-logo.svg` (or PNG/WebP) into `public/images/`. Set this in `src/site.js`:

```js
logoImage: '/images/my-logo.svg',
logoAlt: 'Arun Mathew — home',
```

Leave `logoImage` empty to use `logoText`. Edit `.brand-logo` in `src/styles.css` to change its size.

## Replace the hero image

Copy your image into `public/images/` and change `src/site.js`:

```js
heroImage: '/images/my-hero.jpg',
heroImageAlt: 'Describe what the image shows',
```

For a brighter or full-color image, edit `.hero-visual img` (`filter` and `opacity`) and `.hero-visual:after` (the overlay) in the stylesheet. Adjust `object-position` to control the crop.

The included infrastructure photo is attributed to e-Words in the hero caption. When replacing it, update that caption in `src/App.jsx` to credit your own source or remove the old credit. The photo is illustrative, not a project screenshot.

## Add project screenshots

Each entry in `src/projects.js` has two editable fields:

```js
image: '/images/project-1.webp',
imageAlt: 'Deployment pipeline screenshot',
```

Place the matching file in `public/images/`. Leave `image` empty to retain the original flow graphic. Screenshot size and crop are controlled by `.project-thumbnail` in the CSS. Wide images around 1600 × 900 work well.

When adding a project, use a unique `id`, one of the existing category keys, and add a matching entry in `src/caseStudies.js`. The `approach` array supplies its flow diagram.

## Colors and fonts

Edit the `:root` variables near the top of `src/styles.css`. The supplied hex palette and black Work/About backgrounds are retained.

The packaged fonts are Barlow Condensed and DM Sans, which approximate the reference typography. The exact reference font files were not provided. To use another licensed font, add its file to `public/fonts/`, define an `@font-face`, then change `--display` or `--body`.

## Build for hosting

```sh
npm run build
npm run preview
```

The `dist/` folder is the production website. Deploy the complete contents of that folder. Edit files in `src/` and `public/`, then build again; don't edit generated `dist/assets` files.

The source includes Framer Motion scroll/hover transitions, reduced-motion support, project filtering, mobile navigation, and keyboard-accessible case-study dialogs. Contact links use email/phone apps; there is no message-sending server.
