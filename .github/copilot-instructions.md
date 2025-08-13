# KPM - Kraft Paper Mill LLC Website

KPM is a static HTML/CSS/JavaScript marketing website for Kraft Paper Mill LLC, a kraft paper manufacturer serving the Norristown and Greater Philadelphia area. The website is a simple, modern responsive design with no build process or dependencies.

Always reference these instructions first and fallback to search or bash commands only when you encounter unexpected information that does not match the info here.

## Working Effectively

### Bootstrap and Setup
- Clone the repository: `git clone <repo-url>`
- Navigate to project directory: `cd kpm`
- **No installation or build steps required** - this is a static website with no dependencies

### Local Development Server
- Start local development server: `python3 -m http.server 8000`
- Access website at: `http://localhost:8000`
- **No build process needed** - serve files directly
- Stop server with `Ctrl+C`

### Alternative Development Servers
If Python is not available:
- Node.js: `npx serve .` (if Node.js available)
- PHP: `php -S localhost:8000` (if PHP available)
- Any static file server will work

## Project Structure

### Key Files and Directories
```
/
├── index.html              # Main website page (304 lines)
├── 404.html               # Simple 404 error page
├── _redirects             # Netlify redirect configuration
├── README.md              # Basic project readme
├── assets/
│   ├── css/
│   │   └── styles.css     # Main stylesheet (responsive design)
│   ├── js/
│   │   └── app.js         # Website JavaScript (mobile menu, animations)
│   └── img/
│       ├── logo.svg       # KPM company logo
│       ├── hero-shape.svg # Hero section design element
│       └── BocBanner.jpg  # Banner image
```

### File Purposes
- **index.html**: Complete single-page website with sections for capabilities, products, industries, about, location, and contact
- **assets/css/styles.css**: CSS with modern responsive design, CSS variables, mobile-first approach
- **assets/js/app.js**: JavaScript for mobile menu toggle, smooth scrolling, scroll animations, announcement banner
- **_redirects**: Netlify hosting redirect configuration (`https://www.kraftpapermill.com/* https://kraftpapermill.com/:splat 301`)

## Validation and Testing

### Manual Testing Scenarios
After making any changes, **ALWAYS** run through these validation scenarios:

1. **Basic Functionality Test**:
   - Start local server: `python3 -m http.server 8000`
   - Open `http://localhost:8000` in browser
   - Verify page loads completely without errors
   - Test all navigation links work (capabilities, products, industries, about, location, contact)
   - **VERIFIED**: All links use smooth scrolling and navigate correctly

2. **Mobile Responsiveness Test**:
   - Resize browser to mobile width (<768px) or use browser dev tools
   - Click hamburger menu toggle - verify mobile menu opens/closes
   - Test all mobile navigation links work
   - Verify page layout responds correctly at different screen sizes
   - **VERIFIED**: Mobile hamburger menu functions perfectly with 6 navigation items

3. **Interactive Elements Test**:
   - Test announcement banner close button (X button in top right)
   - Click phone and email links - verify they trigger proper actions (`tel:` and `mailto:`)
   - Test smooth scrolling on anchor links
   - Verify scroll animations trigger when scrolling down page
   - **VERIFIED**: All interactive elements work as expected

4. **Content Validation**:
   - Check all text content displays correctly
   - Verify images load (logo.svg, hero-shape.svg, BocBanner.jpg)
   - Confirm contact information is accurate
   - Test external links (Google Maps direction link)
   - **VERIFIED**: All content loads correctly, contact info: (630) 796-5586, info@kraftpapermill.com

### Expected Behavior
- **No build errors** - static files need no compilation
- **No console errors** - check browser developer tools
- **Responsive design works** - mobile menu functions properly
- **All links functional** - navigation and external links work
- **Images load** - logo and banner images display
- **Animations work** - scroll animations and mobile menu animations

## Common Development Tasks

### Making Content Changes
- Edit `index.html` directly for content changes
- Update contact information, business hours, or product descriptions
- Test changes by refreshing browser - no build step needed

### Styling Changes
- Edit `assets/css/styles.css` for visual changes
- Uses CSS custom properties (variables) for colors and typography
- Mobile-first responsive design approach
- Test responsiveness at different screen sizes

### JavaScript Changes
- Edit `assets/js/app.js` for functionality changes
- Contains mobile menu, smooth scrolling, scroll animations
- Pure vanilla JavaScript - no frameworks or dependencies
- Test all interactive elements after changes

### Adding New Images
- Place images in `assets/img/` directory
- Update HTML references in `index.html`
- Optimize images for web (prefer SVG for logos, WebP/JPEG for photos)

## Deployment Information

### Hosting
- **Static hosting only** - no server-side processing
- Currently configured for Netlify (based on `_redirects` file)
- Can deploy to any static hosting service (Netlify, Vercel, GitHub Pages, etc.)

### No Build Pipeline
- **No CI/CD configured** - no GitHub Actions workflows
- **No dependency management** - no package.json or node_modules
- **No build tools** - no webpack, gulp, or similar tools required
- **Direct deployment** - upload files as-is to hosting service

## Troubleshooting

### Common Issues
- **Page not loading**: Ensure web server is running on correct port
- **Images not displaying**: Check file paths are correct and files exist in `assets/img/`
- **Mobile menu not working**: Check JavaScript console for errors in `app.js`
- **Styles not applying**: Verify CSS file path in `index.html` is correct

### Debugging Steps
1. Check browser developer tools console for errors
2. Verify all file paths are correct
3. Ensure local server is serving from project root directory
4. Test in different browsers for compatibility

## Time Expectations

### Development Tasks
- **Local server startup**: Immediate (< 5 seconds)
- **File changes**: Immediate - just refresh browser
- **Full website testing**: 5-10 minutes for complete validation
- **No build times** - static files require no compilation

### Performance Notes
- Website loads quickly (minimal assets)
- No external dependencies to download
- Optimized images and efficient CSS/JS

## Important Reminders

- **No package.json** - do not try to run `npm install` or similar commands
- **No build step** - do not look for build scripts or compilation processes
- **Static files only** - all content is in HTML/CSS/JS files
- **Direct editing** - make changes directly to source files
- **Immediate testing** - refresh browser to see changes
- **Mobile-first** - always test responsive design
- **Manual validation required** - no automated tests exist

This website represents a modern, clean approach to static website development without the complexity of build tools or frameworks.