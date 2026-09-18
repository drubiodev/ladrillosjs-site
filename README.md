# LadrillosJS Website

Public URL: https://drubiodev.github.io/ladrillosjs-site/

## Development

```sh
npm install
npm run dev
```

`npm run build` builds all three pages and copies the sitemap from `public/`.
`npm run deploy` builds and publishes to GitHub Pages.

## Search Discovery

Each page has a unique title, description, and canonical URL. The homepage
includes structured project data and a static introduction for visitors and
crawlers without JavaScript. The interactive components still render client-side;
this is not full-site prerendering.

After deploying:

1. Verify the URL-prefix property `https://drubiodev.github.io/ladrillosjs-site/`
	in Google Search Console and Bing Webmaster Tools using their site-verification
	meta tag or HTML file. Verification values must come from your own account.
2. Submit `https://drubiodev.github.io/ladrillosjs-site/sitemap.xml` in both tools.
3. Inspect the homepage and getting-started URL in Search Console, check the
	rendered content, and request indexing.
4. Link to the site from the framework's GitHub repository and npm package.

Robots rules are only read at the origin root, `https://drubiodev.github.io/robots.txt`,
not under `/ladrillosjs-site/`. Manage those rules in the root GitHub Pages site
if needed; a project-local robots file would not control crawlers.

When changing the public domain or base path, update the canonical URLs,
Open Graph URLs, homepage structured data, sitemap, and Vite base together.
Add new public pages to the sitemap. Search engines decide when and whether
to index pages; metadata and sitemap submission do not guarantee rankings.
