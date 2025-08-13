# KPM - Kraft Paper Mill LLC Website

KPM is a static HTML/CSS/JavaScript marketing website for Kraft Paper Mill LLC, a company serving the Norristown and Greater Philadelphia area. The site promotes their kraft paper products and distributor network.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Serving the Website Locally
- Use Python HTTP server: `cd /home/runner/work/kpm/kpm && python3 -m http.server 8080` -- starts immediately. NEVER CANCEL.
- Use Node.js HTTP server: `cd /home/runner/work/kpm/kpm && npx http-server -p 8080` -- starts in 3-5 seconds. NEVER CANCEL.
- Access the site at: `http://localhost:8080`
- Both servers work identically; use whichever is more convenient.

### Validation and Quality Assurance
- HTML validation: `cd /home/runner/work/kpm/kpm && npx htmlhint index.html` -- completes in under 5 seconds.
- JavaScript linting: `cd /home/runner/work/kpm/kpm && npx eslint assets/js/app.js --no-config-lookup` -- completes in under 10 seconds.
- ALWAYS run both linting commands before making any commits.
- ALWAYS manually test functionality after making changes.

### Manual Testing Scenarios
After making any changes, ALWAYS validate these core functionalities:

1. **Desktop Navigation Test:**
   - Serve the site locally
   - Access `http://localhost:8080` in browser
   - Verify all navigation links work (Capabilities, Products, Industries, About, Location, Contact)
   - Verify contact links (phone numbers, email addresses) are clickable
   - Verify external links (Google Maps) open correctly

2. **Mobile Menu Test:**
   - Resize browser to mobile width (375px or smaller)
   - Click the mobile menu toggle button (hamburger icon)
   - Verify mobile menu opens and displays all navigation links
   - Click on a mobile menu link to verify it closes the menu
   - Click outside the menu to verify it closes

3. **Visual Verification:**
   - Take a screenshot of the full page to ensure layout appears correct
   - Verify no broken images or missing assets
   - Check that the site announcement banner displays properly
   - Verify the KPM logo appears correctly

## Repository Structure

### Root Directory
```
/home/runner/work/kpm/kpm/
├── index.html          # Main website file (304 lines)
├── 404.html           # Error page
├── _redirects         # URL redirection rules
├── README.md          # Minimal repository documentation
└── assets/
    ├── css/
    │   └── styles.css # Main stylesheet (654 lines)
    ├── js/
    │   └── app.js     # JavaScript functionality (245 lines)
    └── img/
        ├── logo.svg   # Company logo
        ├── hero-shape.svg # Design element
        └── BocBanner.jpg  # Banner image
```

### Key Files to Understand

**index.html**: Single-page marketing website with sections for:
- Site announcement banner
- Navigation header
- Hero section
- Capabilities, Products, Industries sections
- About, Location, Contact information
- Responsive design with mobile menu

**assets/js/app.js**: Contains mobile menu functionality:
- Toggle mobile menu open/close
- Hamburger icon animation
- Menu link click handlers
- Outside click detection for menu closing

**assets/css/styles.css**: Complete styling including:
- CSS custom properties (CSS variables)
- Responsive design breakpoints
- Mobile menu styles
- Component-based styling approach

## Common Development Tasks

### Making Content Changes
- Edit `index.html` for content updates
- Always validate HTML after changes: `npx htmlhint index.html`
- Always test functionality after content changes

### Making Style Changes
- Edit `assets/css/styles.css` for visual changes
- The site uses CSS custom properties (variables) defined in `:root`
- Test responsive behavior by resizing browser window
- Always verify mobile menu still works after CSS changes

### Making Functionality Changes
- Edit `assets/js/app.js` for JavaScript changes
- Always lint after changes: `npx eslint assets/js/app.js --no-config-lookup`
- Always test mobile menu functionality after JavaScript changes
- Verify no console errors in browser developer tools

### Adding New Assets
- Place images in `assets/img/`
- Update HTML references if needed
- Verify images load correctly by serving locally

## Development Workflow
1. Start local server: `python3 -m http.server 8080` or `npx http-server -p 8080`
2. Make your changes
3. Refresh browser to see changes
4. Run linting: `npx htmlhint index.html && npx eslint assets/js/app.js --no-config-lookup`
5. Perform manual testing scenarios
6. Take screenshot if making visual changes
7. Commit changes

## Timing Expectations
- **Local server startup**: Immediate (Python) to 5 seconds (Node.js) -- NEVER CANCEL
- **HTML linting**: Under 5 seconds
- **JavaScript linting**: Under 10 seconds (first run may take longer due to npx package download)
- **Manual testing**: 2-3 minutes for complete validation

## Common Outputs Reference

### Repository root listing
```
$ ls -la /home/runner/work/kpm/kpm/
total 44
drwxr-xr-x 4 runner docker  4096 Aug 13 02:49 .
drwxr-xr-x 3 runner docker  4096 Aug 13 02:49 ..
drwxr-xr-x 7 runner docker  4096 Aug 13 02:49 .git
-rw-r--r-- 1 runner docker   499 Aug 13 02:49 404.html
-rw-r--r-- 1 runner docker     5 Aug 13 02:49 README.md
-rw-r--r-- 1 runner docker    70 Aug 13 02:49 _redirects
drwxr-xr-x 5 runner docker  4096 Aug 13 02:49 assets
-rw-r--r-- 1 runner docker 13762 Aug 13 02:49 index.html
```

### Assets directory structure
```
$ ls -la /home/runner/work/kpm/kpm/assets/
css/
img/
js/
```

### Successful linting output
```
$ npx htmlhint index.html
Scanned 1 files, no errors found (13 ms).

$ npx eslint assets/js/app.js --no-config-lookup
(no output = success)
```

## Important Notes
- This is a static website with NO build process required
- The site uses semantic HTML5 with accessibility considerations
- Mobile-first responsive design approach
- No external dependencies or frameworks
- All functionality is vanilla JavaScript
- Site is production-ready as-is when served from any static web server
- The `_redirects` file is for deployment platforms like Netlify