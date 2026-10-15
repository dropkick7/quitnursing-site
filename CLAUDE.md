# Quitnursing.com

Anonymous FIRE blog for nurses at quitnursing.com. Free static site, no monetization. Owner: Casey.

## Stack
Eleventy 2.x with Nunjucks (.njk). Input dir is `src`, output is `_site`. Decap CMS at `/admin` (auth through DecapBridge). Cusdis comments. Hosted on Netlify from this repo, branch `main`.

## How to work with Casey
- Casey does not use the terminal. Prefer edits she can make in GitHub's web editor or github.dev, and give exact copy paste ready changes.
- Show a visual mockup before changing any design or layout code.
- Write with no dashes anywhere, in site copy and in chat. Use commas or rephrase. (File names and CSS class names are fine.)
- Every commit to main triggers a Netlify production deploy that costs 15 of her 300 monthly free credits. Batch related changes into one commit. Never make many small commits.
- Explain steps slowly and plainly. Do not assume she knows Git.

## Key files
- `.eleventy.js`: config, `posts` collection from `src/blog/posts/*.md`, filters `isoDate`, `readableDate`, `excerpt`
- `src/_data/site.js`: hero image, sidebar stats (Years to go, Shifts to work are placeholders)
- `src/_includes/base.njk`: site wide layout, header, nav, hero, footer
- `src/_includes/post.njk`: single post layout, includes the Cusdis comments embed
- `src/index.njk`: homepage with article list and sidebar
- `src/blog/index.njk`: All Posts archive
- `src/calculator.njk`, `start-here.njk`, `recs.njk`, `contact.njk`: standalone pages
- `src/css/site.css`: all styles and design tokens
- `admin/config.yml`: Decap CMS config
- `src/static/images/`: images, served from `/images`

## Rules that prevent known bugs
- Every post in `src/blog/posts/` must have `layout: post.njk` in its front matter, and `posts` as the first tag. Without the layout the post renders unstyled and full width with no comments.
- Keep only one `.hero-image img` rule in `site.css`. Duplicates once overrode each other.
- Hero image should stay about 1920x800 JPEG, quality 85. Never commit multi megabyte images.
- Page content paragraphs need a width containing class (for example `.page-note`) or they stretch the full browser width.
- Do not delete or recreate hidden files (`.eleventy.js`, `.gitignore`, `.git`).

## Design system
Clean modern editorial. White background, DM Sans only (400, 500, 700). Tokens: ink #252622, ink soft #6E6B63, blue #71899A, blue dark #4A7C93, gold #EDB152 (used on all borders and dividers), sidebar background #F5F9FA. Nav order: Start Here, Quit Calculator, Recs, All Posts, Contact. No dollar sign graphics, piggy banks, coins, stock imagery, gradients, or bubbly rounded UI.

## Open tasks
See "Site Build Notes" in the Quitnursing.com project for the current task list.