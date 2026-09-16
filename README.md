# Helfy / Landing Page assignment

## How to run

No build step, no dependencies. Just open the page in a browser:

```bash
open index.html
```
or just install extension vscode like live server and run it 

also can serve it locally (recommended, so relative asset paths behave the same as they would when deployed):

```bash
npx serve .
# or
python3 -m http.server
```

Then visit the printed local URL.

Due to a lack of time, I didn't manage to prepare the "all-treatments-page" page. task wasn't nothing special ofc just without LLM or another tool make one by one also check/test responsive and etc took to much time.. Factors as well: night time not to productive and etc..
but yes I can do that task also ofc.. you can see my experience and projects What I have worked on.. thanks!
happy to have chance to introduce myself and talk more about experience in the subsequent stages.

## Structure

```
index.html          the landing page
css/
  style.css         base/reset + shared tokens
  hero.css           hero section
  review.css          testimonials slider
  information.css     "how it works" section
  footer.css           footer
js/
  index.js            topbar trust marquee
  slider.js            testimonials carousel
  how-it-works-slider.js  "how it works" step carousel
assets/               images, icons, fonts, favicon
```

## Bonus — LLM review prompt

> Review this landing page implementation (HTML/CSS/vanilla JS, no frameworks) against the attached Figma design. Check: (1) pixel-level fidelity of spacing, typography, and color at 1920px, 1280px, and 390px breakpoints; (2) semantic HTML structure and accessibility (landmarks, alt text, focus states, ARIA where needed); (3) CSS maintainability — naming consistency, duplicated rules, unused selectors; (4) JS interactions — event listener cleanup, edge cases in the carousels (empty state, single item, rapid clicks), and any console errors; (5) responsive behavior at intermediate widths not explicitly specified. List issues by priority (broken > visually incorrect > code quality) with file and line references, without rewriting the code yourself.
