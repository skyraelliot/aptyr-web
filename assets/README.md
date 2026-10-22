# Brand assets

Approved local assets:

- assets/Aptyr Barbell Logo.png: supplied 1254 x 1254 primary barbell-A logo.
- public/assets/aptyr-barbell-logo.png: byte-identical backup of the original background-filled source; no longer referenced by the page.
- assets/brand/aptyr-wordmark.svg: approved wordmark copied unchanged from fitness-app. Embedded inline to use local Satoshi, with proportional display scaling only.
- public/assets/fonts/Satoshi-Regular.ttf (400), Satoshi-Medium.ttf (500), Satoshi-Bold.ttf (700): local approved fonts.
- public/favicon-32.png, favicon-48.png, favicon-180.png: proportional, full-canvas downscales of the supplied logo using high-quality bicubic interpolation. No crop, recoloring, or redrawing. The 180px version is the Apple touch icon.

Real app screenshots: assets/aptyr-home.png, assets/aptyr-adapt.png, and assets/aptyr-workout.png, each 1080 x 2400. These are imported directly, emitted as byte-identical hashed build assets, and displayed in Home / Smart Adapt / active workout order. Full image canvases are preserved without cropping, recoloring, or recompression. Images use lazy loading, asynchronous decoding, descriptive alt text, and intrinsic dimensions. Still needed: approved social-sharing artwork. Beta and social URLs remain configurable.

No files in fitness-app were modified. The original wordmark and supplied logo source remain unchanged.

Transparent logo update: public/assets/aptyr-barbell-transparent.png is derived deterministically from the untouched original source, with full-canvas alpha transparency and background-matte removal along antialiased edges. Header, hero, and footer share this asset. New favicon-transparent-32.png, favicon-transparent-48.png, and favicon-transparent-180.png files are proportional alpha-preserving downscales. Originals remain as backups. Both charcoal backgrounds and actual display sizes were inspected; all opaque core pixels are unchanged. The wordmark, layout, and other artwork are unchanged.
