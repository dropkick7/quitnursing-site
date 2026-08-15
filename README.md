# Deploying quitnursing.com — the free stack

This is a static site (Eleventy) with a real "type and publish" editor (Decap CMS)
and free comments (Giscus). Total hosting cost: $0/month, forever, on the free
tiers of GitHub + Netlify.

## What's in this project

```
quitnursing-site/
├── src/
│   ├── index.njk           ← homepage (placeholder — swap in your calculator)
│   ├── blog/
│   │   ├── index.njk        ← blog listing page
│   │   └── posts/*.md       ← your posts live here as Markdown
│   ├── _includes/
│   │   ├── base.njk         ← shared header/footer/fonts
│   │   └── post.njk         ← single blog post template + comments
│   └── css/site.css         ← all styling, one file
├── admin/
│   ├── index.html           ← the Decap CMS editor (loads at /admin)
│   └── config.yml           ← defines the post-writing form fields
├── .eleventy.js             ← build config
└── package.json
```

## Hero & post images

Inspired by A Purple Life's homepage banner, there's a single deliberate
photo slot at the top of the homepage and blog index, plus an optional
featured image per post (shows full-width above the title, and as a small
thumbnail in the blog list).

- **Site-wide hero image**: edit `src/_data/site.js` and point `heroImage`
  at your photo (drop it in `src/static/images/` first). A neutral
  placeholder is there now — swap it for a real photo whenever you have one,
  or set `heroImage: ""` to hide it entirely.
- **Per-post featured image**: when writing a post in `/admin`, there's an
  optional "Featured Image" field — upload straight from the editor.

Keep to one photo per page. The whole point of the minimalist system is that
the image is the one visual event on the page — more than one competes with
itself.

## Step 1 — Put your calculator back in

Your existing calculator HTML can go straight into `src/index.njk` — just add
`layout: base.njk` front matter at the top (see `src/blog/index.njk` for the
exact syntax) so it gets the shared nav/footer, or leave it as plain
self-contained HTML if you'd rather it not share the site chrome at all.

## Step 2 — Push this to GitHub

1. Create a new repo on GitHub (e.g. `quitnursing-site`). Keep it **public** —
   Giscus comments require a public repo (it stores comments as GitHub
   Discussions), and public repos are what the free Netlify tier expects.
2. From this folder:
   ```
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/quitnursing-site.git
   git push -u origin main
   ```

## Step 3 — Connect Netlify

1. Sign up at netlify.com (free), click **Add new site → Import an existing
   project**, and pick this GitHub repo.
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `_site`
3. Deploy. Netlify will give you a free `*.netlify.app` URL immediately.
4. Add your real domain: **Site settings → Domain management → Add a domain**,
   enter `quitnursing.com`, and update your DNS at wherever you registered the
   domain to point at Netlify (Netlify shows you the exact records — usually
   an A record + CNAME for `www`). This is free; you're just pointing your
   existing domain at Netlify's free hosting.

## Step 4 — Turn on the CMS editor (`/admin`)

Decap CMS needs a way to authenticate you before it'll let you publish. The
free path is **Netlify Identity + Git Gateway**:

1. In Netlify: **Site settings → Identity → Enable Identity**.
2. Under Identity settings, set registration to **Invite only** (so random
   people can't sign up and edit your blog).
3. **Site settings → Identity → Services → Enable Git Gateway.**
4. Invite yourself: **Identity tab → Invite users** → your email. You'll get
   an email to set a password.
5. Add this snippet right before `</body>` in `src/_includes/base.njk`:
   ```html
   <script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></script>
   ```
6. Visit `quitnursing.com/admin`, log in, and you'll see the post editor —
   title, date, excerpt, tags, and a rich text body field. Hit **Publish**
   and Decap commits a new Markdown file to GitHub, which triggers a Netlify
   rebuild automatically. A minute later your post is live.

## Step 5 — Turn on comments (Giscus)

1. Go to giscus.app.
2. Enter your repo (`YOUR_USERNAME/quitnursing-site`) — it needs
   **Discussions** enabled on the repo (GitHub repo → Settings → Features →
   check "Discussions").
3. Giscus will generate a script snippet with your real `data-repo-id` and
   `data-category-id` values.
4. Open `src/_includes/post.njk` and replace the placeholder values
   (`YOUR_GITHUB_USERNAME`, `YOUR_REPO_ID`, `YOUR_CATEGORY_ID`) with the real
   ones from giscus.app.
5. Commit and push — comments will appear on every post automatically.

## Writing posts day-to-day

Once set up, you never touch code to publish:
- Go to `quitnursing.com/admin`
- Click **New Post**
- Write in the rich text editor (or Markdown mode)
- Hit **Publish**

That's it — new post live in under a minute, comments working, $0 cost.

## Local preview (optional, for tweaking design)

```
npm install
npm run serve
```
Opens a live-reloading local preview at `localhost:8080`.
