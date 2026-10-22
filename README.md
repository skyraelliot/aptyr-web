# Aptyr beta landing page

Standalone React + TypeScript + Vite landing page. Plain CSS, no component libraries, analytics, form backend, or external font requests. Deployment is configured for GitHub Pages.

## Run locally

Use Node.js 22.12+ (verified with Node 24).

```sh
npm install
npm run dev
npm run typecheck
npm run build
npm run preview
```

On Windows with PowerShell script restrictions, use `npm.cmd` instead of `npm`. Production files are emitted to `dist/`. The build also runs TypeScript checks. Commit `package-lock.json`; subsequent clean installs can use `npm ci`.

## Configure before launch

Edit `src/config.ts`:

| Constant | Required value |
| --- | --- |
| IOS_BETA_URL | Approved TestFlight invitation URL |
| ANDROID_GROUP_URL | Aptyr Google Group join URL |
| ANDROID_TESTING_URL | Optional direct opt-in URL; currently provided in the Google Group |
| FEEDBACK_FORM_URL | Approved feedback form URL |
| INSTAGRAM_URL | Official Instagram profile, if desired |
| FACEBOOK_URL | Official Facebook profile, if desired |
| LOGO_URL | Local approved barbell-A symbol path |
| SCREENSHOTS | Real local image paths and descriptive alt text |

The five supplied beta, feedback, and social destinations are configured in src/config.ts. External web links open in a new tab with noopener noreferrer. Android testers join the Google Group and follow the Google Play opt-in link provided there. The optional direct testing button is hidden until a direct URL is supplied. No links are fabricated.

Support email and privacy URL are the exact user-supplied destinations. No email submission is performed. See `assets/README.md` for copied brand assets, local Satoshi font configuration, and remaining asset requirements. The favicon uses the supplied barbell-A logo. Add an approved `og:image` and final `og:url` in `index.html` once supplied. No deployment domain has been assumed.

## Cloudflare Pages (instructions only)

1. Push this project to your chosen Git repository.
2. In Cloudflare Pages, create a project and connect that repository.
3. Select the Vite framework preset, or set build command to `npm run build`.
4. Set output directory to `dist` and root directory to this project’s root.
5. Use Node.js 22.12+ or 24 in the build environment. No application secrets or environment variables are required.
6. After assets and links are approved and verified, deploy when authorized.

No DNS changes are needed to prepare this repository. No deployment, account connection, or DNS action has been performed.

## Structure

```text
src/main.tsx       Page sections and reusable controls
src/config.ts      Beta/social URLs and approved asset slots
src/styles.css     Responsive styles and accessibility states
public/           Static assets copied into dist
assets/README.md  Asset handoff and font instructions
index.html        SEO, Open Graph, viewport, favicon
tsconfig.json     Strict TypeScript configuration
```

The layout has mobile/tablet breakpoints at 700px and 1000px, reduced-motion support, keyboard focus styles, a skip link, and semantic sections. Secondary copy uses a lighter accessible variant of the requested secondary gray on dark surfaces. The App Preview shows the supplied Home, Smart Adapt, and active workout screenshots unchanged, in responsive phone-style frames.

## Verification completed

- Dependencies installed; npm audit reported zero known vulnerabilities.
- Strict TypeScript check and production build passed.
- Local Vite page returned HTTP 200 and rendered in installed headless Microsoft Edge.
- Tested viewport widths: 320, 390, 768, and 1440px. No horizontal page overflow after clipping decorative hero orbits.
- Initial checks confirmed internal anchor targets resolved. Beta and feedback actions have since been enabled using the supplied URLs.
- Supplied privacy-policy URL returned HTTP 200. Support email matches the supplied address; mailbox delivery was not tested.
- Physical iOS/Android enrollment and feedback submission have not been tested. No manual assistive-technology audit was performed.
- No deployment or DNS changes were made.

## Approved brand asset update

Satoshi Regular (400), Medium (500), and Bold (700) now load from local TTF files. The approved wordmark SVG is copied unchanged and embedded inline in the header and footer so its live text uses Satoshi. The supplied barbell-A PNG now appears in the header, hero, and footer, replacing the pending placeholders. Existing layout rules, copy, spacing, and beta functionality are preserved. Earlier browser checks above describe the initial landing-page verification.

## Barbell-A logo verification

TypeScript and production build passed. Browser checks at 320, 390, 768, and 1440px confirmed that all three logo images load at their original square aspect ratio, both approved wordmarks remain present, and the page has no horizontal overflow. Desktop and mobile screenshots were visually inspected. The web PNG is byte-identical to the supplied source. Favicons preserve the full image canvas; the source background is intentionally retained. No deployment or source fitness-app edits were made.

## Real screenshots update

The three supplied 1080 x 2400 PNGs are imported directly from assets/ and emitted with Vite content hashes. Their combined size is approximately 557 KB; image bytes remain unchanged. Lazy loading and asynchronous decoding defer below-the-fold work. Intrinsic dimensions reserve space, while responsive width and automatic height preserve full screenshot proportions. All existing captions and page copy remain unchanged.

Screenshot verification: TypeScript and production build passed. All three images decoded successfully at 320, 390, 768, and 1440px viewport widths, with descriptive alt text, original aspect ratios, no remaining rendered screenshot placeholders, and no horizontal overflow. Desktop and mobile captures were visually inspected. All three emitted PNGs were verified byte-identical to their sources. No missing screenshot assets or errors remain.

## Final beta and social links

The exact supplied TestFlight, Google Group, Google Form, Instagram, and Facebook URLs are configured. Android instructions direct testers to the Google Play opt-in link in the group. All external web links use target=_blank and rel=noopener noreferrer; internal navigation is unchanged. Beta and feedback buttons are enabled and pending-link messages are removed. TypeScript and production build passed. Headless Edge checks at 320, 390, 768, and 1440px confirmed all destinations, five enabled CTA links, zero disabled buttons, correct external-link attributes, and no horizontal overflow. Read-only requests to all five supplied URLs returned HTTP 200 (following redirects where applicable). No enrollment, group joining, form submission, or authenticated social access was attempted. Nothing was deployed.

## GitHub Pages

This repository has fresh, independent history and deploys to https://skyraelliot.github.io/aptyr-web/ using .github/workflows/pages.yml. Pushes to main and manual workflow dispatch install dependencies with npm ci, run the TypeScript/production build, and publish only dist/ using official GitHub Pages actions pinned to commit hashes. No private app credentials are needed.

The Vite base is /aptyr-web/. Vite rewrites HTML and CSS asset references; the logo uses import.meta.env.BASE_URL. Local development and preview therefore use /aptyr-web/ too. Changing to a custom domain later requires a separate base-path and domain configuration update. No custom domain or DNS is configured here. Earlier verification notes above describe the source website's pre-deployment work.