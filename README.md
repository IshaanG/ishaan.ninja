<div align="center">
  <img alt="Logo" src="https://raw.githubusercontent.com/IshaanG/ishaan.ninja/master/assets/icon.png" width="100" />
</div>
<h1 align="center">ishaan.ninja</h1>
<p align="center">
  My personal site, <a href="https://ishaan.netlify.app/" target="_blank">ishaan.netlify.app</a>.
  A single-page, no-build static site (plain HTML + CSS) hosted on
  <a href="https://www.netlify.com/" target="_blank">Netlify</a>.
</p>

## Structure

```
public/
  index.html      # the whole page
  styles.css      # all styling (dark theme, responsive)
  resume.pdf      # downloadable resume
  assets/         # photo + favicon
resume.source.html  # print source for resume.pdf
netlify.toml        # deploy config (no build, publish public/)
```

## Develop

No build step or dependencies. Open `public/index.html` directly, or serve it:

```shell
cd public && python3 -m http.server 8000   # then open http://localhost:8000
```

## Deploy

Netlify auto-deploys the `master` branch. `netlify.toml` sets a no-op build
command and publishes `public/`.

### Regenerating the resume PDF

The PDF is rendered from a print-styled HTML via headless Chrome. To update it,
edit the resume markup and re-run:

```shell
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" \
  --headless --disable-gpu --no-pdf-header-footer \
  --print-to-pdf=resume.pdf file:///absolute/path/to/resume.html
```
