# Landing Page Prompt

## Project Overview
Create a beautiful, modern, and SEO-optimized landing page for Bouhezila Group, a company with three main business activities.

## Company Information
**Company Name:** Bouhezila Group  
**Tagline:** Innovation • Excellence • Design

### Three Business Activities:

1. **Bouhezila Industry**
   - Focus: Industrial manufacturing and engineering solutions
   - Theme Color: Orange (#e67e22)
   - Icon: Industry/manufacturing symbol
   - URL: https://industry.bouhezila.com (update with actual URL)

2. **B i-Tech**
   - Focus: Digital transformation, software solutions, and IT services
   - Theme Color: Blue/Green (#3498db, #2ecc71)
   - Icon: Technology/computer symbol
   - URL: https://itech.bouhezila.com (update with actual URL)

3. **ELITA (Home & Design)**
   - Focus: Premium furniture and interior design
   - Theme Color: Red (#e74c3c)
   - Icon: Home/house symbol
   - URL: https://elita.bouhezila.com (update with actual URL)

## Design Requirements

### Visual Style
- Modern, professional, and elegant design
- Gradient backgrounds for visual appeal
- Clean typography using Google Fonts (Poppins)
- Consistent color scheme across the site
- High-quality animations and transitions

### Layout Structure
1. **Header Section**
   - Company logo/name prominently displayed
   - Tagline highlighting core values
   - Animated background pattern

2. **Hero Section**
   - Welcome message
   - Brief company description
   - Call-to-action context

3. **Activities Grid**
   - Three equal cards for each business activity
   - Each card includes:
     - Custom icon
     - Activity name
     - Brief description (2-3 lines)
     - Call-to-action button
   - Hover effects with animations
   - Clickable entire card area

4. **Footer**
   - Copyright information
   - Contact links (email, phone)
   - Additional links (privacy, etc.)

### Responsive Design
- Mobile-first approach
- Breakpoints:
  - Desktop: > 768px (3-column grid)
  - Tablet: 768px (2-column or 1-column)
  - Mobile: < 480px (1-column, optimized spacing)

### Animations
- Fade-in on page load
- Scroll-triggered animations for cards
- Hover effects on cards (lift, shadow enhancement)
- Icon rotation on hover
- Button hover effects with arrow animation
- Parallax effect on header

## SEO Requirements

### Meta Tags
- Comprehensive title tag (under 60 characters)
- Meta description (150-160 characters)
- Keywords meta tag
- Open Graph tags for social media
- Twitter Card tags
- Canonical URL
- Language and charset declarations

### Structured Data (JSON-LD)
- Organization schema
- WebSite schema
- Breadcrumb schema (if applicable)

### Performance Optimization
- Optimized CSS (minimal unused code)
- Efficient JavaScript (vanilla JS, no heavy frameworks)
- Fast loading fonts (Google Fonts with preconnect)
- Lazy loading for images (if added)

### Accessibility
- Semantic HTML5 elements
- ARIA labels where needed
- Proper heading hierarchy (H1, H2, H3)
- Alt text for icons/images
- Keyboard navigation support
- Sufficient color contrast

### Content Optimization
- Clear, concise copy
- Keyword-rich descriptions
- Proper heading structure
- Internal linking strategy
- Mobile-friendly content

## Technical Requirements

### Technologies
- HTML5 (semantic markup)
- CSS3 (modern features: Grid, Flexbox, Custom Properties)
- Vanilla JavaScript (no dependencies)
- Google Fonts API

### Browser Support
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

### File Structure
```
landing_page/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript interactions
├── README.md           # Documentation
├── robots.txt          # Search engine instructions
└── sitemap.xml         # Site structure for search engines
```

## Customization Guide

### Update Company URLs
In `index.html`, find and replace these href values:
- Bouhezila Industry: Line ~54
- B i-Tech: Line ~70
- ELITA: Line ~86

### Update Contact Information
In `index.html` footer section:
- Email: contact@bouhezila.com
- Phone: +1234567890
- Update with actual contact details

### Customize Colors
In `styles.css`, modify CSS variables in `:root` section

### Update Company Information
- Company name in header
- Activity descriptions
- Meta descriptions and keywords
- Footer text

## Deployment Checklist

- [ ] Update all URLs to actual company links
- [ ] Update contact information (email, phone)
- [ ] Add actual company logo (if available)
- [ ] Update meta descriptions with actual company info
- [ ] Add Google Analytics tracking code (if needed)
- [ ] Test on multiple devices and browsers
- [ ] Validate HTML and CSS
- [ ] Test SEO with Google Search Console
- [ ] Check page speed with PageSpeed Insights
- [ ] Ensure all links work correctly
- [ ] Add favicon
- [ ] Submit sitemap to search engines

## Maintenance Notes

### Regular Updates
- Keep content fresh and relevant
- Update copyright year annually
- Monitor and fix broken links
- Update meta descriptions based on performance
- Add new content/blog posts if needed

### Performance Monitoring
- Check Google Analytics monthly
- Monitor page load times
- Track user engagement metrics
- Review search rankings
- Update SEO strategy based on results

## Success Metrics

- Page load time: < 3 seconds
- Mobile-friendly score: 100/100
- SEO score: > 90/100
- User engagement: > 2 minutes average session
- Bounce rate: < 40%

---

**Note:** This prompt file serves as a comprehensive guide for the landing page project. Update all placeholder information with actual company details before deployment.
